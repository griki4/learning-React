import React from "react";
import ReactDOM from "react-dom/client"
import MainBanner from "./components/MainBanner";
import MainList from "./components/MainList";
import Add from "./components/Add";

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            message: 'Hello React',
            banners: ['新歌', '华语', '英文'],
            productLists: ['popular', 'new', 'hot'],
            title: 'banner',
            count: 100
        }
    }
    changeCount(count){
        this.setState({count: this.state.count + count})
    }
    render() {
        const { message, banners, productLists, title, count} = this.state
        return (
            <div>
                <h2>{message}</h2>
                <MainBanner banner={ banners } title={title}/>
                <MainBanner/>
                <MainList list={productLists}/>
                <h2>{count}</h2>
                {/*父组件传递一个函数参数给子组件*/}
                <Add addClick={(count) => this.changeCount(count)}/>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
