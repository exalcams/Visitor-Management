import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-here-to-see",
  templateUrl: "./here-to-see.component.html",
  styleUrls: ["./here-to-see.component.scss"],
})
export class HereToSeeComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {
    console.log("heretoseecomponent");

    this.route.navigateByUrl("/home/photoscreen");
  }
}
