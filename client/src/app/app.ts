import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = 'Dating App';
  protected members=signal<any>([]);
  private http = inject(HttpClient);

  async ngOnInit() {
   this.members.set(await this.getMembers())
  }

  async getMembers(){
    try{
      return lastValueFrom(this.http.get('https://localhost:5001/api/Members'))
    }
    catch(error){
      console.log(error);
      throw error
    }
     
  }


}
