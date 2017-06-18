interface ILogService{
    log(logMessage: string);
}

let contractSymbols = {
    ILogService: Symbol("ILogService")
}

export {contractSymbols, ILogService};