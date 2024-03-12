import { Clock, Eye, Note } from '@phosphor-icons/react';

export const iconCardMock = {
  children: (
    <p
      style={{
        cursor: 'pointer',
        display: 'flex',
        fontWeight: 600,
        margin: '0 auto',
        verticalAlign: 'center',
        width: 'fit-content',
      }}
    >
      <Eye size={18} style={{ margin: 'auto 10px auto 0' }} weight="bold" />
      View more
    </p>
  ),
  icon: (
    <div
      style={{
        background: 'white',
        borderRadius: '100px',
        height: '64px',
        margin: '0 auto',
        padding: '16px',
        width: '64px',
      }}
    >
      <Note color="#0B7285" size={32} weight="light" />
    </div>
  ),
  subTitle: 'sub-title',
  title: 'My documents',
};

export const iconCardMockWithoutTitle = {
  children: (
    <p
      style={{
        cursor: 'pointer',
        fontWeight: 'light',
        margin: '6px auto 0 auto',
        maxWidth: '200px',
        textAlign: 'center',
        width: 'fit-content',
      }}
    >
      Nous intervenons <strong>7 jours/7, 24h/24, </strong>
      partout en France
    </p>
  ),
  icon: (
    <div
      style={{
        background: 'white',
        border: '5px solid #E9F0F5',
        borderRadius: '100px',
        display: 'flex',
        height: '110px',
        margin: '0 auto',
        padding: '16px',
        width: '110px',
      }}
    >
      <Clock
        color="#006A94"
        size={36}
        style={{ margin: 'auto' }}
        weight="bold"
      />
    </div>
  ),
};
