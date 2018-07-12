import React from 'react';
let imgLogo= require('components/layout/images/main-logo.png');

class TopNav extends React.Component{
	constructor(props){
		super(props);
		this.state={
		    display:'block',
            display1:'none',
            dropDown:'main_admin_dropdown',
            dropState:true
        }
	}
    changeDisplay(){
	    this.setState({
            display:"none",
            display1:"block"
        });
    }
    changeDropdwon(){
        if(this.state.dropState) {
            this.setState({dropState: false,dropDown:'main_admin_dropdown main_admin_dropdown1'});
        }else {
            this.setState({dropState: true,dropDown:'main_admin_dropdown'});
        }
    }
	render(){
		return(
            <div className="main_top">
                <div className="top_logo"><img src={imgLogo}/></div>
                <div className="top_right">
                    <div className="main_admin" onClick={this.changeDropdwon.bind(this)}><i></i>管理员</div>
                    <div className="main_message"></div>
                    <div className="main_data"></div>
                    <div className="main_desktop"></div>
                    <div className="main_search" style={{display:this.state.display}} onClick={this.changeDisplay.bind(this)}></div>
                </div>
                <div className="main_search1" style={{display:this.state.display1}}>
                    <input type="text"  className="main_search_input"/>
                    <input type="button" className="main_search_btn"/>
                </div>
                <div className={this.state.dropDown}>
                    <div className="admin-user"><i></i>用户中心</div>
                    <div className="admin-out"><i></i>退出</div>
                    <i className="main_admin_jt"></i>
                </div>
            </div>
		);
	}
}

export default TopNav;