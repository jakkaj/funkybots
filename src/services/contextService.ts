import { injectable, inject } from "inversify/dts/inversify";

import * as contracts from "../contract/contracts";
@injectable()
class contextService{

    private _functionContext:any;
    

    constructor() {
        
    }

    public bootAzureFunctions(context:any){

    }

    public get context():any{
        return this._functionContext;
    }

    public set context(value:any){
        this._functionContext = value;
    }

}