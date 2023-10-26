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
  footerContent: any;
  siteConfigStory: any;

  constructor(private storyblokService: StoryblokService) {
    window.storyblok?.init();
    window.storyblok?.on(['change', 'published'], function () {
      location.reload();
    });
  }

  ngOnInit() {
    this.storyblokService.getStories({ version: 'draft' }).then((data) => {
      this.siteConfigStory = data.stories.find((story: any) => story.name === 'Site Config');
      if (this.siteConfigStory) {
        this.headerImage = this.siteConfigStory.content.Image.filename;
        this.footerContent = this.siteConfigStory.content.footer_about.content;
      }

      this.story = data.stories[4];
    });
  }
}