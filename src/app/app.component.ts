import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  // template: `<p>Hello World</p>`,
  //styles,
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class AppComponent {
  name = 'Ivan'
  imgURL = 'https://picsum.photos/id/237/500/500'

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }

  logImg(e: string) {
    console.log(e);
  }
}
