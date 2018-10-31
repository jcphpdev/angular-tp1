import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input('like') like =0;
  @Input('dislike') dislike=0;

  @Output ('updateVotes')   updateVotes = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  setLike(){
    this.like++;
    this.updateVotes.emit({status: 'like', value: this.like})
  }

  setDislike(){
    this.dislike++;
    this.updateVotes.emit({status: 'dislike', value: this.dislike})
  }

}
