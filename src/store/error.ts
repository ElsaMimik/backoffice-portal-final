import { ActionContextBasic } from '@/store/index'
import { IError } from '@/models/interfaces/error'


export interface State {
    errorHistory: IError[]
}
const ERROR = 'ERROR';

const initState: State = {
    errorHistory: [],
}

const getters = {
    getErrorHistory: (state: State) => state.errorHistory,
}

const actions = {
    getError(context: ActionContextBasic, error: IError) {
        context.commit(ERROR, error);
    },
}

const mutations = {
    [ERROR](state: State, payload: IError) {
        state.errorHistory.splice(0, 0, payload);
    },
}

export default {
    namespaced: true,
    state: initState,
    getters,
    actions,
    mutations,
}

