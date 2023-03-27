export class Documents {
    public year:string;
    public eleccion:string;
    public categoria:string;
    public fechaCategoria:string;
    public urlAGE:string;
    public nombreAGE:string;
    public urlE26:string;
    public nombreE26:string;
    public urlE24:string;
    public nombreE24:string;
    public urlAcuerdos:string;
    public nombreAcuerdos:string;
    public urlDataProceso:string;
    public nombreData:string;

    constructor(year:string,
        eleccion:string,
        categoria:string,
        fechaCategoria:string,
        urlAGE:string,
        nombreAGE:string,
        urlE26:string,
        nombreE26:string,
        urlE24:string,
        nombreE24:string,
        urlAcuerdos:string,
        nombreAcuerdos:string,
        urlDataProceso:string,
        nombreData:string){
            this.year= year;
            this.eleccion= eleccion;
            this.categoria= categoria;
            this.fechaCategoria= fechaCategoria;
            this.urlAGE= urlAGE;
            this.nombreAGE= nombreAGE;
            this.urlE26= urlE26;
            this.nombreE26= nombreE26;
            this.urlE24= urlE24;
            this.nombreE24= nombreE24;
            this.urlAcuerdos= urlAcuerdos;
            this.nombreAcuerdos= nombreAcuerdos;
            this.urlDataProceso= urlDataProceso;
            this.nombreData= nombreData;
        }
}
