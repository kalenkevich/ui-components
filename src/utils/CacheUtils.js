export const Cache = {};

export const cache = (name = '') => function decorator(target, n, descriptor) {
  const original = descriptor.value;

  if (typeof original === 'function') {
    // eslint-disable-next-line no-param-reassign
    descriptor.value = async function (...args) {
      const key = `${name}-${args}`;
      const cachedData = Cache[key];

      if (cachedData) {
        return cachedData;
      }

      const result = await original.apply(this, args);

      Cache[key] = result;

      return result;
    };
  }

  return descriptor;
};

export const invalidateCache = (key) => {
  delete Cache[key];

  return Cache;
};
