import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ProjectService } from '../../services/project.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { HttpResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  userId: String;
  id: String;
  project: any;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    this.id = this.route.snapshot.params['project_id'];

    this.projectService.getProject(this.userId, this.id)
      .subscribe(project => this.getProject(project));
  }

  getProject(project) {
    this.project = project;
  }

  onSubmit(form: NgForm) {
    this.projectService.updateProject(this.userId, this.id, this.project)
      .catch(err => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred
          console.error('An error occurred:', err.error.message);
        } else {
          // The server returned an unsuccessful response code
          let error = err.error.error.split(':')[3].trim();
          this.flashMessagesService.show(error, { cssClass: 'alert-danger' });
        }
        return Observable.of({ description: 'Error Value Emitted' });
      })
      .subscribe((res: any) => {
        if (res.status === 200) {
          this.flashMessagesService.show('Project saved successfully', { cssClass: 'alert-success' });
        }
      }
      );
  }

}
