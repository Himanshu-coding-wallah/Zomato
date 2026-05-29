import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const UserRegister = () => {

    const navigate = useNavigate()

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: ""
    })

    const formHandler = async (e) => {

        e.preventDefault()

        try {
            const data = await fetch("http://localhost:8000/api/v1/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify(userInfo)
                }
            )

            const result = await data.json()
            console.log(result)

        } catch (error) {
            console.log(error)
        }
}

    const changeHandler = (e)=>{
        const value = e.target.value
        setUserInfo((prev) => ({
            ...prev,
            [e.target.name]: value
        }))
    }

  return (
    <>
        <form onSubmit={formHandler}>
            <input
            value={userInfo.name}
            name='name'
            onChange={changeHandler}
            type="text" placeholder='Name' />

            <input 
            value={userInfo.email}
            name='email'
            onChange={changeHandler}
            type="text" placeholder='Email' />

            <input 
            value={userInfo.password}
            name='password'
            onChange={changeHandler}
            type="text" placeholder='Password' />

            <button>
                Sign Up
            </button>
        </form>
        <p>Already have an account? <Link to={'/auth/login'}>Login</Link></p>
        <p>Sign up as a <Link to={'/auth/food-partner/register'}>Food Partner</Link></p>
    </>
  )
}

export default UserRegister