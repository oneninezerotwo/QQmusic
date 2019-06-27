import React from 'react'
import style from './Tnav.css'
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { Link} from "react-router-dom";
class Tnav extends React.Component {
    state={
        arr:[
            {
                title:'推荐',
                active:'current',
                names:'/',
                indes:0
                
            },
            {
                title:'排行榜',
                active:'',
                names:'/Tranking',
                indes:0
            },
            {
                title:'搜索',
                active:'',
                names:'/Tsearch',
                indes:0
            }
        ],
        indexsss:0
       
    }
    Tozujian(index){   
        this.indexsss=index
        // if(this.indexsss==index){
            // this.arr[index].active= 'current'
            // this.setState({
            //     arr[index].active
            // })
        // }
        // console.log(index,this.indexsss)
    }   
    componentDidMount(){
        // console.log(this.props.location.pathname)
         if(this.props.location.pathname==='/Tranking'){
            this.setState({
                indexsss:1
            })
            // console.log(this.state.indexsss)
        }else if(this.props.location.pathname==='/Tsearch'){
            this.setState({
                indexsss:2
            })
            // console.log(this.state.indexsss)
        }
      
    }
    render() {
        return (
            <nav className={style.mod_nav}>
                {
                    this.state.arr.map((item,index)=>{
                        return  <Link href="javascript:void(0);" className={style[index===this.state.indexsss?'current':'']} key={index}  to={{
                            pathname: item.names,
                            search: `?sort=${index}`,
                            hash: "#the-hash",
                            state: { fromDashboard: true },
                          }} onClick={
                              this.Tozujian.bind(this,index)
                          }>{item.title}</Link>
                    })
                }
            </nav>
           
        )
    }
   
}
//升级为超组件
Tnav =withRouter(Tnav)
export default connect()(Tnav)