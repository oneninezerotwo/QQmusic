import {createStore} from 'redux'//引入
import reducer from './reducer'//引入外部的reducer.js
export default createStore(reducer)   //到处一个store