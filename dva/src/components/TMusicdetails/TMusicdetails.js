import React from 'react'
import { withRouter } from 'dva/router';
import { connect } from 'dva'
import styles from './TMusicdetails.css'
class TMusicdetails extends React.Component {
    render() {
        return (
         
                <section className={styles.js_main}>
                    <div className={styles.main__bd}>

                        <div className={styles.song_info}>
                        {/*  */}
                            <div className={styles.song_info__hd}>
                                <h1 className="song_name"><span className="song_name__text js_song_name">木偶人</span></h1>
                                <h2 className="singer_name js_singer_name js_singer">薛之谦</h2>
                            </div>
            {/*  */}
                            <div className={styles.song_info__bd} data-tj="switch">
                                <div className={
                                    
                                    styles.album_cover+" "+styles.fade_out
                                }>
                                    <img className="album_cover__img js_album_cover" src="//y.gtimg.cn/music/photo_new/T002R300x300M000000DMpJ73yeITP.jpg?max_age=2592000" />
                    </div>

                                    <div className={
                                        styles.lyric+" "+styles.fade_in
                                    }>
                                    {/*  */}
                                        <div className={
                                           styles.lyric__bd
                                        } id={
                                            styles.lyric_txt
                                        } style={{
                                            overflow: 'hidden'
                                        }}>
                                            <div className={
                                                styles.lyric__scroll
                                                
                                            } style={{
                                                transition:' -webkit-transform 0.3s ease-out 0s',
                                                transformOrigin: '0px 0px',
                                                transform:' translate3d(0px, -500px, 0px)'
                                            }}>
                                            <p className="" id="line_0">木偶人 - 薛之谦</p>
                                            <p className={styles.lyric__para} id="line_1">词：薛之谦</p>
                                            <p className={styles.lyric__para} id="line_2">曲：薛之谦</p>
                                            <p className={styles.lyric__para} id="line_3">听专情的古人</p>
                                            <p className={styles.lyric__para} id="line_4">把美言留给最爱的人</p>
                                            <p className={styles.lyric__para} id="line_5">看裹小脚的人</p>
                                            <p className={styles.lyric__para} id="line_6">为诗人的恶习在隐忍</p>
                                            <p className={styles.lyric__para} id="line_7">你没读懂课本</p>
                                            <p className={styles.lyric__para} id="line_8">可世人硬要捧</p>
                                            <p className={styles.lyric__para} id="line_9">看感情里的人</p>
                                            <p className={styles.lyric__para} id="line_10">用肉眼分出三六九等</p>
                                            <p className={styles.lyric__para} id="line_11">再配合些掌声</p>
                                            <p className={styles.lyric__para} id="line_12">看上去全都忠心耿耿</p>
                                            <p className={styles.lyric__para} id="line_13">谁定的烂台本</p>
                                            <p className={styles.lyric__para} id="line_14">可当代都在跟气氛已麻木不仁</p>
                                            <p className={styles.lyric__para} id="line_15">所以 当我们都变成木偶人</p>
                                            <p className={styles.lyric__para} id="line_16">你何苦再做一个痴情人表忠贞</p>
                                            <p className={styles.lyric__para} id="line_17">文字叙述工整 配上廉价伤痕</p>
                                            <p className={styles.lyric__para} id="line_18">你还会哭多感人</p>
                                            <p className={styles.lyric__para} id="line_19">让我们都变成木偶人</p>
                                            <p className={styles.lyric__para} id="line_20">再缝几针爱几次后就不会疼</p>
                                            <p className={styles.lyric__para} id="line_21">去除惦记功能</p>
                                            <p className={styles.lyric__para} id="line_22">再遇到你时像个陌生人</p>
                                            <p className={styles.lyric__para} id="line_23">以前爱过的人</p>
                                            <p className={styles.lyric__para} id="line_24">偷偷的藏起红绿两本</p>
                                            <p className={styles.lyric__para} id="line_25">现在相爱的人</p>
                                            <p className={styles.lyric__para} id="line_26">能耍的方式五花八门</p>
                                            <p className={styles.lyric__para} id="line_27">要一式要两份</p>
                                            <p className={styles.lyric__para} id="line_28">把热吻当罪证</p>
                                            <p className={styles.lyric__para} id="line_29">让动了情的人</p>
                                            <p className={styles.lyric__para} id="line_30">还要去分辨好人坏人</p>
                                            <p className={styles.lyric__para} id="line_31">别在雨里对阵</p>
                                            <p className={styles.lyric__para} id="line_32">用可乐拉环陪你的人</p>
                                            <p className={styles.lyric__para} id="line_33">已变成俗剧本 你何必太当真</p>
                                            <p className={styles.lyric__para} id="line_34">不要提那辛路历程</p>
                                            <p className={styles.lyric__para} id="line_35">所以 当我们都变成木偶人</p>
                                            <p className={styles.lyric__para} id="line_36">你何苦再做一个痴情人表忠贞</p>
                                            <p className={styles.lyric__para} id="line_37">文字叙述工整 重复廉价伤痕</p>
                                            <p className={styles.lyric__para} id="line_38">你还会哭多感人</p>
                                            <p className={styles.lyric__para} id="line_39">让我们都变成木偶人</p>
                                            <p className={styles.lyric__para} id="line_40">再缝几针爱几次后就不会疼</p>
                                            <p className={styles.lyric__para} id="line_41">去除惦记功能</p>
                                            <p className={styles.lyric__para} id="line_42">再遇到你时像个陌生人</p>
                                            <p className={styles.lyric__para} id="line_43">没有人能变成木偶人</p>
                                            <p className={styles.lyric__para} id="line_44">无非是在感情里的逃避过程</p>
                                            <p className={styles.lyric__para} id="line_45">我们盛气凌人 掩饰无权过问</p>
                                            <p className={styles.lyric__para} id="line_46">遇见谁要拆几针</p>
                                            <p className={styles.lyric__para} id="line_47">当我们都羡慕木偶人</p>
                                            <p className={styles.lyric__para} id="line_48">学会他在场面上的玩弄过程</p>
                                            <p className={styles.lyric__para} id="line_49">美化措辞追捧</p>
                                            <p className={styles.lyric__para} id="line_50">似拟人的掌声是我爱人</p>
                                            <p className={styles.lyric__para} id="line_51">防备厚厚一本</p>
                                            <p className={styles.lyric__para} id="line_52">是我献出自己的后遗症</p>
                                            <p className={styles.lyric__para} id="line_53">制作人：陈迪@TalentUnion</p>
                                            <p className={styles.lyric__para} id="line_54">编曲：陈迪</p>
                                            <p className={styles.lyric__para} id="line_55">吉他：劳国贤</p>
                                            <p className={styles.lyric__para} id="line_56">贝斯：崔文正</p>
                                            <p className={styles.lyric__para} id="line_57">鼓：王鹏</p>
                                            <p className={styles.lyric__para} id="line_58">弦乐团：中国爱乐乐团</p>
                                            <p className={styles.lyric__para} id="line_59">人声监制：杨祎</p>
                                            <p className={styles.lyric__para} id="line_60">缩混：杨祎@RaySound Studio</p>
                                            <p className={styles.lyric__para} id="line_61">母带：鲍锐@录顶技</p></div>
                                        </div>
                                        <a className="lyric__more js_lrc_more js_openmusic js_tj" data-tj="lyric_more_$qm" data-cid="10033061" data-adtag="dqygc"  href="javascript:;">查看完整歌词</a>
                                    </div>
                                </div>
                            </div>
{/*  */}
                            <div className={styles.opt}>

                                <a className="opt__item js_mv js_tj" data-tj="with_mv_$qm" data-vid="h0031bjey3f"  href="javascript:;">MV</a>


                            <a className="opt__item js_play js_tj" data-tj="play_click" href="javascript:;">
                            <img src={
                                 require('../../img/sangjianxin.png')
                            } className={
                                styles.bbbg
                            } style={{
                                display:'none'
                            }}/>
                            <img src={
                                 require('../../img/tinzhi.png')
                            }  />
                            </a>


                        <a className="opt__item js_like js_openmusic js_tj" data-tj="favor_$qm" data-cid="10033063" data-adtag="dqysc" href="javascript:;" data-liked="0">
                        <img src={
                            require('../../img/licks.png')
                        } />
                        </a>
                
            </div>


                <a className="btn_download js_download js_tj" data-tj="down_$qm" href="javascript:;">免费下载歌曲</a>


            </div>
                                                {/*  */}
            <div className={styles.bg}>
            <img className="bg__img js_album_cover" src="//y.gtimg.cn/music/photo_new/T002R300x300M000000DMpJ73yeITP.jpg?max_age=2592000" /></div>
                <div className="pendant js_pg_pendant" style={{
                    display:'none'
                }}><img className="pendant__img js_img" /></div>
    </section>
          
            )
    }
}

TMusicdetails = withRouter(TMusicdetails)
export default connect((state) => {
    return state
})(TMusicdetails)
