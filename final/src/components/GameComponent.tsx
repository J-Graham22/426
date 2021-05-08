/// <reference path="../../node_modules/excalibur/dist/excalibur.d.ts" />;

import React from 'react';
import Game from '../Game';

class GameComponent extends React.Component {
    game: Game = new Game();

    

    render() {
        return (<div className="grid-container">
        <div className="grid-item" id="0">1</div>
        <div className="grid-item" id="1">2</div>
        <div className="grid-item" id="2">3</div>
        <div className="grid-item" id="3">4</div>
        <div className="grid-item" id="4">5</div>
        <div className="grid-item" id="5">6</div>
        <div className="grid-item" id="6">7</div>
        <div className="grid-item" id="7">8</div>
        <div className="grid-item" id="8">9</div>
        </div>);
    }

    onMove() {
        for(let i: number = 0; i < 9; i++) {
            if(this.game.board[i] != 0) {
                document.getElementById(i.toString())!.innerText = this.game.board[i].toString();
            }
        }
    }

    onNewGame() {
        for(let i: number = 0; i < 9; i++) {
            if(this.game.board[i] != 0) {
                document.getElementById(i.toString())!.innerText = (i + 1).toString();
            }
        }
    }

    listener(game: Game) {
        document.addEventListener('keydown', function(e) {
            switch(e.code) {
                case '1':
                    game.placeNewMark(0);
                    break;
                case '2':
                    game.placeNewMark(1);
                    break;
                case '3':
                    game.placeNewMark(2);
                    break;
                case '4':
                    game.placeNewMark(3);
                    break;
                case '5':
                    game.placeNewMark(4);
                    break;
                case '6':
                    game.placeNewMark(5);
                    break;
                case '7':
                    game.placeNewMark(6);
                    break;
                case '8':
                    game.placeNewMark(7);
                    break;
                case '9':
                    game.placeNewMark(8);
                    break;
            }
        });

        if(this.game.isOver) {
            this.onNewGame();
        } else {
            this.onMove();
        }

    }
    

}

export default GameComponent