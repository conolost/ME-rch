export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currencyKey } = useRuntimeConfig();
  const url = new URL(`https://api.currencyapi.com/v3/latest`);
  url.searchParams.set("currencies", code);
  url.searchParams.set("apikey", currencyKey);
  const { data } = await $fetch(url);
  return data;
});
