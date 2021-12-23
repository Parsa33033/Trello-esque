import {CardListState, CardState} from "../states/card_state";
import {ThunkDispatch} from 'redux-thunk'
import {appAction} from "./app_action";
import {Card} from "../models/card";

export const ADD_CARD: string = "add_card"

interface AddCard {
    type: typeof ADD_CARD,
    payload: CardListState
}

export type cardActions = AddCard


export const addCard = (dispatch: ThunkDispatch<{}, {}, appAction>, cardListState: CardListState) => {
    dispatch({
        type: ADD_CARD,
        payload: cardListState
    })
}