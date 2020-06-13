/**
 * actionの中身を考える
 * action = {
 *  type: 'CREATE_EVENT',
 *  title: 'タイトル',
 *  body: '内容'
 * }
 * 
 * before
 * state = []
 * after
 * state = [
 * {id:1,title:'',body:''},
 * ]
 * 
 * 
 * before
 * state = [
 *   {id:1,title:'タイトル',body:'ボディ'},
 *   {id:2,title:'タイトル',body:'ボディ'},
 *   {id:3,title:'タイトル',body:'ボディ'},
 * ]
 * 
 * after
 *  * state = [
 *   {id:1,title:'タイトル',body:'ボディ'},
 *   {id:2,title:'タイトル',body:'ボディ'},
 *   {id:3,title:'タイトル',body:'ボディ'},
 *   {id:4,title:'タイトル',body:'ボディ'},
 * ]
 * */

import {
    CREATE_EVENT,
    DELETE_EVENT,
    DELETE_ALL_EVENTS,
} from "../actions"


const events = ( state = [], action ) => {
    switch ( action.type ) {
        case CREATE_EVENT:
            const event = { title: action.title, body: action.body }
            const length = state.length
            let id = length === 0 ? 1 : state[ length - 1 ].id + 1 //配列は0から数える、lengthは1空数えるため、-1で一番最後のものを取得できる
            return [ ...state, { id, ...event } ] //idは今作ったものでOK、その他は分割代入で一気に入れる

        case DELETE_EVENT:
            return state.filter( event => // 1つづつ取り出して
                event.id !== action.id    // deleteしたいidと一致しないものだけと取り出して返す
            );

        case DELETE_ALL_EVENTS:
            return [] //これで空にできる

        default:
            return state
    }
}

export default events
