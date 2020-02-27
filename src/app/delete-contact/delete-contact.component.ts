import { Component, OnInit } from '@angular/core';
import { ShipmentAppServiceService } from'../shipment-app-service.service';
import{ ActivatedRoute } from'@angular/router';
import { Location} from'@angular/common';
import { tick } from '@angular/core/testing';
@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent implements OnInit {


  ContID:number;
  public Contact;
  errorMsg ="";


  constructor(private ContService: ShipmentAppServiceService, private location: Location, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }


  deleteContact(){

    this.ContID = this.actRoute.snapshot.params["id"];
    this.ContService.deleteContact(this.ContID).subscribe(

      data => (this.Contact = data),
      error => (this.errorMsg = error),
      () =>  console.log("the sequence completed!")
    )

    alert("Deleted");
    this.backCliked();
    this.backCliked();
  }

  backCliked(){

    this.location.back();
  }
}
