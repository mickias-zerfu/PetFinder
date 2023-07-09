import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css', '../shared/btn.css']
})
export class PetListComponent implements OnInit {

  constructor() { }
  @Input() petListObject: any[] = []
  ngOnInit(): void {

  }

}
