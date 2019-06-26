import React from 'react'
import Theader from '../../components/Theader/Theader'
import Tnav from '../../components/Tnav/Tnav'
import Tseniority from '../../components/Tseniority/Tseniority'
import Tinstall from '../../components/Tinstall/Tinstall'
class Tranking extends React.Component {
    render() {
        return (
           
           <div>
              < Theader/>
                <Tnav/>
                <Tseniority/>
                <Tinstall />
           </div>
        )
    }
   
}
export default Tranking