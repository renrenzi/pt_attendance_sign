import service from '@/js/request'

const PREFIX = '/user/resource/category/'

export const addResourceCategory = (searchParam) => {
  return service.post(PREFIX + 'addResourceCategory', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}

export const deleteResourceCategory = (searchParam) => {
  return service.post(PREFIX + 'deleteResourceCategory', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}
export const editResourceCategory = (searchParam) => {
  return service.post(PREFIX + 'editResourceCategory', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}
export const pageResourceCategory = (searchParam) => {
  return service.post(PREFIX + 'pageResourceCategory', searchParam)
    .then(res => {
      return res.data.data
    })
    .catch()
}
