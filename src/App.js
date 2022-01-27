// import { Router } from 'react-router';
import "./App.css";
import Home from "./Componants/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Contact from "./Componants/Contact/Contact";
import PageNotFound from "./Componants/PageNotFound/PageNotFound";
import Footer from "./Componants/Footer/Footer";
import DetailsView from "./Componants/DetailsView/DetailsView";
import PrivateRoute from "./Componants/Login/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";
import Header from "./Componants/Header/Header";
import Signup from "./Componants/Signup/Signup";
import Login from "./Componants/Login/Login";

import DailyNews from "./Componants/DailyNews/DailyNews";
import SahreMyExperience from "./Componants/AdminSection/ExperienceShare/SahreMyExperience";
import Hotels from "./Componants/Hotels/Hotels";
import Destinations from "./Componants/Destinations/Destinations";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" title="Home">
              <Home></Home>
            </Route>
            <Route path="/home" title="Home">
              <Home></Home>
            </Route>
            <Route path="/dailyNews" title="Daily News">
              <DailyNews></DailyNews>
            </Route>
            <Route path="/hotel">
              <Hotels></Hotels>
            </Route>
            <Route path="/destination">
              <Destinations></Destinations>
            </Route>

            <PrivateRoute path="/shareExperience">
              <SahreMyExperience></SahreMyExperience>
            </PrivateRoute>

            <Route path="/detail_news/:newsId" title="Details View">
              <DetailsView></DetailsView>
            </Route>

            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
