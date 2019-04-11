import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { RouterModule, Routes } from '@angular/router';
import { MyDataComponent } from './my-data/my-data.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { OperationsComponent } from './operations/operations.component';
import { HelpComponent } from './help/help.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: "home", component: MyDashboardComponent },
  { path: "wallet", component: MyWalletComponent },
  { path: "operations", component: OperationsComponent },
  { path: "info", component: MyDataComponent },
  { path: "help", component: HelpComponent },
  { path: "", redirectTo: '/home', pathMatch: "full"},
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MyWalletComponent,
    MyDataComponent,
    MyDashboardComponent,
    OperationsComponent,
    HelpComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
