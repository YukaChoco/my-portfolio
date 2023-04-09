export interface Data {
    theme: string;
    dataList: {
        content: string;
        link?: string;
        detail?: string | string[];
    }[];
}[]