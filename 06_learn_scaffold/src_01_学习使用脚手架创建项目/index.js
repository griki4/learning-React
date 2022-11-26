import React from "react";
import ReactDOM from "react-dom/client"
import Hello from "./components/Hello";

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            message: 'Hello React'
        }
    }
    render() {
        const { message } = this.state
        return (
            <div>
                <h2>{message}</h2>
                <Hello/>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
