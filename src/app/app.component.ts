import { Component, HostBinding } from '@angular/core';

import '../../public/src/styles.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @HostBinding('class') theme: string = 'indigo-pink';
}
