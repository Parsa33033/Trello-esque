import {Card} from "../models/card";
import {Board} from "../models/enums/board_enum";


export const cardStateInit: CardState = {
    title: "",
    board: Board.TODO
}

export const cardListStateInit: CardListState = {
    cardList: []
}

export interface CardState extends Card {

}

export interface CardListState {
    cardList: CardState[]
}