import service from '@/js/request'

const PREFIX = '/leave'

export const pageLeaveList = (searchParam) => {
  return service.post(PREFIX + '/page/leave/list', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}

export const updateLeaveInfo = (searchParam) => {
    return service.post(PREFIX + '/update/leave/info', searchParam)
        .then(res => {
            return res.data
        })
        .catch()
}
