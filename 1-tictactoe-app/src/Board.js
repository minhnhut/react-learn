import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {

        const status = 'Next player: X';

        return (
            <div className="board">
                <div className="status">{status}</div>
                <div className="row">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
        );
    }
}

export default Board;