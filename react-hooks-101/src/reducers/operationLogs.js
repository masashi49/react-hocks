import {
    ADD_OPERATION_LOS,
     DELETE_ALL_EVENTS
} from "../actions"

const operationLogs = ( state = [], action ) => {
    switch ( action.type ) {
        case ADD_OPERATION_LOS:
            const operationLog = {
                description: action.description,
                operatedAt: action.operatedAt
            }
            return [ operationLog, ...state ]
        case DELETE_ALL_EVENTS:
            return []
        default:
            return state
    }
}

export default operationLogs
