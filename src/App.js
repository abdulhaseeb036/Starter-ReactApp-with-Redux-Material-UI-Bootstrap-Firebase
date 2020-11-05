import React from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    console.log("Redux Data", this.props);
  return (
    <div>
      <h1>Starter React + Redux + MaterialUI + Bootstrap</h1>
      <h1>App Data</h1>
  <h6>{this.props.appname}</h6>

  
    </div>

  )};
}

const mapStateToProps = (state) => ({
  appname: state.appdata,
  authdata: state.authdata
})

export default connect(mapStateToProps, null) (App);
