import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LoginModule } from './login/login.module';
import { LayoutModule } from './layout/layout.module';
import { SignupModule } from './signup/signup.module';
import { ServerErrorModule } from './server-error/server-error.module';
import { AccessDeniedModule } from './access-denied/access-denied.module';
import { NotFoundModule } from './not-found/not-found.module';
import { TokenStorage } from './core/token.storage';
import { CustomMaterialModule } from './core/material.module';
import { Interceptor } from './core/inteceptor';
import { CanDeactivateGuard } from './shared/guard/can-deactivate/can-deactivate.guard';
import { AppConfirmModule } from './shared/app-confirm/app-confirm.module';
import { SnackBarService } from './core/services/snack-bar.service';


// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    imports: [
        AppConfirmModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LoginModule,
        LayoutModule,
        SignupModule,
        ServerErrorModule,
        AccessDeniedModule,
        NotFoundModule,
        CustomMaterialModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        // UserManagementModule,
        // portal_routing,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    // exports:[PaginationComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    providers: [SnackBarService,AuthGuard,CanDeactivateGuard,TokenStorage,
        {provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi : true}],
       
    bootstrap: [AppComponent]
})
export class AppModule {}
