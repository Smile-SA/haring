'use client';

import type { FormEvent, ReactElement } from 'react';

import { AppShell, Button, Flex, MantineProvider } from '@mantine/core';
import { Eye, FolderPlus, Suitcase, User } from '@phosphor-icons/react';
import { primaryTheme, secondaryTheme } from '@smile/react-front-kit-shared';
import { useState } from 'react';

import { Breadcrumbs } from '../../Components/Breadcrumbs/Breadcrumbs';
import { Header } from '../../Components/Header/Header';
import { InfoCard } from '../../Components/InfoCard/InfoCard';
import { SidebarMenu } from '../../Components/SidebarMenu/SidebarMenu';
import { menu } from '../../Components/SidebarMenu/SidebarMenu.mock';
import { FoldableColumnLayout } from '../../Layouts/FoldableColumnLayout/FoldableColumnLayout';
import { flattenNestedObjects } from '../../helpers';
import { headerContent, headerLeft, headerRight } from '../pages.mock';

/**
 * Primary UI component for user interaction
 */
export function TestPage(): ReactElement {
  const [search, setSearch] = useState('');
  const [sidebarMenu, setSidebarMenu] = useState(menu);

  function handleSearchSubmit(event: FormEvent): void {
    event.preventDefault();
  }

  function handleAddFolder(): void {
    setSidebarMenu(
      sidebarMenu.concat([
        {
          id: flattenNestedObjects(sidebarMenu).length + 1,
          label: 'Nouveau Dossier',
          leftIcon: <FolderPlus />,
        },
      ]),
    );
  }

  return (
    <AppShell
      header={
        <Header
          childrenComponent="nav"
          left={headerLeft}
          onSearchChange={setSearch}
          onSearchSubmit={handleSearchSubmit}
          right={headerRight}
          searchTheme={primaryTheme}
          searchValue={search}
        >
          {headerContent}
        </Header>
      }
      padding={0}
    >
      <FoldableColumnLayout
        sidebarContent={
          <Flex direction="column" gap={24}>
            <Button onClick={handleAddFolder} size="md">
              Nouveau dossier
            </Button>
            <SidebarMenu menu={sidebarMenu} />
          </Flex>
        }
        sidebarToggleLabel="Voir l'arborescence"
        topBarRight={
          <Breadcrumbs>
            <a href="#">CALICO</a>
            <a href="#">Clients</a>
            <a href="#">Jean-Michel Dupont</a>
          </Breadcrumbs>
        }
      >
        <MantineProvider theme={secondaryTheme}>
          <InfoCard
            content={
              <p
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  fontWeight: 600,
                  margin: '0',
                  verticalAlign: 'center',
                }}
              >
                <Eye
                  size={18}
                  style={{ margin: 'auto 10px auto 0' }}
                  weight="bold"
                />
                View the folder properties
              </p>
            }
            contentItems={[
              {
                icon: <User />,
                label: 'Individual contract',
              },
              {
                icon: <Suitcase />,
                label: '2 Lines text for example',
              },
            ]}
            title={<h1>Jean-Michel DUPONT</h1>}
          >
            <p>Customizable content</p>
          </InfoCard>
        </MantineProvider>
        <p>
          Lorem <a href="#">ipsum</a> dolor sit amet, consectetur adipiscing
          elit. Sed varius bibendum dui non imperdiet. Donec vehicula fringilla
          lorem vitae rutrum. Etiam malesuada ullamcorper aliquam. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Cras elit lacus, viverra vitae risus et, pharetra tincidunt
          felis. Aliquam erat volutpat. In vitae nibh eu turpis commodo luctus
          vitae id libero. Curabitur eget nunc volutpat, luctus quam rutrum,
          ultricies tellus. Integer diam nulla, vestibulum id enim quis,
          molestie luctus magna. Phasellus et rhoncus augue, id maximus mi.
          Vivamus consequat quam tristique ex laoreet, ut eleifend eros sodales.
          Cras bibendum enim dolor, id rutrum urna vestibulum non.
        </p>
        <p>
          Ut quis urna pharetra, elementum elit vel, venenatis sem. In tristique
          in ante venenatis consectetur. Sed laoreet pellentesque enim. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Mauris lobortis
          in diam non fringilla. Etiam maximus enim eget dolor tempus sodales.
          In sed turpis feugiat, sodales tortor vitae, semper odio. Donec
          vulputate erat orci, sit amet ultrices magna sodales sed. Curabitur
          tincidunt nunc id velit imperdiet, eget tempor mi interdum. Phasellus
          hendrerit sem nec venenatis suscipit.
        </p>
        <p>
          Suspendisse potenti. Fusce id nibh tempor mi interdum pretium vitae
          non purus. Pellentesque a nibh mattis, gravida diam id, fringilla
          nisi. Phasellus lacus magna, finibus et pharetra suscipit, accumsan in
          nisi. Curabitur sed tortor sodales, ornare tellus sed, egestas mauris.
          Fusce ipsum lectus, lacinia in tortor eu, consequat eleifend ipsum.
          Aenean ornare egestas ullamcorper. Nam metus justo, mollis non egestas
          at, tincidunt a enim. Phasellus vitae odio non metus accumsan dictum.
          Nunc posuere convallis dolor sed fringilla. Nullam ante felis,
          suscipit vitae iaculis ultricies, commodo non velit.
        </p>
        <p>
          Duis et gravida ex, ac consequat purus. Donec et sollicitudin nunc.
          Praesent faucibus rutrum elit id placerat. Nam rutrum arcu sed diam
          dapibus, ac rutrum felis faucibus. Vivamus velit sapien, placerat et
          tincidunt eget, congue eget odio. Nunc vel arcu varius quam ultricies
          faucibus. In libero odio, pellentesque vitae orci ut, elementum
          dapibus neque. Donec id odio ac purus dictum malesuada.
        </p>
        <p>
          Etiam aliquet tristique nisl, sagittis interdum metus laoreet at.
          Curabitur tortor lectus, commodo eu accumsan at, eleifend eu sem.
          Vestibulum et facilisis dolor. Vestibulum accumsan libero enim, sed
          tincidunt arcu efficitur quis. Praesent ornare placerat orci sed
          lacinia. Integer ultrices, elit interdum facilisis luctus, dui felis
          facilisis turpis, venenatis tempor nibh lorem vitae arcu. Aenean elit
          ante, pulvinar sed risus feugiat, sollicitudin tincidunt magna.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
          bibendum dui non imperdiet. Donec vehicula fringilla lorem vitae
          rutrum. Etiam malesuada ullamcorper aliquam. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras
          elit lacus, viverra vitae risus et, pharetra tincidunt felis. Aliquam
          erat volutpat. In vitae nibh eu turpis commodo luctus vitae id libero.
          Curabitur eget nunc volutpat, luctus quam rutrum, ultricies tellus.
          Integer diam nulla, vestibulum id enim quis, molestie luctus magna.
          Phasellus et rhoncus augue, id maximus mi. Vivamus consequat quam
          tristique ex laoreet, ut eleifend eros sodales. Cras bibendum enim
          dolor, id rutrum urna vestibulum non.
        </p>
        <p>
          Ut quis urna pharetra, elementum elit vel, venenatis sem. In tristique
          in ante venenatis consectetur. Sed laoreet pellentesque enim. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Mauris lobortis
          in diam non fringilla. Etiam maximus enim eget dolor tempus sodales.
          In sed turpis feugiat, sodales tortor vitae, semper odio. Donec
          vulputate erat orci, sit amet ultrices magna sodales sed. Curabitur
          tincidunt nunc id velit imperdiet, eget tempor mi interdum. Phasellus
          hendrerit sem nec venenatis suscipit.
        </p>
        <p>
          Suspendisse potenti. Fusce id nibh tempor mi interdum pretium vitae
          non purus. Pellentesque a nibh mattis, gravida diam id, fringilla
          nisi. Phasellus lacus magna, finibus et pharetra suscipit, accumsan in
          nisi. Curabitur sed tortor sodales, ornare tellus sed, egestas mauris.
          Fusce ipsum lectus, lacinia in tortor eu, consequat eleifend ipsum.
          Aenean ornare egestas ullamcorper. Nam metus justo, mollis non egestas
          at, tincidunt a enim. Phasellus vitae odio non metus accumsan dictum.
          Nunc posuere convallis dolor sed fringilla. Nullam ante felis,
          suscipit vitae iaculis ultricies, commodo non velit.
        </p>
        <p>
          Duis et gravida ex, ac consequat purus. Donec et sollicitudin nunc.
          Praesent faucibus rutrum elit id placerat. Nam rutrum arcu sed diam
          dapibus, ac rutrum felis faucibus. Vivamus velit sapien, placerat et
          tincidunt eget, congue eget odio. Nunc vel arcu varius quam ultricies
          faucibus. In libero odio, pellentesque vitae orci ut, elementum
          dapibus neque. Donec id odio ac purus dictum malesuada.
        </p>
        <p>
          Etiam aliquet tristique nisl, sagittis interdum metus laoreet at.
          Curabitur tortor lectus, commodo eu accumsan at, eleifend eu sem.
          Vestibulum et facilisis dolor. Vestibulum accumsan libero enim, sed
          tincidunt arcu efficitur quis. Praesent ornare placerat orci sed
          lacinia. Integer ultrices, elit interdum facilisis luctus, dui felis
          facilisis turpis, venenatis tempor nibh lorem vitae arcu. Aenean elit
          ante, pulvinar sed risus feugiat, sollicitudin tincidunt magna.
        </p>
      </FoldableColumnLayout>
    </AppShell>
  );
}
