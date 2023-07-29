export interface Data {
    theme: string;
    dataList: {
        content: string;
        link?: string;
        detail?: string | string[];
    }[];
}[];

export interface Content {
    theme: string;
    img: string;
    type: "team" | "individual";
    award?: string;
    skill: string[];
    period: string;
    event?: string;
    eventlink?: string;
    member: string;
    detail: string;
    comment: string;
    link?: string;
}[];
