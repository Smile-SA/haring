import type { IActionListProps } from '../../ActionList/ActionList';
import type {
  ActionIconProps,
  CardProps,
  CardSectionProps,
  CollapseProps,
  ContainerProps,
  GroupProps,
} from '@mantine/core';
import type { IAction } from '@smile/haring-react-shared';
import type { ReactElement, ReactNode } from 'react';

import {
  ActionIcon,
  Card,
  Collapse,
  Container,
  Group,
  Space,
} from '@mantine/core';
import { CaretDown, CaretUp } from '@phosphor-icons/react';

import { ActionList } from '../../ActionList/ActionList';

import classes from './ZoneBlock.module.css';

export interface IZoneBlockInternalComponentProps {
  contentCollapseProps?: CollapseProps;
  contentContainerProps?: ContainerProps;
  footerCardSectionProps?: CardSectionProps;
  headerActionListProps?: Omit<
    IActionListProps<IZoneBlockReference>,
    'actions' | 'isCompactStyle' | 'selectedElements'
  >;
  headerCardSectionProps?: CardSectionProps;
  headerGroupProps?: GroupProps;
  toggleComponentProps?: IZoneBlockToggleProps;
}

export interface IZoneBlockToggleProps {
  actionIconProps?: ActionIconProps;
  downIcon?: ReactNode;
  upIcon?: ReactNode;
}

export interface IZoneBlockReference extends Record<string, unknown> {
  arrayLength: number;
  id: string;
  index: number;
}

export interface IZoneBlockProps extends CardProps {
  actions?: IAction<IZoneBlockReference>[];
  children: ReactNode;
  footerChildren?: ReactNode;
  headerChildren?: ReactNode;
  internalComponentProps?: IZoneBlockInternalComponentProps;
  onToggle: (opened: boolean) => void;
  opened: boolean;
  reference: IZoneBlockReference;
}

export function ZoneBlock(props: IZoneBlockProps): ReactElement {
  const {
    actions,
    children,
    footerChildren,
    headerChildren,
    internalComponentProps,
    onToggle,
    opened,
    reference,
    ...cardProps
  } = props;
  const toggleProps: IZoneBlockToggleProps = {
    downIcon: <CaretDown />,
    upIcon: <CaretUp />,
    ...internalComponentProps?.toggleComponentProps,
  };

  return (
    <Card bg="white" radius="md" shadow="sm" withBorder {...cardProps}>
      <Card.Section
        className={classes.header}
        p="sm"
        withBorder={opened || Boolean(footerChildren)}
        {...internalComponentProps?.headerCardSectionProps}
        role="button"
      >
        <Group
          justify="space-between"
          {...internalComponentProps?.headerGroupProps}
        >
          <Group>
            <ActionIcon
              variant="default"
              {...toggleProps.actionIconProps}
              onClick={() => onToggle(!opened)}
            >
              {opened ? toggleProps.downIcon : toggleProps.upIcon}
            </ActionIcon>
            <Space />
            {headerChildren}
          </Group>
          {actions && actions.length > 0 ? (
            <ActionList<IZoneBlockReference>
              actions={actions}
              isCompactStyle
              selectedElements={reference}
              {...internalComponentProps?.headerActionListProps}
            />
          ) : null}
        </Group>
      </Card.Section>
      <Collapse {...internalComponentProps?.contentCollapseProps} in={opened}>
        <Container
          fluid
          p="xs"
          {...internalComponentProps?.contentContainerProps}
        >
          {children}
        </Container>
      </Collapse>
      <Card.Section
        p={footerChildren ? 'sm' : 0}
        withBorder={Boolean(footerChildren) && opened}
        {...internalComponentProps?.footerCardSectionProps}
      >
        {footerChildren}
      </Card.Section>
    </Card>
  );
}
