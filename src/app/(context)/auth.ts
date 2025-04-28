export const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('firstTimeLogin', 'true')
};

export const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('firstTimeLogin');
};

export const isAuthenticated = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
};

export const isFirstTimeLogin = () => {
    return localStorage.getItem('firstTimeLogin') === 'true';
};

export const setFirstTimeLogin = (value) => {
    localStorage.setItem('firstTimeLogin', value ? 'true' : 'false');
};

export const isUserExist = (userData: { email: string; password: string }): boolean => {
    const usersString = localStorage.getItem('Users');
    const users = usersString ? JSON.parse(usersString) : [];

    return users.some((user: { email: string; password: string }) =>
        user.email === userData.email && user.password === userData.password
    );
};

export const signup = (userData: { name: string, email: string; password: string, isFirstTime: boolean }) => {
    const usersString = localStorage.getItem('Users');
    const users = usersString ? JSON.parse(usersString) : [];
    users.push(userData);

    localStorage.setItem("Users", JSON.stringify(users));
}
