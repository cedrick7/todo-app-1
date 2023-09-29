import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-todo-input-field",
  templateUrl: "./input-field.component.html",
  styleUrls: ["./input-field.component.scss"],
})
export class InputFieldComponent {
  // public inputValue: string = "";
  // public inputList: string[] = [];

  @Output() todoInputValueChanged = new EventEmitter<string>();

  submitTodo(addTodoForm: NgForm) {
    this.todoInputValueChanged.next(addTodoForm.form.value.addTodo);
    addTodoForm.form.reset();

    // return
    //     console.log("submit clicked", addTodoForm);
    //     console.log("inputValue: ", this.inputValue);

    //     this.inputValue = addTodoForm.form.value.addTodo;
    //     this.inputList.push(this.inputValue);

    //     addTodoForm.form.reset();

    //     console.log("inputList: ", this.inputList);
  }

  // public removeTask(index: number) {
  //   this.inputList = this.inputList.splice(index, 1);
  // }
}
