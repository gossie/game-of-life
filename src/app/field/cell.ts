import { Status } from './status';

export class Cell {

    private readonly x: number;
    private readonly y: number;
    private status: Status;

    constructor(x: number, y: number, status: Status) {
        this.x = x;
        this.y = y;
        this.status = status;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public getStatus(): Status {
        return this.status;
    }

    public setStatus(status: Status): void {
        this.status = status;
    }
}
