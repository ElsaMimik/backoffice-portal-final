import * as Status from '@/models/status/member';
import { IActionContextBasic } from '@/store/index';
import * as Model from '@/models/interfaces/member';

export interface IState {
	memberDetail: Model.IMemberDetailResponse;
}
const MEMBER_DETAIL = 'MEMBER_DETAIL';


const initState: IState = {
	memberDetail: {
		uuid: '',
		nickName: '',
		createDate: '',
		currencyCode: Status.CurrencyCode.CNY,
		roleCode: Status.RoleCode.Normal,
		phoneNumber: '',
		riskControlLevel: Status.RiskControllLevel.D,
		isBlacklisting: true,
		riskControlLevelCreateDate: 0,
		blacklistingCreateDate: 0,
		amount: 0,
		freezeAmount: 0,
		securityBoxAmount: 0,
		withdrawalLimitAmount: 0,
		availableWithdrawalLimitAmount: 0,
		turnoverAmount: 0,
		turnoverAmountCreateDate: 0,
		accountStatus: Status.AccountStatus.E2,
		withdrawalStatus: Status.WithdrawalStatus.E1,
		isBigWin: false,
		bigWinCreateDate: 0,
		isSettled: false,
		settleStatus: Status.SettleStatus.Abnormal,
	},
};

const getters = {
	memberDetail: (state: IState) => state.memberDetail,
};

const actions = {
	setMember(context: IActionContextBasic, payload: Model.IMemberDetailResponse) {
		context.commit(MEMBER_DETAIL, payload);
	},
};

const mutations = {
	[MEMBER_DETAIL](state: IState, payload: Model.IMemberDetailResponse) {
		state.memberDetail = payload;
	},
};

export default {
	namespaced: true,
	state: initState,
	getters,
	actions,
	mutations,
};
