import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { MemoryRouter } from "react-router";
import Home from './components/view/Home';
import Detail from './components/view/Detail';

export default class App extends React.Component {
  state = {
    notes:{
      1: {
        _id:1,
        title: "Hello, World",
        content: "ini isi content nya",
        updated_at: new Date()
      },
      2: {
        _id:2,
        title: "Hello, World again 2",
        content: "ini isi content nya again 2",
        updated_at: new Date()
      }
    }

  }

  render(){
    return (
      <NativeRouter>
          <Route exact path="/" component={(props) => <Home {...props} notes={this.state.notes}/>}/>
          <Route exact path="/notes/:id" component={(props) => <Detail {...props} note={this.state.notes[props.match.params.id]}/>}/>
      </NativeRouter>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
