import React from "react";
import ReactDOM from "react-dom/client"
import Hello from "./components/Hello";
import SayHi from "./components/SayHi";

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            message: 'Hello React'
        }
    }
    render() {
        const { message } = this.state
        //1. 返回React元素或者组件
        return (
            <div>
                <h2>{message}</h2>
                <Hello/>
                <SayHi/>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
