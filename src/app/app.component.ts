import { Component, OnInit } from '@angular/core';
import { BrowserStorageService } from './_Service/browserstorage.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{


  constructor(
    private browserStorageService: BrowserStorageService,
    private router: Router,
    private route: ActivatedRoute,
  ){}
  

    ngOnInit(){
      this.router.events.subscribe(
        (event) => {
          if (event instanceof NavigationEnd) {
            let url = this.router.parseUrl(event.url).root;
            if (Object.keys(url.children).length === 0) {
              this.route.queryParams.subscribe(
                params => {
                  if (params.token !== undefined) {
                    this.browserStorageService.set("token", params.token);
                    this.browserStorageService.set("refreshtoken", params.rt);
                  }
                 // this.menuService.llenarMenuAutenticado();
                }
              );
            } else {
              //this.empleadoService.listarEmpleadoAutenticado();
              //this.menuService.llenarMenuAutenticado();
            }
          }
        }
      );
    }


}
