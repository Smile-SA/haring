import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  filterComponent: {
    minWidth: 184,
  },
  manageFilterModalBody: {
    padding: '24px',
  },
  manageFilterModalHeader: {
    marginBottom: '16px',
    padding: '24px 24px 0 24px',
  },
  manageFilterModalTitle: {
    fontSize: '18px',
    fontWeight: 700,
  },
  manageFiltersButton: {
    alignItems: 'start',
    backgroundColor: 'transparent',
    border: 'none',
  },
  manageFiltersLabel: {
    gap: 4,
  },
  submitButton: {
    minWidth: 184,
  },
}));
