import { Component, OnInit } from '@angular/core';
import { StoryblokService } from './services/storyblok.service';
import { Components } from './components';
declare global {
  interface Window {
    storyblok: any;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  story: any = { content: null, name: '' };
  components: any = Components;
  headerImage!: string;
  siteConfigStory: any;
  navigationName: any;
  constructor(private storyblokService: StoryblokService) {
    window.storyblok?.init();
    window.storyblok?.on(['change', 'published'], function () {
      location.reload();
    });
  }

  ngOnInit() {
    this.storyblokService.getStories({ version: 'draft' })
      .then((data) => {
        this.story = data.stories;
        this.navigationName = this.story;
        const siteConfigStory = data.stories.find((story: any) => story.name === 'Site Config');
        if (siteConfigStory) {
          this.headerImage = siteConfigStory.content.Image.filename;
          this.story = siteConfigStory;
        }
      });
  }
}