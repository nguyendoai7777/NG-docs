export function QueryElement(selector: string, config?: { multiple: boolean }) {
  return function(target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
      get: function() {
        return config?.multiple ? document.querySelectorAll(selector) : document.querySelector(selector);
      },
      enumerable: true,
      configurable: true,
    });
  };
}
