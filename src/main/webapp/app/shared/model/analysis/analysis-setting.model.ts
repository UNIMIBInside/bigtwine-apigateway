export const enum AnalysisType {
    TWITTER_NEEL = 'TWITTER_NEEL'
}

export const enum AnalysisInputType {
    QUERY = 'QUERY',
    DATASET = 'DATASET'
}

export interface IAnalysisSetting {
    id?: string;
    name?: string;
    defaultValue?: string;
    userCanOverride?: boolean;
    userRoles?: string;
    analysisTypes?: AnalysisType;
    analysisInputTypes?: AnalysisInputType;
    priority?: number;
}

export class AnalysisSetting implements IAnalysisSetting {
    constructor(
        public id?: string,
        public name?: string,
        public defaultValue?: string,
        public userCanOverride?: boolean,
        public userRoles?: string,
        public analysisTypes?: AnalysisType,
        public analysisInputTypes?: AnalysisInputType,
        public priority?: number
    ) {
        this.userCanOverride = this.userCanOverride || false;
    }
}
