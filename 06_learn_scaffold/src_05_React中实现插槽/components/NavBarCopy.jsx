import React, {Component} from 'react';

class NavBarCopy extends Component {
    render() {
        const {leftSlot, centerSlot} = this.props
        return (
            <div>
                {leftSlot}
                {centerSlot}
            </div>
        );
    }
}

export default NavBarCopy;
