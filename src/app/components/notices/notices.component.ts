import { Component, OnInit, EventEmitter } from '@angular/core';
import { Notice } from 'src/app/models/Notice';
import { NoticeService } from 'src/app/services/notice.service';
import { NgForm } from '@angular/forms';
import { element } from 'protractor';

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
  notices: Notice[];
  searchTerm: string;
  filteredResults: Notice[];

  constructor(private noticeService: NoticeService) {}

  ngOnInit(): void {
    console.log('getNotices called');
    this.noticeService.getNotices().subscribe((result) => {
      result.sort((a, b) => {
        if (b.postedAt > a.postedAt) return 1;
        else return -1;
      });
      console.log(result);
      this.notices = result;
      this.filteredResults = this.notices;
    });
  }

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

  searchNotice(searchTerm: string) {
    console.log(`Inside searchNotice ${searchTerm}`);
    this.filteredResults = this.notices.filter((element) => {
      let title = element.title.toLowerCase();
      let input = searchTerm.toLowerCase();
      return title.includes(input);
    });
  }
}
