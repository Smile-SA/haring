import './Button.css';

type ISize = 'large' | 'medium' | 'small';

interface IButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: ISize;
}

/**
 * Primary UI component for user interaction
 */
export function Button(props: IButtonProps): JSX.Element {
  const {
    backgroundColor,
    label,
    primary = false,
    size,
    ...buttonProps
  } = props;
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={{ backgroundColor }}
      type="button"
      {...buttonProps}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium' as ISize,
};
