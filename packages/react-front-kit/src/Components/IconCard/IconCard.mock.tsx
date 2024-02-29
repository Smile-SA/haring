import { Eye, Note } from '@phosphor-icons/react';

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
