// reducerをまとめた


import { combineReducers } from "redux"
import events from "./events"

export default combineReducers( { events } ) //オブジェクトの中にあるイベントというkey
