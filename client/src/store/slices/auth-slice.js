export const authSlice = ((set) => ({
    userInfo: undefined,
    setUserInfo: (userInfo) => set({ userInfo }),
    logout: () => set({ user: null }),
}));