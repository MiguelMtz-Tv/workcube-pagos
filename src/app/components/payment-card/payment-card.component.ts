import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.css']
})
export class PaymentCardComponent {

  @Input() finishedIn: string;
  @Input() owner: string;
  @Input() expiration: string;
  @Input() id : string;

  @ViewChild('editModal') editModal: ElementRef | undefined;
  @ViewChild('deleteModal') deleteModal: ElementRef | undefined;

  constructor(private dataService: DataService){
    this.finishedIn = '';
    this.owner = '';
    this.expiration = '';
    this.id = '';
  }

  //open modals to edit and delete
  openEditModal(){
    this.editModal?.nativeElement.click();
  }
  openDeleteModal(){
    this.deleteModal?.nativeElement.click();
  }
  //

  closeModal(){
    this.dataService.setModalClose('close')
  }

  deleteCard(id : any){
    this.dataService.setPaymentCardId(id);
  }

  //update form:
  form = new FormGroup({
     /* owner: new FormControl('', [Validators.required]), */
     expiration: new FormControl('', [Validators.required])
  })

  onSubmit(id: any){
    let data = {
      id: id,
      /* owner: this.form.value.owner, */
      expiration: this.form.value.expiration
    } 
    this.dataService.setPaymentCardNewData(data)
    this.dataService.setModalClose('close')
  }
  //
}
