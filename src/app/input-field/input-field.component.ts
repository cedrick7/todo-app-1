import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-todo-input-field",
  templateUrl: "./input-field.component.html",
  styleUrls: ["./input-field.component.scss"],
})
export class InputFieldComponent {
  // add value from input to list
  @Output() todoInputValueChanged = new EventEmitter<string>();

  // submit form
  submitTodo(addTodoForm: NgForm) {
    this.todoInputValueChanged.next(addTodoForm.form.value.addTodo);
    addTodoForm.form.reset();
  }
}
