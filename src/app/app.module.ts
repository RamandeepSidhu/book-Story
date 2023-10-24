import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureComponent } from './component/feature/feature.component';
import { GridComponent } from './component/grid/grid.component';
import { PageComponent } from './component/page/page.component';
import { TeaserComponent } from './component/teaser/teaser.component';
import { DynamicModule } from 'ng-dynamic-component';
import { StoryblokService } from './services/storyblok.service';
import { StoryblokDirective } from '../app/directives/storyblok.directive';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    GridComponent,
    PageComponent,
    TeaserComponent,
    StoryblokDirective
  ],
  imports: [BrowserModule, DynamicModule],
  exports: [BrowserModule, DynamicModule],
  providers: [StoryblokService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
