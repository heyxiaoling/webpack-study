import {BaseComponent} from '../../libs/BaseComponent.class.es6';
import {Actions} from './Actions.es6';
import {Store} from './Store.es6';

import {Router, Route, hashHistory,Link} from 'react-router';

export class AddArea extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
          
        };
        this.listenStore(Store); // 监听Store
    }
    render() {
        return  <div>
                    <div>添加区域</div>
                </div>;
    }
}