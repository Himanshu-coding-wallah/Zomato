import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const FoodPartnerRegister = () => {

    const navigate = useNavigate()

    const [userInfo, setUserInfo] = useState({
        businessName: "",
        contactName: "",
        contact: "",
        address: "",
        email: "",
        password: ""
    })

    const formHandler = async (e) => {

        e.preventDefault()

        try {
            const data = await fetch("http://localhost:8000/api/v1/auth/food-partner/register",
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
            value={userInfo.businessName}
            name='businessName'
            onChange={changeHandler}
            type="text" placeholder='businessName' />

            <input
            value={userInfo.contactName}
            name='contactName'
            onChange={changeHandler}
            type="text" placeholder='Contact name' />

            <input
            value={userInfo.contact}
            name='contact'
            onChange={changeHandler}
            type="text" placeholder='contact' />

            <input
            value={userInfo.address}
            name='address'
            onChange={changeHandler}
            type="text" placeholder='address' />

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
        <p>Already have a food partner account? <Link to={'/auth/food-partner/login'}>Login</Link></p>
        <p>Sign up as an <Link to={'/auth/register'}>user</Link></p>
    </>
  )
}

export default FoodPartnerRegister