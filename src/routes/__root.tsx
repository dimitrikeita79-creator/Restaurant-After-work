import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
} from '@tanstack/react-router';
import { useEffect, type ReactNode } from 'react';

import appCss from '../styles.css?url';
import { reportLovableError } from '../lib/lovable-error-reporting';
import { LenisProvider } from '@/lib/lenis-provider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { NotFound } from '@/components/NotFound';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { ScrollProgress } from '@/components/ux/ScrollProgress';
import { ScrollToTop } from '@/components/ux/ScrollToTop';

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: 'tanstack_root_error_component' });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass max-w-md rounded-3xl p-8 text-center">
        <h1 className="font-display text-3xl">Un grain de sable.</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Quelque chose n&apos;a pas pu charger. Réessayez ou rentrez à l&apos;accueil.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Réessayer
          </button>
          <a href="/" className="glass rounded-full px-5 py-2.5 text-sm font-medium">
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#1a0e0e' },
      { title: 'Restaurant After Work — Restauration, karaoké & événements' },
      {
        name: 'description',
        content:
          'Restaurant After Work à Ouagadougou. Cuisine soignée, live karaoké, traiteur événementiel. Réservez votre table ou organisez votre événement.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Restaurant After Work' },
      { property: 'og:title', content: 'Restaurant After Work' },
      {
        property: 'og:description',
        content: 'Restauration, live karaoké et événements privés à Ouagadougou.',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Geist:wght@400;500;600&display=swap',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Restaurant',
          name: 'Restaurant After Work',
          servesCuisine: ['African', 'Fusion'],
          telephone: '+22606444464',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Ouagadougou',
            addressCountry: 'BF',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 12.321837,
            longitude: -1.5016749,
          },
          hasMap: 'https://maps.app.goo.gl/5p6c8v1GzuXsVj8s9',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '17:00',
              closes: '02:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Saturday', 'Sunday'],
              opens: '16:00',
              closes: '02:00',
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <>
      <HeadContent />
      {children}
    </>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LenisProvider>
          <div className="relative min-h-screen">
            <ScrollProgress />
            <Navbar />
            <main>
              <Outlet />
            </main>
            <Footer />
            <CartDrawer />
            <ScrollToTop />
            <div className="grain" aria-hidden />
          </div>
        </LenisProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

// Re-export Link for any direct imports kept by editor (no-op)
export { Link };