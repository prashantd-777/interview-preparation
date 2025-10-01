const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject("error");
Promise.all([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

Promise.myAll = function (pArray) {
  const output = [];
  const promise = new Promise((res, rej) => {
    pArray.forEach(async (item, index) => {
      try {
        const result = await item;
        output.push(result);
        if (pArray.length - 1 === index) {
          res(output);
        }
      } catch (error) {
        rej(error);
      }
    });
  });

  return promise;
};

Promise.myAll([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

Promise.race([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) return;
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};
Promise.myRace([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

Promise.allSettled([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

Promise.myAllSettled = function (pArray) {
  const promise = new Promise((resolve, reject) => {
    const output = [];
    pArray.forEach((item, index) => {
      Promise.resolve(item)
        .then((val) => {
          output[index] = {
            status: "fulfilled",
            value: val,
          };
        })
        .catch((error) => {
          output[index] = {
            status: "rejected",
            reason: error,
          };
        })
        .finally(() => {
          if (index === output.length - 1) {
            resolve(output);
          }
        });
    });
  });
  return promise;
};

Promise.myAllSettled([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

Promise.any([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

Promise.myAny = function (pArray) {
  const errorList = [];
  const promise = new Promise((resolve, reject) => {
    pArray.forEach((item, index) =>
      Promise.resolve(item)
        .then(resolve)
        .catch((error) => {
          errorList.push(error);
          if (pArray.length - 1 === index) {
            reject(new AggregateError(errorList, "All promises were rejected"));
          }
        })
    );
  });
  return promise;
};

Promise.myAny([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
