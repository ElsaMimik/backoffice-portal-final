// import { ITestMemberResponse } from '@/models/interfaces/member';
import { IActionContextBasic } from '@/store/index';
import MemberApi from '@/api/member';
import FileApi from '@/api/file';

import * as Status from '@/models/status/member';
import * as Model from '@/models/interfaces/member';

export interface IState {
	memberInfos: Model.ITestMemberResponse[];
}
const SEARCH_MEMBER = 'SEARCH_MEMBER';


const initState: IState = {
	memberInfos: [],
};

const getters = {
	getMemberInfo: (state: IState) => state.memberInfos,
};

const actions = {
	getMember(context: IActionContextBasic, uuid: string) {
		// FileApi.uploadFile('uuid','tertre').then((data) => {
		//     context.commit(SEARCH_MEMBER, data);
		// });
		// FileApi.getFile('uuid').then((data) => {
		//     context.commit(SEARCH_MEMBER, data);
		// });
		// MemberApi.updateMemberStatus(<Model.IMemberStatusRequest>{
		//     accountAction: Status.AccountStatus.Normal,
		//     withdrawalAction: Status.WithdrawalStatus.Normal,
		//     reason: '',
		//     files: []
		// },'tertre').then((data: boolean) => {
		//     context.commit(SEARCH_MEMBER, data);
		// });
		// MemberApi.getMemberStatusHistoryList('uuid').then((data) => {
		//     context.commit(SEARCH_MEMBER, data);
		// });
	},
};

const mutations = {
	[SEARCH_MEMBER](state: IState, payload: Model.ITestMemberResponse[]) {
		state.memberInfos = payload;
	},
};

export default {
	namespaced: true,
	state: initState,
	getters,
	actions,
	mutations,
};
