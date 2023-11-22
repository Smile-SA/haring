import type { ReactElement } from 'react';

import { primaryTheme } from '@smile/react-front-kit-shared';

import { Header } from '../../Components/Header/Header';
import { SidebarMenu } from '../../Components/SidebarMenu/SidebarMenu';
import { menuMock } from '../../Components/SidebarMenu/SidebarMenu.mock';

export const header: ReactElement = (
  <Header
    childrenComponent="nav"
    onSearchSubmit={(e) => {
      e.preventDefault();
    }}
    searchTheme={primaryTheme}
  >
    <span>Example Header...</span>
  </Header>
);

export const sidebarContent: ReactElement = (
  <>
    <span>Example Sidebar Content...</span>
    <SidebarMenu menu={menuMock} />
  </>
);

export const mainContent: ReactElement = (
  <>
    <span>Example Main content...</span>
    <p>
      Lorem <a href="#">ipsum</a> dolor sit amet, <b>consectetur</b> adipiscing
      elit. Sed varius <i>bibendum</i> dui non imperdiet. Donec vehicula
      fringilla lorem vitae rutrum. Etiam malesuada ullamcorper aliquam.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Cras elit lacus, viverra vitae risus et, pharetra tincidunt
      felis. Aliquam erat volutpat. In vitae nibh eu turpis commodo luctus vitae
      id libero. Curabitur eget nunc volutpat, luctus quam rutrum, ultricies
      tellus. Integer diam nulla, vestibulum id enim quis, molestie luctus
      magna. Phasellus et rhoncus augue, id maximus mi. Vivamus consequat quam
      tristique ex laoreet, ut eleifend eros sodales. Cras bibendum enim dolor,
      id rutrum urna vestibulum non.
    </p>
    <p>
      Ut quis urna pharetra, elementum elit vel, venenatis sem. In tristique in
      ante venenatis consectetur. Sed laoreet pellentesque enim. Interdum et
      malesuada fames ac ante ipsum primis in faucibus. Mauris lobortis in diam
      non fringilla. Etiam maximus enim eget dolor tempus sodales. In sed turpis
      feugiat, sodales tortor vitae, semper odio. Donec vulputate erat orci, sit
      amet ultrices magna sodales sed. Curabitur tincidunt nunc id velit
      imperdiet, eget tempor mi interdum. Phasellus hendrerit sem nec venenatis
      suscipit.
    </p>
    <p>
      Suspendisse potenti. Fusce id nibh tempor mi interdum pretium vitae non
      purus. Pellentesque a nibh mattis, gravida diam id, fringilla nisi.
      Phasellus lacus magna, finibus et pharetra suscipit, accumsan in nisi.
      Curabitur sed tortor sodales, ornare tellus sed, egestas mauris. Fusce
      ipsum lectus, lacinia in tortor eu, consequat eleifend ipsum. Aenean
      ornare egestas ullamcorper. Nam metus justo, mollis non egestas at,
      tincidunt a enim. Phasellus vitae odio non metus accumsan dictum. Nunc
      posuere convallis dolor sed fringilla. Nullam ante felis, suscipit vitae
      iaculis ultricies, commodo non velit.
    </p>
  </>
);
