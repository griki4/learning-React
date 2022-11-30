import React, {PureComponent} from 'react';

class Recommend extends PureComponent {
    render() {
        const {counter} = this.props
        console.log('Recommend render')
        return (
            <div>
                Recommend Page: {counter}
            </div>
        );
    }
}

export default Recommend;
