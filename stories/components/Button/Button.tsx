import React from 'react';
import './button.css';
import { Button as AntButton, ButtonProps } from 'antd';

// interface ButtonProps {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary?: boolean;
//   /**
//    * What background color to use
//    */
//   backgroundColor?: string;
//   /**
//    * How large should the button be?
//    */
//   size?: 'small' | 'medium' | 'large';
//   /**
//    * Button contents
//    */
//   label: string;
//   /**
//    * Optional click handler
//    */
//   onClick?: () => void;
// }

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  ...props
}: ButtonProps) => {
  return (
    <AntButton
      // type="button"
      {...props}
      style={{
        backgroundColor: props.color
      }}
    >
      {props.children}
    </AntButton>
  );
};
