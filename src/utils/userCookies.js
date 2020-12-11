import Cookies from 'js-cookie'
/**
 * 设置用户的cookie信息
 */
export function setCookie(userInfo) {
    const user = Object.entries(userInfo);
    console.log(user);
    for (let i = 0; i < user.length; i++) {
        Cookies.set(user[i][0], user[i][1]);
    }
    return true;
}
/**
 * 获取用户的cookie信息
 */
export function getUserCookie() {
    return {
        username: Cookies.get('username'),
        appkey: Cookies.get('appkey'),
        role: Cookies.get('role'),
        email: Cookies.get('email'),
    };
}

/**
 * 移除cookie
 */
export function removeUserCookie() {
    Cookies.remove('username');
    Cookies.remove('appkey');
    Cookies.remove('role');
    Cookies.remove('email');
    return true;
}