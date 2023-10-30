import { Component } from '@angular/core';
import { StoryblokService } from 'src/app/services/storyblok.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  story: any = { content: null, name: '' };
  // components: any = Components;
  headerImage!: string;

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
        this.story = siteConfigStory;
      }

    });
  }
}