import React from 'react';
import 'whatwg-fetch';
import Onemenu from "./onemenu.jsx";
import Twomenu from "./twomenu.jsx";


let stuJson = require('components/nav-side/menudata.json');

let leftClassData={
    mainLeft:'main-left'
};
class SideNav extends React.Component{
	constructor(props){
		super(props);
		this.state={
		    dptwo:'none',
            showTop:'0',
            datas:stuJson,
            menukey:0,
            leftHeight:0,
            leftClass:leftClassData
        };
	}

    handleLeftHb(){
        leftClassData.mainLeft==='main-left'?leftClassData={
            mainLeft:'main-left main-left1'
        }:leftClassData={
            mainLeft:'main-left'
        };
        this.setState({leftClass:leftClassData});
    }
	leftHeight(){
	    const bodyHeight=document.documentElement.clientHeight - 87;
	    this.setState({leftHeight:bodyHeight});
    }
    componentDidMount() {
	    this.leftHeight();
        window.addEventListener('resize', this.leftHeight.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.leftHeight.bind(this));
    }

    handletwoShow(msg,menukey){
	    this.setState({dptwo:msg,menukey:menukey});
    }
    handletwohid(msg){
        this.setState({dptwo:msg});
    }

	render(){
		return(
            <div className={this.state.leftClass.mainLeft} id="main_left" style={{height:'100%'}}>
                <Onemenu handletwoShow={(msg,menukey)=>this.handletwoShow(msg,menukey)} handletwohid={msg=>this.handletwohid(msg)} datas={this.state.datas} leftHeight={this.state.leftHeight}  />
                <Twomenu dptwo={this.state.dptwo} showTop={this.state.showTop} datas={this.state.datas} menukey={this.state.menukey}/>
                <div className="main-left-foot" onClick={this.handleLeftHb.bind(this)} >
                    <span></span>
                </div>
            </div>
		);
	}
}

export default SideNav;