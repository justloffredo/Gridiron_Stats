import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { Home } from "pages/Home";
import { FourOhFour } from "pages/404";
// import reducers from "reducers";
// const store = createStore(reducers, applyMiddleware(reduxThunk));

class App extends React.Component {
	state = {

	};
	render() {
		return (
			// <Provider store={store}>
			<BrowserRouter>
				<div>
					<Navigation/>
					<Switch>
						<Route exact path ="/" component = {Home}/>
						<Route exact path= "*" component={404} />
					</Switch>
				</div>
			</BrowserRouter>
		// </Provider>
		);
	}
}

export default App;
