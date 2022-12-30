import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router'

import { fetchWrapper } from '../helpers';


const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));

export const userService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value },
    login,
    logout
};

function login(email, password) {    
    return fetchWrapper.post(`${baseUrl}auth/sign-in`, { email, password })
        .then(user => {

            if(user.data.groups){                
                if(!user.data.groups.includes('admin') || user.data.groups.length == 0){
                    throw new Error("No eres administrador, contáctese con soporte técnico")    
                }
                
            }else{
                throw new Error("Error en la respuesta autenticación")
            }
            userSubject.next(user.data);
            localStorage.setItem('user', JSON.stringify(user.data));
            return user.data;
        });
}

function logout() {

    localStorage.removeItem('user');
    userSubject.next(null);
    Router.push('/login');
}
