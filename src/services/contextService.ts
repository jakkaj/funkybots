class contextService{

    private _context:any;

    constructor() {
        
    }

    public get context():any{
        return this._context;
    }

    public set context(value:any){
        this._context = value;
    }

}