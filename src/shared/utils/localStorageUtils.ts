const tokenKey = "web";
export const setToken = (token: string) => localStorage.setItem(tokenKey, token);
export const getToken = () => localStorage.getItem(tokenKey);
export const removeToken = () => localStorage.removeItem(tokenKey);

const userIdKey = "userId";
export const setUserId = (userId: string) => localStorage.setItem(userIdKey, userId);
export const getUserId = () => localStorage.getItem(userIdKey);
export const removeUserId = () => localStorage.removeItem(userIdKey);
