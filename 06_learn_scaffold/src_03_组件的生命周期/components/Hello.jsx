import React from "react";

class Hello extends React.Component{
    //1. 首先执行类组件的constructor方法，创建组件实例
    constructor() {
        console.log('create component')
        super();
        this.state = {
            info: 'a Hello component'
        }
    }
    //2. 执行组件的render方法，然后挂载到DOM
    render() {
        console.log('component render')
        const {info} = this.state
        return (
            <h3>{info}</h3>
        )
    }
    //3. 组件挂载完毕触发生命周期钩子
    componentDidMount() {
        console.log('component mounted')
    }

    //4. 组件更新
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('component update')
    }

    //5. 组件卸载
    componentWillUnmount() {
        console.log('component unmount')
    }

    //6.决定组件是否要更新
    shouldComponentUpdate(nextProps, nextState, nextContext) {

    }
    // 在组件更新之前的快照，也就是保存更新之前的数据
    getSnapshotBeforeUpdate(prevProps, prevState) {

    }

}

export default Hello
