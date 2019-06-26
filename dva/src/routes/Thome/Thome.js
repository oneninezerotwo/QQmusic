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

  
}

// IndexPage.propTypes = {
// };

export default connect()(Thome);