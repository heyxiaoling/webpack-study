import Reflux from 'reflux';
import {Actions} from './Actions.es6';

export const Store = Reflux.createStore({
    listenables: [Actions],
    onLogin() {

    }
})