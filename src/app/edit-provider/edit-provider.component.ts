import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from'@angular/common';
import { ShipmentAppServiceService } from '../shipment-app-service.service';
import { EditProvider } from'./EditProvider';

@Component({
  selector: 'app-edit-provider',
  templateUrl: './edit-provider.component.html',
  styleUrls: ['./edit-provider.component.css']
})
export class EditProviderComponent implements OnInit {


  Pro = new EditProvider (null,null,'','','','','','','','','','','','',null,null,null);
  Id:number;
  public provid;
  errorMsg = "";


  constructor(private ProSr:ShipmentAppServiceService, private locatio:Location, private rt:ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.rt.snapshot.params["Id"];
    this.Pro.Id = this.Id;
  }

  success(){
    alert("Edit successfully!");
    this.locatio.back();
    this.locatio.back();

  }

  onSubmit(){

    console.log(this.Id);
    this.ProSr.EditProviders(this.Id, this.Pro)
    .subscribe(
      data => console.log('data',data),
      error => console.log('error',error)

    );
    this.success();

    console.log("OKkkkkk")

  }
  back(){
    this.locatio.back();
    this.locatio.back();
    this.locatio.back();
  }
}
