import React from 'react'
import { withRouter } from 'dva/router';
import {connect} from 'dva'

import TThaeder from '../../components/TThaeder/TThaeder'
import Tplayer from '../../components/Tplayer/Tplayer'
import Tplayerlist from '../../components/Tplayerlist/Tplayerlist'
class Tbillboard extends React.Component{
        render(){
            return(
                <div>
                    <TThaeder />
                    <Tplayer />
                    <Tplayerlist />
                </div>
            )
        }
}

Tbillboard =withRouter(Tbillboard)
export default connect((state)=>{
        return state
})(Tbillboard)
