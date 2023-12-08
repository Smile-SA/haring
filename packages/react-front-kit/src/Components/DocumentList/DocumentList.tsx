import type { IActionBarAction, IActionBarProps } from '../ActionBar/ActionBar';
import type { ISelectableListProps } from '../SelectableList/SelectableList';
import type { ReactElement, ReactNode } from 'react';

import { isNotNullNorEmpty } from '@smile/react-front-kit-shared';
import { useMemo } from 'react';

import { ActionBar } from '../ActionBar/ActionBar';
import { DocumentCard } from '../DocumentCard/DocumentCard';
import { SelectableList } from '../SelectableList/SelectableList';

export interface IDocument extends Record<string, unknown> {
  author?: string;
  content?: ReactNode;
  date?: string;
  iconType?: string;
  id: number | string;
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
  actions?: IActionBarAction<IDocument>[];
  documents: IDocument[];
  onDocumentSelected?: (document: IDocument, isSelected: boolean) => void;
  selectedDocuments: IDocument[];
}

export function DocumentList(props: IDocumentListProps): ReactElement {
  const {
    actionBarProps,
    actions,
    documents,
    selectedDocuments,
    onDocumentSelected,
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

  function handleSelectChange(index: number, isSelected: boolean): void {
    onDocumentSelected?.(documents[index], isSelected);
  }

  return (
    <div>
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
        {documents.map((document) => (
          <DocumentCard
            key={document.id}
            author={document.author}
            date={document.date}
            iconType={document.iconType}
            path={document.path}
            title={document.title}
          >
            {document.content}
          </DocumentCard>
        ))}
      </SelectableList>
    </div>
  );
}
