import { Component } from '@angular/core';
import { Components } from 'src/app/components';
import { StoryblokService } from 'src/app/services/storyblok.service';

@Component({
  selector: 'app-article-overview',
  templateUrl: './article-overview.component.html',
  styleUrls: ['./article-overview.component.scss']
})
export class ArticleOverviewComponent {
  story: any = { content: null, name: '' };
  components: any = Components;
  grid: any;

  constructor(private storyblokService: StoryblokService) {
    window.storyblok?.init();
    window.storyblok?.on(['change', 'published'], function () {
      location.reload()
    });
  }

  ngOnInit() {
    this.storyblokService.getStory('personalized-landing-page', { version: 'draft' })
      .then(data => {
        this.grid = data.story.content.Grid;
      });
  }
}