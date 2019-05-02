/**
 * menu list
 * @author rourou
 * @description menu list filter isShow
 */

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
            routerPath: '/account',
            routerName: 'account',
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
                    apiPath: '/account/vip-deposit',
                    displayName: '人工充值',
                    routerPath: '/account/vip-deposit',
                    routerName: 'account-vip-deposit',
                    level: 2,
                    isLink: false,
                    isShow: false,
                    children: [
                        {
                            apiPath: '/account/vip-deposit/apply',
                            displayName: '申請',
                            routerPath: '/account/vip-deposit/apply',
                            routerName: 'account-vip-deposit-apply',
                            level: 3,
                            isLink: true,
                            isShow: false,
                            children: [],
                        },
                        {
                            apiPath: '/account/vip-deposit/approval',
                            displayName: '審核',
                            routerPath: '/account/vip-deposit/approval',
                            routerName: 'account-vip-deposit-approval',
                            level: 3,
                            isLink: true,
                            isShow: false,
                            children: [],
                        },
                    ],
                },
                {
                    apiPath: '/account/vip-withdraw',
                    displayName: '人工提現',
                    routerPath: '/account/vip-withdraw',
                    routerName: 'account-vip-withdraw',
                    level: 2,
                    isLink: false,
                    isShow: false,
                    children: [
                        {
                            apiPath: '/account/vip-withdraw/apply',
                            displayName: '申請',
                            routerPath: '/account/vip-withdraw/apply',
                            routerName: 'account-vip-withdraw-apply',
                            level: 3,
                            isLink: true,
                            isShow: false,
                            children: [],
                        },
                        {
                            apiPath: '/account/vip-withdraw/approval',
                            displayName: '審核',
                            routerPath: '/account/vip-withdraw/approval',
                            routerName: 'account-vip-withdraw-approval',
                            level: 3,
                            isLink: true,
                            isShow: false,
                            children: [],
                        },
                        {
                            apiPath: '/account/vip-withdraw/bill',
                            displayName: '出帳',
                            routerPath: '/account/vip-withdraw/bill',
                            routerName: 'account-vip-withdraw-bill',
                            level: 3,
                            isLink: true,
                            isShow: false,
                            children: [],
                        },
                    ],
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
                            routerPath: '/account/modified/abnormal',
                            routerName: 'account-modified-abnormal',
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
                        {
                            apiPath: '/account/modified/manual',
                            displayName: '手動調帳',
                            routerPath: '/account/modified/manual',
                            routerName: 'account-modified-manual',
                            level: 3,
                            isLink: false,
                            isShow: false,
                            children: [
                                {
                                    apiPath: '/account/modified/manual/apply',
                                    displayName: '申請',
                                    rrouterPath: '/account/modified/manual/apply',
                                    routerName: 'account-modified-manual-apply',
                                    level: 4,
                                    isLink: true,
                                    isShow: false,
                                    children: [],
                                },
                                {
                                    apiPath: '/account/modified/manual/approval',
                                    displayName: '審核',
                                    routerPath: '/account/modified/manual/approval',
                                    routerName: 'account-modified-manual-approval',
                                    level: 4,
                                    isLink: true,
                                    isShow: false,
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    apiPath: '/account/sacrifice-out',
                    displayName: '強制滑入',
                    routerPath: '/account/sacrifice-out',
                    routerName: 'account-sacrifice-out',
                    level: 2,
                    isLink: true,
                    isShow: false,
                    children: [],
                },
            ],
        },
        {
            apiPath: '/risk-control',
            displayName: '風控',
            routerPath: '/risk-control',
            routerName: 'risk-control',
            level: 1,
            isLink: false,
            isShow: false,
            children: [
                {
                    apiPath: '/risk-control/approval',
                    displayName: '手動提現審核',
                    routerPath: '/risk-control/approval',
                    routerName: 'risk-control-approval',
                    level: 2,
                    isLink: true,
                    isShow: false,
                    children: [],
                },
                {
                    apiPath: '/risk-control/check-member-status',
                    displayName: '會員風控狀態',
                    routerPath: '/risk-control/check-member-status',
                    routerName: 'risk-control-check-member-status',
                    level: 2,
                    isLink: true,
                    isShow: false,
                    children: [],
                },
                {
                    apiPath: '/risk-control/level-setting',
                    displayName: '風控等級設定',
                    routerPath: '/risk-control/level-setting',
                    routerName: 'risk-control-level-setting',
                    level: 2,
                    isLink: true,
                    isShow: false,
                    children: [],
                },
                {
                    apiPath: '/risk-control/withdraw-limitation-setting',
                    displayName: '風控條件設定',
                    routerPath: '/risk-control/withdraw-limitation-setting',
                    routerName: 'risk-control-withdraw-limitation-setting',
                    level: 2,
                    isLink: true,
                    isShow: false,
                    children: [],
                },
            ],
        },
        {
            apiPath: '/cs',
            displayName: '客服',
            routerPath: '/cs',
            routerName: 'cs',
            level: 1,
            isLink: false,
            isShow: false,
            children: [
                {
                    apiPath: '/cs/message',
                    displayName: '最新對話',
                    routerPath: '/cs/message',
                    routerName: 'cs-message',
                    level: 2,
                    isLink: true,
                    isShow: false,
                    children: [],
                },
                {
                    apiPath: '/cs/create-case',
                    displayName: '新增客服案件',
                    routerPath: '/cs/create-case',
                    routerName: 'cs-create-case',
                    level: 2,
                    isLink: true,
                    isShow: false,
                    children: [],
                },
                {
                    apiPath: '/cs/search-create-case',
                    displayName: '查詢及新增客服紀錄',
                    routerPath: '/cs/search-create-case',
                    routerName: 'cs-search-create-case',
                    level: 2,
                    isLink: true,
                    isShow: false,
                    children: [],
                },
            ],
        },
        {
            apiPath: '/permission',
            displayName: '帳號與權限',
            routerPath: '/permission',
            routerName: 'permission',
            level: 1,
            isLink: false,
            isShow: false,
            children: [
                {
                    apiPath: '/permission/create-account',
                    displayName: '新增帳號',
                    routerPath: '/permission/create-account',
                    routerName: 'permission-create-account',
                    level: 2,
                    isLink: true,
                    isShow: false,
                    children: [],
                },
                {
                    apiPath: '/permission/check-policies',
                    displayName: '查詢對應角色可使用的功能',
                    routerPath: '/permission/check-policies',
                    routerName: 'permission-check-policies',
                    level: 2,
                    isLink: true,
                    isShow: false,
                    children: [],
                },
            ],
        },
        {
            apiPath: '/system',
            displayName: '系統',
            routerPath: '/system',
            routerName: 'system',
            level: 1,
            isLink: false,
            isShow: false,
            children: [
                {
                    apiPath: '/system/maquee',
                    displayName: '跑馬燈',
                    routerPath: '/system/maquee',
                    routerName: 'system-maquee',
                    level: 2,
                    isLink: true,
                    isShow: false,
                    children: [],
                },
                {
                    apiPath: '/system/effective-bet-related-setting',
                    displayName: '有效流水相關參數設定',
                    routerPath: '/system/effective-bet-related-setting',
                    routerName: 'system-effective-bet-related-setting',
                    level: 2,
                    isLink: true,
                    isShow: false,
                    children: [],
                },
                {
                    apiPath: '/system/transfer-rate',
                    displayName: '充值轉換率設定',
                    routerPath: '/system/transfer-rate',
                    routerName: 'system-transfer-rate',
                    level: 2,
                    isLink: true,
                    isShow: false,
                    children: [],
                },
                {
                    apiPath: '/system/bonus',
                    displayName: '快速註冊 手機註冊 送金設定',
                    routerPath: '/system/bonus',
                    routerName: 'system-bonus',
                    level: 2,
                    isLink: true,
                    isShow: false,
                    children: [],
                },
            ],
        },
    ];

let paths = new Array<string>();

/**
 * 拆解路徑字串
 * @author rourou
 * @description role string 拆解
*/
const spiltPath = async (apiPaths: string[]) => {
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
};

/**
 * 更據 role string 取得菜單
 * @author rourou
 * @description 將需要的頁面 isShow = true
*/
const getMenu = async (path: string[]) => {
    spiltPath(path).then(async () => {
        await path.forEach(apiPath => {
            // level 1
            for (const menuPath of menuPaths) {
                if (apiPath === menuPath.apiPath) {
                    menuPath.isShow = true;
                }
                // level 2
                for (const level2 of menuPath.children) {
                    if (apiPath === level2.apiPath) {
                        level2.isShow = true;
                    }
                    // level 3
                    for (const level3 of level2.children) {
                        if (apiPath === level3.apiPath) {
                            level3.isShow = true;
                        }
                        // level 4
                        for (const level4 of level3.children) {
                            if (apiPath === level4.apiPath) {
                                level4.isShow = true;
                            }
                        }
                    }
                }
            }
        });
    });
    return menuPaths;
};

export { spiltPath, getMenu };