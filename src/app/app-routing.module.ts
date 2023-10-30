import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ArticleOverviewComponent } from './component/article-overview/article-overview.component';
import { BlogsComponent } from './component/blogs/blogs.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'blogs', component: BlogsComponent },
  // { path: 'article-overview', component: ArticleOverviewComponent },
  { path: 'personalized-landing-page', component: ArticleOverviewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
