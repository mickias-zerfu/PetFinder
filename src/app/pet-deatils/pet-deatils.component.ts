import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-pet-deatils',
  templateUrl: './pet-deatils.component.html',
  styleUrls: ['./pet-deatils.component.css', '../shared/btn.css']
})
export class PetDeatilsComponent implements OnInit {
  isAdoptEnabled: boolean = false;
  id: string = '';
  pet: any;
  issinglePetReturned=false;
  constructor(
    private backeEndService: GetApiService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param["petId"];
      this.backeEndService
        .getSingleAnimal( this.id)
        .subscribe(
          (petFound) => {
            console.log("single pet....", petFound);
            this.pet = petFound.animal;
            this.issinglePetReturned=true;
          },
          (error) => {
            console.log("error happend", error);
          }
        );
    })
  }
  enableAdobt() {
    this.isAdoptEnabled = true;
  }
}
