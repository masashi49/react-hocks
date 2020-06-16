import React from "react"
import Event from "./Event"
import AppContext from "../contexts/AppContext"

const Events = ( { state, dispatch } ) => {
    return (
        <>
            <AppContext.Consumer>
                { value => { return <div>{ value }</div> } }
            </AppContext.Consumer>

            <h4>イベント作成フォーム</h4>
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
        </>
    )
}

export default Events
