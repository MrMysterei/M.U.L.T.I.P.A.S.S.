import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LinksPanelComponent } from './links-panel/links-panel.component';
import { LinkComponent } from './shared/link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksPanelComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  
}
