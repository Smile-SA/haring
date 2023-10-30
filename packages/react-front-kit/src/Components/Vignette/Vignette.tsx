'use client';

import type { MantineColor } from '@mantine/core';
import type { ReactElement, ReactNode } from 'react';

import {
  ActionIcon,
  Box,
  Group,
  Image,
  Menu,
  Text,
  createStyles,
  useMantineTheme,
} from '@mantine/core';
import {
  DotsThreeVertical,
  File,
  FileCss,
  FileCsv,
  FileDoc,
  FileHtml,
  FileJpg,
  FileJs,
  FileJsx,
  FilePdf,
  FilePng,
  FilePpt,
  FileRs,
  FileSql,
  FileSvg,
  FileTs,
  FileTsx,
  FileVue,
  FileXls,
  FileZip,
} from '@phosphor-icons/react';

import defaultImage from './defaultImage.jpg';

const useStyles = createStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    marginBottom: '22px',
    marginTop: '10px',
  },
  icon: {
    height: 'fit-content',
    margin: 'auto',
  },
  menuButton: {
    '&[aria-expanded=true]': {
      '& svg': {
        filter: 'contrast(8) invert(1)',
      },
      backgroundColor: theme.colors.cyan[9],
      borderRadius: '4px',
      display: 'flex',
      height: '28px',
      width: '28px',
    },
  },
  root: {
    borderRadius: '16px',
    heigh: 'auto',
    padding: '16px',
    width: 'auto',
  },
  rootSelected: { background: theme.primaryColor },
  title: {
    margin: '0 19px 0 0',
    paddingLeft: '10px',
  },
  titleContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
}));

export type IFileExtendType =
  | 'CSS'
  | 'CSV'
  | 'DOC'
  | 'HTML'
  | 'JPG'
  | 'JS'
  | 'JSX'
  | 'PDF'
  | 'PNG'
  | 'PPT'
  | 'RS'
  | 'SQL'
  | 'SVG'
  | 'TS'
  | 'TSX'
  | 'UNKNOWN'
  | 'VUE'
  | 'XLS'
  | 'ZIP';

const getIconByIconType = (
  type: IFileExtendType,
  color: MantineColor,
): ReactElement => {
  switch (type) {
    case 'CSS':
      return <FileCss color={color} size={20} weight="bold" />;
    case 'DOC':
      return <FileDoc color={color} size={20} weight="bold" />;
    case 'PDF':
      return <FilePdf color={color} size={20} weight="bold" />;
    case 'CSV':
      return <FileCsv color={color} size={20} weight="bold" />;
    case 'HTML':
      return <FileHtml color={color} size={20} weight="bold" />;
    case 'JPG':
      return <FileJpg color={color} size={20} weight="bold" />;
    case 'JS':
      return <FileJs color={color} size={20} weight="bold" />;
    case 'JSX':
      return <FileJsx color={color} size={20} weight="bold" />;
    case 'PNG':
      return <FilePng color={color} size={20} weight="bold" />;
    case 'PPT':
      return <FilePpt color={color} size={20} weight="bold" />;
    case 'RS':
      return <FileRs color={color} size={20} weight="bold" />;
    case 'SQL':
      return <FileSql color={color} size={20} weight="bold" />;
    case 'SVG':
      return <FileSvg color={color} size={20} weight="bold" />;
    case 'TS':
      return <FileTs color={color} size={20} weight="bold" />;
    case 'TSX':
      return <FileTsx color={color} size={20} weight="bold" />;
    case 'VUE':
      return <FileVue color={color} size={20} weight="bold" />;
    case 'XLS':
      return <FileXls color={color} size={20} weight="bold" />;
    case 'ZIP':
      return <FileZip color={color} size={20} weight="bold" />;
    default: {
      return <File color={color} size={20} weight="bold" />;
    }
  }
};

export interface IVignetteProps {
  action?: {
    color?: string;
    icon: ReactNode;
    label: string;
    onAction: () => void;
  }[];
  iconType?: IFileExtendType;
  image?: ReactElement;
  label?: string;
  onClicked?: () => void;
  selected: boolean;
}

export function Vignette(props: IVignetteProps): ReactElement {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const {
    action = [],
    iconType = 'UNKNOWN',
    image = defaultImage,
    label,
    onClicked,
    selected = false,
  } = props;
  function getGoodTextColor(): string {
    if (typeof theme.primaryShade === `number` && theme.primaryShade > 5) {
      return 'white';
    }
    return 'black';
  }

  return (
    <Box
      bg={String(selected ? theme.primaryColor : theme.colors.gray[1])}
      className={classes.root}
      onClick={onClicked}
    >
      <Group className={classes.headerContainer}>
        <div className={classes.titleContainer}>
          {getIconByIconType(
            iconType,
            String(selected ? theme.colors.gray[1] : theme.colors.cyan[9]),
          )}
          <Text
            className={classes.title}
            component="h3"
            style={{
              color: selected ? getGoodTextColor() : undefined,
            }}
            truncate
          >
            {label}
          </Text>
        </div>
        <div>
          {action.length > 0 && (
            <Menu radius={4} shadow="lg" width={200} withinPortal>
              <Menu.Target>
                <ActionIcon
                  className={classes.menuButton}
                  radius={4}
                  type="button"
                >
                  <div>
                    <DotsThreeVertical
                      color={
                        selected ? theme.colors.gray[1] : theme.colors.cyan[9]
                      }
                      size={16}
                    />
                  </div>
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                {action.map((action, index) => (
                  <Menu.Item
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    color={action.color}
                    icon={action.icon}
                  >
                    {action.label}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          )}
        </div>
      </Group>
      <Image radius="16px" src={image} />
    </Box>
  );
}
