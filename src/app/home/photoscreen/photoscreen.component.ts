import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-photoscreen",
  templateUrl: "./photoscreen.component.html",
  styleUrls: ["./photoscreen.component.scss"],
})
export class PhotoscreenComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  takePic() {
    this.route.navigateByUrl('/home/detail');
  }
}
