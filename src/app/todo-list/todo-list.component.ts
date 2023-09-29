import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent {
  // public taskList = [];

  @Input() taskList?: string[];

  @Output() removeTodo = new EventEmitter<number>();

  public removeTask(index: number) {
    this.removeTodo.next(index);
    // this.taskList?.splice(index, 1);
  }

  checked: boolean = true;
  lineThrough: boolean = false;
  toggleChecked() {
    this.checked = !this.checked;
    this.lineThrough = !this.lineThrough;
  }
}
