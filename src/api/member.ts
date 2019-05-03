import * as Model from '@/models/interfaces/member';
import { AccountStatus } from '@/models/status/member';
import Handler from '@/utilities/api-handler.lib';

export default {
    /**
     * 1. Get Member List
     * @description 後台人員查詢會員資料(使用uuid前八碼查詢) [BO-18]
     */
    async getMemberList(shortUuid: string): Promise<Model.IMembersResponse> {
        const config = {
            url: '',
            method: 'get'
        };
        let data!: Model.IMembersResponse;
        Handler.request<Model.IMembersResponse>(config)
            .then(res => {
                data = <Model.IMembersResponse>res.data;
            });
        return data;
    },
    /**
     * 2. Get Member Profile By Uuid
     * @description 後台人員查詢會員資料(針對單一uuid查詢) [BO-12]
     */
    async getMemberDetail(uuid: string): Promise<Model.IMemberDetailResponse> {
        const config = {
            url: '',
            method: 'get'
        };
        let data!: Model.IMemberDetailResponse;
        Handler.request<Model.IMemberDetailResponse>(config)
            .then(res => {
                data = <Model.IMemberDetailResponse>res.data;
            });
        return data;
    },
    /**
     * 3. Update Member Status
     * @description 調整會員狀態 [BO-17/BO-185]
     */
    async updateMemberStatus(payload: Model.IMemberStatusRequest): Promise<boolean> {
        const config = {
            url: '',
            method: 'post'
        };
        let data!: boolean;
        Handler.request<boolean>(config)
            .then(res => {
                data = <boolean>res.data;
            });
        return data;
    },
    /**
     * 4. Get Member Status History
     * @description 查詢會員-狀態異動紀錄 [BO-26]
     */
    async getMemberStatusHistoryList(uuid: string): Promise<Model.IMemberStatusResponse> {
        const config = {
            url: '',
            method: 'get'
        };
        let data!: Model.IMemberStatusResponse;
        Handler.request<Model.IMemberStatusResponse>(config)
            .then(res => {
                data = <Model.IMemberStatusResponse>res.data;
            });
        return data;
    },
    /**
     * 5. Get Member Login History
     * @description 查詢會員-最近登入資料 [BO-11]
     */
    async getMemberLoginHistory(uuid: string): Promise<Model.ILoginHistoryResponse> {
        const config = {
            url: '',
            method: 'get'
        };
        let data!: Model.ILoginHistoryResponse;
        Handler.request<Model.ILoginHistoryResponse>(config)
            .then(res => {
                data = <Model.ILoginHistoryResponse>res.data;
            });
        return data;
    },
    /**
     * 6. Get Member Same Ip History
     * @description 查詢會員-上次登入相同Ip資料 [BO-14]取得與此用戶上次登入相同IP，且在時間區間內登入的其他用戶登入資料
     */
    async getMemberRelationLoginHistory(uuid: string): Promise<Model.IRelationLoginHistoryResponse> {
        const config = {
            url: '',
            method: 'get'
        };
        let data!: Model.IRelationLoginHistoryResponse;
        Handler.request<Model.IRelationLoginHistoryResponse>(config)
            .then(res => {
                data = <Model.IRelationLoginHistoryResponse>res.data;
            });
        return data;
    },
    /**
     * 7. Get Member Risk Control
     * @description 查詢會員-風控條件 [BO-16]取得與此用戶風控相關資料
     */
    async getMemberRiskControl(uuid: string): Promise<Model.IRiskControlResponse> {
        const config = {
            url: '',
            method: 'get'
        };
        let data!: Model.IRiskControlResponse;
        Handler.request<Model.IRiskControlResponse>(config)
            .then(res => {
                data = <Model.IRiskControlResponse>res.data;
            });
        return data;
    },
    /**
     * 8. Get Member Turnover
     * @description 查詢會員-交易資料 [BO-13]取得與此用戶流水相關資料
     */
    async getMemberTurnover(uuid: string): Promise<Model.ITurnoverResponse> {
        const config = {
            url: '',
            method: 'get'
        };
        let data!: Model.ITurnoverResponse;
        Handler.request<Model.ITurnoverResponse>(config)
            .then(res => {
                data = <Model.ITurnoverResponse>res.data;
            });
        return data;
    },



    testGetMember(id: string): Model.ITestMemberResponse {
        const data: Model.ITestMemberResponse = { uuid: 'employee_01', name: 'Rourou', status: AccountStatus.Normal };
        return <Model.ITestMemberResponse>(data);
    },
    async testGetMemberList(id: string): Promise<Model.ITestMemberResponse[]> {
        const config = {
            url: '/menu',
            method: 'get'
        };
        interface IResponse {
            success: boolean;
        }
        Handler.request<IResponse>(config)
            .then(res => {
                // console.log(res.data.success);
            }).catch(error => {
                // console.log(error);
            });
        const data: Model.ITestMemberResponse[] = [
            { uuid: 'employee_01', name: 'Rourou', status: AccountStatus.Normal },
            { uuid: 'employee_02', name: 'Ellen', status: AccountStatus.E2 },
        ];
        return data;
    },
};