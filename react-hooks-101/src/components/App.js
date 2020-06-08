import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <>
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <form action="">
          <div className="form -group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input className="form-control" type="text" id="formEventTitle" />
          </div>
          <div className="form -group">
            <label htmlFor="formEventBody">ボディー</label>
            <textarea className="form-control" id="formEventTitle" />
          </div>

          <div className="mt-2">
            <button className="btn btn-primary">イベントを作成</button>
            <button className="btn btn-danger">全てのイベントを削除する</button>
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
          </table>




        </form>
      </div>
    </>
  );
}

export default App;
