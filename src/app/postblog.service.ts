import { Injectable } from '@angular/core';
import { Blog } from './blogClass';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostblogService {

  blogs: Blog;

  constructor(private firestore: AngularFirestore) { }

  getBlogs(){
    return this.firestore.collection('blogs').snapshotChanges();
  }
}
