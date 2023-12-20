import PropTypes from 'prop-types';
import React, { type ReactNode } from 'react';

import { DefaultAvatar } from '../Middleware/Avatar/createCoreMiddleware';

type AvatarProps = Readonly<{
  'aria-hidden'?: boolean;
  className?: string;
  fromUser?: boolean;
}>;

/** @deprecated Please use `useRenderAvatar` hook instead. */
const Avatar = ({ 'aria-hidden': ariaHidden, className, fromUser }: AvatarProps): ReactNode => {
  console.warn(
    'botframework-webchat: <Avatar> component is deprecated and will be removed on or after 2022-02-25. Please use `useRenderAvatar` hook instead.'
  );

  return <DefaultAvatar aria-hidden={ariaHidden} className={className} fromUser={fromUser} />;
};

Avatar.defaultProps = {
  'aria-hidden': false,
  className: '',
  fromUser: false
};

Avatar.propTypes = {
  'aria-hidden': PropTypes.bool,
  className: PropTypes.string,
  fromUser: PropTypes.bool
};

export default Avatar;
