import React, {PureComponent} from 'react';


//PureComponent使只有状态发生了改变的组件重新渲染
class Home extends PureComponent {

    //PureComponent内部会对props和state进行下面这样类似的比较决定组件是否重新渲染
    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.message !== this.props.message;
    }*/

    render() {
        const {message} = this.props
        console.log('Home render')
        return (
            <div>
                Home Page: {message}
            </div>
        );
    }
}

export default Home;
