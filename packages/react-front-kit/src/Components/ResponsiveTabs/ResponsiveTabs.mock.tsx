import type { ReactNode } from 'react';

import { Tabs } from '@mantine/core';

// eslint-disable-next-line react-refresh/only-export-components
function Content({ children }: { children: ReactNode }): ReactNode {
  return <div style={{ paddingTop: 20 }}>{children}</div>;
}

export const contents = (
  <>
    <Tabs.Panel value="1">
      <Content>First Content</Content>
    </Tabs.Panel>
    <Tabs.Panel value="2">
      <Content>Second Content</Content>
    </Tabs.Panel>
    <Tabs.Panel value="3">
      <Content>Third Content</Content>
    </Tabs.Panel>
    <Tabs.Panel value="4">
      <Content>Fourth Content</Content>
    </Tabs.Panel>
    <Tabs.Panel value="5">
      <Content>Overflow 1 Content</Content>
    </Tabs.Panel>
    <Tabs.Panel value="6">
      <Content>Overflow 2 Content</Content>
    </Tabs.Panel>
  </>
);

export const tabs = [
  <Tabs.Tab key={1} value="1">
    First
  </Tabs.Tab>,
  <Tabs.Tab key={2} data-testid="test-tab" value="2">
    Second
  </Tabs.Tab>,
  <Tabs.Tab key={3} value="3">
    Third
  </Tabs.Tab>,
  <Tabs.Tab key={4} value="4">
    Fourth
  </Tabs.Tab>,
  <Tabs.Tab key={5} value="5">
    Overflow 1
  </Tabs.Tab>,
  <Tabs.Tab key={6} value="6">
    Overflow 2
  </Tabs.Tab>,
];
