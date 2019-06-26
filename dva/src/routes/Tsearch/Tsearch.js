import React from 'react'
import Theader from '../../components/Theader/Theader'
import Tnav from '../../components/Tnav/Tnav'
import TTsearch from '../../components/TTsearch/TTsearch'
import Tinstall from '../../components/Tinstall/Tinstall'
class Tsearch extends React.Component {
    render() {
        return (
           
           <div>
             <Theader />
             < Tnav/>
             <TTsearch />
             <Tinstall/>
           </div>
        )
    }
   
}
export default Tsearch