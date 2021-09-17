import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { XyComponent } from './basic/xy/xy.component';
import { ZzComponent } from './basic/zz/zz.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CalcComponent } from './basic/calc/calc.component';
import { BsUtilModule } from 'src/bs-util/bs-util.module';
import { ConversionComponent } from './conversion/conversion.component';
import { AdminDeviseComponent } from './admin-devise/admin-devise.component';
import { MyAuthInterceptor } from './common/interceptor/my-auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    CalculatriceComponent,
    TvaComponent,
    XyComponent,
    ZzComponent,
    LoginComponent,
    WelcomeComponent,
    CalcComponent,
    ConversionComponent,
    AdminDeviseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsUtilModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyAuthInterceptor,
      multi: true
      }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
