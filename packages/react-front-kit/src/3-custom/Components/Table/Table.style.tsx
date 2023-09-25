import { createStyles } from '@mantine/styles';

export const useStyles = createStyles((theme) => ({
  buttonFilters: { background: 'white', height: '34px', marginRight: '10px' },
  buttonGrey: {
    '&:hover': {
      background: theme.colors.gray[7],
    },
    background: theme.colors.gray[8],
    padding: '0.667em 3.333em',
  },
  buttonLeftModal: { marginRight: '10px' },
  buttonRemoveRoot: {
    padding: '0.667em 3.333em',
  },
  buttonsShowHideColumns: { background: 'white', height: '34px' },
  buttonsToolbarAlertGroupe: {
    display: 'flex',
    marginRight: '78px',
  },
  buttonsToolbarAlertRemove: {
    display: 'block',
    margin: 'auto 10px auto',
  },
  buttonsToolbarAlertTree: {
    display: 'block',
    margin: 'auto 0px auto',
  },
  iconsColor: {
    color: theme.colors.gray[7],
  },
  menuButton: {
    [`&[aria-expanded=true]`]: {
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
  modalBody: {
    padding: '0px',
  },
  modalButtonsContainer: {
    marginTop: '32px',
  },
  modalContent: {
    padding: '48px',
  },
  modalHeader: {
    height: '0px',
    padding: '0px',
  },
  modalTitleContainer: {
    marginLeft: '12px',
  },
  renderToolbarAlertBannerContent: {
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 8px',
    width: '100%',
  },
  renderToolbarInternalActions: {
    display: 'flex',
    height: '100%',
    padding: '4px 8px',
    width: '100%',
  },
  rowActions: {
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '24px',
    marginRight: '16px',
  },
}));
