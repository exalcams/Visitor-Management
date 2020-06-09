import { EpassComponent } from "./epass/epass.component";
import { CarryingComponent } from "./carrying/carrying.component";
import { DetailsComponent } from "./details/details.component";
import { PhotoscreenComponent } from "./photoscreen/photoscreen.component";
import { HereToSeeComponent } from "./here-to-see/here-to-see.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
  },
  {
    path: "heretosee",
    component: HereToSeeComponent,
  },
  {
    path: "photoscreen",
    component: PhotoscreenComponent,
  },
  {
    path: "detail",
    component: DetailsComponent,
  },
  {
    path: "carrying",
    component: CarryingComponent,
  },
  {
    path: "epass",
    component: EpassComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
