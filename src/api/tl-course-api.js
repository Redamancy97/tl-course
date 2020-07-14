import request from '../utils/http'

//底部接口
export function getFooterList(dictType, pageNum, pageSize, orderByColumn, isAsc) {
    const url = `/api/system/dict/data/list/open?dictType=${dictType}&pageNum=${pageNum}&pageSize=${pageSize}&orderByColumn=${orderByColumn}&isAsc=${isAsc}`;
    return request.post(url).then(res => {
        return {
            ...res,
            // list: res.rows
        }
    })
}


// 获取轮播图接口
export function getSwiper(number) {
    const url = `/api/weChat/applet/course/banner/list?=number=${number}`;
    return request.get(url).then(res => {
        return {
            ...res
        }
    })
}

// 获取直播的接口
export function getLiveList() {
    const url = `/api/pc/liveCourseInfo/list`;
    return request.post(url).then(res => {
        return {
            ...res
        }
    })
}

// 课程列表的接口
export function getCourseList(type, pageNum, pageSize) {
    const url = `/api/weChat/applet/course/list/type?type=${type}&pageNum=${pageNum}&pageSize=${pageSize}`;
    return request.post(url).then(res => {
        return {
            ...res
        }
    })
}

//今日头条的接口
export function getHeadLine(pageNum, pageSize) {
    return request.post(`/api/weChat/applet/article/list?pageNum=${pageNum}&pageSize=${pageSize}`, {})
}

// 获取课程详情的接口
export function getDetail(courseId) {
    return request.get(`/api/pc/course/detail/${courseId}`)
}

// 获取评论的接口
export function getComment(courseId) {
    return request.get(`/api/pc/comment/commentList/course/${courseId}`)
}

// 加入购物车

export function increaseGoods(status) {

    return request.get(`/api/weChat/applet/shoppingCart/join/shoppingCart/${status}`)
}


// 购物车列表

export function goodsList() {
    return request.get(`/api/weChat/applet/shoppingCart/my/list`)
}



// 删除购物车
export function deleteGoods(shoppingCartId) {
    return request.get(`/api/weChat/applet/shoppingCart/remove/${shoppingCartId}`)
}

//播放界面切换章节的接口
export function switchChapters(sectionId){
    const url =`/api/weChat/applet/course/switch/section/${sectionId}`;
    return request.get(url).then(res=>{
        return {
            ...res,
        }
    })
}