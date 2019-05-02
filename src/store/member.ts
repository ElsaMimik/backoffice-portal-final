import { IMemberResponse } from '@/models/interfaces/member';
import { IActionContextBasic } from '@/store/index';
import MemberApi from '@/api/member';
export interface IState {
    memberInfos: IMemberResponse[];
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
        MemberApi.getMemberList(uuid).then((data) => {
            context.commit(SEARCH_MEMBER, data);
        });
    },
};

const mutations = {
    [SEARCH_MEMBER](state: IState, payload: IMemberResponse[]) {
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
