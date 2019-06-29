import React from 'react'
import { withRouter } from 'dva/router';
import {connect} from 'dva'
import styles from './Tplayer.css'
class Tplayer extends React.Component{
        render(){
            return(
                <div className={styles.player}>
                    <img src="https://y.gtimg.cn/music/photo_new/T003R300x300M000000ODqxJ3TdVp4.jpg?max_age=2592000" />
                       <h2>流行指数榜</h2>
                        <h3>流行指数榜 第179天</h3>
                        <p>更新时间：2019-06-28</p>
                       
                            <a>
                            <span>

                            </span>
                            </a>
                        
                </div>
            )
        }
}

Tplayer =withRouter(Tplayer)
export default connect((state)=>{
        return state
})(Tplayer)
