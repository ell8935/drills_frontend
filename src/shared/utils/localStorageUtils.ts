const tokenKey = "web";

export const setToken = (token: string) => localStorage.setItem(tokenKey, token);
export const getToken = () => localStorage.getItem(tokenKey);
export const removeToken = () => localStorage.removeItem(tokenKey);
