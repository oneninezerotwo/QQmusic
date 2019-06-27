import React from 'react'
import style from './Tshade.css'
class Tshade extends React.Component {

    state={
            Show:true
    }
    render() {
        return (
            <div className={style.box} style={
                {
                    
                    display:this.state.Show?'block':'none'
                }
            }>
                <div className={style.qui_dialog__mask} >
                <div className={style.qui_dialog__box}>
                    <div className={style.qui_dialog__media}>
                        <img className={style.qui_dialog__img} src="https://y.gtimg.cn/music/common/upload/t_playsong_ad/1221695.png" />
                    </div>
                    <div className={style.qui_dialog__ft}>
                    </div>
                    <a href="javascript:;" className={style.qui_dialog__close} onClick={
                       this.Dleleshow.bind(this)
                    }>
                        <span className={style.qui_dialog__close_txt}>关闭</span>
                    </a>
                </div>
            </div>

            </div>
        )
    }
    Dleleshow(){
        this.setState({
            Show:false
        })
        // console.log(1111)
    }


}
export default Tshade


