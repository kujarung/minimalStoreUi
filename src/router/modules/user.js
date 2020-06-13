import SignUp from '@/views/user/components/SignUp'
import Login from '@/views/user/components/Login'
import Oauth from '@/views/user/components/Oauth'
const userRouter = [
    {
        path: 'signUp',
        name: 'signUp',
        component: SignUp
    },
    {
        path: 'login',
        name: 'login',
        component: Login
    },
    {
        path: 'oauth',
        name: 'oauth',
        component: Oauth
      },     
]

export default userRouter