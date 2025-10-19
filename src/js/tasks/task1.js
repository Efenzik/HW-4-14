const delay = (value, ms) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

const promises = [
  delay("1", 1488),
  delay("2", 52),
  delay("3", 4895),
  delay("4", 823),
  delay("5", 2000),
];

Promise.all(promises)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
