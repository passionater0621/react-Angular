import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
//import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { PropertiesModule } from './properties/properties.module';
import { AppInterceptorProvider } from './app.interceptor';
import { AuthenticatedComponent } from './authenticated/authenticated.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    AuthenticatedComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    PropertiesModule,
    AppRoutingModule,
  ],
  providers: [AppInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
