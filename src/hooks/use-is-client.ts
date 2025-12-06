import { useSyncExternalStore } from 'react';

export function useIsClient() {
  return useSyncExternalStore(
    () => () => {}, // subscribe: We don't need to subscribe to anything
    () => true, // getSnapshot (Client): In the browser, it's always true
    () => false // getServerSnapshot (Server): On the server, it's false
  );
}
