import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        const {children} = this.props
        //使用children的方式直接传递插槽内容
        //如果只有一个元素的话，children就不是数组而是单独的元素了
        return (
            <div>
                {children[0]}
                {children[1]}
            </div>
        );
    }
}

export default NavBar;
