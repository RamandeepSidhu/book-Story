import { Component, OnInit, Input } from '@angular/core';
import { StoryblokService } from 'src/app/services/storyblok.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  components: any;

  constructor(private storyblok: StoryblokService) {
    import('src/app/components').then(cp => {
      this.components = cp.Components;
    });
  }

  @Input() body!: any[];
  @Input() _editable: any;

  ngOnInit() { }
}