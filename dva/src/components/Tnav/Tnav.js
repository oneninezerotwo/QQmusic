import React from 'react'
import style from './Tnav.css'
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
    render() {
        return (
            <nav className={style.mod_nav}>
                {
                    this.state.arr.map((item,index)=>{
                        return  <Link href="javascript:void(0);" className={style[item.active]} key={index} onClick={
                            this.Tozujian.bind(this,index)
                        } to={{
                            pathname: item.names,
                            search: `?sort=${index}`,
                            hash: "#the-hash",
                            state: { fromDashboard: true },
                          }}>{item.title}</Link>
                    })
                }
            </nav>
           
        )
    }
   
}
export default Tnav