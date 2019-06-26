import React from 'react';
import { connect } from 'dva';
import style from './Tstation.css';

class Tstation extends React.Component {
    render(){
      return (
        <div className={style.mod_twocol_list}>
        <h2 className="list_title">电台</h2>
        <ul className="list_container">
        <li>
            <a className="list_main" href="javascript:;">
            <div className={style.list_media}>
            <img className="video_list__media_img" src="https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000" alt="热歌" />
            <span className="icon icon_play">
            </span>
            </div>
            <div className={style.list_info}>
            <h3 className="list_tit tit_two_row">热歌</h3>
            </div>
            </a></li>
            <li><a className={style.list_main} href="javascript:;">
            <div className={style.list_media}>
            <img className="video_list__media_img" src="https://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg?max_age=2592000" alt="一人一首招牌歌" />
            <span className="icon icon_play">
        </span>
        </div>
        <div className={style.list_info}>
        <h3 className="list_tit tit_two_row">一人一首招牌歌</h3>
        </div>
        </a>
        </li>
        </ul>
        </div>
      )
    }
    
  
}

// IndexPage.propTypes = {
// };

export default connect()(Tstation);