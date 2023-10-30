import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Client from 'storyblok-js-client';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class StoryblokService {
    private apiUrl = 'https://api.storyblok.com/v1/cdn/datasource_entries?datasource=colors&token=Gtc5mt0jQPrWd09u0F2pxAtt';
    private sbClient = new Client({
        accessToken: 'Gtc5mt0jQPrWd09u0F2pxAtt'
    });

    constructor(private http: HttpClient) { }

    getStory(slug: string, params: object): Promise<any> {
        return this.sbClient.getStory(slug, params)
            .then(res => res.data);
    }

    getStories(params: object): Promise<any> {
        return this.sbClient.getStories(params)
            .then(res => res.data);
    }
    getColors(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
    grid() {
        const apiUrl = "https://api.storyblok.com/v2/cdn/stories/?version=draft&starts_with=articles&filter_query%5Bcategories%5D%5Bin_array%5D=8a1aaf75-5bf3-4a12-9880-c3cdc089c607&language=default&fallback_lang=default&token=QZvfWzkoKXKKCqRBrXBk0gtt&cv=1698398699"
        return this.http.get(apiUrl);

    }
}