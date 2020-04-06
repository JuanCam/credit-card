const waitFor = (time) => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
};

export {
  waitFor
};
