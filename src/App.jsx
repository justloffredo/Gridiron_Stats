import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import Home  from "pages/Home";
import Teams  from "pages/Teams";
import Foundations from "pages/Foundations";
import Navigation  from "components/Navigation";
import FourOhFour  from "pages/404";
import reducers from "reducers";
const store = createStore(reducers, applyMiddleware(reduxThunk));

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Navigation/>
						<Switch>
							<Route exact path ="/" component = {Home}/>
							<Route exact path ="/teams" component = {Teams}/>
							<Route exact path="/foundations" component = {Foundations}/>
							<Route exact path= "*" component={FourOhFour} />
						</Switch>
					</div>
				</BrowserRouter>
		 	</Provider>
		);
	}
}

export default App;
