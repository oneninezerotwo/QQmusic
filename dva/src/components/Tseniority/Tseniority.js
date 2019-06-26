import React from 'react'
import style from './Tseniority.css'
class Tseniority extends React.Component {
    state={
      arr:[
            {
                "id": 4,
                "listenCount": 19400000,
                "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M0000035nIr83njSdx.jpg",
                "songList": [
                    {
                        "singername": "Jain",
                        "songname": "Lil Mama"
                    },
                    {
                        "singername": "尤长靖",
                        "songname": "一个人记得"
                    },
                    {
                        "singername": "Shawn Mendes/Camila Cabello",
                        "songname": "Señorita"
                    }
                ],
                "topTitle": "巅峰榜·流行指数",
                "type": 0
            },
            {
                "id": 26,
                "listenCount": 19800000,
                "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M000001UTVn43EXwwX.jpg",
                "songList": [
                    {
                        "singername": "G.E.M. 邓紫棋",
                        "songname": "来自天堂的魔鬼"
                    },
                    {
                        "singername": "陈雪凝",
                        "songname": "你的酒馆对我打了烊"
                    },
                    {
                        "singername": "Taylor Swift",
                        "songname": "You Need To Calm Down"
                    }
                ],
                "topTitle": "巅峰榜·热歌",
                "type": 0
            },
            {
                "id": 27,
                "listenCount": 2382720,
                "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M0000040BWAX1Oh2ys.jpg",
                "songList": [
                    {
                        "singername": "Taylor Swift",
                        "songname": "You Need To Calm Down"
                    },
                    {
                        "singername": "汪苏泷",
                        "songname": "耿"
                    },
                    {
                        "singername": "尤长靖",
                        "songname": "一个人记得"
                    }
                ],
                "topTitle": "巅峰榜·新歌",
                "type": 0
            },
            {
                "id": 58,
                "listenCount": 4675360,
                "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M0000048PQan4Gk4mx.jpg",
                "songList": [
                    {
                        "singername": "张艺兴",
                        "songname": "Honey (和你)"
                    },
                    {
                        "singername": "吴亦凡",
                        "songname": "大碗宽面"
                    },
                    {
                        "singername": "张艺兴",
                        "songname": "和你 (Honey)"
                    }
                ],
                "topTitle": "说唱榜",
                "type": 0
            },
            {
                "id": 57,
                "listenCount": 2593020,
                "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M000001c47HC01yxrL.jpg",
                "songList": [
                    {
                        "singername": "The Chainsmokers/Bebe Rexha",
                        "songname": "Call You Mine"
                    },
                    {
                        "singername": "Oliver Heldens/Devin/Nile Rodgers",
                        "songname": "Summer Lover feat. Devin & Nile Rogers (CID Remix)"
                    },
                    {
                        "singername": "Ed Sheeran/Justin Bieber",
                        "songname": "I Don't Care (Loud Luxury Remix)"
                    }
                ],
                "topTitle": "电音榜",
                "type": 0
            },
            {
                "id": 28,
                "listenCount": 9400000,
                "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M000000B6LrV3ZlM8E.jpg",
                "songList": [
                    {
                        "singername": "小咪",
                        "songname": "我走后"
                    },
                    {
                        "singername": "半吨兄弟",
                        "songname": "爱情错觉"
                    },
                    {
                        "singername": "魏新雨",
                        "songname": "余情未了"
                    }
                ],
                "topTitle": "巅峰榜·网络歌曲",
                "type": 0
            },
            {
                "id": 5,
                "listenCount": 6266560,
                "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M000002AW2Ga4edISn.jpg",
                "songList": [
                    {
                        "singername": "王源",
                        "songname": "滚烫的青春"
                    },
                    {
                        "singername": "汪苏泷",
                        "songname": "耿"
                    },
                    {
                        "singername": "摩登兄弟",
                        "songname": "孤独的人在哪里"
                    }
                ],
                "topTitle": "巅峰榜·内地",
                "type": 0
            },
            {
                "id": 3,
                "listenCount": 10000000,
                "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M000002Rq4pY0v2T2Z.jpg",
                "songList": [
                    {
                        "singername": "Taylor Swift",
                        "songname": "You Need To Calm Down"
                    },
                    {
                        "singername": "The Chainsmokers/Bebe Rexha",
                        "songname": "Call You Mine"
                    },
                    {
                        "singername": "Katy Perry",
                        "songname": "Never Really Over"
                    }
                ],
                "topTitle": "巅峰榜·欧美",
                "type": 0
            },
            {
                "id": 59,
                "listenCount": 1960000,
                "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M000000J69Al0XtXnU.jpg",
                "songList": [
                    {
                        "singername": "李治廷",
                        "songname": "I Know You Know"
                    },
                    {
                        "singername": "李克勤/阿兰",
                        "songname": "最完美的分手"
                    },
                    {
                        "singername": "HANA",
                        "songname": "没有你开始"
                    }
                ],
                "topTitle": "香港地区榜",
                "type": 0
            },
            {
                "id": 16,
                "listenCount": 4455160,
                "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M000004O65HC2aiXaG.jpg",
                "songList": [
                    {
                        "singername": "전소미 (全昭弥)",
                        "songname": "BIRTHDAY"
                    },
                    {
                        "singername": "Red Velvet (레드벨벳)",
                        "songname": "짐살라빔 (Zimzalabim)"
                    },
                    {
                        "singername": "LEE HI (李遐怡)/B.I (金韩彬)",
                        "songname": "NO ONE (Feat. B.I of iKON) (누구 없소)"
                    }
                ],
                "topTitle": "巅峰榜·韩国",
                "type": 0
            },
            {
                "id": 60,
                "listenCount": 18990344,
                "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M000001ebDN24eqg4C.jpg",
                "songList": [
                    {
                        "singername": "半吨兄弟",
                        "songname": "爱情错觉"
                    },
                    {
                        "singername": "小咪",
                        "songname": "我走后"
                    },
                    {
                        "singername": "Vexento",
                        "songname": "Trippy Love"
                    }
                ],
                "topTitle": "抖音排行榜",
                "type": 0
            },
            {
                "id": 29,
                "listenCount": 1920000,
                "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M0000034W6JT1N1w96.jpg",
                "songList": [
                    {
                        "singername": "黄勇/任浩铭",
                        "songname": "你看到的我"
                    },
                    {
                        "singername": "鞠婧祎",
                        "songname": "青城山下白素贞"
                    },
                    {
                        "singername": "李俊毅",
                        "songname": "两人份美好"
                    }
                ],
                "topTitle": "巅峰榜·影视金曲",
                "type": 0
            },
            {
                "id": 17,
                "listenCount": 1494523,
                "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M00000371o1R0M9qXB.jpg",
                "songList": [
                    {
                        "singername": "米津玄師 (よねづ けんし)",
                        "songname": "海の幽霊 (海之幽灵)"
                    },
                    {
                        "singername": "GENERATIONS from EXILE TRIBE (放浪新世代 from 放浪一族)/FANTASTICS from EXILE TRIBE (ファンタスティックス)",
                        "songname": "Supersonic"
                    },
                    {
                        "singername": "PKCZ(R)/CL (李彩琳)/Afrojack",
                        "songname": "CUT IT UP"
                    }
                ],
                "topTitle": "巅峰榜·日本",
                "type": 0
            },
            {
                "id": 201,
                "listenCount": 1910000,
                "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M000000jpcLK3Yhll5.jpg",
                "songList": [
                    {
                        "singername": "鞠婧祎",
                        "songname": "孤独与诗"
                    },
                    {
                        "singername": "林俊杰",
                        "songname": "我们很好 (《少年的你》电影主题曲)"
                    },
                    {
                        "singername": "张艺兴",
                        "songname": "HONEY"
                    }
                ],
                "topTitle": "巅峰榜·MV",
                "type": 0
            },
            {
                "id": 52,
                "listenCount": 520245,
                "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M000000lU21r2vk8GQ.jpg",
                "songList": [
                    {
                        "singername": "海鸥乐队",
                        "songname": "只有风在旅行"
                    },
                    {
                        "singername": "宋黛霆",
                        "songname": "一个人"
                    },
                    {
                        "singername": "Tuno",
                        "songname": "A Hug"
                    }
                ],
                "topTitle": "巅峰榜·腾讯音乐人原创榜",
                "type": 0
            },
            {
                "id": 36,
                "listenCount": 1910000,
                "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M000001vFLev1Fgeav.jpg",
                "songList": [
                    {
                        "singername": "朴爱源",
                        "songname": "来自天堂的魔鬼"
                    },
                    {
                        "singername": "麓七",
                        "songname": "你的酒馆对我打了烊"
                    },
                    {
                        "singername": "LBI利比",
                        "songname": "我的名字"
                    }
                ],
                "topTitle": "巅峰榜·K歌金曲",
                "type": 0
            },
            {
                "id": 61,
                "listenCount": 740740,
                "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M000003xKSk11BxnvG.jpg",
                "songList": [
                    {
                        "singername": "范晓萱/徐熙媛/徐熙娣/柳翰雅",
                        "songname": "姐妹们的旅行"
                    },
                    {
                        "singername": "品冠/尤长靖",
                        "songname": "投己所好"
                    },
                    {
                        "singername": "Ella陈嘉桦",
                        "songname": "啰哩叭唆"
                    }
                ],
                "topTitle": "台湾地区榜",
                "type": 0
            }
        ]
    }
    render() {
        return (
           
          
              
             <div className={style.mod_topic}>
             <ul>
                 {
                     this.state.arr.map((item,index)=>{
                        return <li className={style.topic_item} key={index}>
                        <div className="topic_main">
                        <a href="javascript:;" className="topic_media">
                        <img src={item.picUrl} />
                        <span className="listen_count">
                        <i className="icon icon_listen"></i>
                        1940.0万</span>
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
   
}
export default Tseniority