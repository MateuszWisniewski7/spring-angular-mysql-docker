import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Child, Father, Family } from '../../shared/classes';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { ChildrenService } from '../../shared/services/children.service';
import { FathersService } from 'src/app/shared/services/fathers.service';
import { FamiliesService } from 'src/app/shared/services/families.service';

@Component({
  selector: 'app-children-form',
  templateUrl: './children-form.component.html',
  styleUrls: ['./children-form.component.css']
})
export class ChildrenFormComponent implements OnInit {

  private removeChildPath: string = "../../assets/remove.png";
  private addChildPath: string = "../../assets/add.png";
  private childrenList: Child[];

  constructor(private fb: FormBuilder, private childrenService: ChildrenService, private fathersService: FathersService, 
    private familiesService: FamiliesService,private router: Router,private route: ActivatedRoute) { }

  childrenForm = this.fb.group({
    children: this.fb.array([
      this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        pesel: ['', Validators.required],
        birthDate: ['', Validators.required],
        sex: ['', Validators.required]
      })
    ])
  });

  ngOnInit() {
  }

  createChild() {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      pesel: ['', Validators.required],
      birthDate: ['', Validators.required],
      sex: ['', Validators.required]
    });
  }

  addFormChild() {
    let children = <FormArray>this.childrenForm.get('children');
    children.push(this.createChild());
  }

  removeChild() {
    let children = <FormArray>this.childrenForm.get('children');
    children.removeAt(children.length - 1);
  }

  onSubmit() {
    this.childrenList = this.childrenForm.get('children').value;
    this.familiesService.createFamily().subscribe((family: Family) => {
      this.fathersService.currentFather.subscribe((father: Father) => { 
        father.family=family;
        this.fathersService.addFather(father).subscribe(()=>{
          this.childrenList.forEach(child=>{
            child.family=family;
            this.childrenService.addChild(child).subscribe();
          });
          this.familiesService.updateFamily(family);
          this.router.navigate(["/family"]);
        });
      });
    });
  }
}
