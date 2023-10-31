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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogsComponent } from './component/blogs/blogs.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './component/footer/footer.component';
import { ArticleOverviewComponent } from './component/article-overview/article-overview.component';
import { VEditableDirective } from './directives/custom-editable.directive';

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
    HomePageComponent,
    ArticleOverviewComponent,
    BlogsComponent,
    FooterComponent,
    VEditableDirective
  ],
  imports: [BrowserModule, DynamicModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent],
  exports: [BrowserModule, DynamicModule, ArticleOverviewComponent],
  providers: [StoryblokService, VEditableDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
