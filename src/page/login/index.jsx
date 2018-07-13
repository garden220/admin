import React from 'react';
import './login.css';

let imgURL= require('page/login/images/bg1.jpg');

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    inputChang(e){
        let inputname = e.target.name;
        let inputvalue= e.target.value;
        this.setState({
            [inputname]:inputvalue
        });
    }
    render(){
        return (
            <div>
                <div className="login-page">
                    <div className="top">
                        <div className="logo"></div>
                    </div>
                    <div className="content" style={{display:'block'}}>
                        <div className="con-title">请输入登录信息</div>
                        <div className="con-text con-text1">
                            <input placeholder="用户名" type="text" onChange={e=>this.inputChang(e)} name="username"  />
                        </div>
                        <div className="con-text con-text2">
                            <input placeholder="密码" type="password" name="password" />
                        </div>
                        <div className="con-jizhu">
                            <div className="con-jizhu-div"><input type="checkbox" value="true" />记住密码</div>
                            <div className="con-jizhu-div"><input type="checkbox" value="true" />自动登录</div>
                        </div>
                        <div className="con-btn">
                            <button type="submit" className="con-submit">立&nbsp;即&nbsp;登&nbsp;录</button>
                        </div>


                    </div>
                    <div className="foot">授权用户：潞安集团司马煤业有限公司</div>
                </div>
                <div className = "login-bg"><img src={imgURL} /></div>
            </div>
        );
    }
}

export default Login;