export default defineEventHandler(async (event) => {
  // // handle query params
  // const { name } = getQuery(event);
  // const { age } = await readBody(event);

  const data = await $fetch("https://jsonplaceholder.typicode.com/users");

  return data;
});
