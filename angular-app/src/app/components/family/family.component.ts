import { Component, OnInit } from '@angular/core';
import { FamiliesService } from '../../shared/services/families.service';
import { Father, Child, Family } from '../../shared/classes';
@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  father: Father = new Father();
  children: Child[] = [];
  family: Family = new Family();

  constructor(private familiesService: FamiliesService) { }

  ngOnInit() {
    this.familiesService.currentFamily.subscribe(id => {
      this.family = id;
      if (!(id.id === undefined)) {
        this.familiesService.readFamily(id.id).subscribe((family: any[]) => {
          family.forEach((obj, i) => {
            if (i === (family.length - 1)) {
              this.father = obj
            } else {
              this.children.push(obj)
            };
          }
          );
        });
      }else{
        console.log("Wrong family.id")
      }
    });
  }

}
