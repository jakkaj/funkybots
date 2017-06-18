
import { ILogService } from "../../contract/contracts";

class consoleLogService implements ILogService {
    public log(logMessage:string){
        console.log(logMessage);
    }
}