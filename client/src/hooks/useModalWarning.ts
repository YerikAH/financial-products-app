import {useState, useCallback} from 'react';

export const useModalWarning = () => {
  const [open, setOpen] = useState(false);
  const [props, setProps] = useState({
    buttonBgColor: '',
    activeButtonBgColor: '',
    message: '',
    title: '',
  });

  const updateProps = (newProps: {
    buttonBgColor: string;
    activeButtonBgColor: string;
    message: string;
    title: string;
  }) => {
    setProps(newProps);
    toggleOpen();
  };
  const toggleOpen = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  return {
    open,
    toggleOpen,
    updateProps,
    props,
  };
};
