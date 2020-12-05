export class Dispositivo{
    public dispositivoId: number;
    public nombre:string;
    public ubicacion:string;
    public electrovalvulaId: number;

    //Set methods
    set DispositivoId(dispid:number){
        this.dispositivoId = dispid;
    }
    set Nombre(nombre:string){
        this.nombre = nombre;
    }
    set Ubicacion(ubicacion:string){
        this.ubicacion = ubicacion;
    }
    set ElectroValvulaId(elevalid:number){
        this.electrovalvulaId = elevalid;
    }

    //Get methods
    get DispositivoId(){
        return this.dispositivoId;
    }
    get Nombre(){
        return this.nombre;
    }
    get Ubicacion(){
        return this.ubicacion;
    }
    get ElectroValvulaId(){
        return this.electrovalvulaId;
    }


    constructor(dispid:number,nombre:string,ubicacion:string,elevalid:number){
        this.dispositivoId = dispid;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.electrovalvulaId = elevalid;
    }
}