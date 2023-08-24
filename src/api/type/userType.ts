// 获取用户信息
export type userInfoResponseType = {
    name: string | undefined;
    age: number | undefined;
    token: string;
    id: number | string | undefined;
};
// 登录请求类型
export type logInType = {
    username: string;
    password: string;
    captcha: string;
    checkKey: string
};
// 验证码响应类型
export type Verification = {
    code: number;
    message: string;
    result: string;
    success: Boolean;
    timestamp: number
};
