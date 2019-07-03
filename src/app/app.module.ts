import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BootstarpComponent } from './bootstarp/bootstarp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatrialComponent } from './matrial/matrial.component';
import { MatrialDemoComponent } from './matrial-demo/matrial-demo.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BootstarpComponent,
    MatrialComponent,
    MatrialDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
