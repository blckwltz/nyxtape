import {createMemoryHistory, createRouter, RouterProvider as TanStackRouterProvider} from '@tanstack/react-router';
import {routeTree} from '../../../routeTree.gen.ts';

const router = createRouter({
  routeTree,
  history: createMemoryHistory({initialEntries: ['/']}),
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export function RouterProvider() {
  return <TanStackRouterProvider router={router} />;
}
