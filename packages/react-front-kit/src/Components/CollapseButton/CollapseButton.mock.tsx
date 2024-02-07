import { CollapseButton as Cmp } from './CollapseButton';

export const childrenMock = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
varius bibendum dui non imperdiet. Donec vehicula fringilla lorem
vitae rutrum. Etiam malesuada ullamcorper aliquam. Vestibulum ante
ipsum primis in faucibus orci luctus et ultrices posuere cubilia
curae; Cras elit lacus, viverra vitae risus et, pharetra tincidunt
felis. Aliquam erat volutpat. In vitae nibh eu turpis commodo
luctus vitae id libero. Curabitur eget nunc volutpat, luctus quam
rutrum, ultricies tellus. Integer diam nulla, vestibulum id enim
quis, molestie luctus magna. Phasellus et rhoncus augue, id
maximus mi. Vivamus consequat quam tristique ex laoreet, ut
eleifend eros sodales. Cras bibendum enim dolor, id rutrum urna
vestibulum non.`;

export const otherChildrenMock = (
  <>
    <Cmp label="Dashboard" level={1}>
      <Cmp label="Wiki pages" level={2} />
      <Cmp label="Settings" level={2} />
    </Cmp>
    <Cmp label="Home" level={1} />
  </>
);
