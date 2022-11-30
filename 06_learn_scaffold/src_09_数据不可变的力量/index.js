import React from "react";
import ReactDOM from "react-dom/client"


class App extends React.PureComponent{
    constructor() {
        super()
        this.state = {
            books: [
                {name: '你不知道的JavaScript', price: 100, count: 1},
                {name: 'Vue.js设计与实现', price: 101, count: 2},
                {name: '深入浅出webpack', price: 102, count: 3},
                {name: 'React性能优化实践', price: 103, count: 4}
            ]
        }
    }

    addBook(){
        //数据不可变的力量。对于state和props永远不要直接修改它们的值，而是进行一个浅拷贝后，直接使用浅拷贝的对象替代原有state
        const books = [...this.state.books]
        //React使用PureComponent的时候发现books指向同一个对象会直接不更新
        books.push({name: 'Monorepo', price: 105, count: 5})
        //如果不是同一个对象，但是内部属性完全一致也不会更新
        this.setState({books})
    }

    //一句话总结：想要修改state必须重新浅拷贝一份修改，然后替换原state

    render() {
        const { books } = this.state
        //父组件状态改变重新执行渲染函数，子组件即使状态不变也会被重新渲染造成性能浪费
        return (
            <div>
                <ul>
                    {
                        books.map((item, index) => {
                            return (
                                <li key={item.name}>name: {item.name} - price: {item.price} - count: {item.count}</li>
                            )
                        })
                    }
                </ul>
                <button onClick={() => this.addBook()}>添加书籍</button>

            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
