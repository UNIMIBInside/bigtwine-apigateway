import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IAnalysisDefaultSetting } from 'app/shared/model/analysis/analysis-default-setting.model';
import { AnalysisDefaultSettingService } from './analysis-default-setting.service';
import { IAnalysisSetting } from 'app/shared/model/analysis/analysis-setting.model';
import { AnalysisSettingService } from 'app/entities/analysis/analysis-setting';

@Component({
    selector: 'jhi-analysis-default-setting-update',
    templateUrl: './analysis-default-setting-update.component.html'
})
export class AnalysisDefaultSettingUpdateComponent implements OnInit {
    analysisDefaultSetting: IAnalysisDefaultSetting;
    isSaving: boolean;

    analysissettings: IAnalysisSetting[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected analysisDefaultSettingService: AnalysisDefaultSettingService,
        protected analysisSettingService: AnalysisSettingService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ analysisDefaultSetting }) => {
            this.analysisDefaultSetting = analysisDefaultSetting;
        });
        this.analysisSettingService.query().subscribe(
            (res: HttpResponse<IAnalysisSetting[]>) => {
                this.analysissettings = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.analysisDefaultSetting.id !== undefined) {
            this.subscribeToSaveResponse(this.analysisDefaultSettingService.update(this.analysisDefaultSetting));
        } else {
            this.subscribeToSaveResponse(this.analysisDefaultSettingService.create(this.analysisDefaultSetting));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IAnalysisDefaultSetting>>) {
        result.subscribe(
            (res: HttpResponse<IAnalysisDefaultSetting>) => this.onSaveSuccess(),
            (res: HttpErrorResponse) => this.onSaveError()
        );
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackAnalysisSettingById(index: number, item: IAnalysisSetting) {
        return item.id;
    }
}
