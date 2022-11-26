import React, {Component} from 'react';

class MainList extends Component {
    render() {
        const {list} = this.props
        return (
            <div>
                {list.map(item => <li>{item}</li>)}
            </div>
        );
    }
}

export default MainList;
