import "reflect-metadata";
import { Container } from "inversify"
import { ILogService, contractSymbols } from "./contract/contracts";

export class startup {

    public container: Container;

    constructor() {
        this.container = new Container();

        this.container.bind<ILogService>(contractSymbols.ILogService).
            to(configService).inSingletonScope();
    }
}

