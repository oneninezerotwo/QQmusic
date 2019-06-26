import React from 'react'
import style from './Tcarousel.css'
import { Carousel } from 'antd';
// import axios from 'axios'
class Tcarousel extends React.Component {
  state = {
    arr: [
      {
        "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1410330.jpg",
        "id": 21684
      },
      {
        "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1417196.jpg",
        "id": 21705
      },
      {
        "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1405604.jpg",
        "id": 21692
      },
      {
        "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1416349.jpg",
        "id": 21688
      },
      {
        "picUrl": "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1416517.jpg",
        "id": 21675
      }
    ]
  }
  render() {
    return (
      <div className={style.Tcarousel}>
      <Carousel autoplay>
        {
          this.state.arr.map((item, index) => {
            return <div key={index}> <img  src={item.picUrl}/></div>
        })
        }
      </Carousel>
      </div>
    )
  }
}
export default Tcarousel