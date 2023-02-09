import service from '@/js/request'

const PREFIX = '/attendance'

export const pageAttendanceList = (searchParam) => {
    return service.post(PREFIX + '/page/attendance/list', searchParam)
        .then(res => {
            return res.data
        })
        .catch()
}