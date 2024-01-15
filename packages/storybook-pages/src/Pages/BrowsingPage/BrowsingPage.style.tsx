import { createStyles } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  accordionChevron: {
    '&[data-rotate=true]': {
      color: theme.colors.gray[0],
    },
    color: theme.fn.primaryColor(),
  },
  accordionContent: {
    background: theme.fn.primaryColor(),
    borderRadius: '0px 0px 8px 8px',
    marginBottom: '8px',
    padding: '24px',
  },
  accordionControl: {
    '&:hover': {
      background: theme.colors.gray[2],
    },
    '&[aria-expanded=true]': {
      background: theme.fn.primaryColor(),
      borderRadius: '8px 8px 0px 0px',
      color: theme.colors.gray[0],
      fontWeight: 700,
      marginBottom: 0,
    },
    background: theme.colors.gray[1],
    borderBottom: 0,
    borderRadius: '8px',
    color: theme.colors.dark[6],
    marginBottom: '8px',
  },
  accordionItem: {
    borderBottom: 'none',
  },
  arrowFiltersManager: {
    color: theme.colors.dark[6],
    marginLeft: '6px',
    position: 'relative',
    top: '2px',
  },
  buttonFiltersManager: {
    color: theme.colors.dark[6],
    cursor: 'pointer',
    fontWeight: 700,
    verticalAlign: 'middle',
  },
  filtersCollapse: {
    flexDirection: 'column',
  },
  filtersDesktop: {
    display: 'initial',
  },
  filtersManagerModalTitle: {
    fontSize: '18px',
    fontWeight: 700,
  },
  filtersMobile: {
    display: 'none',
  },
  filtersMobileButton: {
    button: {
      fontSize: '10px',
    },
    display: 'flex',
    marginRight: 10,
  },
  main: {
    overflowX: 'hidden',
    width: '100%',
  },
  modalBody: {
    padding: '0px 48px 50px 48px',
  },
  modalClose: {
    position: 'relative',
    right: 0,
    top: 0,
  },
  modalTitle: {
    fontSize: '26px',
    fontWeight: 700,
    marginTop: 0,
  },
  sizeDesktop: {
    display: 'initial',
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  sizeMobile: {
    display: 'initial',
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
}));
