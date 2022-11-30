import React from "react";
import ReactDOM from "react-dom/client"
import {flushSync} from "react-dom";

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            message: 'Hello React',
            counter: 0
        }
    }
    add(num){
        //1.React会将新的state和原来的state进行合并，更新页面
        /*this.setState(() => {
            //2. 写成回调函数返回对象的形式，可以封装业务逻辑
            return {
                counter: this.state.counter + num
            }
        })*/
        flushSync(() => {
            this.setState({
                counter: this.state.counter + num
            })
        })
        console.log('...........', this.state.counter)

        //React18之前setState操作如果被包裹在微任务或宏任务以及原生的DOM回调中会变成同步
        //React18之后统一全部变成异步，留下了flushSync进行同步操作

    }
    changeText(){
        //3. setState和Vue一样采用的是异步更新，setState的第二个参数传入回调函数，可以获取到更新后的数据
        this.setState({
            message: 'successfully change!'
        }, () => console.log('++++++++++++', this.state.message))
        // console.log('----------',this.state.message)
    }

    render() {
        console.log('render executed!')
        const {message, counter} = this.state
        return (
            <div>
                message: {message}
                <button onClick={() => this.changeText()}>change message</button>
                counter: {counter}
                <button onClick={() => this.add(1)}>+1</button>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
