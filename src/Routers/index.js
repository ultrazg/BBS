// Routers map
import Index from '../Views/Index';
import Register from '../Views/Register';
import Login from '../Views/Login';

export default [
  {
    path: '/',
    name: 'App',
    component: Index
  },
  {
    path: '/register',
    name:'Register',
    component: Register
  },
  {
    path:'/login',
    name:'Login',
    component: Login
  }
]