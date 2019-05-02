import { spiltPath } from './menu'

// export component 權限 router.beforeEach 檢查
const component = [
    {
        apiPath: '/member',
        routerName: 'member',
    },
    {
        apiPath: '/member',
        routerName: 'member-detail',
    },
    {
        apiPath: '/account/transaction',
        routerName: 'account-transaction'
    },
    {
        apiPath: '/account/game-bet-record',
        routerName: 'account-game-bet-record',
    },
    {
        apiPath: '/account/vip-deposit/apply',
        routerName: 'account-vip-deposit-apply',
    },
    {
        apiPath: '/account/vip-deposit/approval',
        routerName: 'account-vip-deposit-approval',
    },
    {
        apiPath: '/account/vip-withdraw/apply',
        routerName: 'account-vip-withdraw-apply',
    },
    {
        apiPath: '/account/vip-withdraw/approval',
        routerName: 'account-vip-withdraw-approval',
    },
    {
        apiPath: '/account/vip-withdraw/bill',
        routerName: 'account-vip-withdraw-bill',
    },
    {
        apiPath: '/account/modified/abnormal/apply',
        routerName: 'account-modified-abnormal-apply',
    },
    {
        apiPath: '/account/modified/abnormal/approval',
        routerName: 'account-modified-abnormal-approval',
    },
    {
        apiPath: '/account/modified/manual/apply',
        routerName: 'account-modified-manual-apply',
    },
    {
        apiPath: '/account/modified/manual/approval',
        routerName: 'account-modified-manual-approval',
    },
    {
        apiPath: '/account/sacrifice-out',
        routerName: 'account-sacrifice-out',
    },
    {
        apiPath: '/risk-control/approval',
        routerName: 'risk-control-approval',
    },
    {
        apiPath: '/risk-control/check-member-status',
        routerName: 'risk-control-check-member-status',
    },
    {
        apiPath: '/risk-control/level-setting',
        routerName: 'risk-control-level-setting',
    },
    {
        apiPath: '/risk-control/withdraw-limitation-setting',
        routerName: 'risk-control-withdraw-limitation-setting',
    },
    {
        apiPath: '/cs/message',
        routerName: 'cs-message',
    },
    {
        apiPath: '/cs/create-case',
        routerName: 'cs-create-case',
    },
    {
        apiPath: '/cs/search-create-case',
        routerName: 'cs-search-create-case',
    },

    {
        apiPath: '/permission/create-account',
        routerName: 'permission-create-account',
    },
    {
        apiPath: '/permission/check-policies',
        routerName: 'permission-check-policies',
    },

    {
        apiPath: '/system/maquee',
        routerName: 'system-maquee',
    },
    {
        apiPath: '/system/effective-bet-related-setting',
        routerName: 'system-effective-bet-related-setting',
    },
    {
        apiPath: '/system/transfer-rate',
        routerName: 'system-transfer-rate',
    },
    {
        apiPath: '/system/bonus',
        routerName: 'system-bonus',
    },
]

/**
 * 換頁檢查
 * @author rourou
 * @description router.beforeEach 檢查
*/
const checkPageAuth = async function (to: any, apiPaths: Array<string>) {
    let isAuth = false;
    await spiltPath(apiPaths).then(() => {
        const componentInfo = component.find(s => s.routerName === to);
        if (componentInfo) {
            isAuth = apiPaths.includes(componentInfo.apiPath);
        }
    });
    return isAuth;
}

export { checkPageAuth };
