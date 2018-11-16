import { Component, OnInit, Injectable } from '@angular/core';
import { Child, Father, Family } from '../../shared/classes';
import { ChildrenService } from '../../shared/services/children.service';
import { FamiliesService } from '../../shared/services/families.service';
@Component({
  selector: 'app-family-searcher',
  templateUrl: './family-searcher.component.html',
  styleUrls: ['./family-searcher.component.css']
})
export class FamilySearcherComponent implements OnInit {

  private fathers: Father[] = [];
  private child: Child = new Child();
  constructor(private childrenService: ChildrenService, private familiesService: FamiliesService) { }

  ngOnInit() {

  }

  onSubmit() {
    this.fathers = [];
    let children: Child[];
    let families: Family[] = [];
    let familiesData: any[] = [];
    this.childrenService.searchChild(this.child).subscribe((data: Child[]) => {
      children = data;
      children.forEach(child => families.push(child.family));
      let temp: any[] = Array.from(new Set(families.map((item: any) => item.id)));
      temp.forEach(id => this.familiesService.readFamily(id).subscribe((data: Object[]) => {
        familiesData.push(data);
        if (temp.length === familiesData.length) {
          familiesData.forEach(family => this.fathers.push(family[family.length - 1]));
        }
      }));
    });
  }
  choosenFamily(event) {
    let family: Family = new Family();
    family.id = +event.target.attributes.class.value;
    this.familiesService.updateFamily(family);
  }
}