import Vue from 'vue'
import Vuex, { Commit, Dispatch } from 'vuex'
import Member from '@/store/member'
import Auth from '@/store/auth'
import Error from '@/store/error'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      Member,
      Auth,
      Error,
  }
})

export interface ActionContextBasic {
  commit: Commit,
  dispatch: Dispatch
}
