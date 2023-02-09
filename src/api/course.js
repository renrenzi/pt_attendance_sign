import service from '@/js/request'

const PREFIX = '/course'

export const editCourseDetail = (searchParam) => {
  return service.post(PREFIX + '/edit/course/detail', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}
export const batchDeleteCourse = (searchParam) => {
  return service.post(PREFIX + '/batch/delete/course', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}

export const pageCourseList = (searchParam) => {
  return service.post(PREFIX + '/page/course/list', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}
