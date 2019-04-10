import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private firestore: AngularFirestore ) { }
  form = new FormGroup({
    customerName: new FormControl(''),
    orderNumber : new FormControl(''),
    coffeeOrder : new FormControl(''),
    completed:new FormControl(false)
  })
}
