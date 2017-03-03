var React = require('react');
var ReactDOM = require('react-dom');
import '../static/css/common.less';

class MyComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('content'));
