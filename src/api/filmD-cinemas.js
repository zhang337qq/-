import request from '@/utils/request'

//获取从电影详情跳转到影院列表的影院ID的数据
export const getfilmdCinemas = (id) => {
  return request({
    // gateway/?filmId=4785&__CITYID__&k=6346672
    url: `gateway/?filmId=${id}&__CITYID__&k=6346672`,
    data: {
      xHost: 'mall.film-ticket.cinema.film-show-cinema'
    }
  })
}

//获取从电影详情跳转到影院列表的影院ID的数据
export const getCinemasInfo = (cityId, cinemaIds) => {
  return request({
    // gateway/?filmId=4785&__CITYID__&k=6346672
    url: `/gateway?k=5881281`,
    method: 'post',
    headers: {
      // xToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2VudElkIjoiMzAwMCIsInRpbWVzdGFtcCI6MTU2NzU2OTkyNywidXNlcklkIjozMDY0NTQ5MH0.WNY1Y7cwNu6uWtE9MAyhS5TYDlpKOc6BBlcnu4kyGsQ'
    },
    data: {
      cityId,
      cinemaIds,
      xHost: 'mall.film-ticket.cinema.batch-cinema',
    }
  })
}
