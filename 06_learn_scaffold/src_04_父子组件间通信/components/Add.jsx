import React, {Component} from 'react';

class Add extends Component {
    add(count){
        //子组件触发传递的函数并传入对应的参数
        this.props.addClick(count)
    }
    render() {
        return (
            <div>
                <button onClick={() => this.add(1)}>+1</button>
            </div>
        );
    }
}

export default Add;
