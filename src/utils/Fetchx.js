export const Fetchx = (products, categoryId) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      try {
        if (categoryId) {
          const fit = products.filter(
            (product) => product.category === categoryId
          );
          res(fit);
        } else {
          res(products);
        }
      } catch (err) {
        rej(err);
      }
    }, 2000);
  });
};
