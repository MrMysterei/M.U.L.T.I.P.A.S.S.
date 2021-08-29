import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LinksPanelComponent } from './links-panel/links-panel.component';
import { LinkComponent } from './shared/link/link.component';
import { GlobalSearchComponent } from './shared/global-search/global-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksPanelComponent,
    LinkComponent,
    GlobalSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  
}
