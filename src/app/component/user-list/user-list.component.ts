import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../../service/todo.service';
import { TodoUser } from '../../models/todo-user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  hide: Boolean = false;
  todoModel: any = {};
  userName: String = '';

  constructor(private router: Router, private _todoService: TodoService){}
  
  todosList: any = {};

  ngOnInit() {
    const getUserDetail = localStorage.getItem('currentUser');
    if (getUserDetail) {
      const name = JSON.parse(getUserDetail);
      this.userName = name.username;
      this.hide = true;
    }
    this._onLoadInit();
  }

  _onLoadInit(): void {
    this.todosList = '';
    this._todoService._getTodoList()
      .subscribe(result => {
        this.todosList = (result.assessment) ? result.assessment : result;
    });
  }

  onSubmitTodo(todo: NgForm) {  
    if(this.todoModel.title === '' || this.todoModel.description === '') {
      return;
    }  
    this.todosList = '';
    this.todoModel.date = new Date().toISOString().split('Z')[0].toString();    
    this._todoService._createTodoList(this.todoModel)
      .subscribe(result => {
      todo.resetForm();
      this._onLoadInit();
    });
  }

  deleteTask(id) {
    this.todosList = '';
    this._todoService._deleteTodoList(id)
      .subscribe(result => {
        this._onLoadInit();
    });
  }

  _logout() {
    localStorage.removeItem('currentUser');  
    this.hide = false;  
    this.router.navigate(['login']);
  }

  ngOnDestroy() {
    this._todoService._getTodoList();
  }

}
