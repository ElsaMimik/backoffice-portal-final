import { IActionContextBasic } from '@/store/index';
export interface IState {
    apiPaths: string[];
}
const GET_AUTH_ROLE_STRING = 'GET_AUTH_ROLE_STRING';


const initState: IState = {
    apiPaths: [],
};

const getters = {
    getApiPaths: (state: IState) => state.apiPaths,
};

const actions = {
    getApiPath(context: IActionContextBasic, uuid: string) {
        // console.log('call api getApiPath')
        // TODO : apiPaths = call api
        const data = ['/member', '/account/modified/abnormal/approval'];
        // const data = new Array<string>();
        context.commit(GET_AUTH_ROLE_STRING, data);
    },
};

const mutations = {
    [GET_AUTH_ROLE_STRING](state: IState, payload: string[]) {
        state.apiPaths = payload;
    },
};

export default {
    namespaced: true,
    state: initState,
    getters,
    actions,
    mutations,
};
