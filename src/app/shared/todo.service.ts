import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList() {
    this.toDoList = this.firebasedb.list('titles');
    return this.toDoList;
  }

  addTitle(title: string) {
    this.toDoList.push({
      title,
      isChecked: false
    });
  }

  checkTitle($key: string, flag: boolean) {
    this.toDoList.update($key, {isChecked: flag});
  }

  removeTitle($key: string) {
    this.toDoList.remove($key);
  }
}
