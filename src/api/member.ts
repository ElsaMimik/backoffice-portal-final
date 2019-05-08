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
			url: `/members/?short-uuid=${shortUuid}`,
			method: 'get',
		};
		const result = await Handler.request<Model.IMembersResponse>(config);
		return <Model.IMembersResponse>(result.data);

		// return Promise.resolve(
		// 	<Model.IMembersResponse>(
		// 		{ members: [
		// 			{
		// 				uuid: "5095ebd8-3175-4fb5-97f3-dddd4af0b6d8",
		// 				riskControlLevel: "D",
		// 				isBlacklisting: false,
		// 				amount: 10000.1234,
		// 				freezeAmount: 0,
		// 				accountStatus: "E2",
		// 				withdrawalStatus: "Normal",
		// 				createDate: 1556668800000,
		// 				roleCode: "Normal"
		// 			},
		// 			{
		// 				uuid: "5095ebd8-3175-4fb5-97f3-dddd4af0b6d8",
		// 				riskControlLevel: "D",
		// 				isBlacklisting: true,
		// 				amount: 10000,
		// 				freezeAmount: 0,
		// 				accountStatus: "Normal",
		// 				withdrawalStatus: "E1",
		// 				createDate: 1556668800000,
		// 				roleCode: "Normal"
		// 			}
		// 		]}
		// 	));
	},
	/**
	 * 2. Get Member Profile By Uuid
	 * @description 後台人員查詢會員資料(針對單一uuid查詢) [BO-12]
	 */
	async getMemberDetail(uuid: string): Promise<Model.IMemberDetailResponse> {
		const config = {
			url: `/members/${uuid}/profile`,
			method: 'get'
		};
		const result = await Handler.request<Model.IMemberDetailResponse>(config);
		return <Model.IMemberDetailResponse>(result.data);
	},
	/**
	 * 3. Update Member Status
	 * @description 調整會員狀態 [BO-17/BO-185]
	 */
	async updateMemberStatus(payload: Model.IMemberStatusRequest, uuid: string): Promise<boolean> {
		const config = {
			url: `/members/${uuid}/status`,
			method: 'patch',
			data: payload,
		};
		const result = await Handler.request<boolean>(config);
		return <boolean>(result.data);
	},
	/**
	 * 4. Get Member Status History
	 * @description 查詢會員-狀態異動紀錄 [BO-26]
	 */
	async getMemberStatusHistoryList(uuid: string): Promise<Model.IMemberStatusResponse> {
		const config = {
			url: `/members/${uuid}/status-history`,
			method: 'get'
		};
		const result = await Handler.request<Model.IMemberStatusResponse>(config);
		return <Model.IMemberStatusResponse>(result.data);
	},
	/**
	 * 5. Get Member Login History
	 * @description 查詢會員-最近登入資料 [BO-11]
	 */
	async getMemberLoginHistory(
		uuid: string,
		startDate: number,
		endDate: number,
		isSuccess: null | boolean): Promise<Model.ILoginHistoryResponse> {
		const config = {
			url: `/members/login-history/${uuid}?startDate=${startDate}&endDate=${endDate}&isSuccess=${isSuccess}`,
			method: 'get'
		};

		const result = await Handler.request<Model.ILoginHistoryResponse>(config);
		return <Model.ILoginHistoryResponse>(result.data);
	},
	/**
	 * 6. Get Member Same Ip History
	 * @description 查詢會員-上次登入相同Ip資料 [BO-14]取得與此用戶上次登入相同IP，且在時間區間內登入的其他用戶登入資料
	 */
	async getMemberRelationLoginHistory(uuid: string, startDate: number, endDate: number,): Promise<Model.IRelationLoginHistoryResponse> {
		const config = {
			url: `/members/${uuid}/relation-login?startDate=${startDate}&endDate=${endDate}`,
			method: 'get'
		};

		const result = await Handler.request<Model.IRelationLoginHistoryResponse>(config);
		return <Model.IRelationLoginHistoryResponse>(result.data);
	},
	/**
	 * 7. Get Member Risk Control
	 * @description 查詢會員-風控條件 [BO-16]取得與此用戶風控相關資料
	 */
	async getMemberRiskControl(uuid: string): Promise<Model.IRiskControlResponse> {
		const config = {
			url: `/members/${uuid}/risk-control`,
			method: 'get'
		};

		const result = await Handler.request<Model.IRiskControlResponse>(config);
		return <Model.IRiskControlResponse>(result.data);
	},
	/**
	 * 8. Get Member Turnover
	 * @description 查詢會員-交易資料 [BO-13]取得與此用戶流水相關資料
	 */
	async getMemberTurnover(uuid: string): Promise<Model.ITurnoverResponse> {
		const config = {
			url: `/members/${uuid}/turnover`,
			method: 'get'
		};
		const result = await Handler.request<Model.ITurnoverResponse>(config);
		return <Model.ITurnoverResponse>(result.data);
	},
};