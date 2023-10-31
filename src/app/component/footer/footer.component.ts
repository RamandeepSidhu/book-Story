import { Component } from '@angular/core';
import { StoryblokService } from 'src/app/services/storyblok.service';
declare const sbClient: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  story: any = { content: null, name: '' };
  headerImage!: string;

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
      const siteConfigStory = data.stories.find((story: any) => story.name === 'Site Config');
      if (siteConfigStory) {
        this.headerImage = siteConfigStory.content.Image.filename;
        this.story = siteConfigStory;
      }

    });
  }
}