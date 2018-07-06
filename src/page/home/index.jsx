import React from 'react';
import {Link} from 'react-router-dom';


let imgURL= require('component/layout/images/admin-out.png');

class Home extends React.Component{

	render(){
		return(


				<div className="desktop">
					<div className="line1">
				    	<table width="100%" border="0" cellSpacing="0" cellSpacing="0" >
                            <tbody>
				            <tr>
				              <td>
				                  <div className="person-infor">
				                  	<div className="person-img"><img src={imgURL} /></div>
				                    <div className="person-con">
				                    	<div className="person-title"><i></i>超级管理员</div>
				                        <div className="person-text">部门：开发部</div>
				                    </div>
				                  </div>
				              </td>
				              <td>
				                  <div className="shortcut">
				                  	  <div className="shortcut-div">
				                    	<div className="shortcut-img"></div>
				                        <div className="shortcut-text">个人配置</div>
				                      </div>
				                      <div className="shortcut-div">
				                    	<div className="shortcut-img"></div>
				                        <div className="shortcut-text">系统设置</div>
				                      </div>
				                      <div className="shortcut-div">
				                    	<div className="shortcut-img"></div>
				                        <div className="shortcut-text">消息配置</div>
				                      </div>
				                      <div className="shortcut-div">
				                    	<div className="shortcut-img"></div>
				                        <div className="shortcut-text">附件中心</div>
				                      </div>
				                      <div className="shortcut-div">
				                    	<div className="shortcut-img"></div>
				                        <div className="shortcut-text">驾驶舱管理</div>
				                      </div>
				                      <div className="shortcut-div">
				                    	<div className="shortcut-img"></div>
				                        <div className="shortcut-text">文档中心</div>
				                      </div>
				                  </div>
				              </td>
				              <td>
				              	  <div className="countdown">
				                  		<div className="countdown-list">石家庄工程，距离竣工<span></span>天</div>
				                        <div className="countdown-list">北京工程，距离竣工<span></span>天</div>
				                  </div>
				              </td>
				            </tr>
							</tbody>
				        </table>
				    </div>
				    
				    <div className="desktop-main">
				    
				    	<div className="line-left">
				        
				        	<div className="container module1-green">
				            	<div className="con-top">
									<div className="top-right"><Link to="#" className="con-set"></Link><Link to="#" className="con-infor">5条新信息</Link></div>
				                	<div className="top-title"><i className="daiban"></i>待办</div>
				                </div>
				                <div className="con-list">
				                	<table width="100%" border="0" cellSpacing="0" cellSpacing="0">
                                        <tbody>
				                        <tr>
				                          <td width="10%">1</td>
											<td width="50%"><Link to="#">商务部：中方将根据正式公布...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">2</td>
											<td width="50%"><Link to="#">德国大众承认去年已知晓尾气...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">3</td>
											<td width="50%"><Link to="#">媒体:社会抚养费和户口捆绑...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">4</td>
											<td width="50%"><Link to="#">滴滴获上海专车牌照 私家...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">5</td>
											<td width="50%"><Link to="#">屠呦呦称将尽量去领奖 祝贺...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">6</td>
											<td width="50%"><Link to="#">中兴华为供应商跑路 制造...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
										</tbody>
				                    </table>
				                </div>
				            </div>
				            
				            <div className="container module1-blue">
				            	<div className="con-top">
									<div className="top-right"><Link to="#" className="con-set"></Link><Link to="#" className="con-infor">5条新信息</Link></div>
				                	<div className="top-title"><i className="daiban"></i>待办</div>
				                </div>
				                <div className="con-list">
				                	<table width="100%" border="0" cellSpacing="0" cellSpacing="0">
                                        <tbody>
				                        <tr>
				                          <td width="10%">1</td>
											<td width="50%"><Link to="#">商务部：中方将根据正式公布...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">2</td>
											<td width="50%"><Link to="#">德国大众承认去年已知晓尾气...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">3</td>
											<td width="50%"><Link to="#">媒体:社会抚养费和户口捆绑...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">4</td>
											<td width="50%"><Link to="#">滴滴获上海专车牌照 私家...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">5</td>
											<td width="50%"><Link to="#">屠呦呦称将尽量去领奖 祝贺...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">6</td>
											<td width="50%"><Link to="#">中兴华为供应商跑路 制造...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
										</tbody>
				                    </table>
				                </div>
				            </div>
				            
				        </div>
				        
				        <div className="line-right">
				        
				        	<div className="container module1-yellow">
				            	<div className="con-top">
									<div className="top-right"><Link to="#" className="con-set"></Link><Link to="#" className="con-infor">5条新信息</Link></div>
				                	<div className="top-title"><i className="daiban"></i>待办</div>
				                </div>
				                <div className="con-list">
				                	<table width="100%" border="0" cellSpacing="0" cellSpacing="0">
                                        <tbody>
				                        <tr>
				                          <td width="10%">1</td>
											<td width="50%"><Link to="#">商务部：中方将根据正式公布...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">2</td>
											<td width="50%"><Link to="#">德国大众承认去年已知晓尾气...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">3</td>
											<td width="50%"><Link to="#">媒体:社会抚养费和户口捆绑...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">4</td>
											<td width="50%"><Link to="#">滴滴获上海专车牌照 私家...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">5</td>
											<td width="50%"><Link to="#">屠呦呦称将尽量去领奖 祝贺...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">6</td>
											<td width="50%"><Link to="#">中兴华为供应商跑路 制造...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
										</tbody>
				                    </table>
				                </div>
				            </div>
				            
				            <div className="container module1-cyan">
				            	<div className="con-top">
									<div className="top-right"><Link to="#" className="con-set"></Link><Link to="#" className="con-infor">5条新信息</Link></div>
				                	<div className="top-title"><i className="daiban"></i>待办</div>
				                </div>
				                <div className="con-list">
				                	<table width="100%" border="0" cellSpacing="0" cellSpacing="0">
                                        <tbody>
				                        <tr>
				                          <td width="10%">1</td>
											<td width="50%"><Link to="#">商务部：中方将根据正式公布...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">2</td>
											<td width="50%"><Link to="#">德国大众承认去年已知晓尾气...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">3</td>
											<td width="50%"><Link to="#">媒体:社会抚养费和户口捆绑...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">4</td>
											<td width="50%"><Link to="#">滴滴获上海专车牌照 私家...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">5</td>
											<td width="50%"><Link to="#">屠呦呦称将尽量去领奖 祝贺...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
				                        <tr>
				                          <td width="10%">6</td>
											<td width="50%"><Link to="#">中兴华为供应商跑路 制造...</Link></td>
				                          <td width="20%">2015-10-09</td>
				                          <td width="20%">张长章</td>
				                        </tr>
										</tbody>
				                    </table>
				                </div>
				            </div>
				            
				        </div>
				        
				    </div>
				    
				</div>

		);
	}
}

export default Home;