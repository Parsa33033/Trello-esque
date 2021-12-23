import {CardListState, cardListStateInit} from "./card_state";

export const appStateInit: AppState = {
    cardListState: cardListStateInit
}

export interface AppState {
    cardListState: CardListState
}