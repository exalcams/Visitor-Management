import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  dateTime = new Date();

  constructor(private route: Router) {}

  ngOnInit() {
    console.log("homecomponent");

    this.route.navigateByUrl("/home/heretosee");
  }
}
