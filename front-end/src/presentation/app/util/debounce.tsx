export const Debounce = <F extends ((...args: any) => any)>(func: F, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null;

  return function (this: any, ...args: any[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(this, args);
      timeoutId = null;
    }, delay);
  };
};
