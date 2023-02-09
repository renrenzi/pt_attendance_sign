import service from '@/js/request'

const PREFIX = '/student'

export const pageStudentList = (searchParam) => {
  return service.post(PREFIX + '/page/student/list', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}
