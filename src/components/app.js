import { h, Component } from 'preact';
import { NavigationDrawer, Button, FontIcon } from 'react-md';
//import { Router } from 'preact-router';

//import Header from './header';

// Code-splitting is automated for routes
//import Home from '../routes/home';
//import Profile from '../routes/profile';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

  render() {
    return (
			<NavigationDrawer
				drawerTitle="react-md with CRA"
				toolbarTitle="Welcome to react-md"
			>
				<div className="App">
					<div className="App-header">
						{/*<img src={logo} className="App-logo" alt="logo" />*/}
						<h2>Welcome to React</h2>
					</div>
					<p className="App-intro">
						To get started, edit <code>src/App.js</code> and save to reload.
					</p>
					<Button raised primary iconEl={<FontIcon>home</FontIcon>}>Button</Button>
				</div>
			</NavigationDrawer>
    );
  }
}
