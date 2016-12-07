
export default {

  namespace: 'count',

  state: {
    record: 0,
    current: 0,
  },

  reducers: {
    //根本没用到，所以省略action参数
    add(state) {
      const newCurrent = state.current + 1;
      return {
        ...state,
        current: newCurrent,
        record: Math.max(newCurrent, state.record),
      };
    },
    minus(state) {
      return {
        ...state,
        current: state.current - 1,
      };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *fetchRemote({ payload }, { call, put }) {
    },
  },



}
