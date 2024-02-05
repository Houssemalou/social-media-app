import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule, ],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input() post: any; 
  public showCommentsFlag = false; 
  numbreLikes : number = 0;
  numbreDisLikes : number =0;
  public examplePost = {
    userName: 'John Doe',
    content: 'Check out this beautiful sunset!',
    imageUrl: 'https://example.com/sunset.jpg',
    comments: [
      { userName: 'Alice', text: 'Lovely view! 🌅' },
      { userName: 'Bob', text: 'Where was this taken?' }
    ]
  };

  // Toggle comments visibility
  public showComments(): void {
    this.showCommentsFlag = !this.showCommentsFlag;
  }
}

