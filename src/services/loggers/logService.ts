
import { ILogService } from "../../contract/contracts";
import { injectable, inject } from "inversify/dts/inversify";
import * as contracts from "../../contract/contracts";

@injectable()
class logService implements ILogService {
    
    private _logCallback:(logMessage:string) => null;

    constructor(@inject(contracts.contractSymbols.ILogService) logService:contracts.ILogService) {
            
    }

    public setLogCallback(callback:(logMessage:string) => any){
        this._logCallback = callback;    
    }

    public log(logMessage:string){
        this._logCallback(logMessage);
    }
}