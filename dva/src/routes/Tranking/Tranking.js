import React from 'react'
import Theader from '../../components/Theader/Theader'
import Tnav from '../../components/Tnav/Tnav'
import style from './Tranking.css'
class Tranking extends React.Component {
    render() {
        return (
           
           <div>
              < Theader/>
              <Tnav/>
             <div className={style.mod_topic} style="">
             <ul>
                 <li className={style.topic_item}>
                 <div className="topic_main">
                 <a href="javascript:;" className="topic_media">
                 <img src="https://y.gtimg.cn/music/photo_new/T003R300x300M000004XK7lQ1EJYpt.jpg?max_age=2592000" />
                 <span className="listen_count">
                 <i className="icon icon_listen"></i>
                 1940.0万</span>
                 </a>
                 <div className="topic_info">
                 <div className="topic_cont">
                 <h3 className="topic_tit">巅峰榜·流行指数</h3>
                 <p>1<span className="text_name">Lil Mama</span>- Jain</p>
                 <p>2<span className="text_name">一个人记得</span>- 尤长靖</p>
                 <p>3<span className="text_name">Señorita</span>- Shawn Mendes/Camila Cabello</p>
                 </div><i className="topic_arrow"></i>
                 </div></div>
                 </li>
                </ul>
                
                 
                 </div>
           </div>
        )
    }
   
}
export default Tranking