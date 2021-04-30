import DummyModule from "./dummyModule";

class App {
    constructor() {
        this.main();
    }

    public main() : void {
        const dummyModule = new DummyModule<string>();
        dummyModule.name = "Huy";
        console.log(dummyModule.name);
    }
}

const app = new App();