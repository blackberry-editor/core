import { Matrix } from "./util"
import type { Property } from "./editor";


// Layers
abstract class Layer<T> {
    readonly name: string;
    readonly content: T;

    constructor(name: string, content: T) {
        this.name = name;
        this.content = content;
    }
}

export class TileLayer extends Layer<Matrix<string>> {
    
}

export class ObjectLayer extends Layer<LayerObject[]> {
    
}


// Layer objects
export class Node {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export abstract class LayerObject {
    x: number;
    y: number;
    nodes: Node[];

    abstract readonly name: string;
    abstract readonly properties: Property<any>[];

    constructor(x: number, y: number, nodes: Node[]) {
        this.x = x;
        this.y = y;
        this.nodes = nodes;
    }
}