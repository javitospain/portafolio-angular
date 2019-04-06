import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/productoDescripcion.interface';
import { Producto } from 'src/app/interfaces/info-productos.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  productoId: string;

  constructor( private route: ActivatedRoute, 
    public productoService: ProductosService) { 
  }

  ngOnInit() {

    this.route.params.subscribe( parametros =>{
      //console.log (parametros);
      this.productoService.getProducto(parametros['id'])
        .subscribe( (producto: ProductoDescripcion) => {
          //console.log(producto);
          this.producto = producto;
          this.productoId = parametros['id'];

        })
    })
  }

}
