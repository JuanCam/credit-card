import { waitFor } from './async.utils';

const chain = () => {
  return {
    step: (fn) => {
      return chain(fn());
    },
    end: (time, fn) => {
      return waitFor(time).then(() => {
        return chain(fn());
      })
    },
    stop: () => null
  };
};

export {
  chain
};
