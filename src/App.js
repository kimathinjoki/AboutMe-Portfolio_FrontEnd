import './App.css';
import LandingPage from './component/landingPage/LandingPage';
import Home from './component/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './component/404page/NotFound';
import Form from './component/form/Form';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<LandingPage />
				</Route>
				<Route path="/home">
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
	);
}

export default App;
