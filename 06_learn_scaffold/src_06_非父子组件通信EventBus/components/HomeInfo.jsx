import React, {Component} from 'react';
import event_bus from "../utils/event_bus";

class HomeInfo extends Component {
    infoClick(){
        //触发事件
        event_bus.emit('infoPrev', 'Jack', 18, 2.03)
    }
    render() {
        return (
            <div>
                HomeInfo
                <button onClick={() => this.infoClick()}>上一个</button>
                <button>下一个</button>
            </div>
        );
    }
}

export default HomeInfo;
