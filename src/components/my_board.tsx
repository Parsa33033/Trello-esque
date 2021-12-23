import React, {ChangeEvent} from "react";
import {CardListState} from "../states/card_state";
import {connect} from "react-redux";
import {mapStateToProp} from "../config/store";

interface IMyBoardProp {
    title: string
    cardList: CardListState
    addCard: (title: string) => void
}

interface IMyBoardState {
    showAddCard: boolean
    cardTitle: string
}

class MyBoard extends React.Component<IMyBoardProp, IMyBoardState> {
    constructor(props: IMyBoardProp) {
        super(props);
        this.state = {
            showAddCard: false,
            cardTitle: ""
        }
    }

    style = {height: 380, width: 300, borderRadius: 5, backgroundColor: "#ccd5e3", margin: 20, paddingTop: 15, boxShadow: "5px 5px #8f949c"}

    onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            cardTitle: e.target.value
        })
    }

    render() {
        return(
            <div className="scroll" style={{position: "relative", padding: 5}}>
                <div style={{float: 'left', paddingLeft: 25}}>
                    <h3>{this.props.title}</h3>
                </div>
                <div style={this.style}>
                    {
                        this.state.showAddCard ?
                            <div className="input-group mb-3">
                                <input onChange={this.onTitleChange} value={this.state.cardTitle} type="text" className="form-control" placeholder="Recipient's username"
                                       aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" onClick={() => {
                                            this.props.addCard(this.state.cardTitle)
                                            this.setState({
                                                cardTitle: "",
                                                showAddCard: false
                                            })
                                        }}>Add</button>
                                        <button type="button" className="btn-close" aria-label="Close" onClick={() => {
                                            this.setState({
                                                cardTitle: "",
                                                showAddCard: false
                                            })
                                        }}></button>
                                    </div>
                            </div>
                            :
                            <div/>
                    }

                    <div onClick={() => {this.setState({showAddCard: true})}} style={{position: "absolute", bottom: 0, left: 20, right: 0, height: 20, width: "100%", margin: "auto", cursor: "pointer"}}>
                        + Add Card
                    </div>
                </div>
            </div>
        )
    }
}

export default MyBoard