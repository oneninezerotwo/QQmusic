import React from 'react'
import { withRouter } from 'dva/router';
import {connect} from 'dva'
class Tbofang extends React.Component{
        render(){
            return(
                <div></div>
            )
        }
}

Tbofang =withRouter(Tbofang)
export default connect((state)=>{
        return state
})(Tbofang)
