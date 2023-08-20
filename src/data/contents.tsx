import type { Content } from "@/types/global";

const contentData:Content[] = [
    {
        theme: "Tidy 〜ストレスを切る〜",
        img: "/tidyIconImg.jpeg",
        type: "team",
        award: "関西ビギナーズハッカソン 優秀賞受賞",
        skill: ['ReactNative','Recoil','Expo'],
        period: "2023/2/24~26 3日間(事前開発を除く)",
        event: "関西ビギナーズハッカソン",
        eventlink: "",
        member: "4人",
        detail: "ToDoアプリとストレス解消アプリを兼ね備えた、ストレス発散ゲーム感覚でタスクを消化できるスマホアプリ。",
        link: "https://testflight.apple.com/join/egcMxHp6",
        comment: "スマートフォンの加速度や歩数を取得してゲームに活用して作成しました。個人的には、ジョギングをサポートする機能の開発を担当しました。タイマーを一から作成し、歩数を取得してタイマーが終わるまでの歩数計を再現しました。特にタイマーにおいて、10秒以下のみ小数点刻みで表示するなど、様々な点を工夫して制作しました。",
    },
    {
        theme: "わくわくSNS",
        img: "/wakuwaku.png",
        type: "team",
        detail: "Happyな顔だけをを投稿することができるSNS。顔認証で投稿画像内に映っている顔を分析して感情推定を行い、そこで得られたHappy度が高いもののみ投稿できるようになっている。",
        skill: ['TypeScript','React','Azure','Node.js','MySQL','MaterialUI'],
        period: "2023/3/13~15 3日間(事前開発を除く)",
        event: "ハックツハッカソン アロカップ",
        eventlink: "",
        member: "4人",
        link: "https://topaz.dev/projects/afb70cac6f0769154e4a",
        comment: "バックとフロントでTypeScriptを使用することで型の受け渡しがそのままできるようにしています。個人的には、MaterialUIで色をカスタマイズしたりgridを使ってスタイリングしたりするなどして、デザインにこだわりました。コンポーネントに分ける考え方などを学びました",
    },
    {
        theme: "MyPortfolio",
        img: "/portfolio.png",
        type: "individual",
        detail: "自分の成果物や経歴をまとめたポートフォリオ。今までの成果物をはじめ、使用技術から趣味までの様々な情報を公開している。",
        skill: ['Next.js','TypeScript','TailwindCSS'],
        period: "2023/3/3~",
        member: "1人(個人)",
        link: "https://my-portfolio-yukachoco.vercel.app/",
        comment: "2023年1月に開発を始めてから3ヶ月で学んだ内容をできる限り詰め込んで作成しました。gridやfixedを用いるなどしてデザインを工夫しました。学んだことのアウトプットをしたり新たに学んだりするために、日々更新中です。",
    },
]

export default contentData;