type FetchEvent = {
  request: Request;
  respondWith: (response: Response) => void;
};

declare function addEventListener(type: 'fetch', handler: (event: FetchEvent) => void): void;