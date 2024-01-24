import type { IActionBarProps } from '../ActionBar/ActionBar';
import type { IActionRowOverflowAction } from '../ActionRowOverflow/ActionRowOverflow';
import type { ISelectableListProps } from '../SelectableList/SelectableList';
import type { ReactElement, ReactNode } from 'react';

import { isNotNullNorEmpty } from '@smile/react-front-kit-shared';
import { useMemo } from 'react';

import { ActionBar } from '../ActionBar/ActionBar';
import { DocumentBox } from '../DocumentBox/DocumentBox';
import { SelectableList } from '../SelectableList/SelectableList';

import { useStyles } from './DocumentList.style';

export interface IDocument extends Record<string, unknown> {
  author?: string;
  content?: ReactNode;
  date?: string;
  iconType?: string;
  id: number | string;
  image?: string;
  mobilePreviewLabel?: string;
  path?: string;
  title?: string;
}

export interface IDocumentListProps
  extends Omit<
    ISelectableListProps,
    'children' | 'onSelectChange' | 'selectedIndexes'
  > {
  actionBarProps?: Omit<
    IActionBarProps<IDocument>,
    'actions' | 'selectedElements'
  >;
  actions?: IActionRowOverflowAction<IDocument>[];
  documents: IDocument[];
  isClickCardToSelect?: boolean;
  mobileImageButtonLabel?: string;
  onDocumentSelected?: (document: IDocument, isSelected: boolean) => void;
  selectedDocuments: IDocument[];
}

export function DocumentList(props: IDocumentListProps): ReactElement {
  const {
    actionBarProps,
    actions,
    documents,
    isClickCardToSelect = false,
    mobileImageButtonLabel,
    onDocumentSelected,
    selectedDocuments,
    ...selectableListProps
  } = props;
  const selectedIndexes = useMemo(
    () =>
      documents
        .map((document, i) =>
          selectedDocuments.map((selected) => selected.id).includes(document.id)
            ? i
            : null,
        )
        .filter(isNotNullNorEmpty),
    [documents, selectedDocuments],
  );
  const { classes } = useStyles();

  function handleSelectChange(index: number, isSelected: boolean): void {
    onDocumentSelected?.(documents[index], isSelected);
  }

  return (
    <div className={classes.list}>
      {selectedDocuments.length > 0 && (
        <ActionBar<IDocument>
          actions={actions}
          selectedElements={selectedDocuments}
          {...actionBarProps}
        />
      )}
      <SelectableList
        mt={24}
        onSelectChange={handleSelectChange}
        selectedIndexes={selectedIndexes}
        {...selectableListProps}
      >
        {documents.map((document, i) => (
          <DocumentBox
            key={document.id}
            author={document.author}
            date={document.date}
            iconType={document.iconType}
            image={document.image}
            mobileImageButtonLabel={
              document.mobilePreviewLabel ?? mobileImageButtonLabel
            }
            onCardClick={
              isClickCardToSelect
                ? () => handleSelectChange(i, !selectedIndexes.includes(i))
                : undefined
            }
            path={document.path}
            title={document.title}
          >
            {document.content}
          </DocumentBox>
        ))}
      </SelectableList>
    </div>
  );
}
