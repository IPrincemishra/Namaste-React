import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            }
        }

    }

    async componentDidMount() {
        // API Call
        const data = await fetch("https://api.github.com/users/iprincemishra")
        const json = await data.json()

        this.setState({
            userInfo: json
        })
    }

    render() {
        const { name, location, login, avatar_url } = this.state.userInfo
        

        return (
            <div className="user-card w-full flex justify-center items-center gap-6 bg-[#0f111f] text-[#feffff] px-6 py-4 rounded-2xl">
                <img src={avatar_url} className="w-[100px] rounded-full" />
                <div>
                    <h2>Name : {name}</h2>
                    <h3>Location : {location}</h3>
                    <h3>Contact : @{login}</h3>
                </div>
            </div>
        )
    }
}

export default UserClass

/**
 ** --- MOUNTING ---
 ** Constructor (Dummy)
 ** Render (Dummy)
 **      <HTML Dummy>
 ** Component Did Mount
 **      <API Call>
 **      <this.setState>
 ** 
 ** --- UPDATE ---
 ** Render(API Date)
 **     <HTML (new API data)> 
 ** Component Did Update
 */