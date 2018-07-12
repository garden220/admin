import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Redirect,Route} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from 'reducers/index.jsx'
import Layout from 'components/layout/index.jsx';
import Home from 'page/home/index.jsx';

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


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
    <Provider store={store}>
    	<App />
    </Provider>,
    document.getElementById('app')
);

{/*<Router>
				<Layout>
                    <div className="main_frame" id="main_frame">
						<Switch>
							<Route exact path="/" component={Home} />
							<Redirect from="*" to="/" />
						</Switch>
					</div>
				</Layout>
			</Router>*/}