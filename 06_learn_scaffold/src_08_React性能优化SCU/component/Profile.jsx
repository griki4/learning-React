import { memo } from "react";
//函数组件使用memo达到PureComponent的效果
const Profile = memo(function(props){
    console.log('function render')
    return <h2>function component: {props.counter}</h2>
})

export default Profile
