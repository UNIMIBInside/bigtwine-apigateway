import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ApigatewayAnalysisModule as AnalysisAnalysisModule } from './analysis/analysis/analysis.module';
import { ApigatewayAnalysisSettingModule as AnalysisAnalysisSettingModule } from './analysis/analysis-setting/analysis-setting.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        AnalysisAnalysisModule,
        AnalysisAnalysisSettingModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApigatewayEntityModule {}
