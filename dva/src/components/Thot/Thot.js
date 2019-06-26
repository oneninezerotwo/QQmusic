import React from 'react'
import style from './Thot.css'
class Thot extends React.Component {
    state={
       arr:[
            {
                "songListDesc": "催泪大杀器！盘点演唱会经典万人大合唱",
                "picUrl": "http://p.qpic.cn/music_cover/1Fr9IFMhWDPeUzWKVEjn3QTL2eX2QziaJmaL0ZAmsvtW71ic9IDUoYzg/300?n=1",
                "id": "2646688496",
                "accessnum": 10164618,
                "songListAuthor": "金青松",
                "pic_mid": "00333So02drvak",
                "album_pic_mid": ""
            },
            {
                "songListDesc": "纳尼？这些华语歌手竟然会唱日语歌！",
                "picUrl": "http://p.qpic.cn/music_cover/z8wAFqicQ1qhImeiajkrgiaR4hYM3pzsUULFnicXshFXdw9uGkm261Ex9g/300?n=1",
                "id": "1144416825",
                "accessnum": 682658,
                "songListAuthor": "风吹草地",
                "pic_mid": "0013j8zs1jRnLQ",
                "album_pic_mid": ""
            },
            {
                "songListDesc": "精选内地十大民谣歌手代表作",
                "picUrl": "http://p.qpic.cn/music_cover/hVUsfUFG2DV466URqw7PT7X66OknPIhic2mKDgicawN4qThIR7yhYY1w/300?n=1",
                "id": "2043041547",
                "accessnum": 1368907,
                "songListAuthor": "１'s   ヽ",
                "pic_mid": "004bFmjW2PXSqF",
                "album_pic_mid": "0032YJyg2yF6Dd"
            },
            {
                "songListDesc": "2016billboard嘻哈榜",
                "picUrl": "http://p.qpic.cn/music_cover/tkduvk4dwqBxwzZhsNe0nwkwyiaLHVkxtla7REsX0yNkhibOH3Bdb2og/300?n=1",
                "id": "2040362185",
                "accessnum": 1162058,
                "songListAuthor": "CREAMSAUCEONMEBABY",
                "pic_mid": "000cL0xT2csmd7",
                "album_pic_mid": "001iJq1y1Uq3zV"
            },
            {
                "songListDesc": "浮光掠影：ACG纯音乐赏析合辑",
                "picUrl": "http://p.qpic.cn/music_cover/XMPAjfs5uwGZdWII3osvAvCRyNWx8Pqy5Yice41OCZlBhLtk0p0icNvg/300?n=1",
                "id": "1723063372",
                "accessnum": 1028508,
                "songListAuthor": "黎桐同",
                "pic_mid": "000xFtbN1l8ye8",
                "album_pic_mid": "002egQPg3DWcCS"
            },
            {
                "songListDesc": "trip-hop单曲大推荐",
                "picUrl": "http://y.gtimg.cn/music/photo_new/T005R600x600M000002CJKAY1LKpcz.jpg?n=1",
                "id": "3482605622",
                "accessnum": 358152,
                "songListAuthor": "哑忍",
                "pic_mid": "",
                "album_pic_mid": "004aOQhn3PPOpK"
            }
        ]
    }
    render() {
        return (

            <div className={style.mod_twocol_list}>
                <h2 className={style.list_title}>热门歌单</h2>
                <ul className={style.list_container}>
                    {/* <li>
                        <a className={style.list_main} href="javascript:;">
                            <div className={style.list_media}>
                                <img src="https://y.gtimg.cn/music/photo_new/T006R300x300M00000333So02drvak.jpg?max_age=2592000" />
                                    <span className={style.listen_count}><i className="icon icon_listen"></i>1016.2万</span>
                                    <span className={style.icon_play}>
                                    </span></div>
                                    <div className={style.list_info}>
                                    <h3 className={style.list_tit}>催泪大杀器！盘点演唱会经典万人大合唱</h3>
                                    <p className={style.list_text}>金青松</p>
                                </div></a></li>
                        <li><a className={style.list_main} href="javascript:;">
                            <div className={style.list_media}>
                            <img src="https://y.gtimg.cn/music/photo_new/T006R300x300M0000013j8zs1jRnLQ.jpg?max_age=2592000" />
                                <span className={style.listen_count}>
                                    <i className="icon icon_listen">
                                    </i>68.3万</span>
                                    <span className={style.icon_play}>
                                </span>
                                </div>
                                <div className={style.list_info}>
                                    <h3 className={style.list_tit}>纳尼？这些华语歌手竟然会唱日语歌！</h3>
                                    <p className={style.list_text}>风吹草地</p>
                                    </div>
                                    </a>
                             </li> */}
                               {
                                   this.state.arr.map((item,index)=>{
                                    return  <li key={index}>
                                       <a className={style.list_main} href="javascript:;">
                                        <div className={style.list_media}>
                                            <img src={item.picUrl} />
                                                <span className={style.listen_count}><i className="icon icon_listen"></i>{(item.accessnum).toString().split(0,3)}</span>
                                                <span className={style.icon_play}>
                                                </span></div>
                                                <div className={style.list_info}>
                                                <h3 className={style.list_tit}>{item.songListDesc}</h3>
                                                <p className={style.list_text}>{item.songListAuthor}</p>
                                            </div></a></li>
                                   })
                               } 

                          </ul>
                          </div>
                    )
                }
               
            }
export default Thot