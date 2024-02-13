import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generate-post.component.html',
  styleUrl: './generate-post.component.css'
})
export class GeneratePostComponent {
    isAddFile: boolean = false;

    setIsAddFile(){
      this.isAddFile = !this.isAddFile;
    }
   
}
