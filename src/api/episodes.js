import { get, put } from 'api/request';

export const getEpisodes = async () => {
  let episodes = await get('/episode/list')
    .then((res) => res.data)
    .catch(() => {});
  return episodes;
}

export const markWatched = async (episodeid) => {
  return put(`/episode/${episodeid}`)
}