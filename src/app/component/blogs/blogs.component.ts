import { Component } from '@angular/core';
import { StoryblokService } from 'src/app/services/storyblok.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  story: any = { content: null, name: '' };
  constructor(private storyblokService: StoryblokService) {
    window.storyblok?.init();
    window.storyblok?.on(['change', 'published'], function () {
      location.reload();
    });
  }

  ngOnInit() {
    this.storyblokService.getStories({ version: 'draft' }).then((data) => {
      this.story = data.stories[0];
      console.log(this.story.content?.Grid[0].buttons)
    });
  }
}
