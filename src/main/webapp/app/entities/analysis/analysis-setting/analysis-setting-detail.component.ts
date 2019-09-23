import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAnalysisSetting } from 'app/shared/model/analysis/analysis-setting.model';

@Component({
    selector: 'jhi-analysis-setting-detail',
    templateUrl: './analysis-setting-detail.component.html'
})
export class AnalysisSettingDetailComponent implements OnInit {
    analysisSetting: IAnalysisSetting;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ analysisSetting }) => {
            this.analysisSetting = analysisSetting;
        });
    }

    previousState() {
        window.history.back();
    }
}
