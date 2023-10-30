import { Component, Input } from '@angular/core';
import { StoryblokService } from 'src/app/services/storyblok.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  // @Input() content: any;
  story: any = { content: null, name: '' };
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

      this.story = data.stories[5];
    });
  }
}
