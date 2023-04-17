import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { IonicRouteStrategy } from '@ionic/angular';

@NgModule({
  providers: [
    FingerprintAIO,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  
})
export class AppModule { }