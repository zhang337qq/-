import request from '@/utils/request'

//获取电影列表中的banner数据
export const getBanner = () => {
  return request({
    url: 'gateway?type=2&__CITYID__&k=5014719',
    data: {
      xHost: 'mall.cfg.common-banner'
    }
  })
}

// 获取电影列表中的数据
export const getFilmList = (pageInfo) => {
  return request({
    // 下边的接口可以获取正在热映和即将上映的数据，根据传过来的type的参数不同获取不同的数据
    url: `gateway?__CITYID__&pageNum=${pageInfo.pageNum}&pageSize=${pageInfo.pageSize}&type=${pageInfo.type}&k=1712507`,
    data: {
      xHost: 'mall.film-ticket.film.list'
    }
  })
}

// 获取电影详情的数据
export const getFilmDetail = (id) => {
  let url = '/gateway?filmId=' + id + '&k=655428'
  return request({
    url,
    data: {
      xHost: 'mall.film-ticket.film.info'
    }
  })
}



//张鸿
//影院列表
export const getCinemasList = (cityId) =>{
  let url = 'gateway?cityId='+cityId+'&ticketFlag=1&k=7561235'
  return request({
    url,
    data:{
      xHost:'mallgetDetailPlay.film-ticket.cinema.list'
    }
  })
}

export const getDetailPlay = (cinemaId) =>{
  let url = 'gateway/?cinemaId='+cinemaId+'&k=4887120'
  return request({
    url,
    data:{
      xHost:'mall.film-ticket.film.cinema-show-film'
    }
  })
}


//获取影院单独详情
export const getPlayDetail = (cinemaId) =>{
  let url = 'gateway/?cinemaId='+cinemaId+'&k=1345225'
  return request({
    url,
    data:{
      xHost:'mall.film-ticket.cinema.info'
    }
  })
}

//获取影院上映时间厅
export const getCinemasPlayHall = (filmId,cinemaId,date) =>{
  let url = 'gateway/?filmId='+filmId+'&cinemaId='+cinemaId+'&date='+date+'&k=9076003'
  return request({
    url,
    data:{
      xHost:'mall.film-ticket.schedule.list'
    }
  })
}



//获取搜索的请求 ---  离我最近
export const getAddressList1 = (cityId)=>{
  let url = '/gateway?cityId='+cityId+'&k=4497115'
  return request({
    url,
    data:{
      xHost:'mall.film-ticket.cinema.recommend'
    }
  })
}

//获取搜索的请求 ---  全局搜索
export const getAddressList = (cityId)=>{
  let url = '/gateway?cityId='+cityId+'&ticketFlag=0&k=6789814'
  return request({
    url,
    data:{
      xHost:'mall.film-ticket.cinema.list'
    }
  })
}
