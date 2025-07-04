import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {

        return (
            <div className="About w-full flex flex-col bg-[#03071218] h-[88vh] items-center justify-center">
                <div>
                    LoggedIn User :  
                    <UserContext.Consumer>
                        {(data)=>data.loggedInUser}
                    </UserContext.Consumer>
                </div>
                <h2 className="text-2xl p-3">About Page with class Component</h2>
                <div className="w-50%">
                    <UserClass />
                </div>
            </div>
        )
    }
}
export default About;