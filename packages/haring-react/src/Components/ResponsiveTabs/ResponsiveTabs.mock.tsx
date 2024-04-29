import { Tabs } from '@mantine/core';

export const contentsMock = (
  <>
    <Tabs.Panel value="1">First Content</Tabs.Panel>
    <Tabs.Panel value="2">Second Content</Tabs.Panel>
    <Tabs.Panel value="3">Third Content</Tabs.Panel>
    <Tabs.Panel value="4">Fourth Content</Tabs.Panel>
    <Tabs.Panel value="5">Overflow 1 Content</Tabs.Panel>
    <Tabs.Panel value="6">Overflow 2 Content</Tabs.Panel>
  </>
);

export const tabsMock = [
  <Tabs.Tab key={1} id="tab-1" value="1">
    First
  </Tabs.Tab>,
  <Tabs.Tab key={2} data-testid="test-tab" id="tab-1" value="2">
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
