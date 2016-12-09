import key from 'keymaster'

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

  //异步函数(side effects)
  effects: {
    *add(action, { call, put }) {
      yield call(delay, 1000);
      yield put({type: 'minus'});
    },
  },

  //订阅事件
  subscriptions: {
    keyboardWatcher({ dispatch, history }) {
      key('ctrl+up', ()=>{
        dispatch({type: 'add'});
      });
    },
  },

}

function delay(timeout) {
  return new Promise((resolve)=>{
    setTimeout(resolve, timeout);
  });
}
