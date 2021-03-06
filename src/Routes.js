import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav.component';
import Footer from './components/Footer/Footer.component';
import Login from './pages/Login/Login.component';
import Main from './pages/Main/Main.component';
import Purchase from './pages/Purchase/Purchase.component';
import SignUp from './pages/SignUp/SignUp.component';
import AirTicketsContainer from './pages/AirTickets/AirTickets.container';
import HotelDetails from './pages/HotelDetails/HotelDetails.component';
import './style/common.scss';
import HotelList from './pages/HotelList/HotelList.component';
import './Routes.scss';
import MyPage from './pages/MyPage/MyPage.component';

function Routes() {
	return (
		<div className="Routes">
			<Nav />
			<div className="container">
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
					<Route path="/purchase/:purchase_type" component={Purchase} />
					<Route exact path="/airtickets" component={AirTicketsContainer} />
					<Route exact path="/hotellist" component={HotelList} />
					<Route exact path="/hoteldetails/:id" component={HotelDetails} />
					<Route exact path="/purchase" component={Purchase} />
					<Route exact path="/mypage" component={MyPage} />
				</Switch>
			</div>
			<Footer />
		</div>
	);
}

export default Routes;
