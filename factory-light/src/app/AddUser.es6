import {BaseComponent} from '../../libs/BaseComponent.class.es6';
import {Actions} from './Actions.es6';
import {Store} from './Store.es6';

var {Router, Route, hashHistory,Link} = ReactRouter;

export class AddUser extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
          
        };
        this.listenStore(Store); // 监听Store
    }
    componentDidMount() {
     
    }
    render() {
        return  <div>
                    <div>添加用户</div>
                </div>;
    }
}