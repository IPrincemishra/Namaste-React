import { Component } from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {

        return (
            <div>
                <h2>About Page with class Component</h2>
                <UserClass />
            </div>
        )
    }
}
export default About;