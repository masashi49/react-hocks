
import React, { useState, useContext } from "react"
import Button from "./Button"
import {
    CREATE_EVENT,
    DELETE_ALL_EVENTS,
    ADD_OPERATION_LOGS,
    DELETE_ALL_OPERATION_LOGS
} from "../actions"

import AppContext from "../contexts/AppContext"
import { timeCUrrentIOS8601 } from "../utils"


const EventForm = () => {
    const { state, dispatch } = useContext( AppContext )
    const [ title, setTitle ] = useState( "" )
    const [ body, setBody ] = useState( "" )
    const [ count, setCount ] = useState( 0 )
    const [ score, setScore ] = useState(0)
    const addEvent = e => {
        e.preventDefault() //buttonを押しても更新されない
        //dispatchをよんで、action.typeとidとtitleを飛ばす必要がある
        dispatch( {
            type: CREATE_EVENT,
            title,
            body
        } )

        dispatch( {
            type: ADD_OPERATION_LOGS,
            description: "イベント追加しました",
            operatedAt: timeCUrrentIOS8601
        } )

        setTitle( '' )
        setBody( '' )
    }

    const deleteAllEvents = e => {
        e.preventDefault() 
        const result = window.confirm( "全てのイベントを本当に削除してもいいですか？" );

        if ( result ) {
            dispatch( {
                type: DELETE_ALL_EVENTS
            } )
            dispatch( {
                type: ADD_OPERATION_LOGS,
                description: "全てのイベントを削除しました",
                operatedAt: timeCUrrentIOS8601
            } )
        }
    }
    const deleteAllLogs = e => {
        e.preventDefault()
        const result = window.confirm( "全てのログを本当に削除してもいいですか？" );
        if ( result ) {
            dispatch( {
                type: DELETE_ALL_OPERATION_LOGS
            } )
        }
    }

    const add = () => { 
        return setCount(count + 1) 
    }
    const red = () => { 
        return setScore(score - 1) 
    }

    const unCreatble = title === "" || body === ""
    return (
        <>
            <h4>イベント作成フォーム</h4>
            <Button handleClick={ add }>年齢 { count}</Button>
            <Button handleClick={ red }>スコア{ score }</Button>
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
                    <button className="btn btn-primary" onClick={ addEvent } disabled={ unCreatble }>イベントを作成</button>
                    <button className="btn btn-danger" onClick={ deleteAllEvents } disabled={ state.events.length === 0 }>全てのイベントを削除する</button>
                    <button className="btn btn-danger" onClick={ deleteAllLogs } disabled={ state.operationLogs.length === 0 }>全てのログを削除する</button>
                </div>
            </form>
        </>
    )
}

export default React.memo(EventForm)
