
export class startup {

    public container: Container;

    constructor() {
        this.container = new Container();

        this.container.bind<contracts.IConfigService>(contracts.tContracts.IConfigService).
            to(configService).inSingletonScope();
    }
}

