import { TipoItem } from './TipoItem';
import { SafeStyle, SafeResourceUrl } from '../../../node_modules/@angular/platform-browser';

export class Item{

    constructor() {}

    public id: number;
    public nombre: string;
    public descripcion:string;
    public ruta_imagen:SafeResourceUrl;
    public orden:number;
    public color:string;
    public link_ruta:string;
    public tipoItem : TipoItem;
}