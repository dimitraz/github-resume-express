import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterestService } from '../../services/interest.service';
import _ from 'lodash';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'edit-interests',
  templateUrl: './edit-interests.component.html',
  styleUrls: ['./edit-interests.component.css']
})
export class EditInterestsComponent implements OnInit {

  userId: String;
  interests: any[];
  newInterest: String;

  constructor(
    private route: ActivatedRoute,
    private interestService: InterestService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];

    this.interestService.getInterests(this.userId)
      .subscribe(interests => this.getInterests(interests));
  }

  getInterests(interests) {
    this.interests = interests;
  }

  deleteInterest(id) {
    _.remove(this.interests, (i) => {
      return i._id == id;
    });

    this.interestService.deleteInterest(this.userId, id).subscribe();
    this.flashMessagesService.show('Interest deleted successfully', { cssClass: 'alert-success' })
  }

  onSubmit(id) {
    let index = _.findIndex(this.interests, (i) => {
      return i._id == id;
    });

    this.interestService.updateInterest(this.userId, id, this.interests[index].interest)
      .subscribe(interest => {
        this.flashMessagesService.show('Interest saved successfully', { cssClass: 'alert-success' });
      });
  }

  onSubmitAdd() {
    this.interestService.addInterest(this.userId, this.newInterest)
      .subscribe(interest => {
        this.interests.push(interest);
        this.newInterest = '';
        this.flashMessagesService.show('Interest added successfully', { cssClass: 'alert-success' });
      });
  }
}
