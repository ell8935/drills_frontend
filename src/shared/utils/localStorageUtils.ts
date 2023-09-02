const tokenKey = "web";
export const setToken = (token: string) => localStorage.setItem(tokenKey, token);
export const getToken = () => localStorage.getItem(tokenKey);
export const removeToken = () => localStorage.removeItem(tokenKey);

const userIdKey = "userId";
export const setUserId = (userId: string) => localStorage.setItem(userIdKey, userId);
export const getUserId = () => {
  const userId = localStorage.getItem(userIdKey);
  return userId ? userId : "No userId found";
};
export const removeUserId = () => localStorage.removeItem(userIdKey);

const clubIdKey = "clubId";
export const setClubId = (clubId: string) => localStorage.setItem(clubIdKey, clubId);
export const getClubId = () => localStorage.getItem(clubIdKey);
export const removeClubId = () => localStorage.removeItem(clubIdKey);
