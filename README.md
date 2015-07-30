# uikit
react-native's uikit

### Button

```js
var {Button} = require('uikit');

<Button
  onPress={() => console.log('pressed.');}
  style={{marginTop: 10}}
  btnStyle={{color: 'white'}}>
  Login
</Button>
```

![button](https://raw.githubusercontent.com/hufeng/uikit/master/images/button.png)

### BreadCrumb

```js
var {BreadCrumb} = require('uikit');

<BreadCrumb devider={'>'} data={['test1', 'test2'], style={{}}}/>
```


![breadcrumb](https://raw.githubusercontent.com/hufeng/uikit/master/images/breadcrumb.png)
