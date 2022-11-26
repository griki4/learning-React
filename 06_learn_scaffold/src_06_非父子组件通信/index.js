import React from "react";
import ReactDOM from "react-dom/client"
import Home from "./components/Home";
import ThemeContext from "./context/context";
class App extends React.Component{
    constructor() {
        super()
        this.state = {
            goods: ['流行', '精选', '新款'],
            tabIndex: 0
        }
    }
    render() {
        return (
            <div>
                <ThemeContext.Provider value={{color: 'red', age: 20}}>
                    <Home/>
                </ThemeContext.Provider>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
