export const INVIDIOUS_INSTANCES_URL =
  "https://api.invidious.io/instances.json?pretty=1&sort_by=type,users";

export const getInvidiousInstance = async () => {
  const request = await fetch(INVIDIOUS_INSTANCES_URL);
  const data = await request.json();
  const dataName = data.map(([name]) => name);

  return {
    data,
    dataName,
  };
};
