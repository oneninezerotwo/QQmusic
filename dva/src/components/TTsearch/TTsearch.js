import React from 'react'
import {connect} from 'react-redux'
import style from './TTsearch.css'
import apis from '../../store/api.json'
import axios from 'axios'
class Tsearch extends React.Component{
    state={
        Show:false,
        inputtext:'',
        arr:apis.data.arr,
        isok:false
    }
        render(){
            return(
                <div className="page__bd">
        {/* <!--<a href="javascript:void(0)" className="weui-btn weui-btn_primary">点击展现searchBar</a>--> */}
        <div className={
            this.state.Show?'weui-search-bar weui-search-bar_focusing':'weui-search-bar'
        } id="searchBar">
            <form className="weui-search-bar__form"  onClick={
                    this.Deleshow.bind(this)
                }>
                <div className="weui-search-bar__box">
                    <i className="weui-icon-search"></i>
                    <input type="search" value={this.inputtext} onChange={
                        this.getInputValue.bind(this)
                    } className="weui-search-bar__input" id="searchInput" placeholder="搜索歌曲,歌单,专辑" required=""  ref="input" />
                    <a href="javascript:" className="weui-icon-clear" id="searchClear" onClick={
                        this.Deleinputtet.bind(this)
                    }></a>
                </div>
                <label className="weui-search-bar__label" id="searchText">
                    <i className="weui-icon-search"></i>
                    <span>搜索歌曲,歌单,专辑</span>
                </label>
            </form>
            <a href="javascript:void(0)" className="weui-search-bar__cancel-btn" id="searchCancel" onClick={
                this.Addshow.bind(this)
            }>取消</a>
        </div>
       {/*  */}
        <div style={{
            display:this.state.Show?'none':'block'
        }}>
        <div id="js_hot_keys" className={style.mod_search_result}>
        <h3 className="result_tit">热门搜索</h3>
        <div className="result_tags">
            <a href="javascript:void(0)" className={style.tag_hot}>YAMAHA回归</a>
            <a href="javascript:void(0)" className="tag_s">READ ALL ABOUT IT </a>
            <a href="javascript:void(0)" className="tag_s">薛之谦 </a>
            <a href="javascript:void(0)" className="tag_s">RIGHT ON TIME </a>
            <a href="javascript:void(0)" className="tag_s">放个大招给你看 </a>
            <a href="javascript:void(0)" className="tag_s">缘分一道桥 </a>
            <a href="javascript:void(0)" className="tag_s">你笑起来真好看 </a>
            <a href="javascript:void(0)" className="tag_s">夜空中最亮的星 </a>
            <a href="javascript:void(0)" className="tag_s">玩具总动员4 </a>
            </div>
            </div>
        </div>
        {/*  */}
       <div  style={{
            display:this.state.Show&&this.state.isok?'block':'none'
        }}>
       <div className={style.mod_search_content}>
           {
                this.state.arr.filter((item)=>{
                        if(item.keyword.indexOf(this.state.inputtext)>-1){
                            return item
                        }
                }).map((item,index)=>{
                    return  <ul className="search_content" key={index}> <li>
                    <span className="media avatar">
                    <img src="https://y.gtimg.cn/music/photo_new/T001R68x68M000002J4UUk29y8BY.jpg?max_age=2592000" alt="薛之谦" />
                    </span>
                    <h6 className="main_tit">{item.zhida.singername}</h6>
                    <p className="sub_tit">
                    <span>单曲：{
                        item.zhida.songnum
                    }</span>
                    <span>专辑：{item.zhida.albumnum}</span></p>
                    </li>
                    {
                        item.song.list.map((ites,inde)=>{
                            return <li key={inde}><i className="icon"></i><h6 className="main_tit">{ites.albumname}</h6><p className="sub_tit">{item.zhida.singername}</p></li>
                        })
                    }
                    </ul>
                })
           }
            
            <p className="load_complete">点击获取更多搜索结果</p>
            </div>
       </div>
    </div>

        
            )
        }
        // this.state.Show
        Deleshow(){
            //点进搜索立马就聚焦
            this.refs.input.focus()
            this.setState({
                Show:true
            })
            this.props.dispatch({
                type:"Deleshow",
                Shows:true
            })
        }
        Addshow(){
            this.setState({
                Show:false
            })
            this.props.dispatch({
                type:"Addshow",
                Shows:false
            })
        }
        getInputValue(e){
            //把输入的至付给里面的数据inputtext
            //然后把inputtext付给input的value
                let inputtext = e.target.value
                this.setState({
                    inputtext,
                })
                
                if(inputtext.length>0){
                    this.setState({
                        isok:true
                    })
                }else{
                    this.setState({
                        isok:false
                    })
                }
                //  console.log((inputtext.length)
                // if(this.state.inputtext.length==0){
                //     this.setState({
                //         isok:false
                //     })
                // }
        }
        Deleinputtet(){
            this.refs.input.value = ''
            this.setState({
                inputtext:'',
                isok:false
            })
            // console.log(1)
            // console.log(innts)
        }
       async componentDidMount(){
            // console.log(this)
            let {data} = await axios.get('https://www.easy-mock.com/mock/5d10414b9c345b6186b613b8/example/api#!method=get')
            console.log(data)
            console.log(this.state.arr)
        }

}



export default  connect((state)=>{
    return state
})(Tsearch)





