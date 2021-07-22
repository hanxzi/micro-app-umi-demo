import React, { useEffect } from 'react';
import styles from './index.less';
import { useModel } from 'umi';
export default function IndexPage() {
  const { globalState } = useModel('@@qiankunStateFromMaster');
  return (
    <div>
      <div>{JSON.stringify(globalState)}</div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
