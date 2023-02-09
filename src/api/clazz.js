import service from '@/js/request'

const PREFIX = '/clazz'

export const batchDeleteClazz = (requestParam) => {
  return service.post(PREFIX + '/batch/delete/clazz/list', requestParam)
    .then(res => {
      return res.data
    })
    .catch()
}

export const editClazzInfo = (requestParam) => {
  return service.post(PREFIX + '/edit/clazz/detail', requestParam)
    .then(res => {
      return res.data
    })
    .catch()
}

export const pageClazzList = (searchParam) => {
  return service.post(PREFIX + '/page/clazz/list', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}
