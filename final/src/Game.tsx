export default class Game {
    board: number[];
    isXTurn: boolean;
    isOver: boolean;
    winner: string;

    constructor() {
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.isXTurn = true;
        this.isOver = false;
        this.winner = "In progress";
    }

    setupNewGame() {
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.isXTurn = true;
        this.isOver = false;
        this.winner = "In progress";
    }

    placeNewMark(id: number) {
        if(this.board[id] != 0) {
            alert("That is not a valid move");
            return;
        };

        if(this.isXTurn) {
            this.board[id] = 1;
            this.isXTurn = false;
        } else {
            this.board[id] = 2;
            this.isXTurn = true;
        }

        this.checkForWin();

        this.checkForValidMoves();
    }

    checkForValidMoves() {
        for(let i: number = 0; i < this.board.length; i++) {
            if(this.board[i] == 0) {
                //then there are valid moves remaining
            }
        }
    }

    checkForWin() {
        //Horizontal
        for(let i: number = 0; i < 9; i+=3) {
            let searchingFor = this.board[i];
            let count: number = 0;
            for(let j: number = i; j < 3; j++) {
                if(this.board[j] == searchingFor) {
                    count++;
                }
            }
            if(count == 3) {
                this.isOver = true;
                if(this.isXTurn) {
                    this.winner = "O";
                } else {
                    this.winner = "X";
                }
                //call some kind of over function here
                alert(this.winner + " is the winner!");
                this.setupNewGame();
            }
        }

        //Vertical
        for(let i: number = 0; i < 3; i++) {
            let searchingFor = this.board[i];
            let count: number = 0;
            for(let j: number = i; j < 9; j+=3) {
                if(this.board[j] == searchingFor) {
                    count++;
                }
            }
            if(count == 3) {
                this.isOver = true;
                if(this.isXTurn) {
                    this.winner = "O";
                } else {
                    this.winner = "X";
                }
                //call some kind of over function here
                alert(this.winner + " is the winner!");
                this.setupNewGame();
            }
        }

        //Diagonals
        if((this.board[0] == this.board[4] && this.board[4] == this.board[8]) || (this.board[2] == this.board[4] && this.board[4] == this.board[6])) {
            this.isOver = true;
            if(this.isXTurn) {
                this.winner = "O";
            } else {
                this.winner = "X";
            }
            //call some kind of over function here
            alert(this.winner + " is the winner!");
            this.setupNewGame();
        }
    }
}