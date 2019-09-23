import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IAnalysisSetting } from 'app/shared/model/analysis/analysis-setting.model';
import { AnalysisSettingService } from './analysis-setting.service';

@Component({
    selector: 'jhi-analysis-setting-update',
    templateUrl: './analysis-setting-update.component.html'
})
export class AnalysisSettingUpdateComponent implements OnInit {
    analysisSetting: IAnalysisSetting;
    isSaving: boolean;

    constructor(protected analysisSettingService: AnalysisSettingService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ analysisSetting }) => {
            this.analysisSetting = analysisSetting;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.analysisSetting.id !== undefined) {
            this.subscribeToSaveResponse(this.analysisSettingService.update(this.analysisSetting));
        } else {
            this.subscribeToSaveResponse(this.analysisSettingService.create(this.analysisSetting));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IAnalysisSetting>>) {
        result.subscribe((res: HttpResponse<IAnalysisSetting>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
