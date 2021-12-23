import {applyMiddleware, combineReducers, createStore} from "redux";
import {AppState} from "../states/app_state";
import {cardReducer} from "../reducers/card_reducer";
import thunk from "redux-thunk";


const reducers = combineReducers<AppState>({
    cardListState: cardReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))


export const mapStateToProp = (state: AppState): AppState => {
    return {
        cardListState: state.cardListState
    }
}