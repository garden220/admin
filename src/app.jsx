import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Redirect,Route,Link} from 'react-router-dom'

/*import './iconfont/iconfont.css'
import './index.css';
import './index.scss';*/

import Layout from 'component/layout/index.jsx';

import Home from 'page/home/index.jsx';



class App extends React.Component{
    constructor(props){
        super(props);
    }

	render(){
		return(
			<Router>
				<Layout>
                    <div className="main_frame" id="main_frame">
						<Switch>
							<Route exact path="/" component={Home} />
							<Redirect from="*" to="/" />
						</Switch>
					</div>
				</Layout>
			</Router>
			); 
	}
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);