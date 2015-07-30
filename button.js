/**
 * react-native缺乏公共的button，所以封装一个公共
 */
var React = require('react-native');
var {
  TouchableHighlight,
  Text,
  StyleSheet
} = React;


/**
 * yeah, just do nothing.
 */
var noop = () => {};


/**
 * Button
 *
 * Usage
 * var {Button} = require('uikit');
 *
 *  <Button
 *    onPress={() => console.log('pressed.')}
 *    style={{marginTop: 10}}
 *    btnStyle={{fontSize:16}}>Login</Button>
 */
var Button = React.createClass({

  getDefaultProps() {
    return {
      onPress: noop
    }
  },


  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={[styles.btn, this.props.style]}>
        <Text style={styles.btnText, this.props.btnStyle}>
          {this.props.children}
        </Text>
      </TouchableHighlight>
    );
  }
});


/**
 * style
 */
var styles = StyleSheet.create({
  btn: {
    backgroundColor: 'blue',
    height:40,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});


module.exports = Button;
