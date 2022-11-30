import React, { PureComponent } from "react";
import ReactDOM from "react-dom/client"


class App extends PureComponent{
    constructor() {
        super()
        this.state = {
            message: 'Hello React',
            username: ''
        }
    }

    render() {
        const { username } = this.state
        return (
            <div>
                <form>
                    <label htmlFor="username">
                        {/*input此时也是一个受控组件*/}
                        用户名： <input type="text" value={ username } id="username"/>
                    </label>
                </form>

            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
