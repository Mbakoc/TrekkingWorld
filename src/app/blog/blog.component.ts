import { Component, OnInit } from '@angular/core';
import { PostblogService } from '../postblog.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Blog } from '../blogClass';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  bloglist: Blog[];

  constructor( private postBlogService: PostblogService,
              private firestore: AngularFirestore) { }

  ngOnInit() {
    this.postBlogService.getBlogs().subscribe(res =>{
         this.bloglist = res.map(item =>{
           return {
             id: item.payload.doc.id,
             ...item.payload.doc.data()
           } as Blog
         })
    })
  }
  
}
