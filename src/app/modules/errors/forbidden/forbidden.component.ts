import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-forbidden',
    templateUrl: './forbidden.component.html'
})
export class ForbiddenComponent implements OnInit {

    constructor(private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Forbidden - Administrator');
    }

}
