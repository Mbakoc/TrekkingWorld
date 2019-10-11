import { Component, OnInit } from '@angular/core';
import { PostblogService } from 'src/app/postblog.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {

  constructor( private postBlogService: PostblogService,
               private firestore: AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form?: NgForm){
    if(form != null)
    form.resetForm();
    this.postBlogService.blogs = {
      id: null,
      title: '',
      content: '',
      imageUrl: '',
      author: ''

    }
  }
  onSubmit(form: NgForm){
    let data = form.value;
    this.firestore.collection('blogs').add(data);
    this.resetForm(form);
  }
}
