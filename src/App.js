import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Label from './components/label/Label'
import Button from './components/button/Button'

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        message: "nenhuma msg ainda... :(",
      };
      this.onSaveClick = this.onSaveClick.bind(this);
    }

    onSaveClick(){
      this.setState({
        message: "O botão foi clicado! :-)",
      });
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Label type="title">
          Bem vindo ao React
        </Label>
        <Label type="regular">
          Essa é a minha primeira aplicação React
        </Label>
        <br/>
        <Button.save onClick={this.onSaveClick}></Button.save>
        <Label>{this.state.message}</Label>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
