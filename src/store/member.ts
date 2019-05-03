import { ITestMemberResponse } from '@/models/interfaces/member';
import { IActionContextBasic } from '@/store/index';
import MemberApi from '@/api/member';
import FileApi from '@/api/file';
import AuthApi from '@/api/auth';
export interface IState {
    memberInfos: ITestMemberResponse[];
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
        FileApi.uploadFile('uuid','tertre').then((data) => {
            context.commit(SEARCH_MEMBER, data);
        });
    },
};

const mutations = {
    [SEARCH_MEMBER](state: IState, payload: ITestMemberResponse[]) {
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
