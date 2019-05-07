import * as Model from '@/models/interfaces/auth';
import Handler from '@/utilities/api-handler.lib';

export default {
    /**
     * 1. Get Member Menu
     * @description 取得客服後台菜單清單與權限，且每次換頁也會詢問
     */
    async getMenu(): Promise<Model.IMenuResponse> {
        // const config = {
        //     url: '/menu',
        //     method: 'get',
        // };
        // const result = await Handler.request<Model.IMenuResponse>(config);
        // return <Model.IMenuResponse>(result.data);

        return Promise.resolve(
            <Model.IMenuResponse>(
                { menu: ["/member", "/account/modified/abnormal/approval", "/risk-control/check-member-status"] }
            ));
    },
};