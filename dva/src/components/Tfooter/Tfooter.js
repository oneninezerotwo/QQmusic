import React from 'react';
import { connect } from 'dva';
import style from './Tfooter.css';

class Tfooter extends React.Component {
    render() {
        return (
            <footer className={style.mod_footer}>
                <div className={style.version_tab}>
                    <a href="javascript:;">查看电脑版网页</a>
                </div>
                <div className={style.footer_logo}>QQ音乐</div>
                <p className={style.copyright}>Copyright © 1998 - 2019 Tencent. All Rights Reserved.</p>
                <p className={style.copyright}>联系电话：0755-86013388 QQ群：55209235</p>
            </footer>
        )
    }


}

// IndexPage.propTypes = {
// };

export default Tfooter;