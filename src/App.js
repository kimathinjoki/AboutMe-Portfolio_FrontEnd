import './App.css';
// import LandingPage from './component/landingPage/LandingPage';
import Home from './component/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './component/404page/NotFound';
import Form from './component/form/Form';

function App() {
	return (
		<div>
			<div className="logo-div">
				<h1 className="logo">
					ME<span>+</span>
				</h1>
			</div>
		<Router>
			<Switch>
				{/* <Route exact path="/">
					<LandingPage />
				</Route> */}
				<Route path="/">
					<Home />
				</Route>
				<Route path="/add">
					<Form />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Router>
		</div>
	);
}

export default App;
