import { Component } from '@angular/core';
import { StoryblokService } from 'src/app/services/storyblok.service';

@Component({
  selector: 'app-article-overview',
  templateUrl: './article-overview.component.html',
  styleUrls: ['./article-overview.component.scss']
})
export class ArticleOverviewComponent {

  story: any = { content: null, name: '' };
  // components: any = Components;
  headerImage!: string;
  footerContent: any;

  constructor(private storyblokService: StoryblokService) {
    window.storyblok?.init();
    window.storyblok?.on(['change', 'published'], function () {
      location.reload();
    });
  }

  ngOnInit() {
    this.storyblokService.getStories({ version: 'draft' }).then((data) => {
      const siteConfigStory = data.stories.find((story: any) => story.name === 'Site Config');
      if (siteConfigStory) {
        this.headerImage = siteConfigStory.content.Image.filename;
        this.footerContent = siteConfigStory.content.footer_about.content;
        this.story = siteConfigStory;

      }

    });
  }
}