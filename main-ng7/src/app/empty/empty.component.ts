import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from "@angular/router";
// import { registerMicroApps, setDefaultMountApp, start } from "qiankun";

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.less']
})
export class EmptyComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
    console.log('this.router.url', this.router.url)
    // registerMicroApps([
    //   {
    //     name: "micro-child-app1", // 子应用名字
    //     entry: "//localhost:8899", // 子应用的入口
    //     container: "#subapp-viewport", // 挂载子应用时的id选择器出口
    //     activeRule: "/main/micro-child-app1", // 匹配路径
    //     props: { brand: "qiankun" },
    //   },
    // ]);
    // setDefaultMountApp("/micro-child-app1"); // 默认挂载子应用
  }

  ngAfterViewInit(): void {
    // start();
  }
}
