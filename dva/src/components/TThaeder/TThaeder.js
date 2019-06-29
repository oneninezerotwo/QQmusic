import React from 'react'
import { withRouter } from 'dva/router';
import {connect} from 'dva'
import styles from './TThaeder.css'
class TThaeder extends React.Component{
        render(){
            return(
                <section className={styles.top_bar}>
                <div className="top_bar__box">
                <span className="top_bar__media top_bar__media--square">
                <img src="https://y.gtimg.cn/music/common/upload/t_playsong_ad/1207759.png?max_age=2592000" className="top_bar__media_img" alt="" />
                </span>
                <div className="top_bar__bd">
                <h2 className="top_bar__tit">更多QQ音乐排行榜</h2>
               
                </div>
                <a className="top_bar__btn" data-operate-btn="1">戳我查看</a>
                </div></section>
            )
        }
}

TThaeder =withRouter(TThaeder)
export default connect((state)=>{
        return state
})(TThaeder)
