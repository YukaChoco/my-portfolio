import { Data } from "@/types/global";

const profileData:Data[] = [
    {
        theme: 'Profile',
        dataList: [
            {
                content: '名前: 藤堂 ゆうか / とうどう ゆうか',
            },
            {
                content: '出身：大阪',
            },
            {
                content: '生年月日: 2002.11.20',
            },
            {
                content: '所属: 立命館大学情報理工学部3回生 25卒',
            },
        ]
    },
    {
        theme: 'Education',
        dataList: [
            {
                content: '鷺洲小学校',
                link: 'http://swa.city-osaka.ed.jp/swas/index.php?id=e531065',
            },
            {
                content: '八阪中学校',
                link: 'http://swa.city-osaka.ed.jp/swas/index.php?id=j532060',
            },
            {
                content: '茨木高校',
                link: 'https://www2.osaka-c.ed.jp/ibaraki/',
                detail: '文理学科'
            },
            {
                content: '立命館大学',
                link: 'https://www.ritsumei.ac.jp/ise/',
                detail: ['情報理工学部情報理工学科','画像・音メディアコース']
            },
        ]
    },
    {
        theme: 'Skill',
        dataList: [
            {
                content: 'C',
            },
            {
                content: 'React',
            },
            {
                content: 'TypeScript',
            },
            {
                content: 'HTML',
            },
            {
                content: 'CSS',
            },
            {
                content: 'GitHub',
            },
        ]
    },
    {
        theme: 'Hobby',
        dataList: [
            {
                content: 'プログラミング',
                detail: '学生IT団体 watnow'
            },
            {
                content: 'バスケットボール',
                detail: ['八阪中学校女子バスケットボール部','茨木高校女子バスケットボール部','ポジション：センター']
            },
            {
                content: 'ダンス',
                detail: ['キッズダンススクール Dance Lab.CLAP','Kpopダンスカバーサークル Rogue']
            },
            {
                content: 'お菓子作り',
            },
        ]
    },
    {
        theme: 'Links',
        dataList: [
            {
                content: 'GitHub',
                link: 'https://github.com/YukaChoco'
            },
            {
                content: 'Qiita',
                link: 'https://qiita.com/yu-ka'
            },
            {
                content: 'portfolio',
                link: 'https://my-portfolio-yukachoco.vercel.app'
            },
            {
                content: 'watnow',
                link: 'http://www.watnow.jp'
            },
            {
                content: 'twitter',
                link: 'https://twitter.com/chocolatbrown'
            },
            {
                content: 'instagram',
                link: 'https://www.instagram.com/yuka__matcha'
            },
        ]
    },
]

export default profileData;