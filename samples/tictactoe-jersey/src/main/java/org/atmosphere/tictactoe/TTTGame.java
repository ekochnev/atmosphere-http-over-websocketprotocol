
package org.atmosphere.tictactoe;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class TTTGame {

    final public static int X = 10;
    final public static int O = 1;

    public int[] board = {0, 0, 0, 0, 0, 0, 0, 0, 0};
    public int turnNum = 0;
    public int[][] wins = {{0, 1, 2}, {3, 4, 5,}, {6, 7, 8}, {0, 3, 6},
            {1, 4, 7}, {2, 5, 8}, {0, 4, 8}, {2, 4, 6}};
    public int winner = -1;
    public int yourSide = 0;

    public TTTGame() {

    }
    public TTTGame(int[] initBoard) {
        board = initBoard;
    }

    //return false if cell is an invalid move
    public boolean turn(int cell) {
        if (cell < 0 || cell > 8) {
            return false; // invalid move
        }
        if (winner != -1) {
            return false;
        }
        if (board[cell] != 0) {
            return false; // invalid move
        }
        turnNum++;
        if (turnNum % 2 == 1) { //then X
            board[cell] = X;
        } else { // else O
            board[cell] = O;
        }
        return true;
    }

    // return 
    private int whoseTurn() {
        if (turnNum == 0 || turnNum % 2 == 0) {
            return X;
        } else {
            return O;
        }
    }

    private boolean done() {
        return (turnNum > 8);
    }

    // return -1 for no win, 0 for tie, 1 for x win, 2 for o win
    public int win() {
        if (winner != -1) {
            return winner;
        }
        for (int i = 0; i < 8; i++) {
            int winSum = board[wins[i][0]] + board[wins[i][1]] + board[wins[i][2]];
            if (winSum == 3) {
                winner = 2;
            } else if (winSum == 30) {
                winner = 1;
            }
        }
        if (winner == -1 && turnNum > 8) {
            winner = 0;
        }
        return winner;
    }

    private int[] getBoard() {
        return board;
    }
}