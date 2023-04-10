import { Content } from "@/types/global";

const contentData:Content[] = [
    {
        theme: "Tidy 〜ストレスを切る〜",
        img: "/tidyIconImg.jpeg",
        type: "team",
        detail: "ToDoアプリとストレス解消アプリを兼ね備えた、ストレス発散ゲーム感覚でタスクを消化できるスマホアプリ。",
    },
    {
        theme: "わくわくSNS",
        img: "/wakuwaku.png",
        type: "team",
        detail: "Happyな顔だけをを投稿することができるSNS。顔認証で投稿画像内に映っている顔を分析して感情推定を行い、そこで得られたHappy度が高いもののみ投稿できるようになっている。",
        link: "https://topaz.dev/projects/afb70cac6f0769154e4a"
    },
    {
        theme: "MyPortfolio",
        img: "/portfolio.png",
        type: "individual",
        detail: "自分の成果物や経歴をまとめたポートフォリオ。今までの成果物をはじめ、使用技術から趣味までの様々な情報を公開している。",
        link: "https://my-portfolio-yukachoco.vercel.app/"
    },
]

export default contentData;