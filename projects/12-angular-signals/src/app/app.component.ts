import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Building a TODO List</h1>

    <h3>Total Completed {{ completedTodos() }}</h3>

    @for (todo of todos(); track todo.id) {
    <label
      for="{{ todo.id }}"
      [ngStyle]="{
        'text-decoration': todo.completed ? 'line-through' : 'none'
      }"
    >
      {{ todo.title }}
      <input
        type="checkbox"
        [checked]="todo.completed"
        (change)="updateTodo(todo)"
        name="{{ todo.id }}"
      />
    </label>
    }
  `,
  styles: `label { display: block }`,
})
export class AppComponent {
  completedTodos = signal(0);

  todos = signal<Todo[]>([
    {
      id: 1,
      title: 'Learn Angular',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn RxJS',
      completed: false,
    },
  ]);

  // codebase can be updated with the provided one,
  updateTodo(todo: Todo) {
    this.todos.update((todoList): Todo[] => {
      return todoList.map((todoEntry) => {
        if (todo.id === todoEntry.id)
          todoEntry.completed = !todoEntry.completed;

        return todoEntry;
      });
    });

    this.updateCompletedTodos(this.todos());
  }

  // Add a computed signal that calculates the number of completed todos.
  updateCompletedTodos(todos: Todo[]) {
    this.completedTodos.update((currentCompleted): number => {
      let totalCompleted = 0;

      todos.forEach((todo) => {
        if (todo.completed) {
          totalCompleted++;
        }
      });

      return totalCompleted;
    });
  }
}
