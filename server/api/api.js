export default defineEventHandler(async (event) => {
  //   // handle qery params
  //   const { name } = getQuery(event);
  //   // handle post data
  //   const { age } = await readBody(event);

  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=SEljouan6XL1vNW3yd5Kuwl7CUcS3Iv6DAmwwZWa"
  );
  return data;
});

const Item = (...params) => {
  console.log(params[0]);
};

// const firstParam = items.reduce((item) => {
//   let matched = items[0]
// });
// console.log(firstParam);
