import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { EmptyComponent } from "./empty/empty.component";

const routes: Routes = [
  { path: "", redirectTo: "main/home", pathMatch: "full" }, //路径为空
  {
    path: "main",
    // component: '',
    children: [
      {
        path: "home",
        component: HomeComponent,
        pathMatch: "full"
      },
      {
        path: "about",
        component: AboutComponent,
      },
      {
        path: "micro-app/micro/empty/:id",
        component: EmptyComponent,
        // pathMatch: 'prefix'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
