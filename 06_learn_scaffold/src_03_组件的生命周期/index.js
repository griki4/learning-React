import React from "react";
import ReactDOM from "react-dom/client"
import Hello from "./components/Hello";
import SayHi from "./components/SayHi";

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            message: 'Hello React',
            isShow: true
        }
    }
    changeMessage(){
        this.setState({message: 'Hello World'})
    }
    switch(){
        this.setState({isShow: !this.state.isShow})
    }
    render() {
        const { message, isShow } = this.state
        //1. 返回React元素或者组件
        return (
            <div>
                <h2>{message}</h2>
                <button onClick={e => this.changeMessage()}>更新文本</button>
                <button onClick={e => this.switch()}>移除SayHi</button>
                { isShow && <Hello/> }
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
