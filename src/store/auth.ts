import { ActionContextBasic } from '@/store/index'
export interface State {
    apiPaths: string[]
}
const GET_AUTH_ROLE_STRING = 'GET_AUTH_ROLE_STRING';


const initState: State = {
    apiPaths: [],
}

const getters = {
    getApiPaths: (state: State) => state.apiPaths,
}

const actions = {
    getApiPath(context: ActionContextBasic, uuid: string) {
        console.log('call api getApiPath')
        // TODO : apiPaths = call api
        const data = ['/member', '/account/modified/abnormal/approval'];
        // const data = new Array<string>();
        context.commit(GET_AUTH_ROLE_STRING, data);
    },
}

const mutations = {
    [GET_AUTH_ROLE_STRING](state: State, payload: string[]) {
        state.apiPaths = payload;
    },
}

export default {
    namespaced: true,
    state: initState,
    getters,
    actions,
    mutations,
}
