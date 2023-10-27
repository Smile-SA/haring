import type {
  SegmentedControlItem,
  SegmentedControlProps,
} from '@mantine/core/lib/SegmentedControl/SegmentedControl';
import type { ReactElement, ReactNode } from 'react';

import { Paper, SegmentedControl } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { createStyles } from '@mantine/styles';

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 42,
    padding: 24,
  },
  content: {
    marginBottom: 48,
  },
  switchButton: {
    lineHeight: 0,
    padding: '0.5rem',
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  topBarLeft: {
    margin: 'auto auto auto 0',
  },
  topBarRight: {
    marginLeft: 'auto 0 auto auto',
  },
}));

export interface IDataView extends SegmentedControlItem {
  dataView: ReactNode;
}

interface ISwitchableViewProps extends Omit<SegmentedControlProps, 'data'> {
  activeViewIndex?: number;
  defaultViewIndex?: number;
  onViewChange?: (index: number) => void;
  topBarLeft?: ReactNode;
  views: IDataView[];
}

export function SwitchableView(props: ISwitchableViewProps): ReactElement {
  const {
    activeViewIndex,
    defaultViewIndex,
    onViewChange,
    topBarLeft,
    views = [],
    ...segmentedControlProps
  } = props;
  const [activeViewState, handleChangeActiveView] = useUncontrolled<IDataView>({
    defaultValue: defaultViewIndex ? views[defaultViewIndex] : undefined,
    finalValue: views[0],
    onChange: (v) =>
      onViewChange
        ? onViewChange(views.findIndex((view) => view.value === v.value))
        : undefined,
    value: activeViewIndex ? views[activeViewIndex] : undefined,
  });
  const { classes } = useStyles();

  return (
    <Paper className={classes.container}>
      <div className={classes.topBar}>
        {Boolean(topBarLeft) && (
          <span className={classes.topBarLeft}>{topBarLeft}</span>
        )}
        <span className={classes.topBarRight}>
          <SegmentedControl
            classNames={{ label: classes.switchButton }}
            data={views}
            onChange={(v) =>
              handleChangeActiveView(
                views.find((view) => view.value === v) ?? views[0],
              )
            }
            radius={4}
            size="md"
            value={activeViewState.value}
            {...segmentedControlProps}
          />
        </span>
      </div>
      <div className={classes.content}>{activeViewState.dataView ?? ''}</div>
    </Paper>
  );
}
