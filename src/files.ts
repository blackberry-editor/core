interface Entry {
    name: string;
    parent?: Directory;
}

export interface Directory extends Entry {
    child(name: string): Entry;
}

export interface File extends Entry {
    
}