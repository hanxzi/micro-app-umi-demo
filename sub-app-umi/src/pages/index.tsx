import React, { useEffect } from 'react';
import styles from './index.less';
import { useModel, Link } from 'umi';
export default function IndexPage() {
  const { qiankunGlobalState, setQiankunGlobalState } = useModel('@@qiankunStateFromMaster');
  return (
    <div>
      <div>{JSON.stringify(qiankunGlobalState)}</div>
      <h1 className={styles.title}>Page index</h1>
      <button onClick={() => {setQiankunGlobalState({"slogan":"Hello Change App Umi"}) }}>修改全局 state</button>
      {/* 
      <Link to='/edit'>edit page</Link> */}
    </div>
  );
}
