import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-carrying",
  templateUrl: "./carrying.component.html",
  styleUrls: ["./carrying.component.scss"],
})
export class CarryingComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('carrying');

    this.router.navigateByUrl("/home/epass");
  }
}
