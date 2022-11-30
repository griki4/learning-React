import React from "react";
import ReactDOM from "react-dom/client"
import event_bus from "./utils/event_bus";
import Home from "./components/Home";

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            name: '',
            age: 0,
            height: 0
        }
    }
    infoPrevClick(name, age, height){
        console.log(name, age, height)
        this.setState({name, age, height})
    }
    componentDidMount() {
        //监听事件
        event_bus.on('infoPrev', this.infoPrevClick, this)
    }
    componentWillUnmount() {
        //组件卸载的时候解绑事件
        event_bus.off('infoPrev', this.infoPrevClick)
    }

    render() {
        const {name, age, height} = this.state
        return (
            <div>
                App Components: {name}-{age}-{height}
                <Home/>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
