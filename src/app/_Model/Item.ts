import { TipoItem } from './TipoItem';

export class Item{

    constructor() {}

    public id: number;
    public nombre: string;
    public descripcion:string;
    public ruta_imagen:string;
    public orden:string;
    public color:string;
    public link_ruta:string;
    public tipoItem : TipoItem;
}