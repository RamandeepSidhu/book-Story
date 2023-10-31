import { Component } from '@angular/core';
import { StoryblokService } from 'src/app/services/storyblok.service';
declare const sbClient: any;

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  story: any = { content: null, name: '' };
  colors: any;
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
      this.story = data.stories[1];
    });
  }
}
