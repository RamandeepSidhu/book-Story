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

  constructor(private storyblokService: StoryblokService) {
    window.storyblok?.init();
    window.storyblok?.on(['change', 'published'], function () {
      location.reload()
    });
  }

  ngOnInit() {
    this.storyblokService.getStory('home', { version: 'draft' })
      .then(data => this.story = data.story);
  }
}