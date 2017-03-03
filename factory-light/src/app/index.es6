import {BaseComponent} from '../../libs/BaseComponent.class.es6';
import {Actions} from './Actions.es6';
import {Store} from './Store.es6';
import {Company} from './Company.es6';
import {AddCompany} from './AddCompany.es6';
import {Area} from './Area.es6';
import {AddArea} from './AddArea.es6';
import {Layout} from './Layout.es6';
import {Controller} from './Controller.es6';
import {Power} from './Power.es6';
import {AddPower} from './AddPower.es6';
import {User} from './User.es6';
import {AddUser} from './AddUser.es6';
import ReactDOM from 'react-dom';
var {Router, Route, hashHistory,IndexRedirect} = ReactRouter;


// 创建React组件
class App extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.listenStore(Store); // 监听Store
    }
    render() {
        return <div className="app">{this.props.children}</div>;
    }
}


// 路由方式
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
                <Route path="company" component={Company} />
                <Route path="addcompany" component={AddCompany} />
                <Route path="area" component={Area} />
                <Route path="addarea" component={AddArea} />
                <Route path="layout" component={Layout} />
                <Route path="controller" component={Controller} />
                <Route path="power" component={Power} />
                <Route path="addpower" component={AddPower} />
                <Route path="user" component={User} />
                <Route path="adduser" component={AddUser} />
        </Route>
    </Router>
), document.getElementById('ROOT'));
