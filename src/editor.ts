import type { AsyncComponentLoader, AsyncComponentOptions } from "@vue/runtime-core"


type VueAsyncComponent = AsyncComponentLoader | AsyncComponentOptions

export abstract class Property<T> {
    default: T;
    component: VueAsyncComponent;
    enabled: boolean = true;

    constructor(defaultValue: T, component: VueAsyncComponent) {
        this.default = defaultValue;
        this.component = component;
    }
}

