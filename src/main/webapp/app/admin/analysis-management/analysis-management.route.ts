import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';

import { AnalysisMgmtComponent } from './analysis-management.component';

export const analysisMgmtRoute: Routes = [
    {
        path: 'analysis-management',
        component: AnalysisMgmtComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            pageTitle: 'analysisManagement.home.title',
            defaultSort: 'id,asc'
        }
    }
];
