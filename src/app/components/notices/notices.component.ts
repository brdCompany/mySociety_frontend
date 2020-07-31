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
  editMode: boolean = false;
  createdNotice: Notice;
  editedNotice: Notice;
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
      this.notices = result;
      this.filteredResults = this.notices;
    });
    this.noticeService.newNoticeEmitter.subscribe((newNotice) => {
      this.notices.unshift(newNotice);
      this.filteredResults.unshift(newNotice);
    });
  }

  setNoticeDate() {
    this.notice.postedAt = new Date();
    this.notice.expiresOn = new Date();
    this.notice.expiresOn.setDate(this.notice.postedAt.getDate() + 7);
  }

  createNotice(noticeForm: NgForm) {
    this.setNoticeDate();
    this.noticeService.createNotice(this.notice).subscribe((data) => {
      console.log(data);
      this.noticeService.newNoticeEmitter.emit(this.notice);
      this.formOpened = false;
    });
  }

  searchNotice(searchTerm: string) {
    this.filteredResults = this.notices.filter((element) => {
      let title = element.title.toLowerCase();
      let input = searchTerm.toLowerCase();
      return title.includes(input);
    });
  }
  showEditForm(editedNotice: Notice) {
    this.editedNotice = editedNotice;
    this.editMode = true;
  }
  editNotice(noticeEditForm: NgForm) {
    this.editedNotice.title = noticeEditForm.value.title;
    this.editedNotice.content = noticeEditForm.value.content;
    this.noticeService.updateNotice(this.editedNotice).subscribe((result) => {
      console.log(result);
      this.editMode = !this.editMode;
      this.noticeService.updateNoticeEmitter.emit(this.editedNotice);
    });
  }
  discardEditForm() {
    this.editMode = !this.editMode;
  }
}
