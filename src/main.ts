import { enableProdMode } from "@angular/core";
import { platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment'

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamicTesting().bootstrapModule(AppModule)
.catch(error => console.error(error)); 

