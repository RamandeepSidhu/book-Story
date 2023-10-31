import { Component, OnInit } from '@angular/core';
import { StoryblokService } from 'src/app/services/storyblok.service';
declare const sbClient: any;
@Component({
  selector: 'app-article-overview',
  templateUrl: './article-overview.component.html',
  styleUrls: ['./article-overview.component.scss']
})
export class ArticleOverviewComponent implements OnInit {
  story: any = { content: null, name: '' };
  grid: any;
  blok: any;

  constructor(private storyblokService: StoryblokService) { }

  ngOnInit() {
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

    // Fetch the initial content from Storyblok
    this.storyblokService.getStory('personalized-landing-page', { version: 'draft' })
      .then((data: any) => {
        console.log(data);
        this.blok = data.story;
        this.grid = data.story.content.Grid;
      });

  }

}


