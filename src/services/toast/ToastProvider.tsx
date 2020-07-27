import React, { ReactNode } from 'react';
import { SnackbarProvider } from 'notistack';

type ToastProviderProps = {
  children: ReactNode;
};

export const ToastProvider = (props: ToastProviderProps) => {
  return (
    <SnackbarProvider
      maxSnack={5}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      {props.children}
    </SnackbarProvider>
  );
};
