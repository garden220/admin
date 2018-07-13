import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Redirect,Route} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from 'reducers/index.jsx'
import Layout from 'components/layout/index.jsx';
import Home from 'page/home/index.jsx';
import Login from 'page/login/index.jsx';
import List from 'page/list/index.jsx';

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


class App extends React.Component{
    constructor(props){
        super(props);
    }

	render(){
		return(

            <Router>
                <Switch>
                    <Route  path="/login" component={Login} />
                    <Route  path="/" render={props =>(
                        <Layout>
                            <div className="main_frame" id="main_frame">
                                <Route exact path="/" component={Home} />
                                <Route  path="/list" component={List} />
                                <Redirect from="*" to="/" />
                            </div>
                        </Layout>
                    )} />

                </Switch>
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