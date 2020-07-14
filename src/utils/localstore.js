// 通用的工具类
// 创建localstorage中key值

export function createKey(name) {
    return window.location.host + '_' + name;
}

//可以对localstorage做封装，在函数中加过期时间的概念
export function setItem(key, value, expire) {
    const valueObj = {
        value, expire
    }
    window.localStorage.setItem(key, JSON.stringify(valueObj));
}

export function getItem(key) {
    let obj = window.localStorage.getItem(key);
    if (obj) {
        let valueObj = JSON.parse(obj);
        if (Date.now() - valueObj.expire > 0) {
            // 已经过期了
            window.localStorage.removeItem(key);
            return null;
        } else {
            return valueObj.value;
        }
    } else {
        return null;
    }
}