import React from "react";

class Hello extends React.Component{
    constructor() {
        super();
        this.state = {
            info: 'a Hello component'
        }
    }
    render() {
        const {info} = this.state
        return (
            <h3>{info}</h3>
        )
    }

}

export default Hello
