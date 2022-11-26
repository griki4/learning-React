import React, {Component} from 'react';
import ThemeContext from "../context/context";
class HomeInfo extends Component {
    render() {
        return (
            <div>
                HomeInfo: {this.context.color}
            </div>
        );
    }
}

HomeInfo.contextType = ThemeContext

export default HomeInfo;
