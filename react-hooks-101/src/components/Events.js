import React, { useContext } from "react"
import Event from "./Event"
import AppContext from "../contexts/AppContext"

const Events = () => {
    const { state } = useContext( AppContext )
    return (
        <>
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
                        <Event key={ index } event={ event } />
                    ) )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Events
