import React from 'react';

import TopNav from 'components/nav-top/index.jsx';
import SideNav from 'components/nav-side/index.jsx';

import Footer from 'components/Footer.jsx'
import AddTodo from 'containers/AddTodo.jsx'
import VisibleTodoList from 'containers/VisibleTodoList.jsx'


import "./theme.css";

class Layout extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
				<div id="wrapper">
                    <AddTodo />
                    <VisibleTodoList />
                    <Footer />

					<TopNav />
					<SideNav/>
					{this.props.children}
				</div>
		);
	}
}

export default Layout;