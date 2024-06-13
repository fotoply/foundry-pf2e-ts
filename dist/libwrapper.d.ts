declare namespace libWrapper {
    type RegisterType = "WRAPPER" | "OVERRIDE" | "MIXED";
    type RegisterCallback = (...args: any[]) => any;
    function register(namespace: string, path: string, fn: RegisterCallback, type?: RegisterType): number;
    function unregister(namespace: string, target: number): void;
}
declare function registerWrapper<P extends string | string[]>(path: P, callback: libWrapper.RegisterCallback, type?: libWrapper.RegisterType, context?: InstanceType<new (...args: any[]) => any>): P extends string[] ? number[] : number;
declare function unregisterWrapper(id: number): void;
declare function createWrapper(path: string, callback: libWrapper.RegisterCallback, options?: {
    context?: InstanceType<new (...args: any[]) => any>;
    type?: libWrapper.RegisterType;
    onDisable?: () => void;
    onActivate?: () => void;
}): {
    activate(): void;
    disable(): void;
    toggle(enabled: boolean): void;
};
declare function wrapperError(path: string, error: Error): void;
export type { libWrapper };
export { createWrapper, registerWrapper, unregisterWrapper, wrapperError };
