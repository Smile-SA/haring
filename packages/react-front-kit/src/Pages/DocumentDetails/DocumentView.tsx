import type { ReactElement } from 'react';

interface IDocumentViewProps {
  title?: string;
  url: string;
}

export function DocumentView(props: IDocumentViewProps): ReactElement {
  const { title = 'document', url } = props;

  // eslint-disable-next-line react/iframe-missing-sandbox
  return <iframe height="100%" src={url} title={title} width="100%" />;
}
