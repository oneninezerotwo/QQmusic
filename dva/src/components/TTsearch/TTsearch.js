import React from 'react'
import {connect} from 'react-redux'
import style from './TTsearch.css'
class Tsearch extends React.Component{
    state={
        Show:false,
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
                    <input type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索歌曲,歌单,专辑" required=""  ref="input" />
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
        {/* <div className="weui-cells searchbar-result" id="searchResult">
            <div className="weui-cell weui-cell_access">
                <div className="weui-cell__bd weui-cell_primary">
                    <p>实时搜索文本</p>
                </div>
            </div>
            <div className="weui-cell weui-cell_access">
                <div className="weui-cell__bd weui-cell_primary">
                    <p>实时搜索文本</p>
                </div>
            </div>
            <div className="weui-cell weui-cell_access">
                <div className="weui-cell__bd weui-cell_primary">
                    <p>实时搜索文本</p>
                </div>
            </div>
            <div className="weui-cell weui-cell_access">
                <div className="weui-cell__bd weui-cell_primary">
                    <p>实时搜索文本</p>
                </div>
            </div>
        </div> */}
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

        componentDidMount(){
            console.log(this)
        }

}



export default  connect((state)=>{
    return state
})(Tsearch)





