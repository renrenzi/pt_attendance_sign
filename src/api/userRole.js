import service from '@/js/request'

const PREFIX = '/user/role/'

export const addRole = (searchParam) => {
  return service.post(PREFIX + 'addRole', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}

export const deleteRoles = (searchParam) => {
  return service.post(PREFIX + 'deleteRoles', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}
export const editRole = (searchParam) => {
  return service.post(PREFIX + 'editRole', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}
export const pageRole = (searchParam) => {
  return service.post(PREFIX + 'pageRole', searchParam)
    .then(res => {
      return res.data.data
    })
    .catch()
}
