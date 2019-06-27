import React from 'react'
import dva from 'dva';
import './index.css';
import 'antd/dist/antd.css';
import 'weui'
import 'react-weui/build/packages/react-weui.css'
// 1. Initialize
// import {getCookie,setCookie,delCookie} from './tcookie'
// import {
//     set,get,remove
// } from './storage'
const app = dva();

// React.prototype.storage = {
//     set,get,remove
// }
// 2. Plugins
// app.use({});
// console.log(React)
// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
