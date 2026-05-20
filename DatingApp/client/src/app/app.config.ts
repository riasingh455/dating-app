import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes.js';
import { InitService } from '../core/services/init-service.js';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { withViewTransitions } from '@angular/router';
import { errorInterceptor } from '../core/interceptors/error-interceptor.js';
import { withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideAppInitializer(async () => {
      const initService = inject(InitService);

      return new Promise<void>((resolve) => {
        setTimeout(async () => {
          try {
            return lastValueFrom(initService.init());
          } finally {
            const splash = document.getElementById("initial-splash");
            if (splash) {
              splash.remove();
            }
            resolve();
          }
        }, 500);
      })



    })
  ]
};
