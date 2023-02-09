import service from '@/js/request'

const PREFIX = '/user/resource/'

export const getResourceByRoleId = (searchParam) => {
  return service.post(PREFIX + 'getResourceByRoleId', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}
export const addResource = (searchParam) => {
  return service.post(PREFIX + 'addResource', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}

export const deleteResources = (searchParam) => {
  return service.post(PREFIX + 'deleteResources', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}
export const editResource = (searchParam) => {
  return service.post(PREFIX + 'editResource', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}
export const pageResource = (searchParam) => {
  return service.post(PREFIX + 'pageResource', searchParam)
    .then(res => {
      return res.data.data
    })
    .catch()
}
