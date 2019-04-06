import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from '../interfaces/info-equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: InfoEquipo = {};
  cargada = false;

  constructor(private http: HttpClient) {

    //console.log('Funciona');
    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo(){
     //https://angular-html-98995.firebaseio.com/equipo.json

         // Leer fichero JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe ( (resp: InfoPagina) => {

      this.cargada = true;
      this.info = resp;
      //console.log(resp.email);
      //console.log( resp['web'] );
      //console.log( resp['twitter'] );
    })
  }

    private cargarEquipo(){

      this.http.get('https://angular-html-98995.firebaseio.com/equipo.json')
      .subscribe ( (resp: InfoEquipo) => {
  
        this.cargada = true;
        this.equipo = resp;
        //console.log(resp);
        //console.log( resp['web'] );
        //console.log( resp['twitter'] );
      })

   }
}
