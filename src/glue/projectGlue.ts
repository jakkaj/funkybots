import "reflect-metadata";
import { Container } from "inversify"

//the main glue for the project - the place where you configure all your services that can be injected.

class glue{

    public container:Container;

    constructor() {
        this.container = new Container();
        
    }

}