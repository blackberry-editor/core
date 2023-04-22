import type { Property } from "./editor";

export interface LayerObject {
    x: number;
    y: number;
    nodes: Node[];
    properties: Property<any>[];
}