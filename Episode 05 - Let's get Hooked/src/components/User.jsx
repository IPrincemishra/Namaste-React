import { useEffect, useState } from "react"

const User = (props) => {
    const { name } = props

    useEffect(() => {
        // API Call
        getUserInfo()
    }, [])

    const getUserInfo = async () => {
        const data = await fetch("https://api.github.com/users/iprincemishra")
        
    }

    return (
        <div className="user-card">
            <h2>Name : {name}</h2>
            <h3>Location : Mohali</h3>
            <h3>Contact : @iprincemishra</h3>
        </div>
    )
}

export default User