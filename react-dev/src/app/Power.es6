import {BaseComponent} from '../../libs/BaseComponent.class.es6';
import {Actions} from './Actions.es6';
import {Store} from './Store.es6';

import {Router, Route, hashHistory,Link} from 'react-router';

export class Power extends BaseComponent {
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
                    <div>权限管理</div>
                </div>;
    }
}