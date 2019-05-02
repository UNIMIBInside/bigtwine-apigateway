import { Component, OnInit, OnDestroy } from '@angular/core';

import { ITEMS_PER_PAGE } from 'app/shared';

@Component({
    templateUrl: './analysis-management.component.html'
})
export class AnalysisMgmtComponent implements OnInit, OnDestroy {
    itemsPerPage: any;

    constructor() {
        this.itemsPerPage = ITEMS_PER_PAGE;
    }

    ngOnInit() {}

    ngOnDestroy() {}
}
