import React from "react";
import ReactDOM from "react-dom/client"
import NavBar from "./components/NavBar";
import NavBarCopy from "./components/NavBarCopy";
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
                {/*1. 直接在组件双标签中插入元素，相当于以this.props.children的方式传递元素*/}
                <NavBar>
                    <button>插槽按钮</button>
                    <div>this is a slot element</div>
                </NavBar>
----------------------------------------------------
                {/*2. 通过props直接传递元素，更加可控和常用的方式*/}
                <NavBarCopy
                    leftSlot={<div>an element</div>}
                    centerSlot={<button>另一种插槽</button>}
                />

                {/*3. 如果需要作用域插槽，则在子组件中向插槽插入的元素传值，和Vue中的作用域插槽类型*/}
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
