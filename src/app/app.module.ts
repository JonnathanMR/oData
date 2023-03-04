import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { DocumentsTableComponent } from './documents-table/documents-table.component';
import { FooterComponent } from './footer/footer.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { CitizenServiceComponent } from './citizen-service/citizen-service.component';
import { FloatingMenuComponent } from './floating-menu/floating-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    DocumentsTableComponent,
    FooterComponent,
    RightMenuComponent,
    CitizenServiceComponent,
    FloatingMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
