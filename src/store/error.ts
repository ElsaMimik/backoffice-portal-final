import { IActionContextBasic } from '@/store/index';
import { IError } from '@/models/interfaces/error';


export interface IState {
    errorHistory: IError[];
}
const ERROR = 'ERROR';

const initState: IState = {
    errorHistory: [],
};

const getters = {
    getErrorHistory: (state: IState) => state.errorHistory,
};

const actions = {
    getError(context: IActionContextBasic, error: IError) {
        context.commit(ERROR, error);
    },
};

const mutations = {
    [ERROR](state: IState, payload: IError) {
        state.errorHistory.splice(0, 0, payload);
    },
};

export default {
    namespaced: true,
    state: initState,
    getters,
    actions,
    mutations,
};

