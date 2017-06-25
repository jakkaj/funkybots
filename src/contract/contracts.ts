interface ILogService{
    log(logMessage: string);
    setLogCallback(callback:(logMessage:string) => any);
}



interface IServerlessContext{

}

let contractSymbols = {
    ILogService: Symbol("ILogService"), 
    IServerlessContext: Symbol("IServerlessContext")
}

export {contractSymbols, ILogService, IServerlessContext};