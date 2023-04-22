import router from './router'
import {getToken} from "@/js/auth";
const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/')
    }
  }
})
