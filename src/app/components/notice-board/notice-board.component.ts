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
      data.sort((a, b) => {
        if (b.postedAt > a.postedAt) return 1;
        else return -1;
      });
      this.notices = data;
    });
    this.noticeService.newNoticeEmitter.subscribe((newNotice) => {
      this.notices.unshift(newNotice);
    });
  }
}
