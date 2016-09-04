require("./style.css");

import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorldComponent from './demo';

import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect } from 'react-redux';

function changeText(){
  console.log('changeText....')
  return {
    type: 'CHANGE_TEXT'
  }
}

function buttonClick(){
  console.log('buttonClick....')
  return {
    type: 'BUTTON_CLICK'
  }
}

const initState = {
  text: 'hello'
}

function myApp(state = initState, action){
  switch(action.type){
    case 'CHANGE_TEXT':
      return {
        text: state.text == 'hello' ? 'stark' : 'hello'
      }
    case 'BUTTON_CLICK':
      return {
        text: state.text = 'You just click button'
      } 
    default:
      return {
        text:'hello'
      }   
  }
}

let store = createStore(myApp);
class Hello extends React.Component{
    constructor(props) {
      super(props);
    }

    handleClick(){
      this.props.actions.changeText();
    }

    render() {
      return (
        <h1 onClick={this.handleClick.bind(this)}> {this.props.text} </h1>
      );
    }
}

class Change extends React.Component{
    constructor(props) {
      super(props);
    }

    handleClick(){
      this.props.actions.buttonClick();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)} >change</button>
        );
    }
}

class App extends React.Component{
    constructor(props) {
      super(props);
    }

    render() {
      //actions和text这两个props在第5步中会解释
      const { actions, text} = this.props;
      return (
        <div>
          <Hello actions={actions} text={text}/>
          <Change actions={actions}/>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return { text: state.text }
}

//mapDispatchToProps的作用是把store中的dispatch方法注入给组件
function mapDispatchToProps(dispatch){
  return{
    actions : bindActionCreators({changeText:changeText, buttonClick:buttonClick},dispatch)
  }
}

//这里实际上给了App两个props：text和actions，即第4步中的那段注释
App = connect(mapStateToProps,mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('mountNode')
)

// ReactDOM.render(
//   <HelloWorldComponent />,
//   document.getElementById('mountNode')
// );