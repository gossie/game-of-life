import { Cell } from './cell';
import { Status } from './status';

export class Field {

    private cells: Cell[][];

    constructor(width: number, height: number) {
        this.cells = [];
        for(let y: number = 0; y < height; y++) {
            this.cells[y] = [];
            for(let x: number = 0; x < width; x++) {
                this.cells[y][x] = new Cell(x, y, Status.DEAD);
            }
        }
    }

    private determineNumberOfAliveNeighbors(x: number, y: number): number {
        let result: number = 0;

        result += this.cells[this.determineY(y-1)][this.determineX(x-1)].getStatus() === Status.ALIVE ? 1 : 0;
        result += this.cells[this.determineY(y-1)][x].getStatus() === Status.ALIVE ? 1 : 0;
        result += this.cells[this.determineY(y-1)][this.determineX(x+1)].getStatus() === Status.ALIVE ? 1 : 0;
        result += this.cells[y][this.determineX(x+1)].getStatus() === Status.ALIVE ? 1 : 0;
        result += this.cells[this.determineY(y+1)][this.determineX(x+1)].getStatus() === Status.ALIVE ? 1 : 0;
        result += this.cells[this.determineY(y+1)][x].getStatus() === Status.ALIVE ? 1 : 0;
        result += this.cells[this.determineY(y+1)][this.determineX(x-1)].getStatus() === Status.ALIVE ? 1 : 0;
        result += this.cells[y][this.determineX(x-1)].getStatus() === Status.ALIVE ? 1 : 0;

        return result;
    }

    private determineX(x: number): number {
        if(x < 0) {
            return this.cells[0].length-1;
        } else if(x >= this.cells[0].length) {
            return 0;
        } else {
            return x;
        }
    }

    private determineY(y: number): number {
        if(y < 0) {
            return this.cells.length-1;
        } else if(y >= this.cells.length) {
            return 0;
        } else {
            return y;
        }
    }

    public round(): void {
        const newCells: Cell[][] = [];
        for(let y: number = 0; y < this.cells.length; y++) {
            newCells[y] = [];
        }

        for(let y: number = 0; y < this.cells.length; y++) {
            for(let x: number = 0; x < this.cells[y].length; x++) {
                const numberOfAliveNeighbors = this.determineNumberOfAliveNeighbors(x, y);
                if(numberOfAliveNeighbors < 2) {
                    newCells[y][x] = new Cell(x, y, Status.DEAD);
                } else if(numberOfAliveNeighbors > 3) {
                    newCells[y][x] = new Cell(x, y, Status.DEAD);
                } else if(numberOfAliveNeighbors === 3) {
                    newCells[y][x] = new Cell(x, y, Status.ALIVE);
                } else {
                    newCells[y][x] = this.cells[y][x];
                }
            }
        }
        this.cells = newCells;
    }

    public getCells(): Cell[][] {
        return this.cells;
    }
}
