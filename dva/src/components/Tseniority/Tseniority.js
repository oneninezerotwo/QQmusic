import React from 'react'
import style from './Tseniority.css'
import { withRouter } from 'dva/router';
import { connect } from 'dva';
import axios from 'axios'
class Tseniority extends React.Component {
    state={
       arr1:[]
    }
  componentDidMount(){
        this.addpage()
        // this.bianwang()
        // console.log(this.props)
        // console.log(this.state.arr1)
    }
//     bianwang(num){
//         let x=num/10000;
//        let y=x+"万";
//        console.log(y)
//       return y
            
//  }
    render() {
        return (
             <div className={style.mod_topic}>
             <ul>
                 {
                  
                     this.state.arr1.map((item,index)=>{
                        return <li className={style.topic_item} key={index} onClick={
                            this.TOxianqing.bind(this,item.id)
                        }>
                        <div className="topic_main">
                        <a href="javascript:;" className="topic_media">
                        <img src={item.picUrl} />
                        <span className="listen_count">
                        <i className="icon icon_listen"></i>
                        {
                        //    this.bianwang(this,item.listenCount)
                              (item.listenCount/10000).toFixed(1)+'万'
                        }
                        </span>
                        </a>
                        <div className="topic_info">
                        <div className="topic_cont">
                        <h3 className="topic_tit">{item.topTitle}</h3>
                        {
                            item.songList.map((ii,inde)=>{
                                return <p key={inde}>{inde+1}<span className="text_name">{ii.singername}</span>- {ii.songname}</p>
                            })
                        }
                        </div><i className="topic_arrow"></i>
                        </div></div>
                        </li>
                     })
                 }
                </ul>
                
                 
                 </div>
        )
    }
    async addpage(){
        let {data} = await axios.get('https://www.easy-mock.com/mock/5d10414b9c345b6186b613b8/example/api#!method=get')
    
        this.setState({
            arr1:[...data.topList]
        })
        //  console.log(this.state.arr1)
        
    }
   TOxianqing(id){
       console.log(id)
    this.props.history.push({
        pathname:`/Tbillboard?id=${id}`
    })
   }
   
}

    

Tseniority = withRouter(Tseniority)
export default connect((state) => {
    return state
})(Tseniority)