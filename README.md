## refit-connect

#### react-redux  中 connect 基本使用方式
> connect(mapStateToProps,mapDispatchToProps)(UiComponent)

这种写法需要自己配置 mapStateToProps，mapDispatchToProps 有过多的冗余

#### refit-connect 中connect使用方式
首先，要在reducer文件 中配置actioncreators

```
	import connect from 'refit-connect';
	// 给connect 添加可配置的actionCreators
	import actionCreators from './actionCreators'
	connect.addActionCreators({
   		 [reducerName]: actionCreators
	})
```

接着，使用方式

```
import { Provider } from ' refit-connect '
```

> Provider的使用方式与react-redux中的使用方式一样

然后，connect使用方式，如：

```
connect(Uicomponent,[{name:'home',state:['swiperList']}])
```

> 第一个参数是你要包裹的组件，第二个参数是先要获取的reducer模块的内容
> name : 模块名字     state : 先要获取state的名字【不写的话，name模块中的state都返回】
