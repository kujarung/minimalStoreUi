import SignUp from '@/views/user/SignUp'
import Login from '@/views/user/Login'
import Oauth from '@/views/user/Oauth'
const userRouter = [
    {
        path: '/signUp',
        name: 'signUp',
        component: SignUp
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/oauth',
        name: 'oauth',
        component: Oauth
      },     
]

export default userRouter