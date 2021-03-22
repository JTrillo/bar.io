import React from 'react';
import { CenteredLayout } from 'layouts';
import { BarInfoContainer } from 'pods/bar-info';

export const BarInfoScene: React.FC = () => {
  return (
    <>
      <CenteredLayout>
        <BarInfoContainer />
      </CenteredLayout>
    </>
  );
};
