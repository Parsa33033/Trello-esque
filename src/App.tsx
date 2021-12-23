import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {mapStateToProp} from "./config/store";
import {appAction} from "./actions/app_action";
import {ThunkDispatch} from "redux-thunk";
import {addCard} from "./actions/card_action";
import {CardListState, CardState} from "./states/card_state";
import MyBoard from "./components/my_board";
import {Board, DONE, INPROGRESS, QA, TODO} from "./models/enums/board_enum";

interface IAppState {

}

class App extends React.Component<ReturnType<typeof mapStateToProp> & ReturnType<typeof mapDispatchToProp>, IAppState> {

  render() {
    return (
        <div>
            <div className="row">
                <div className="col-3"><MyBoard title={TODO} cardList={this.props.cardListState} addCard={(title: string)=>{
                    const card: CardState = {
                        title: title,
                        board: Board.TODO
                    }
                    this.props.cardListState.cardList.push()
                    this.props.addCard(this.props.cardListState)
                }}/></div>
                <div className="col-3"><MyBoard title={DONE} cardList={this.props.cardListState} addCard={()=>{}}/></div>
                <div className="col-3"><MyBoard title={QA} cardList={this.props.cardListState} addCard={()=>{}}/></div>
                <div className="col-3"><MyBoard title={INPROGRESS} cardList={this.props.cardListState} addCard={()=>{}}/></div>
            </div>
        </div>
    );
  }
}


const mapDispatchToProp = (dispatch: ThunkDispatch<{}, {}, appAction>) => {
    return {
        addCard: (cardListState: CardListState) => addCard(dispatch, cardListState),
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(App)
