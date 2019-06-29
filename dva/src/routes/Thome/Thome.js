import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';
import Theader from '../../components/Theader/Theader'
import Tnav from '../../components/Tnav/Tnav'
import Tcarousel from '../../components/Tcarousel/Tcarousel'
import Thot from '../../components/Thot/Thot'
import Tstation from '../../components/Tstation/Tstation'
import Tshade from '../../components/Tshade/Tshade'
import Tfooter from '../../components/Tfooter/Tfooter'
import Tinstall from '../../components/Tinstall/Tinstall'
class Thome extends React.Component {
    render(){
      return (
        <div>
         <Theader />
         <Tnav />
         <Tcarousel />
         <Tstation />
         <Thot />
         <Tshade />
         <Tfooter />
         <Tinstall />
        </div>
      )
    }
    componentDidMount(){

      // // window.sessionStorage.setItem(“key”, “value”);

      // // window.sessionStorage.getItem(“key”);
      //   if()
      // https://v1.itooi.cn/tencent/topList?id=26&pageSize=100&page=0&format=1
    }
  
}

// IndexPage.propTypes = {
// };

export default connect()(Thome);