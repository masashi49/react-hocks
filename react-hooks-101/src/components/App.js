import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Event from "./Event"
import reducer from "../reducers";

const App = () => {
  const [ state, dispatch ] = useReducer( reducer, [] ) // useReducerの第一引数にはreducerの実態、第二引数には初期状態、第三は初期化時のみ発火する関数」
  const [ title, setTitle ] = useState( "" )
  const [ body, setBody ] = useState( "" )

  const addEvent = e => {
    e.preventDefault() //buttonを押しても更新されない
    //dispatchをよんで、action.typeとidとtitleを飛ばす必要がある
    dispatch( {
      type: "CREATE_EVENT",
      title,
      body
    } )

    setTitle( '' )
    setBody( '' )
  }

  const deleteAllEvent = e => {
    e.preventDefault()
    console.log( state )
  }

  return (
    <>
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <form action="">
          <div className="form -group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input className="form-control" type="text" id="formEventTitle" value={ title } onChange={ e => setTitle( e.target.value ) } />
          </div>
          <div className="form -group">
            <label htmlFor="formEventBody">ボディー</label>
            <textarea className="form-control" id="formEventTitle" value={ body } onChange={ e => setBody( e.target.value ) } />
          </div>

          <div className="mt-2">
            <button className="btn btn-primary" onClick={ addEvent }>イベントを作成</button>
            <button className="btn btn-danger" onClick={ deleteAllEvent }>全てのイベントを削除する</button>
          </div>

          <table className="table table-hover mt-4">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">タイトル</th>
                <th scope="col">ボディー</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              { state.map( ( event, index ) => (
                <Event key={ index } event={ event } dispatch={ dispatch } />
              ) )
              }
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}

export default App;
