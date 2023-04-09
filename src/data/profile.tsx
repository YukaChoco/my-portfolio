import { Data } from "@/types/global";

const profileData:Data[] = [
    {
        theme: 'Education',
        dataList: [
            {
                content: '鷺洲小学校',
                link: '',
            },
            {
                content: '八阪中学校',
                link: '',
            },
            {
                content: '茨木高校',
                link: '',
                detail: '文理学科'
            },
            {
                content: '立命館大学',
                link: '',
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