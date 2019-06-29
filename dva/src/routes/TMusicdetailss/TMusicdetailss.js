import React from 'react'
import { withRouter } from 'dva/router';
import {connect} from 'dva'
import TMusicdetails from '../../components/TMusicdetails/TMusicdetails'
class TMusicdetailss extends React.Component{
        render(){
            return(
                <div>
                    <TMusicdetails />
                </div>
            )
        }
}

TMusicdetailss =withRouter(TMusicdetailss)
export default connect((state)=>{
        return state
})(TMusicdetailss)
