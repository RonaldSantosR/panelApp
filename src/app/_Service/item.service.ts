import { Injectable } from '@angular/core';
import { AppSettings } from './app.settings';
import { Item } from '../_Model/Item';
import { RequesterService } from './requester.service';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ItemService {

  REQUEST_URL = AppSettings.API_ENDPOINT + AppSettings.ITEM_URL;

  public itemsChanged = new Subject<Item[]>();
  private items : Item[];

  constructor(private requester: RequesterService) { 
    this.listarItems().subscribe( 
      items => {
          this.items = items;
          this.itemsChanged.next(this.items);
      }
    )
  }

  getItems(): Item[]{
    return this.items;
  }

  listarItems() : Observable<Item[]> {
    return this.requester.get<Item[]>(this.REQUEST_URL+"activos",{});
  }

  modificarItem(item: Item) : Observable<Item>{
    return this.requester.put<Item>(this.REQUEST_URL+"modificar",item, {});
  }

  listarOrdenes() : Observable< Number[] >{
    return this.requester.get<Number[]>(this.REQUEST_URL+"ordenitems",{});
  }

}
