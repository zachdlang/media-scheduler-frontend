import { get, put, del } from 'api/request';

export const getShows = async () => {
  let shows = await get('/show/list')
    .then((res) => res.data)
    .catch(() => {});
  return shows;
}

export const followShow = async (showid) => {
  return put(`/show/${showid}`)
}

export const unfollowShow = async (showid) => {
  return del(`/show/${showid}`)
}