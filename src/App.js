export const add = (x, y) => {
  return x + y;
};

// more concise, implicit return style function
// export const add = (x, y) =>  x + y;

export const total = (shipping, subTotal) => {
  return '$' + add(shipping, subTotal);
};
