import { Cell } from './cell';
import { Status } from './status';

export class Field {

    private readonly cells: Cell[][];
    private readonly maxNumberOfNewSamples: number;

    constructor(maxNumberOfNewSamples: number, cells: Cell[][])
    constructor(maxNumberOfNewSamples: number, width: number, height: number)
    constructor(maxNumberOfNewSamples: number, cellsOrWidth: any, height?: number) {
        this.maxNumberOfNewSamples = maxNumberOfNewSamples;
        if (typeof cellsOrWidth === 'number') {
            this.cells = [];
            for (let y = 0; y < height; y++) {
                this.cells[y] = [];
                for (let x = 0; x < cellsOrWidth; x++) {
                    this.cells[y][x] = new Cell(x, y, Status.DEAD);
                }
            }
        } else {
            this.cells = cellsOrWidth;
        }
    }

    private determineNumberOfAliveNeighbors(x: number, y: number): number {
        let result = 0;

        result += this.cells[this.determineY(y - 1)][this.determineX(x - 1)].getStatus() === Status.ALIVE ? 1 : 0;
        result += this.cells[this.determineY(y - 1)][x].getStatus() === Status.ALIVE ? 1 : 0;
        result += this.cells[this.determineY(y - 1)][this.determineX(x + 1)].getStatus() === Status.ALIVE ? 1 : 0;
        result += this.cells[y][this.determineX(x + 1)].getStatus() === Status.ALIVE ? 1 : 0;
        result += this.cells[this.determineY(y + 1)][this.determineX(x + 1)].getStatus() === Status.ALIVE ? 1 : 0;
        result += this.cells[this.determineY(y + 1)][x].getStatus() === Status.ALIVE ? 1 : 0;
        result += this.cells[this.determineY(y + 1)][this.determineX(x - 1)].getStatus() === Status.ALIVE ? 1 : 0;
        result += this.cells[y][this.determineX(x - 1)].getStatus() === Status.ALIVE ? 1 : 0;

        return result;
    }

    private determineX(x: number): number {
        if (x < 0) {
            return this.cells[0].length - 1;
        } else if (x >= this.cells[0].length) {
            return 0;
        } else {
            return x;
        }
    }

    private determineY(y: number): number {
        if (y < 0) {
            return this.cells.length - 1;
        } else if (y >= this.cells.length) {
            return 0;
        } else {
            return y;
        }
    }

    public round(): Field {
        const newCells: Cell[][] = [];
        for (let y = 0; y < this.cells.length; y++) {
            newCells[y] = [];
        }

        for (let y = 0; y < this.cells.length; y++) {
            for (let x = 0; x < this.cells[y].length; x++) {
                const numberOfAliveNeighbors: number = this.determineNumberOfAliveNeighbors(x, y);
                if (numberOfAliveNeighbors < 2) {
                    newCells[y][x] = new Cell(x, y, Status.DEAD);
                } else if (numberOfAliveNeighbors > 3) {
                    newCells[y][x] = new Cell(x, y, Status.DEAD);
                } else if (numberOfAliveNeighbors === 3) {
                    newCells[y][x] = new Cell(x, y, Status.ALIVE);
                } else {
                    newCells[y][x] = this.cells[y][x];
                }
            }
        }

        for (let i = 0; i < this.maxNumberOfNewSamples; i++) {
            const x: number = (Math.random() * newCells[0].length) | 0;
            const y: number = (Math.random() * newCells.length) | 0;

            newCells[y][x] = new Cell(x, y, Status.ALIVE);
        }

        return new Field(this.maxNumberOfNewSamples, newCells);
    }

    public clear(): Field {
        return new Field(this.maxNumberOfNewSamples, this.cells[0].length, this.cells.length);
    }

    public getCells(): Cell[][] {
        return this.cells;
    }

    public setMaxNumberOfNewSamples(maxNumberOfNewSamples: number): Field {
        return new Field(maxNumberOfNewSamples, this.cells);
    }
}
