import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title: string = "todoAppPureAngular";

  // initial global list
  todoList: string[] = [];

  // add value from input to list
  addInput(value: string) {
    this.todoList = this.todoList.concat(value);
  }

  // remove from list
  removeTodoValue(i: number) {
    this.todoList = this.todoList.filter((v, index) => index !== i);
  }
}
