import { Component, OnInit, NgZone } from "@angular/core";
import { Router, RouterModule, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.less"],
})
export class AboutComponent implements OnInit {
  constructor(
    private router: Router,
    private ngZone: NgZone,
    // private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  public navigate(commands: any[]): void {
    this.ngZone.run(() => this.router.navigate(commands)).then();
  }

}
