import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const FoodPartnerLogin = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const formHandler = async (e) => {

        e.preventDefault()

        try {
            const data = await fetch("http://localhost:8000/api/v1/auth/food-partner/login",
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
                Log in
            </button>
        </form>
        <p>Dont have food partner account? <Link to={'/auth/food-partner/register'}>Sign up</Link></p>
        <p>Log in as a <Link to={'/auth/login'}>user</Link></p>
    </>
  )
}

export default FoodPartnerLogin