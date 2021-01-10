import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import firebase from './firebase/firebaseconfig';
import 'firebase/database';
import {getdata} from './store/action'


class App extends React.Component {
  // This (props) target to mapStateToProps function all values.
  constructor(props) {
    super(props)
    this.state = {
      authdata: props.authdata,
      appdata: props.appname
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
    // console.log(this.props);
    // push store data state in  firebase
    firebase.database().ref('authdata').set(this.props.authdata);
    console.log(this.state.authdata.userdata[1].name);
  return (
    <div>
      <h1>Starter React + Redux + MaterialUI + Bootstrap + Surge and yarn</h1>
      {/* <button onClick={this.getprintdata}>See All User</button> */}
      <h1>Auth Data</h1>
      <h3>{this.state.authdata.userdata[1].name}</h3>
      <h3>{this.state.authdata.userdata[1].email}</h3>  
      <button onClick={getdata(this.state)}>Get data</button>  
    </div>
  

  )};
}

const mapStateToProps = (state) => ({
  appname: state.Appdata,
  authdata: state.Authdata
})

const mapDispatchToProp = (dispatch) => ({
  getDataFunction: dispatch((data) => getdata(data))
})

export default connect(mapStateToProps, mapDispatchToProp) (App);
