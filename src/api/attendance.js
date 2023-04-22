import service from '@/js/request'

const PREFIX = '/attendance'

export const pageAttendanceList = (searchParam) => {
    return service.post(PREFIX + '/page/attendance/list', searchParam)
        .then(res => {
            return res.data
        })
        .catch()
}

export const punchTheClock = (searchParam) => {
    return service.post(PREFIX + '/punch/the/clock', searchParam)
        .then(res => {
            return res.data
        })
        .catch()
}
