import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable({
	providedIn: 'root'
})

export class MusicService {

	constructor(private http:HttpClient) { }


	//getSocialIconsContent method is used for get the socials icons data.
	getSocialIconsContent() {
		return this.http.get("assets/data/socialIcons.json").map(response => response)
	}

	//getToursContent method is used to get the upcoming tours content.
	getToursContent() {
		return this.http.get("assets/data/tours.json").map(response => response)
	}

	//getTeamMemberContent method is used to get the team member content.
	getTeamMemberContent() {
		return this.http.get("assets/data/team_member.json").map(response => response)
	}

	//getGalleryContent method is used to get the gallery content.
	getGalleryContent() {
		return this.http.get("assets/data/gallery.json").map(response => response)
	}

	//getNewsContent method is used to get the news section content.
	getNewsContent() {
		return this.http.get("assets/data/news.json").map(response => response)
	}

	//getTrackList method is used to get the Track List content.
	getTrackListContent() {
		return this.http.get("assets/data/track_list.json").map(response => response)
	}

	//getBannerContent method is used to get the home banner content.
	getBannerContent() {
		return this.http.get("assets/data/banner.json").map(response => response)
	}
}
