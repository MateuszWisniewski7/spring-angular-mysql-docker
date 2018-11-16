import { Component, OnInit } from '@angular/core';
import { Father } from '../../shared/classes';
import { FathersService } from '../../shared/services/fathers.service';
import { FamiliesService } from 'src/app/shared/services/families.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-father-form',
  templateUrl: './father-form.component.html',
  styleUrls: ['./father-form.component.css']
})
export class FatherFormComponent implements OnInit {

  private father: Father = new Father();

  constructor(private fb: FormBuilder, private fathersService: FathersService, private familiesService: FamiliesService) { }

  fatherForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    pesel: new FormControl('', [Validators.required, Validators.max(11), Validators.pattern("[0-9]")]),
    birthDate: ['', Validators.required]
  });

  ngOnInit() {

  }

  onSubmit(){
    this.fathersService.updateFather(this.father);
  }
}
