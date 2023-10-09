import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent {
  // reflect global list
  @Input() taskList?: string[];

  // remove from list
  @Output() removeTodo = new EventEmitter<number>();
  public removeTask(index: number) {
    this.removeTodo.next(index);
  }

  // toggle task completed
  checked: boolean = true;
  toggleChecked() {
    this.checked = !this.checked;
  }
}
