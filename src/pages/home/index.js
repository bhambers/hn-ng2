import { Component, View, For } from 'angular2/angular2';
import { HNApi } from '../../services/hn-api';
import { HNItem } from '../../components/hn-item';

@Component({
  selector: 'page-home',
  injectables: [HNApi]
})
@View({
  directives: [
    For,
    HNItem
  ],
  template: require('./template.html')
})
export class HomePage {
  topStories: Array;

  constructor(hnApi: HNApi) {
    hnApi.fetchTopStories().then(() => {
      this.topStories = hnApi.topStories;
    });
  }
}
