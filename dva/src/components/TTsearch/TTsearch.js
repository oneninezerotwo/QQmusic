import React from 'react'
import {connect} from 'react-redux'
import style from './TTsearch.css'
import axios from 'axios'
class Tsearch extends React.Component{
    state={
        Show:false,
        inputtext:''
    }
        render(){
            return(
                <div className="page__bd">
        {/* <!--<a href="javascript:;" className="weui-btn weui-btn_primary">点击展现searchBar</a>--> */}
        <div className={
            this.state.Show?'weui-search-bar weui-search-bar_focusing':'weui-search-bar'
        } id="searchBar">
            <form className="weui-search-bar__form"  onClick={
                    this.Deleshow.bind(this)
                }>
                <div className="weui-search-bar__box">
                    <i className="weui-icon-search"></i>
                    <input type="search" value={this.inputtext} className="weui-search-bar__input" id="searchInput" placeholder="搜索歌曲,歌单,专辑" required=""  ref="input" />
                    <a href="javascript:" className="weui-icon-clear" id="searchClear"></a>
                </div>
                <label className="weui-search-bar__label" id="searchText">
                    <i className="weui-icon-search"></i>
                    <span>搜索歌曲,歌单,专辑</span>
                </label>
            </form>
            <a href="javascript:" className="weui-search-bar__cancel-btn" id="searchCancel" onClick={
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
            <a href="javascript:;" className={style.tag_hot}>YAMAHA回归</a>
            <a href="javascript:;" className="tag_s">READ ALL ABOUT IT </a>
            <a href="javascript:;" className="tag_s">薛之谦 </a>
            <a href="javascript:;" className="tag_s">RIGHT ON TIME </a>
            <a href="javascript:;" className="tag_s">放个大招给你看 </a>
            <a href="javascript:;" className="tag_s">缘分一道桥 </a>
            <a href="javascript:;" className="tag_s">你笑起来真好看 </a>
            <a href="javascript:;" className="tag_s">夜空中最亮的星 </a>
            <a href="javascript:;" className="tag_s">玩具总动员4 </a>
            </div>
            </div>
        </div>
        {/*  */}
        <div className={style.mod_search_content}>
        <ul className="search_content">
            <li>
            <span className="media avatar">
            <img src="https://y.gtimg.cn/music/photo_new/T001R68x68M000002J4UUk29y8BY.jpg?max_age=2592000" alt="薛之谦" />
            </span>
            <h6 className="main_tit">薛之谦</h6>
            <p className="sub_tit">
            <span>单曲：289</span>
            <span>专辑：16</span></p>
            </li>
            <li><i className="icon"></i><h6 className="main_tit">木偶人</h6><p className="sub_tit">薛之谦</p></li>
            <li><i className="icon"></i><h6 className="main_tit">丑八怪</h6><p className="sub_tit">薛之谦</p></li>
            <li><i className="icon"></i><h6 className="main_tit">你还要我怎样</h6><p className="sub_tit">薛之谦</p></li>
            <li><i className="icon"></i><h6 className="main_tit">演员</h6><p className="sub_tit">薛之谦</p></li>
            </ul>
            <p className="load_complete">点击获取更多搜索结果</p>
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
            // console.log(11)
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

       async componentDidMount(){
            // console.log(this)
            let {data} = await axios.get('https://www.easy-mock.com/mock/5d10414b9c345b6186b613b8/example/api#!method=get')
            console.log(data)
        }

}



export default  connect((state)=>{
    return state
})(Tsearch)





