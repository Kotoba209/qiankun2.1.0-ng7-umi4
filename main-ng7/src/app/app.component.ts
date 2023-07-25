import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { registerMicroApps, setDefaultMountApp, start } from "qiankun";
import { MenuItem } from "primeng/api";
import { actions } from "../plugins/microAppAction.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
  title = "main-ng7";
  items: MenuItem[];
  constructor(public router: Router) {
    this.items = [
      {
        label: "主应用",
        items: [
          { label: "主应用页面1", icon: "pi pi-fw pi-list", url: "/main/home" },
          {
            label: "主应用页面2",
            icon: "pi pi-fw pi-list",
            url: "/main/about",
          },
        ],
      },
      {
        label: "子应用",
        items: [
          {
            label: "微应用页面1",
            icon: "pi pi-fw pi-folder",
            url: "/main/micro-app/micro/empty/page1;data=123",
          },
        ],
      },
    ];
  }
  ngOnInit(): void {
    const state = actions({ page: "main", _router: this.router });
    // actions.onGlobalStateChange((state, prevState) => {
    //   console.log("主应用变更前：", prevState);
    //   console.log("主应用变更后：", state);
    // });
    registerMicroApps([
      {
        name: "nimp-wfa-micro", // 子应用名字
        entry: "//localhost:8000", // 子应用的入口
        container: "#subapp-viewport", // 挂载子应用时的id选择器出口
        activeRule: "main/micro-app", // 匹配路径
        props: { brand: "qiankun", actions: state },
      },
    ]);
    setDefaultMountApp("/main/micro-app/micro/empty/page1;data=123"); // 默认挂载子应用
  }

  ngAfterViewInit(): void {
    start();
  }
}
