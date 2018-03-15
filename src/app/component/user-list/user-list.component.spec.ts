import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list.component';
import { TodoService } from '../../service/todo.service';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [TodoService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called when the directive is instantiated of user list', () => {
    fixture = TestBed.createComponent(UserListComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
  });

  it('should create new todo list for user', () => {
    fixture = TestBed.createComponent(UserListComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();    
    app.onSubmitTodo();
  });

  it('should delete todo list from user', () => {
    fixture = TestBed.createComponent(UserListComponent);
    const app = fixture.debugElement.componentInstance;
    app.deleteTask(1);
  });

  it('should logout from current user session', () => {
    fixture = TestBed.createComponent(UserListComponent);
    const app = fixture.debugElement.componentInstance;
    app._logout();
  });

});
