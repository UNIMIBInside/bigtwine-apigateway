import { IAnalysisSetting } from 'app/shared/model/analysis/analysis-setting.model';

export interface IAnalysisDefaultSetting {
    id?: string;
    defaultValue?: string;
    userRoles?: any[];
    userCanOverride?: boolean;
    priority?: number;
    setting?: IAnalysisSetting;
}

export class AnalysisDefaultSetting implements IAnalysisDefaultSetting {
    constructor(
        public id?: string,
        public defaultValue?: string,
        public userRoles?: any[],
        public userCanOverride?: boolean,
        public priority?: number,
        public setting?: IAnalysisSetting
    ) {
        this.userCanOverride = this.userCanOverride || false;
    }
}
