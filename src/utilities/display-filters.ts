import * as Status from '@/models/status/member';

export const displayFiltersMixin = {
    filters: {
        firstEightYards(data: string) {
          return data.slice(0, 8);
        },
        firstUuidYards(data: string) {
          return data.slice(0, 18);
        },
        lastUuidYards(data: string) {
          return data.replace(data.slice(0, 18), '');
        },
        uuidDisplay(data: string) {
          return data.replace(/\-/g,'');
        },
        accountStatusDisplay(data: string) {
          return data === Status.AccountStatus.Normal ? '正常' : '不可登入';
        },
        withdrawalStatusDisplay(data: string) {
          return data === Status.WithdrawalStatus.Normal ? '正常' : '不可提現';
        },
        roleCodeStatusDisplay(data: string) {
          return data === Status.RoleCode.Normal ? '直客' : '';
        },
        isBlacklistingDisplay(data: boolean) {
          return data ? '是' : '不是';
        },
        isSettledDisplay(data: boolean) {
          return data ? '已結算' : '尚未結算完畢';
        },
        isBidWinDisplay(data: boolean) {
          return data ? '是' : '無';
        },
        settleStatusDisplay(data: string) {
          return data === Status.SettleStatus.Normal ? '正常' : '金額不符合-異常';
        },
        amountDisplay(amount: number) {
          return amount.toFixed(2);
        },
    }
};