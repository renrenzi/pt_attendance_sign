import service from '@/js/request'

const PREFIX = '/teacher'

export const pageTeacherList = (searchParam) => {
  return service.post(PREFIX + '/page/teacher/list', searchParam)
    .then(res => {
      return res.data
    })
    .catch()
}
