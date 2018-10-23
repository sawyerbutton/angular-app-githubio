import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-app-githubio';
  eventMessage = '';
  onClick(e) {
    e.preventDefault();
    if ( e.which === 2 ) {
      console.log('触发了鼠标中键');
      this.eventMessage = '鼠标中键事件触发';
    } else {
      console.log('没有触发鼠标中键');
      this.eventMessage = '鼠标中键事件未触发';
    }

  }

  onWheelClick(e) {
    // e.preventDefault();
    console.log(e);
  }
}
