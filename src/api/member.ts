import * as Model from '@/models/interfaces/member';
import { AccountStatus } from '@/models/status/member';
import Handler from '@/utilities/api-handler.lib';

export default {
    /**
     * 1. Get Member List
     * @description 後台人員查詢會員資料(使用uuid前八碼查詢) [BO-18]
     */
    async getMemberListAsync(shortUuid: string): Promise<Model.IMembersResponse> {
        const config = {
            url: `/member/members?short-uuid=${shortUuid}`,
            method: 'get'
        };
        await Handler.request(config)
        .then(data => {
            return Promise.resolve(<Model.IMembersResponse|any>data);
        })
        .catch(err => {
            return Promise.reject();
        });
        return Promise.reject();
    },
    /**
     * 2. Get Member Profile By Uuid
     * @description 後台人員查詢會員資料(針對單一uuid查詢) [BO-12]
     */
    async getMemberDetail(uuid: string): Promise<Model.IMemberDetailResponse|any> {
        const config = {
            url: `/member/profile/${uuid}`,
            method: 'get'
        };
    },
    /**
     * 3. Update Member Status
     * @description 調整會員狀態 [BO-17/BO-185]
     */
    async updateMemberStatus(payload: Model.IMemberStatusRequest, uuid: string): Promise<boolean|any> {
        const config = {
            url: `/member/status/${uuid}`,
            method: 'patch',
            data: payload,
        };
    },
    /**
     * 4. Get Member Status History
     * @description 查詢會員-狀態異動紀錄 [BO-26]
     */
    async getMemberStatusHistoryList(uuid: string): Promise<Model.IMemberStatusResponse|any> {
        const config = {
            url: `/member/status-history/${uuid}`,
            method: 'get'
        };
    },
    /**
     * 5. Get Member Login History
     * @description 查詢會員-最近登入資料 [BO-11]
     */
    async getMemberLoginHistory(
        uuid: string,
        startDate: number,
        endDate: number,
        isSuccess: null | boolean): Promise<Model.ILoginHistoryResponse|any> {
        const config = {
            url: `/member/login-history/${uuid}?startDate=${startDate}&endDate=${endDate}&isSuccess=${isSuccess}`,
            method: 'get'
        };
    },
    /**
     * 6. Get Member Same Ip History
     * @description 查詢會員-上次登入相同Ip資料 [BO-14]取得與此用戶上次登入相同IP，且在時間區間內登入的其他用戶登入資料
     */
    async getMemberRelationLoginHistory(uuid: string, startDate: number, endDate: number,): Promise<Model.IRelationLoginHistoryResponse|any> {
        const config = {
            url: `/member/relation-login/${uuid}?startDate=${startDate}&endDate=${endDate}`,
            method: 'get'
        };
    },
    /**
     * 7. Get Member Risk Control
     * @description 查詢會員-風控條件 [BO-16]取得與此用戶風控相關資料
     */
    async getMemberRiskControl(uuid: string): Promise<Model.IRiskControlResponse|any> {
        const config = {
            url: `/member/risk-control/${uuid}`,
            method: 'get'
        };
    },
    /**
     * 8. Get Member Turnover
     * @description 查詢會員-交易資料 [BO-13]取得與此用戶流水相關資料
     */
    async getMemberTurnover(uuid: string): Promise<Model.ITurnoverResponse|any> {
        const config = {
            url: `/member/turnover/${uuid}`,
            method: 'get'
        };
        // return data;
    },
};