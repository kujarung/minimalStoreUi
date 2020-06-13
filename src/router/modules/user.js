import SignUp from '@/views/user/SignUp'
import Login from '@/views/user/Login'
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
]

export default userRouter