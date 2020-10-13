import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drag-drop';

  images = [
    '../assets/images/food-1.jpg',
    '../assets/images/food-2.jpg',
    '../assets/images/food-3.jpg',
    '../assets/images/food-4.jpg',
    '../assets/images/food-5.jpg',
  ]

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex)
  }
}
