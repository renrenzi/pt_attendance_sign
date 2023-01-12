import service from '@/js/request'

const PREFIX = '/admin'

export const miniLoginInfo = (requestParam) => {
    return service.post(PREFIX + '/mini/login/info', requestParam)
        .then(res => {
            return res.data
        })
        .catch()
}
