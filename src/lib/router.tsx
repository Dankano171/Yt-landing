import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';
import {trackPageView} from './analytics';

interface RouterContextValue {
  pathname: string;
  navigate: (to: string) => void;
  goToSignup: () => void;
}

const RouterContext = createContext<RouterContextValue>({
  pathname: '/',
  navigate: () => {},
  goToSignup: () => {},
});

function normalizePath(path: string): string {
  const clean = path.split('?')[0].split('#')[0];
  if (clean.length > 1 && clean.endsWith('/')) {
    return clean.slice(0, -1);
  }
  return clean || '/';
}

const ROUTE_META: Record<string, {title: string; description: string}> = {
  '/': {
    title: 'Threadgist — Know what your audience is telling you',
    description:
      'A short weekly report from your public YouTube comments: who is waiting on an answer, what viewers are asking for, and what they are pushing back on.',
  },
  '/sample': {
    title: 'Sample report — Threadgist',
    description:
      'An example weekly audience report showing how Threadgist organizes public YouTube comments into clear sections.',
  },
  '/privacy': {
    title: 'Privacy policy — Threadgist',
    description: 'How Threadgist collects, uses and protects your data.',
  },
  '/terms': {
    title: 'Terms of service — Threadgist',
    description: 'The terms for using Threadgist and its free sample reports.',
  },
};

export function RouterProvider({children}: {children: React.ReactNode}) {
  const [pathname, setPathname] = useState<string>(() =>
    normalizePath(window.location.pathname)
  );

  const updateMeta = useCallback((path: string) => {
    const meta = ROUTE_META[path] ?? {
      title: 'Page not found — Threadgist',
      description: 'The requested page could not be found on Threadgist.',
    };
    document.title = meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', meta.description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', meta.description);
    }
    const url = `https://threadgist.io${path === '/' ? '/' : path}`;
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url);
  }, []);

  useEffect(() => {
    updateMeta(pathname);
    trackPageView(pathname);
  }, [pathname, updateMeta]);

  useEffect(() => {
    const onPopState = () => {
      setPathname(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const scrollToElement = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start'});
    const firstInput = target.querySelector<HTMLInputElement>('input:not([tabindex="-1"])');
    if (firstInput) {
      window.setTimeout(() => firstInput.focus({preventScroll: true}), 120);
    }
  }, []);

  const navigate = useCallback(
    (to: string) => {
      const [rawPath, hash] = to.split('#');
      const nextPath = normalizePath(rawPath || '/');
      if (nextPath !== pathname) {
        window.history.pushState({}, '', to);
        setPathname(nextPath);
        if (!hash) {
          window.scrollTo({top: 0, behavior: 'auto'});
        }
      } else if (hash) {
        window.history.replaceState({}, '', to);
      } else {
        window.scrollTo({top: 0, behavior: 'auto'});
      }

      if (hash) {
        window.setTimeout(() => scrollToElement(hash), 40);
      }
    },
    [pathname, scrollToElement]
  );

  const goToSignup = useCallback(() => {
    navigate('/#signup');
  }, [navigate]);

  return (
    <RouterContext.Provider value={{pathname, navigate, goToSignup}}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export function Link({to, onClick, children, ...rest}: LinkProps) {
  const {navigate} = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey
    ) {
      return;
    }
    e.preventDefault();
    onClick?.(e);
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
