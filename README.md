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


### Badge
```js
var {Badge} = require('uikit');
var Devider = (
  <View style={{backgroundColor:'#FFF', width: 5}}/>
);

<View style={{
   flexDirection: 'row'}}>
  <Badge type={'primary'}>1</Badge>
  <Divider/>
  <Badge type={'success'}>10</Badge>
  <Divider/>
  <Badge type={'warning'}>99+</Badge>
  <Divider/>
  <Badge type={'danger'}>100</Badge>
  <Divider/>
  <Badge type={'purple'}>999+</Badge>
</View>
```
![Badge](https://raw.githubusercontent.com/hufeng/uikit/master/images/badge.png)
