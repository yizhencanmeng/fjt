import service from './service'
import request_url from './request'

export function smsCode(arg){
    return service({
        url:request_url.smsCode,
        data:arg,
        method:'post'
    })
}

export function login(arg){
    return service({
        url:'/login',
        data:arg,
        method:'post'
    })
}

export function tabbar(arg){
    return service({
        url:request_url.tabbar,
        data:arg,
        method:'get'
    })
}
export function password(arg){
    return service({
        url:'/password',
        data:arg,
        method:'post'
    })
}

export function banner(){
    return service({
        url:request_url.banner,
        data:{},
        method:'get'
    })
}

export function recommend(arg){
    return service({
        url:request_url.recommend,
        data:arg,
        method:'get'
    })
}

export function integral(arg){
    return service({
        url:request_url.integral,
        data:arg,
        method:'get'
    })
}

export function tearchers(arg){
    return service({
        url:request_url.tearchers,
        data:arg,
        method:'get'
    })
}


export function tearchersinfo(arg){
    return service({
        url:request_url.tearchersinfo,
        data:arg,
        method:'get'
    })
}

export function mainCourse(arg){
    return service({
        url:request_url.mainCourse,
        data:{arg},
        method:'post'
    })
}

export function infomation(arg){
    return service({
        url:request_url.infomation,
        data:{arg},
        method:'post'
    })
}