import { createStyles } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  accordionChevron: {
    '&[data-rotate=true]': {
      color: theme.colors.gray[0],
    },
    color: theme.colors[theme.primaryColor][9],
  },
  accordionContent: {
    background: theme.colors[theme.primaryColor][9],
    borderRadius: '0px 0px 8px 8px',
    marginBottom: '8px',
    padding: '24px',
  },
  accordionControl: {
    '&:hover': {
      background: theme.colors.gray[2],
    },
    '&[aria-expanded=true]': {
      background: theme.colors[theme.primaryColor][9],
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
  filtersManagerModalTitle: {
    fontSize: '18px',
    fontWeight: 700,
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
}));
