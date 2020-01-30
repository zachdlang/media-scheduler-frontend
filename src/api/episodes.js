import { get, put } from './request';

export const getEpisodes = async () => {
  let episodes = await get('/episode/list')
    .then((res) => res.data);
  return episodes;
}

export const markWatched = async (episodeid) => {
  return put(`/episode/${episodeid}`)
}