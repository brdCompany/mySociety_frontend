import { Component, OnInit, EventEmitter } from '@angular/core';
import { Notice } from 'src/app/models/Notice';
import { NoticeService } from 'src/app/services/notice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css'],
})
export class NoticesComponent implements OnInit {
  notice: Notice = {
    title: '',
    content: '',
    postedAt: null,
    expiresOn: null,
  };
  formOpened: boolean = false;
  createdNotice: Notice;

  constructor(private noticeService: NoticeService) {}

  ngOnInit(): void {}

  setNoticeDate() {
    this.notice.postedAt = new Date();
    this.notice.expiresOn = new Date();
    this.notice.expiresOn.setDate(this.notice.postedAt.getDate() + 7);
  }

  onSubmit(noticeForm: NgForm) {
    this.setNoticeDate();
    this.noticeService.createNotice(this.notice).subscribe((data) => {
      console.log(data);
      this.noticeService.newNoticeEmitter.emit(this.notice);
      this.formOpened = false;
    });
  }
}
