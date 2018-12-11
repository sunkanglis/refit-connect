## refit-connect

	使用之前建议先学习使用react-redux，只是简化了connect的使用方法，其余书写方式与react-redux一样

#### react-redux  中 connect 基本使用方式
> connect(mapStateToProps,mapDispatchToProps)(UiComponent)

这种写法需要自己配置 mapStateToProps，mapDispatchToProps 有过多的冗余

#### refit-connect 中connect使用方式，在home模块为例

首先，在store文件夹下home模块中的reducer文件 中配置actioncreators

```
	import connect from 'refit-connect';
	// 给connect 添加可配置的actionCreators

	import actionCreators from './actionCreators'
	connect.addActionCreators({
		home: actionCreators
	})
```

接着，使用方式

```
import { Provider } from ' refit-connect '
```

> Provider的使用方式与react-redux中的使用方式一样，在src目录下的index.js文件下

```	
ReactDOM.render(
	<Provider store ={ store}>
		<App />
	</Provider>
, document.getElementById('root'));
```

然后，connect使用方式，如：

```
connect(Uicomponent,[{name:'home',state:['swiperList']}])
```

> 第一个参数是你要包裹的组件，第二个参数是先要获取的reducer模块的内容
> name : 模块名字     state : 先要获取state的名字【不写的话，name模块中的state都返回】


> 属性读取：this.props.home.swiperList

> action使用:this.props.home_actions.getSwiperList()
