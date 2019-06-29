import React from 'react'
import { withRouter } from 'dva/router';
import {connect} from 'dva'
class TThaeder extends React.Component{
        render(){
            return(
                <div></div>
            )
        }
}

TThaeder =withRouter(TThaeder)
export default connect((state)=>{
        return state
})(TThaeder)
