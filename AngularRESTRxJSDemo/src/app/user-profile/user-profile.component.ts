import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

// Optionally define interfaces for type safety
interface User {
  id: number;
  name: string;
  active: boolean;
}

interface Post {
  id: number;
  userId: number;
  title: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  standalone: true,
  imports: [CommonModule] 
})
export class UserProfileComponent implements OnInit {
  userId = 1;              // The ID of the user we want to fetch
  user!: User;             // Holds the user object after fetch
  posts: Post[] = [];      // Array of the user's posts

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Request user and post data concurrently
    const user$ = this.http.get<User>(`http://localhost:3000/users/${this.userId}`);
    const posts$ = this.http.get<Post[]>(`http://localhost:3000/posts?userId=${this.userId}`);

    // Combine both observables and transform the result
    combineLatest([user$, posts$]).pipe(
      map(([user, posts]) => ({ user, posts })) // Ensure 'posts' is treated as Post[]
    ).subscribe((data) => {
      this.user = data.user;
      this.posts = data.posts;
    });
  }
}
