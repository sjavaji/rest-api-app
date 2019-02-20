import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  user: any;
  response: any;
  data: any;
  @Input('request') request: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  search(){
    let obs = this.http.get('https://api.github.com/users/' + this.user);
    obs.subscribe ((response)=> this.response = response);
    console.log(this.response);
  }
  save(username,title,body){
    this.data = {
      username:username,
      title:title,
      body:body
      };
    /*let obs = this.http.post('http://jsonplaceholder.typicode.com/posts',{
      userId: '100',
      title: 'test',
      body: 'Test121312341'
    });*/
    let obs = this.http.post('http://jsonplaceholder.typicode.com/posts', (this.data));
    obs.subscribe ((data) => console.log(this.data));
}
}
