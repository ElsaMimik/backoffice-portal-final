export const displayFiltersMixin = {
    filters: {
        firstEightYards(data: string) {
            return data.slice(0, 8);
          },
          uuidDisplay(data: string) {
            return data.replace(/\-/g,'');
          },
          accountStatusDisplay(data: string) {
            return data === 'Normal' ? '正常' : '不可登入';
          },
          withdrawalStatusDisplay(data: string) {
            return data === 'Normal' ? '正常' : '不可提現';
          },
          isBlacklistingDisplay(data: boolean) {
            return data ? '是' : '不是';
          },
          amountDisplay(amount: number) {
            return amount.toFixed(2);
          },
    }
};