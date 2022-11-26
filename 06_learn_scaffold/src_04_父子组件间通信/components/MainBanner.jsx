import React, {Component} from 'react';
import PropTypes from 'prop-types'
class MainBanner extends Component {
    //ES2022支持将默认props定义为静态属性
    static defaultProps = {
        banner: [],
        title: 'this is default title'
    }
    render() {
        console.log(this.props)
        const { banner, title } = this.props
        return (
            <div>
                {
                    banner.map(item => <li>{item}</li>)
                }
                {
                    title
                }
            </div>
        );
    }
}

//限制props参数的类型
MainBanner.propTypes = {
    banner: PropTypes.array.isRequired,
    title: PropTypes.string
}

//props的默认值设置
// MainBanner.defaultProps = {
//     banner: [],
//     title: 'default title'
// }

export default MainBanner;
