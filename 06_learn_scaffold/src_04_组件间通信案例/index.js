import React from "react";
import ReactDOM from "react-dom/client"
import TabControl from "./components/TabControl";
class App extends React.Component{
    constructor() {
        super()
        this.state = {
            goods: ['流行', '精选', '新款'],
            tabIndex: 0
        }
    }
    changeTab(index){
        this.setState({tabIndex: index})
    }
    render() {
        const { goods, tabIndex } = this.state
        return (
            <div>
                <TabControl tab={ goods } tabClick={(index) => this.changeTab(index)}/>
                <h2>{goods[tabIndex]}</h2>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
