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
import { TextContentComponent } from './component/text-content/text-content.component';
import { ImageContentComponent } from './component/image-content/image-content.component';
import { HomePageComponent } from './component/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    GridComponent,
    PageComponent,
    TeaserComponent,
    StoryblokDirective,
    TextContentComponent,
    ImageContentComponent,
    HomePageComponent
  ],
  imports: [BrowserModule, DynamicModule],
  exports: [BrowserModule, DynamicModule],
  providers: [StoryblokService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
