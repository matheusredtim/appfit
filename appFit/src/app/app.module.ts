import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CaloriasService } from 'src/services/CaloriasService';
import { NutrientesService } from 'src/services/NutrientesService';
import { TaxaMetabolicaService } from 'src/services/TaxaMetabolicaService';
import { TreinoService } from 'src/services/TreinoService';

import {HttpClientModule} from '@angular/common/http'
import { RmfService } from 'src/services/RmfService';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RmfService,
    CaloriasService,
    NutrientesService,
    TaxaMetabolicaService,
    TreinoService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
