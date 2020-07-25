import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CreateModuleService } from '../create-module.service';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent implements OnInit {
  createModule = this.fb.group({
    name: ['text'],
    list: ['true'],
    add_edit: ['']
  });
  constructor(private fb: FormBuilder, private createModuleService: CreateModuleService) { }
  ngOnInit(): void {
  }
  create() {
    console.log(this.createModule.value)
    this.createModuleService.create_module(this.createModule.value).subscribe(data => {
      console.log(data);
    })
  }

}
