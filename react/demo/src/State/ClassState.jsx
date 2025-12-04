import React, { Component } from "react";

class ClassState extends Component {

    constructor() {
        super();
        this.state = {
            name: "Abc",
            count: 0,
            isImage: true
        }
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Name:{this.state.name}</h1>
                <button onClick={() => { this.setState({ name: "Xyz" }) }}>Change Name</button>
                <button onClick={() => { this.setState({ name: "Bca" }) }}>Change name</button>
            </div>

        )
    }
}
export default ClassState

