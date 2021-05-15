import React from 'react'

import SignIn from '../components/signin'
import SignUp from '../components/signup'

import './signin-signup.scss'

const SignInSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInSignUpPage