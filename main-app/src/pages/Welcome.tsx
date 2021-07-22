import React, { useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage, useModel } from 'umi';
import styles from './Welcome.less';


const Welcome: React.FC = () => {
  const intl = useIntl();
  const { initialState, setInitialState } = useModel('@@initialState');
  // const { qiankunGlobalState, setQiankunGlobalState } = useModel('@@qiankunStateFromMaster');
  return (
    <PageContainer>
      <Card>
        <div>{JSON.stringify('initialState')}</div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
