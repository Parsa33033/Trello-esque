import {CardListState, cardListStateInit, CardState, cardStateInit} from "../states/card_state";
import {ADD_CARD, cardActions} from "../actions/card_action";


export const cardReducer = (state: CardListState = cardListStateInit, action: cardActions): CardListState => {
    switch (action.type) {
        case ADD_CARD: {
            return {
                cardList: action.payload.cardList != null ? action.payload.cardList : state.cardList
            }
        }
        default: {
            return state
        }
    }
}