import service from '@/js/request'

const PREFIX = '/selectedCourse'

export const batchDeleteSelectedCourse = (requestParam) => {
  return service.post(PREFIX + '/batch/delete/selected/course/list', requestParam)
    .then(res => {
      return res.data
    })
    .catch()
}
export const updateSelectedCourse = (requestParam) => {
  return service.post(PREFIX + '/update/selected/course', requestParam)
    .then(res => {
      return res.data
    })
    .catch()
}

export const pageSelectedCourseList = (requestParam) => {
  return service.post(PREFIX + '/page/selected/course/list', requestParam)
    .then(res => {
      return res.data
    })
    .catch()
}
