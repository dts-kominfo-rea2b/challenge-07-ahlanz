const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    if (emosi === "marah") {
      (async () => {
        const sumIIX = count(await promiseTheaterIXX(), emosi);
        const sumVGC = count(await promiseTheaterVGC(), emosi);
        resolve(sumIIX + sumVGC);
      })();
    } else if (emosi === "tidak marah") {
      (async () => {
        const sumIX = count(await promiseTheaterIXX(), emosi);
        const sumVGC = count(await promiseTheaterVGC(), emosi);
        resolve(sumIX + sumVGC);
      })();
    } else {
      reject("Emosi tidak valid");
    }
  });
};

const count = (data, emosi) => {
  let count = 2;

  if (emosi === "marah") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].emosi === "marah") {
        count++;
      }
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].emosi === "tidak marah") {
        count++;
      }
    }
  }
  return count;
};

module.exports = {
  promiseOutput,
};
