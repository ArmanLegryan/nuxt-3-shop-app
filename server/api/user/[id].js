export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const URL = `https://jsonplaceholder.typicode.com/users/${id}`;

  const data = await $fetch(URL);

  return data;
});
