/**
 * Badge组件
 */
var React = require('react-native');
var {
  View,
  Text,
  StyleSheet
} = React;


/**
 * Usage:
 * var {Badge} = require('uikit');
 * <Badge type='primary'>10</Badge>
 */
var Badge = React.createClass({
  getDefaultProps() {
    return {
      type: ''
    };
  },


  render() {
    var type = this.props.type;
    var textColor = type ? 'white' : '#333';

    return (
      <View style={[
          styles.badge,
          styles[type]]}>
        <Text style={{color: textColor}}>
          {this.props.children}
        </Text>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  badge: {
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 11,
    backgroundColor: 'rgba(0,0,0,.15)'
  },

  //backgroundColor
  primary: {
    backgroundColor: '#007aff',
  },
  success: {
    backgroundColor: '#4cd964'
  },
  warning: {
    backgroundColor: '#f0ad4e'
  },
  danger: {
    backgroundColor: '#dd524d'
  },
  purple: {
    backgroundColor: '#8a6de9'
  }
});


module.exports = Badge;
