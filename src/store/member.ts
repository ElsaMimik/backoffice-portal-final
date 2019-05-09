import { IActionContextBasic } from '@/store/index';
import * as Model from '@/models/interfaces/member';

export interface IState {
	memberDetail: Model.IMemberDetailResponse;
}
const MEMBER_DETAIL = 'MEMBER_DETAIL';


const initState: IState = {
	memberDetail: {} as Model.IMemberDetailResponse,
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
