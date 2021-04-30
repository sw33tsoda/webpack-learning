export default class DummyModule<T> {
    private _name:T;

    public set name(name:T) {
        this._name = name;
    }
    public get name() : T {
        return this._name;
    }
}