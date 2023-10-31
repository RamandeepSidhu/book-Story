import { Component, Input } from '@angular/core';
import { StoryblokService } from 'src/app/services/storyblok.service';
declare const sbClient: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  story: any = { content: null, name: '' };
  headerImage!: string;
  footerContent: any;
  siteConfigStory: any;

  constructor(private storyblokService: StoryblokService) {
    const { StoryblokBridge, location }: any = window;
    const storyblokInstance = new StoryblokBridge({
      preventClicks: false,
    });


    storyblokInstance.on(['published', 'change'], () => {
      location.reload(true);
    });

    storyblokInstance.on('enterEditmode', (event: any) => {
      sbClient.get(`cdn/stories/${event.storyId}`, {
        version: 'draft',
      })
    });
    // Call pingEditor to see if the user is in the editor
    storyblokInstance.pingEditor(() => {
      if (storyblokInstance.isInEditor()) {
      }
    })

  }

  ngOnInit() {
    this.storyblokService.getStories({ version: 'draft' }).then((data) => {
      this.story = data.stories[4];
    });
  }
}
