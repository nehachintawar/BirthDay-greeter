<<<<<<< HEAD
'use client';
=======
export const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('firstTimeLogin', 'false')
};
>>>>>>> 817e6ab (recent update)

export const login = () => {
    if (typeof window !== 'undefined') {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('firstTimeLogin', 'false');
    }
   };
   
   export const logout = () => {
    if (typeof window !== 'undefined') {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('firstTimeLogin');
    }
   };
   
   export const isAuthenticated = () => {
    if (typeof window !== 'undefined') {
    return localStorage.getItem('isLoggedIn') === 'true';
    }
    return false;
   };
   
   export const isFirstTimeLogin = () => {
    if (typeof window !== 'undefined') {
    return localStorage.getItem('firstTimeLogin') === 'true';
    }
    return false;
   };
   
   export const setFirstTimeLogin = (value) => {
    if (typeof window !== 'undefined') {
    localStorage.setItem('firstTimeLogin', value ? 'true' : 'false');
    }
   };
   
   export const isUserExist = (userData: { email: string; password: string }): boolean => {
    if (typeof window !== 'undefined') {
    const usersString = localStorage.getItem('Users');
    const users = usersString ? JSON.parse(usersString) : [];
   
    return users.some((user: { email: string; password: string }) =>
    user.email === userData.email && user.password === userData.password
    );
    }
    return false;
   };
   
   export const signup = (userData: { name: string, email: string; password: string, isFirstTime: boolean }) => {
    if (typeof window !== 'undefined') {
    const usersString = localStorage.getItem('Users');
    const users = usersString ? JSON.parse(usersString) : [];
    users.push(userData);
   
    localStorage.setItem("Users", JSON.stringify(users));
    }
   };