import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  response: any = {
    "token_type": "Bearer",
    "expires_in": 3600,
    "access_token": "..."
  }
  type: string = ''
  good_with_children: boolean = true
  age: string = ''
  gender: string = ''
  size: string = ''
  petListObject:any[]=[];
  isPetReturned:boolean=false;
  constructor(
    private backeEndService: GetApiService,
  ) { }
  ngOnInit(): void {

    this.backeEndService.postGetToken().subscribe(
      (result) => {
        this.response = result;
        console.log(this.response.access_token);
        // const tokenString:string = JSON.stringify( this.response.access_token );
        localStorage.setItem('token', this.response.access_token);
        this.backeEndService.getFilteredRequest(this.response.access_token, this.type, this.good_with_children, this.age, this.gender, this.size).subscribe(
          (result) => {
            this.petListObject = result.animals
            this.isPetReturned = true
            console.log('-------', this.petListObject);
          });
      });

  }
  onSearchClicked() {
    let type1 = this.type.toString();
    let age1 = this.age.toString();
    let gender1 = this.gender.toString();
    let size1 = this.size.toString();
    console.log('...', type1, age1, gender1, size1);

    this.backeEndService.getFilteredRequest(this.response.access_token, type1, this.good_with_children, age1, gender1, size1).subscribe(
      (result) => {
        this.petListObject = result.animals
        console.log('-------', this.petListObject);
      });
  }
}
