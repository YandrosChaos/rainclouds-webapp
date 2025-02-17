import { Component, OnInit } from "@angular/core";
import { GlobalConstants } from "src/app/common/global-constants";

@Component({
  selector: "app-art-modal",
  templateUrl: "./art-modal.component.html",
  styleUrls: ["./art-modal.component.scss"],
})
export class ArtModalComponent implements OnInit {
  instagram: string = GlobalConstants.INSTAGRAM_URL;
  //alvaro
  alvaroGomezFacebook: string = GlobalConstants.ALVARO_GOMEZ_FACEBOOK;
  alvaroGomezInstagram: string = GlobalConstants.ALVARO_GOMEZ_INSTAGRAM;

  //steel witch
  steelWitchInstagram: string = GlobalConstants.STEEL_WITCH_INSTAGRAM;

  //bullet kid
  bulletKidInstagram: string = GlobalConstants.BULLET_KID_INSTAGRAM;

  constructor() {}

  ngOnInit() {}
}