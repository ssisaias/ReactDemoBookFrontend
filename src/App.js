import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Label from './components/label/Label'
import Button from './components/button/Button'
import LinkButton from './components/linkButton/LinkButton'
import TextBox from './components/textBox/TextBox'

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        name: '',
        message: "nenhuma msg ainda... :(",
      };
      this.onSaveClick = this.onSaveClick.bind(this);
      this.onCancelClick = this.onCancelClick.bind(this);
      this.onOkClick = this.onOkClick.bind(this);
      this.onEditClick = this.onEditClick.bind(this);
      this.onEditorChange = this.onEditorChange.bind(this);
    }

    onSaveClick(){
      this.setState({
        message: "O botão salvar foi clicado! :-)",
      });
    }

    onCancelClick(){
      this.setState({
        message: "O botão cancelar foi clicado! :-)",
      });
    }    

    onOkClick(){
      this.setState({
        message: "O botão ok foi clicado! :-)",
      });
    }  

    onEditClick(){
      this.setState({
        message: "O botão EDIT foi clicado! :-)",
      });
    }  

    onEditorChange(value){
      this.setState({ name: value });
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
          <Button.Ok onClick={this.onOkClick}></Button.Ok>
          
          <Button.Save onClick={this.onSaveClick}></Button.Save>

          <Button.Cancel onClick={this.onCancelClick}></Button.Cancel>

          <Label>{this.state.name}, {' '}{this.state.message}</Label>

          <LinkButton caption="Editar" onClick={this.onEditClick}></LinkButton>

          <TextBox caption="Nome" value={this.state.name} onChange={this.onEditorChange} placeholder="digite seu nome"></TextBox>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
