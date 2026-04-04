import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service'; /*Aqui vive la logica*/

@Controller() /*esto convierte la clase en un controller HTTP (quien maneja peticiones del navegador)*/
export class AppController {
  /*es una clase normal de type pero Nest la usa como controllador de rutas*/
  constructor(private readonly appService: AppService) {}
  /*Nest automaticamente inyecta el servicio (inyectar es que alguien te de una dependencia aitomaticamente)*/
  /*constructor= una funcion que se ejecuta cuando se crea la clase
  () = significa que la clase necesita un AppService
  "Nest, dame una instancia de AppService cuando crees este controller"
  Es importante ya que permite reutilizacion, desacoplamiento y escalabilidad*/
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
