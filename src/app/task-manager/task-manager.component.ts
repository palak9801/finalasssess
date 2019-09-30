import { Component, OnInit } from '@angular/core';
import { send } from 'q';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  constructor() { 
  }

  tasks: any[] = [];

  send(taskForm: NgForm) {
    console.log(taskForm.value);
    this.tasks.push(taskForm.value);
    taskForm.reset();
    console.log(this.tasks);
  }
  delete(u){
    let index = this.tasks.indexOf(u);
    this.tasks.splice(index,1);
  }

  ngOnInit() {
  }

}
