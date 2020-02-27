import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from'@angular/common';
import { ShipmentAppServiceService } from '../shipment-app-service.service';

@Component({
  selector: 'app-delete-provider',
  templateUrl: './delete-provider.component.html',
  styleUrls: ['./delete-provider.component.css']
})
export class DeleteProviderComponent implements OnInit {

  Id:number;
  public prov;
  errorMsg = "";
  constructor(private srv:ShipmentAppServiceService, private location: Location, private rt: ActivatedRoute) { }

  ngOnInit(): void {

  }

  deleteProvider(){
    this.Id = this.rt.snapshot.params["Id"];
    this.srv.DeleteProvider(this.Id).subscribe(

      data => (this.prov = data),
      error => (this.errorMsg = error),
      () => console.log("the Sequence completed!")
    )

    alert("SuccessFully Deleted!");
    this.backClicked();
    this.backClicked();

  }
  backClicked(){

    this.location.back();
  }

}
