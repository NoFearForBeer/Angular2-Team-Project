import { Component, Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertService, AuthService, ApiService } from '../../services/';
import { News } from '../../models/news';

@Component({
  selector: 'news-post-component',
  templateUrl: './news-post-component.html',
  providers: [ApiService, AuthService]
})
@Injectable()
export class NewsPostComponent {

    @Output() newsCreated = new EventEmitter();
    model: News = new News();

    constructor(
        private newsService: ApiService,
        private authService: AuthService,
        private router: Router,
        private alertService: AlertService) { }

    postNews(form: NgForm) {
        this.newsService.post('/news/post', this.model)
            .subscribe(
            data => {
                let emitModel: News = data;
                this.newsCreated.emit(emitModel);
                form.resetForm();
                this.alertService.success('News posted succesfully!');
            },
            error => {
                this.alertService.error('An error occured!');
            });
    }
}
