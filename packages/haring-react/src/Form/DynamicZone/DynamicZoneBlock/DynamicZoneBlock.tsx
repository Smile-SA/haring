import type { IActionListProps } from '../../../Components/ActionList/ActionList';
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

import { ActionList } from '../../../Components/ActionList/ActionList';

import classes from './DynamicZoneBlock.module.css';

export interface IDynamicZoneBlockInternalComponentProps {
  contentCollapseProps?: CollapseProps;
  contentContainerProps?: ContainerProps;
  footerCardSectionProps?: CardSectionProps;
  headerActionListProps?: IActionListProps<IDynamicZoneBlockReference>;
  headerCardSectionProps?: CardSectionProps;
  headerGroupProps?: GroupProps;
  toggleComponentProps?: IDynamicZoneBlockToggleProps;
}

export interface IDynamicZoneBlockToggleProps {
  actionIconProps?: ActionIconProps;
  downIcon?: ReactNode;
  upIcon?: ReactNode;
}

export interface IDynamicZoneBlockReference extends Record<string, unknown> {
  arrayLength: number;
  id: string;
  index: number;
}

export interface IDynamicZoneBlockProps extends CardProps {
  actions?: IAction<IDynamicZoneBlockReference>[];
  children: ReactNode;
  footerChildren?: ReactNode;
  headerChildren?: ReactNode;
  internalComponentProps?: IDynamicZoneBlockInternalComponentProps;
  onToggle: (opened: boolean) => void;
  opened: boolean;
  reference: IDynamicZoneBlockReference;
}

export function DynamicZoneBlock(props: IDynamicZoneBlockProps): ReactElement {
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
  const toggleProps: IDynamicZoneBlockToggleProps = {
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
            <ActionList<IDynamicZoneBlockReference>
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
