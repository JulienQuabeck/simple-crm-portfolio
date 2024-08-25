import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "simple-crm-b3eb1", "appId": "1:180299554180:web:d2a6cbf2817483b2bbd1d1", "storageBucket": "simple-crm-b3eb1.appspot.com", "apiKey": "AIzaSyDGoGP4IKmiruKfwaPUWVPxR9dsCF7UQdI", "authDomain": "simple-crm-b3eb1.firebaseapp.com", "messagingSenderId": "180299554180" }))), importProvidersFrom(provideFirestore(() => getFirestore())), provideAnimationsAsync()]
};

