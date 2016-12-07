/**
 * Created by Administrator on 2016/12/7.
 */

import styles from '../index.less'
import { connect } from 'dva'
import React from 'react'

const CounterApp = ({ count, dispatch }) => {
  return (
    <div className={styles.normal}>
      <div className={styles.record}> 最高纪录：{ count.record }</div>
      <div className={styles.current}> { count.current }</div>
      <div className={styles.button}>
        <button onClick={()=>dispatch({ type: 'count/add' })}> + </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps)(CounterApp);
