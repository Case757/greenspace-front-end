import React from 'react';
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./containers/login"
import Home from "./containers/home"
import CreateUser from "./components/create_user"
import About from "./containers/about"
import PlantIndex from "./containers/plant_index"
import CreatePlant from "./containers/create_plant"
import UpdateUserPlant from "./containers/update_user_plant"
import { connect } from "react-redux";
import { fetchingUserPlants } from "./redux/actions/user_plant_actions"
import { fetchingPlants } from "./redux/actions/plant_actions"
import { fetchingNotes } from "./redux/actions/note_actions"
import { fetchingWaterings } from "./redux/actions/watering_actions"
import { fetchingFertilizings } from "./redux/actions/fertilizing_actions"
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchingPlants()
    this.props.fetchingUserPlants()
    this.props.fetchingNotes()
    this.props.fetchingWaterings()
    this.props.fetchingFertilizings()
  }

  render() {
    return (
      <div className="App">
        {this.props.currentUser ? <Navbar/> : null}
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route path="/users/create" component={CreateUser}/>
          <Route path="/about" component ={About}/>
          <Route path="/plants/create" component={CreatePlant}/>
          <Route path="/plants" component={PlantIndex}/>
          <Route exact path="/user_plants/:id/edit" render={(props) => {
            return <UpdateUserPlant id={props.match.params.id}/>}}/>
          <Route path="/" component= {this.props.currentUser ? Home : Login}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchingPlants: () => dispatch(fetchingPlants()),
  fetchingUserPlants: () => dispatch(fetchingUserPlants()),
  fetchingNotes: () => dispatch(fetchingNotes()),
  fetchingWaterings: () => dispatch(fetchingWaterings()),
  fetchingFertilizings: () => dispatch(fetchingFertilizings())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
