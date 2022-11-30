import React, { PureComponent } from "react";
import ReactDOM from "react-dom/client"

class App extends PureComponent{
    constructor() {
        super()
        this.state = {
            message: 'Hello React',
            username: '受控组件'
        }

    }
    changeText(e){
        let value = e.target.value
        this.setState({value})
    }

    render() {
        const { message, value } = this.state
        return (
            <div>
                message: { message }<br/>
                {/*绑定value之后，input变得不能再接收用户输入的数据，因为this.state变成了唯一的数据源，只能通过setSate来修改input的数据
                这就是受控组件。如果不受this.state数据源管理，可以自行更改数据的组件就是非受控组件*/}
                input: <input value={username} onChange={ e => this.changeText(e)}/>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
