export interface Data {
    theme: string;
    dataList: {
        content: string;
        link?: string;
        detail?: string | string[];
    }[];
}[]
export interface Content {
    theme: string;
    img: string;
    type: "team" | "individual";
    detail: string;
    link?: string;
}[]