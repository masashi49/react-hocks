import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from "./EventForm"
import Events from "./Events"
import AppContext from "../contexts/AppContext"
import reducer from "../reducers";

console.log( AppContext )

const App = () => {
  const [ state, dispatch ] = useReducer( reducer, [] ) // useReducerの第一引数にはreducerの実態、第二引数には初期状態、第三は初期化時のみ発火する関数」
  return (
    <AppContext.Provider value="hello i am a provieder">
      <div className="container-fluid">
        <EventForm state={ state } dispatch={ dispatch } />{/*stateをpropとして読ませることで、1つのstateを共有する。こうしないと別々のstateを定義してデータが反映されないというバグになる。*/ }
        <Events state={ state } dispatch={ dispatch } />
      </div>
    </AppContext.Provider>
  );
}

export default App;
