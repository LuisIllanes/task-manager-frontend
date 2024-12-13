import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  title = '';
  description = '';

  constructor(private tasksService: TasksService) { }

  createTask(): void {
    if (this.title && this.description) {
      this.tasksService
        .createTask({ title: this.title, description: this.description, isCompleted: false })
        .subscribe(() => {
          this.title = '';
          this.description = '';
        });
    }
  }
}
