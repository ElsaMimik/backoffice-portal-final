import * as Status from '@/models/status/member';

export const displayFiltersMixin = {
    filters: {
        firstEightYards(data: string) {
          return data.slice(0, 8);
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
        amountDisplay(amount: number) {
          return amount.toFixed(2);
        },
    }
};