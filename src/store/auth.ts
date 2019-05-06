import { IActionContextBasic } from '@/store/index';
import AuthApi from '@/api/auth';

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
    async setApiPath(context: IActionContextBasic, data: string[]) {
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
