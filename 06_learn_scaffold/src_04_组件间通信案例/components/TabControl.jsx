import React, {Component} from 'react';

class TabControl extends Component {
    activeTab(index){
        this.props.tabClick(index)
    }
    render() {
        const { tab } = this.props
        return (
            <div>
                {
                    tab.map((item, index) => {
                        return <div onClick={() => this.activeTab(index)}>{item}</div>
                    })
                }
            </div>
        );
    }
}

export default TabControl;
