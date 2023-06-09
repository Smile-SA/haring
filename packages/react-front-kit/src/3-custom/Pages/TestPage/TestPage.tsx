import type { ChangeEvent, FormEvent } from 'react';

import { AppShell, Avatar, Menu } from '@mantine/core';
import { useState } from 'react';

import { primaryTheme } from '../../../theme';
import { DropdownButton } from '../../Components/DropdownButton/DropdownButton';
import { Header } from '../../Components/Header/Header';

/**
 * Primary UI component for user interaction
 */
export function TestPage(): JSX.Element {
  const [search, setSearch] = useState('');

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearch(event.target.value);
  }

  function handleSearchClear(): void {
    setSearch('');
  }

  function handleSearchSubmit(event: FormEvent): void {
    event.preventDefault();
  }

  return (
    <AppShell
      header={
        <Header
          childrenComponent="nav"
          left={<img alt="logo" height="58" src="/logo.svg" width="128" />}
          onSearchChange={handleSearchChange}
          onSearchClear={handleSearchClear}
          onSearchSubmit={handleSearchSubmit}
          right={
            <>
              <DropdownButton label="Mon espace">
                <Menu.Item component="a" href="#">
                  Calico
                </Menu.Item>
                <Menu.Item component="a" href="#">
                  Espace RH
                </Menu.Item>
                <Menu.Item component="a" href="#">
                  Aventure IA
                </Menu.Item>
                <Menu.Item component="a" href="#">
                  Lunette & CO
                </Menu.Item>
              </DropdownButton>
              <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
            </>
          }
          searchTheme={primaryTheme}
          searchValue={search}
        >
          <a href="#">Espace documentaire</a>
          <a href="#">Espace workflow</a>
          <a href="#">Archives</a>
        </Header>
      }
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
        bibendum dui non imperdiet. Donec vehicula fringilla lorem vitae rutrum.
        Etiam malesuada ullamcorper aliquam. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Cras elit lacus,
        viverra vitae risus et, pharetra tincidunt felis. Aliquam erat volutpat.
        In vitae nibh eu turpis commodo luctus vitae id libero. Curabitur eget
        nunc volutpat, luctus quam rutrum, ultricies tellus. Integer diam nulla,
        vestibulum id enim quis, molestie luctus magna. Phasellus et rhoncus
        augue, id maximus mi. Vivamus consequat quam tristique ex laoreet, ut
        eleifend eros sodales. Cras bibendum enim dolor, id rutrum urna
        vestibulum non.
      </p>
      <p>
        Ut quis urna pharetra, elementum elit vel, venenatis sem. In tristique
        in ante venenatis consectetur. Sed laoreet pellentesque enim. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Mauris lobortis in
        diam non fringilla. Etiam maximus enim eget dolor tempus sodales. In sed
        turpis feugiat, sodales tortor vitae, semper odio. Donec vulputate erat
        orci, sit amet ultrices magna sodales sed. Curabitur tincidunt nunc id
        velit imperdiet, eget tempor mi interdum. Phasellus hendrerit sem nec
        venenatis suscipit.
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
      <p>
        Duis et gravida ex, ac consequat purus. Donec et sollicitudin nunc.
        Praesent faucibus rutrum elit id placerat. Nam rutrum arcu sed diam
        dapibus, ac rutrum felis faucibus. Vivamus velit sapien, placerat et
        tincidunt eget, congue eget odio. Nunc vel arcu varius quam ultricies
        faucibus. In libero odio, pellentesque vitae orci ut, elementum dapibus
        neque. Donec id odio ac purus dictum malesuada.
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
        bibendum dui non imperdiet. Donec vehicula fringilla lorem vitae rutrum.
        Etiam malesuada ullamcorper aliquam. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Cras elit lacus,
        viverra vitae risus et, pharetra tincidunt felis. Aliquam erat volutpat.
        In vitae nibh eu turpis commodo luctus vitae id libero. Curabitur eget
        nunc volutpat, luctus quam rutrum, ultricies tellus. Integer diam nulla,
        vestibulum id enim quis, molestie luctus magna. Phasellus et rhoncus
        augue, id maximus mi. Vivamus consequat quam tristique ex laoreet, ut
        eleifend eros sodales. Cras bibendum enim dolor, id rutrum urna
        vestibulum non.
      </p>
      <p>
        Ut quis urna pharetra, elementum elit vel, venenatis sem. In tristique
        in ante venenatis consectetur. Sed laoreet pellentesque enim. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Mauris lobortis in
        diam non fringilla. Etiam maximus enim eget dolor tempus sodales. In sed
        turpis feugiat, sodales tortor vitae, semper odio. Donec vulputate erat
        orci, sit amet ultrices magna sodales sed. Curabitur tincidunt nunc id
        velit imperdiet, eget tempor mi interdum. Phasellus hendrerit sem nec
        venenatis suscipit.
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
      <p>
        Duis et gravida ex, ac consequat purus. Donec et sollicitudin nunc.
        Praesent faucibus rutrum elit id placerat. Nam rutrum arcu sed diam
        dapibus, ac rutrum felis faucibus. Vivamus velit sapien, placerat et
        tincidunt eget, congue eget odio. Nunc vel arcu varius quam ultricies
        faucibus. In libero odio, pellentesque vitae orci ut, elementum dapibus
        neque. Donec id odio ac purus dictum malesuada.
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
    </AppShell>
  );
}
