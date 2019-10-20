export const enum AnalysisSettingType {
    NUMBER = 'NUMBER',
    STRING = 'STRING',
    TEXT = 'TEXT',
    BOOLEAN = 'BOOLEAN',
    SINGLE_CHOICE = 'SINGLE_CHOICE',
    MULTIPLE_CHOICES = 'MULTIPLE_CHOICES'
}

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
    type?: AnalysisSettingType;
    userVisible?: boolean;
    options?: any;
    analysisType?: AnalysisType;
    analysisInputTypes?: AnalysisInputType[];
}

export class AnalysisSetting implements IAnalysisSetting {
    constructor(
        public id?: string,
        public name?: string,
        public type?: AnalysisSettingType,
        public userVisible?: boolean,
        public options?: any,
        public analysisType?: AnalysisType,
        public analysisInputTypes?: AnalysisInputType[]
    ) {
        this.userVisible = this.userVisible || false;
    }
}
