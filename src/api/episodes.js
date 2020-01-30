import { get } from './request';

export const getEpisodes = async () => {
  let episodes = await get('/episode/list')
    .then((res) => res.data);
  return episodes;
}