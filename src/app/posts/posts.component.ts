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
 
  public showCommentsFlag = false; 
  numbreLikes : number = 0;
  numbreDisLikes : number =0;
  public posts =[{
    userName: 'Aloui Houssem',
    content: 'Check out this beautiful photo!',
    imageUrl: '../../assets/images/background.png',
    profilePhoto:'https://i.pravatar.cc/50?img=7',
    comments: [
      { userName: 'Ali',profileUrl:'https://i.pravatar.cc/50?img=4', text: 'Lovely view! 🌅' },
      { userName: 'Sami',profileUrl:'https://i.pravatar.cc/50?img=11', text: 'Where was this taken?' }
      ]
    },
    {
      userName: 'Dali El Guebsi',
      content: 'Summer vibes!',
      imageUrl: '../../assets/images/p3.jpg',
      profilePhoto:'https://i.pravatar.cc/50?img=2',
      comments: [
        { userName: 'Gaith',profileUrl:'https://i.pravatar.cc/50?img=12', text: 'beautifull' },
        { userName: 'Yassine',profileUrl:'https://i.pravatar.cc/50?img=13', text: 'nice photo Dali' }
      ]
    },
    {
      userName: 'Sarah Ben Ali',
      content: 'keep it in your mind!',
      imageUrl: '../../assets/images/p10.jpg',
      profilePhoto:'https://i.pravatar.cc/50?img=3',
      comments: [
        { userName: 'Lamia',profileUrl:'https://i.pravatar.cc/50?img=16', text: 'very usefull tips' },
        { userName: 'Rihana',profileUrl:'https://i.pravatar.cc/50?img=5', text: 'Got it' }
      ]
    }
  ];

  // Toggle comments visibility
  public showComments(): void {
    this.showCommentsFlag = !this.showCommentsFlag;
  }
}

