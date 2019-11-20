import { Hotel } from "./hotel/hotel.model";
import { hotel_api } from "../app.api";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from "app/app.error.handler";

@Injectable()
export class HoteisService {  

    constructor(private http: Http){}

    hoteis(): Observable<Hotel[]> {
        return this.http.get(`${hotel_api}/hoteis`)
                        .map(response => response.json())
                        .catch(ErrorHandler.handleError)
    }
 
  }
    // hotels: Hotel[] = [
    //     {
    //       id: "Lakewood",
    //       name: "Lakewood",
    //       price: 110.00,
    //       priceWeekend: 90,
    //       priceVip: 90,  
    //       priceVipWeekend: 80,
    //       rating: 3,
    //       imagePath: "assets/img/hoteis/hotel-lakewood.jpg",
    //       about: "Lakewood Hotel a melhor hospedagem para curtir sua viagem!",
    //       entryDate: null,
    //       departureDate: null
    //     },
    //     {
    //       id: "Bridgewood",
    //       name: "Bridgewood",
    //       price: 160,
    //       priceWeekend: 60,
    //       priceVip: 110,  
    //       priceVipWeekend: 50,
    //       rating: 4,
    //       imagePath: "assets/img/hoteis/hotel-bridgewood.jpg",
    //       about: "Bridgewood Hotel melhor hospedagem para curtir sua viagem!",
    //       entryDate: null,
    //       departureDate: null
    //     },
    //     { 
    //       id: "Ridgewood",
    //       name: "Ridgewood",
    //       price: 220,
    //       priceWeekend: 150,
    //       priceVip: 100,  
    //       priceVipWeekend: 40,
    //       rating: 5,
    //       imagePath: "assets/img/hoteis/hotel-ridgewood.jpg",
    //       about: "Ridgewood  Hotel melhor hospedagem para curtir sua viagem!",
    //       entryDate: null,
    //       departureDate: null
    //     }
    //   ]
      
    // hoteis(): Hotel[] {
    //     return this.hotels
    // }
