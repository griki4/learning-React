## 类组件和函数组件

#### 类组件

- 类组件的名字首字母大写。
- 必须继承自`React.Component`。
- 必须实现`render`方法。

`render`函数的返回值多种多样，可以是`React`元素或者一个组件。也可以是一个数组，数组中的元素会被依次取出来展示。如果是字符串或者数字则会作为文本直接展示。如果是`null undefined`或者布尔类型的值，则不会进行渲染。

类组件通过`constructor`内部的`this.state`类组件可以维护自己的状态。

#### 函数组件

函数组件的写法就是`js`中的函数，依旧需要符合组件的命名规则。函数组件对返回值有要求，**函数组件的返回值和类组件中**`**render**`**函数的返回值一致。**

函数式组件的特点：

- 没有生命周期。
- 没有`this`指向组件实例。
- 不能维护自己的状态`state`。



## 组件的生命周期

`React`的生命周期相比`Vue`来说简化了很多，下图是`React`官方文档给出的组件的生命周期图示。`React`组件生命周期主要有**挂载、更新、卸载**三个阶段。主要是针对类组件。

![img](https://cdn.nlark.com/yuque/0/2022/png/32666946/1669430022040-be439493-9637-4ee5-a9de-d8a28d3c52b8.png)

#### 挂载

- 调用`constructor`方法创建组件实例。
- 调用`render`方法生成`React`元素，然后更新到真实`DOM`中。
- 挂载完毕，调用`componentDidMount`钩子函数。

#### 更新

- 重新触发`render`函数生成元素。
- 更新`DOM`然后触发`componentDidUpdate`。

#### 卸载

- 卸载组件并触发`componentWillUnmount`。

#### 一些不常用的生命周期

![img](https://cdn.nlark.com/yuque/0/2022/png/32666946/1669431285419-58bbc3e3-3383-4008-b257-f4bfff4a356b.png)

## 组件间通信

### 父传子

和`Vue`一样，父传子是组件间传值最常用的方式，也是利用`props`进行传递。比如下面的案例。

```jsx
//父组件
import React from "react";
import ReactDOM from "react-dom/client"
import MainBanner from "./components/MainBanner";

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      message: 'Hello React',
      banners: ['新歌', '华语', '英文'],
      title: 'banner'
    }
  }
  render() {
    const { message, banners, title } = this.state
    return (
      <div>
        <h2>{message}</h2>
        {/*通过属性的方式给子组件传值*/}
        <MainBanner banner={ banners } title={ title }/>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
//子组件
import React, {Component} from 'react';
import PropsTypes from 'props-type'

class MainBanner extends Component {
    render() {
        //传入的props会自动保存在this.props中，直接解构取值
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
//和Vue中类似，可以对传入的props进行类型校验
MainBanner.propsTypes = {
  //数组类型且必须要传入
  banner: PropsTypes.array.isRequired
  title: PropsTypes.string
}

//还可以设置props的默认值,ES2022可以将默认值作为类组件的静态属性写入
MainBanner.defaultProps = {
  banner: [],
  title: 'empty title'
}


export default MainBanner;
```



### 子传父

和`Vue`绑定监听的方式相似但是不尽相同。给子组件传递一个函数作为`props`，这个函数内部会执行一个能够修改父组件数据的回调函数。

子组件执行这个被传入的`props`中的函数并且传入参数，就实现子组件向父组件传递数据。

```jsx
//父组件
import React from "react";
import ReactDOM from "react-dom/client"
import Add from "./components/Add";

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            count: 100
        }
    }
    changeCount(count){
        this.setState({count: this.state.count + count})
    }
    render() {
        const {count} = this.state
        return (
            <div>
                <h2>{count}</h2>
                {/*父组件传递一个函数参数给子组件*/}
                <Add addClick={(count) => this.changeCount(count)}/>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
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
```

### 非父子组件间通信

非父子组件间的通信可以采用`context`来实现，只是目前看来使用非常麻烦，有了`Redux`之后可能也很少会使用这种方法了。

```jsx
//父组件
import React from "react";
import ReactDOM from "react-dom/client"
import Home from "./components/Home";
import ThemeContext from "./context/context";
class App extends React.Component{
    constructor() {
        super()
        this.state = {
            goods: ['流行', '精选', '新款'],
            tabIndex: 0
        }
    }
    render() {
        return (
            <div>
                {/*使用一个类似内置组件一样的东西包裹需要通信的组件以及需要传递的值*/}
                <ThemeContext.Provider value={{color: 'red', age: 20}}>
                    <Home/>
                </ThemeContext.Provider>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
//子组件	
import React, {Component} from 'react';
import HomeInfo from "./HomeInfo";
import HomeBanner from "./HomeBanner";

class Home extends Component {
    render() {
        return (
            <div>
                <HomeInfo/>
                <HomeBanner/>
            </div>
        );
    }
}

export default Home;
//孙组件
import React, {Component} from 'react';
import ThemeContext from "../context/context";
class HomeInfo extends Component {
    render() {
        return (
            <div>
              {/*读取数据*/}
                HomeInfo: {this.context.color}
            </div>
        );
    }
}

//确定接收的上下文
HomeInfo.contextType = ThemeContext

export default HomeInfo;
```

外部引入的`ThemeContext`的代码

```jsx
import React from "react";
const ThemeContext = React.createContext()
export default ThemeContext
```

## 插槽

`React`中其实并没有和`Vue`一样的官方定义的插槽语法，但是我们也可以利用`React`实现插槽的功能。

```jsx
//父组件
import React from "react";
import ReactDOM from "react-dom/client"
import NavBar from "./components/NavBar";
import NavBarCopy from "./components/NavBarCopy";
class App extends React.Component{
    constructor() {
        super()
        this.state = {
            goods: ['流行', '精选', '新款'],
            tabIndex: 0
        }
    }
    changeTab(index){
        this.setState({tabIndex: index})
    }
    render() {
        const { goods, tabIndex } = this.state
        return (
            <div>
                {/*1. 直接在组件双标签中插入元素，相当于以this.props.children的方式传递元素*/}
                <NavBar>
                    <button>插槽按钮</button>
                    <div>this is a slot element</div>
                </NavBar>
----------------------------------------------------
                {/*2. 通过props直接传递元素，更加可控和常用的方式*/}
                <NavBarCopy
                    leftSlot={<div>an element</div>}
                    centerSlot={<button>另一种插槽</button>}
                />

                {/*3. 如果需要作用域插槽，则在子组件中向插槽插入的元素传值，和Vue中的作用域插槽类型*/}
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App/>)
//子组件1
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
//子组件2
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
```

`React`虽然没有提供和`Vue`的`slot`一样实现插槽的方式，但是我们可以利用`React`的灵活性自己实现类似功能。毕竟插槽就是在父组件中往子组件插入内容。

**第二种写法更加推荐，因为更加语义化方便控制。**