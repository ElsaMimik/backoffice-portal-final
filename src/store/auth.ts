import { IActionContextBasic } from '@/store/index';
import AuthApi from '@/api/auth';

export interface IState {
	apiPaths: string[];
	currentPath: string;
}
const SET_AUTH_ROLE_STRING = 'SET_AUTH_ROLE_STRING';
const SET_CURRENT_PATH = 'SET_CURRENT_PATH';


const initState: IState = {
	apiPaths: [],
	currentPath: '',
};

const getters = {
	getApiPaths: (state: IState) => state.apiPaths,
};

const actions = {
	async setApiPath(context: IActionContextBasic, data: string[]) {
		context.commit(SET_AUTH_ROLE_STRING, data);
	},
	async setCurrentPath(context: IActionContextBasic, data: string) {
		context.commit(SET_CURRENT_PATH, data);
		// context.commit(SET_CURRENT_PATH, 'account-modified-abnormal-approval');
	},
};

const mutations = {
	[SET_AUTH_ROLE_STRING](state: IState, payload: string[]) {
		state.apiPaths = payload;
	},
	[SET_CURRENT_PATH](state: IState, payload: string) {
		state.currentPath = payload;
	},
};

export default {
	namespaced: true,
	state: initState,
	getters,
	actions,
	mutations,
};
