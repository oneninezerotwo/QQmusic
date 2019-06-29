import React from 'react'
import { withRouter } from 'dva/router';
import { connect } from 'dva'
import axios from 'axios'
import styles from './Tplayerlist.css'
class Tplayerlist extends React.Component {
    state={
        arr:[],
        Arrlength:0
    }
    componentDidMount(){
        // console.log(this.props.match.params.id.split("=")[1])
       
        // console.log(data)
        // console.log(IDs)
            this.Addarr()
    }
   
    render() {
        return (
            <div className={styles.box}>
                <div className="count_box">
                    <div className="count_box__txt">排行榜<span className="count_box__num">共{this.state.Arrlength}首</span>
                    </div>
                </div>
                <ul className="mod_song_list mod_song_list--rank">
                   {
                    //    console.log(this.state.arr)
                       this.state.arr.map((item,index)=>{
                        return  <li className="song_list__item" key={index}>
                        <div className={styles.song_list__index}>
                            <span className={styles.song_list__index_num}>{index+1}</span>
                            <span className={styles.song_list__index_change}>
                            <img src={require('../../img/shangshen.png')} />
                              {item.time}%
             </span>
             </div>
                    <div className={styles.song_list__bd}>
                        <h3 className="song_list__tit">
                            <span className="song_list__txt">{
                                item.name
                            }</span>
                        </h3><p className="song_list__desc">{
                            item.singer
                        }</p>
                    </div><a href="javascript:;" className="song_list__ctrl">
                    <img src={require('../../img/xiazaia.png')} />
                </a></li>
           
                       })
                   }
                      </ul>
                      </div >
            )
    }
    async Addarr(){
        let IDs = this.props.match.params.id.split("=")[1]
        let {data} = await axios.get(`https://v1.itooi.cn/tencent/topList?id=${IDs}&pageSize=100&page=0&format=1`)
        this.setState({
            arr:[...data.data],
            Arrlength:data.data.length
        })
        console.log(this.state.arr)
    }
    
   
}

Tplayerlist = withRouter(Tplayerlist)
export default connect((state) => {
    return state
})(Tplayerlist)
