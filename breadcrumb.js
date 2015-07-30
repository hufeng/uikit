/**
 * 抽象react-native版本的面包屑
 */

var React = require('react-native');
var {
  View,
  Text,
  StyleSheet
} = React;


/**
 *  Usage:
 *  var {BreadCrumb} = require('uikit');
 *  <BreadCrumb devider={'>'} data={['test1', 'test2'], style={{}}}/>
 */
var BreadCrumb = React.createClass({
  getDefaultProps() {
    return {
      data: [],
      devider: '/'
    };
  },


  render() {
    var data = this.props.data;
    var last = data.length && data.pop();
    var devider = this.props.devider;

    return (
      <View
        style={styles.container}
        >
        {data.map((v, k) => {
          return (
            <Text
              key={k}
              style={styles.text}
              >
              {v + ' ' + devider + ' '}
            </Text>
          );
        })}
        {last ? <Text style={[styles.text, styles.last]}>{last}</Text> : null}
      </View>
    );
  }
});


/**
 * style
 */
var styles = StyleSheet.create({
  container: {
    height: 30,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    color: 'gray'
  },

  last: {
    color: 'blue'
  }
});


module.exports = BreadCrumb;
