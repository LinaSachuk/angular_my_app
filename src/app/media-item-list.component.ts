import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent {
  mediaItems = [
    {id: 1,
      name: 'Firebug',
      medium: 'Series',
      category: 'Science Finction',
      year: 2010,
      watchedOn: 129416656384,
      isFavorite: false

    },
    {id: 2,
      name: 'The Small Tall',
      medium: 'Movies',
      category: 'Comedy',
      year: 2015,
      watchedOn: null,
      isFavorite: true
    },
    {id: 3,
      name: 'The Crown',
      medium: 'Movies',
      category: 'History',
      year: 2020,
      watchedOn: 1234567,
      isFavorite: true

    }
  ]

  // medium = '';
  // mediaItems = [];

  // constructor(
  //   private mediaItemService: MediaItemService,
  //   private activatedRoute: ActivatedRoute) {}

  // ngOnInit() {
  //   this.activatedRoute.params
  //     .subscribe(params => {
  //       let medium = params['medium'];
  //       if(medium.toLowerCase() === 'all') {
  //         medium = '';
  //       }
  //       this.getMediaItems(medium);
  //     });
  // }

  // onMediaItemDelete(mediaItem) {
  //   this.mediaItemService.delete(mediaItem)
  //     .subscribe(() => {
  //       this.getMediaItems(this.medium);
  //     });
  // }

  // getMediaItems(medium) {
  //   this.medium = medium;
  //   this.mediaItemService.get(medium)
  //     .subscribe(mediaItems => {
  //       this.mediaItems = mediaItems;
  //     });
  // }
}
