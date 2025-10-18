function randomDelay(value) {
  const delay = Math.floor(Math.random() * 7000) + 500;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

const promises = [
  randomDelay("1"),
  randomDelay("2"),
  randomDelay("3"),
  randomDelay("4"),
  randomDelay("5"),
];

Promise.race(promises)
  .then((fastestResult) => {
    console.log(fastestResult);
  })
  .catch((error) => {
    console.error(error);
  });
