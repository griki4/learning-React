import React from "react";
import ReactDOM from "react-dom/client"
import Home from "./component/Home";
import Recommend from "./component/Recommend";
import Profile from "./component/Profile";

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            message: 'Hello React',
            counter: 0
        }
    }
    add(num){
        this.setState({
            counter: this.state.counter + num
        })
    }
    changeText(){
        this.setState({
            message: 'change successfully!'
        })
    }

    render() {
        console.log('App render')
        const {message, counter} = this.state
        //父组件状态改变重新执行渲染函数，子组件即使状态不变也会被重新渲染造成性能浪费
        return (
            <div>
                message: {message}
                <button onClick={() => this.changeText()}>change message</button>
                <Home message={message}/>
                counter: {counter}
                <button onClick={() => this.add(1)}>+1</button>
                <Recommend counter={counter}/>
                <Profile counter={counter}/>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
