import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import firebase from './firebase/firebaseconfig';
import 'firebase/database';


class App extends React.Component {
  // This (props) target to mapStateToProps function all values.
  constructor(props) {
    super(props)
    this.state = {
      name: props.authdata
    }
  }

  // Data Retrive from firebase in componentDidMount
  componentDidMount() {
    firebase.database().ref('authdata').on('value', snapshoot => {
        let authenticationdata = snapshoot.val();
        console.log(authenticationdata);        
      })
  }

  render() {
    console.log(this.state);

    // push store data state in  firebase
    firebase.database().ref('authdata').set(this.props.authdata);

    console.log(this.state.name.userdata[1]);
  return (
    <div>
      <h1>Starter React + Redux + MaterialUI + Bootstrap</h1>
      {/* <button onClick={this.getprintdata}>See All User</button> */}
      <h1>Auth Data</h1>
      <h3>{this.state.name.userdata[0].name}</h3>
      <h3>{this.state.name.userdata[0].email}</h3>    
    </div>

  )};
}

const mapStateToProps = (state) => ({
  appname: state.Appdata,
  authdata: state.Authdata
})

export default connect(mapStateToProps, null) (App);
