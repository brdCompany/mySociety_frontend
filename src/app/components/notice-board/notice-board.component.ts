import { Component, OnInit, Input } from '@angular/core';
import { NoticeService } from 'src/app/services/notice.service';
import { Notice } from 'src/app/models/Notice';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css'],
})
export class NoticeBoardComponent implements OnInit {
  notices: Notice[];

  constructor(private noticeService: NoticeService) {}

  ngOnInit(): void {
    this.noticeService.getNotices().subscribe((data) => {
      this.notices = data;
      console.log(this.notices);
    });
    this.noticeService.newNoticeEmitter.subscribe((newNotice) => {
      this.notices.unshift(newNotice);
    });
  }
}
