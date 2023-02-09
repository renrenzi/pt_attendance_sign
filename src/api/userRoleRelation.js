import service from '@/js/request'

const PREFIX = '/user/role/relation/'

export const allocateRole = (searchParam) => {
  return service.post(PREFIX + 'allocateRole', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}

export const getRoleListById = (searchParam) => {
  return service.post(PREFIX + 'getRoleListById', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}
