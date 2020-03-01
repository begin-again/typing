import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.words(4);
  userText = "";

  onInput = (s: string): void => {
    this.userText = s.trim();
    // this.doesMatch = _s === this.randomText.substring(0,_s.length);
  };

  compare = (randomLetter: number, userLetter): string => {
    if(!userLetter) return '';

    return randomLetter === userLetter ? 'correct' : 'wrong';
  };

}
