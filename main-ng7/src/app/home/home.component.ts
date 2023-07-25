import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { actions } from '../../plugins/microAppAction.js'

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"],
})
export class HomeComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  handleClick(e) {
    // const state = actions({page: 'home'});
    // 调用setGlobalState()方法对初始值进行修改
    // actions.setGlobalState({ route: this.router, test: "homePage" });
    this.router.navigate(["/main/micro/pageA;"], { queryParams: { params: 12345 } });
  }
}
