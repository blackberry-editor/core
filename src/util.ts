export class Matrix<T> {
    readonly columns: number;
    readonly rows: number;
    readonly data: T[];
    
    constructor(columns: number, rows: number, data: T[]) {
        this.columns = columns;
        this.rows = rows;
        this.data = Array.from(data);
    }

    constructor(columns: number, rows: number, data: T) {
        this(columns, rows, new Array(data, columns * rows));
    }
}