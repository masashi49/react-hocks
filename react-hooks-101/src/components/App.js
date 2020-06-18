import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from "./EventForm"
import Events from "./Events"
import AppContext from "../contexts/AppContext"
import reducer from "../reducers";

/** 
 * providerで包まれているcomponentは、どれだけ深い所にあってもuseContextを使用してデータを共有できる
 * prop Drilling問題(バケツリレー)をしないでよくなる。(不要な記述が消えて見通しがよくなる)
 * **/

const App = () => {

  // 今までは空配列初期化していたけど、combineRecuserを導入してオブジェクトにする必要が出てきた。
  const initialState = {
    events: []
  }

  const [ state, dispatch ] = useReducer( reducer, initialState ) // useReducerの第一引数にはreducerの実態、第二引数には初期状態、第三は初期化時のみ発火する関数」
  return (
    <AppContext.Provider value={ { state, dispatch } }>
      <div className="container-fluid">
        <EventForm />{/*stateをpropとして読ませることで、1つのstateを共有する。こうしないと別々のstateを定義してデータが反映されないというバグになる。*/ }
        <Events />
      </div>
    </AppContext.Provider>
  );
}

export default App;
