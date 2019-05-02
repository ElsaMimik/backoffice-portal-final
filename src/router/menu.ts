// all menu list
// TODO : 未完成...待補
export let menuPaths =
    [
        {
            apiPath: '/member',
            displayName: '会员',
            routerPath: '/member',
            routerName: 'member',
            level: 1,
            isLink: true,
            isShow: false,
            children: [],
        },
        {
            apiPath: '/account',
            displayName: '帳務',
            routerPath: '/member',
            routerName: 'member',
            level: 1,
            isLink: false,
            isShow: false,
            children: [
                {
                    apiPath: '/account/transaction',
                    displayName: '查詢交易',
                    routerPath: '/account/transaction',
                    routerName: 'account-transaction',
                    level: 2,
                    isLink: true,
                    isShow: false,
                    children: [],
                },
                {
                    apiPath: '/account/game-bet-record',
                    displayName: '查詢抄單紀錄',
                    routerPath: '/account/game-bet-record',
                    routerName: 'account-game-bet-record',
                    level: 2,
                    isLink: true,
                    isShow: false,
                    children: [],
                },
                {
                    apiPath: '/account/modified',
                    displayName: '調帳',
                    routerPath: '/account/modified',
                    routerName: 'account-modified',
                    level: 2,
                    isLink: false,
                    isShow: false,
                    children: [
                        {
                            apiPath: '/account/modified/abnormal',
                            displayName: '注單異常調帳',
                            routerPath: '/test1/b/yyy',
                            routerName: 'test1-b-yyy',
                            level: 3,
                            isLink: false,
                            isShow: false,
                            children: [
                                {
                                    apiPath: '/account/modified/abnormal/apply',
                                    displayName: '申請',
                                    rrouterPath: '/account/modified/abnormal/apply',
                                    routerName: 'account-modified-abnormal-apply',
                                    level: 4,
                                    isLink: true,
                                    isShow: false,
                                    children: [],
                                },
                                {
                                    apiPath: '/account/modified/abnormal/approval',
                                    displayName: '審核',
                                    routerPath: '/account/modified/abnormal/approval',
                                    routerName: 'account-modified-abnormal-approval',
                                    level: 4,
                                    isLink: true,
                                    isShow: false,
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ]

let paths = new Array<string>();

/**
 * 拆解路徑字串
 * @author rourou
 * @description role string 拆解
*/
const spiltPath = async function (apiPaths: Array<string>) {
    await apiPaths.forEach(apiPath => {
        const array = apiPath.split("/");
        if (array.length > 4) {
            const newPath = `/${array[1]}/${array[2]}/${array[3]}`;
            if (apiPaths.findIndex(s => s === newPath) < 0) {
                apiPaths.push(newPath);
            }
        }
        if (array.length > 3) {
            const newPath = `/${array[1]}/${array[2]}`;
            if (apiPaths.findIndex(s => s === newPath) < 0) {
                apiPaths.push(newPath);
            }
        }
        if (array.length > 2) {
            const newPath = `/${array[1]}`;
            if (apiPaths.findIndex(s => s === newPath) < 0) {
                apiPaths.push(newPath);
            }
        }
    });
    paths = apiPaths;
}

/**
 * 更據 role string 取得菜單
 * @author rourou
 * @description 將需要的頁面 isShow = true
*/
const getMenu = async function (paths: Array<string>) {
    spiltPath(paths).then(async () => {
        await paths.forEach(apiPath => {
            // level 1
            for (const menuPath of menuPaths) {
                if (apiPath === menuPath.apiPath) {
                    menuPath.isShow = true;
                }
                // level 2
                for (const level_02 of menuPath.children) {
                    if (apiPath === level_02.apiPath) {
                        level_02.isShow = true;
                    }
                    // level 3
                    for (const level_03 of level_02.children) {
                        if (apiPath === level_03.apiPath) {
                            level_03.isShow = true;
                        }
                        // level 4
                        for (const level_04 of level_03.children) {
                            if (apiPath === level_04.apiPath) {
                                level_04.isShow = true;
                            }
                        }
                    }
                }
            }
        });
    });
    return menuPaths;
}

export { spiltPath, getMenu };