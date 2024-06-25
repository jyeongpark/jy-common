import type { ComponentPropsWithoutRef } from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export interface ToastProps extends ComponentPropsWithoutRef<'div'> {
  /** Toast가 열렸는지 판단하는 변수 */
  isOpen: boolean;
  /** Toast를 닫을 때 실행할 함수 */
  onClose: () => void;
  /** Toast 오픈 유지되는 시간 */
  showDuration?: number;
}

const Toast = ({
  isOpen,
  onClose,
  showDuration = 2000,
  children,
  ...attributes
}: ToastProps) => {
  const showAnimationRef = useRef<NodeJS.Timeout>();
  const hideAnimationRef = useRef<NodeJS.Timeout>();

  const handleClose = useCallback(() => {
    hideAnimationRef.current = setTimeout(() => {
      onClose?.();
      clearTimeout(showAnimationRef.current);
    }, 2000);
  }, [onClose]);

  useEffect(() => {
    showAnimationRef.current = setTimeout(() => {
      handleClose();
    }, showDuration);

    return () => clearTimeout(hideAnimationRef.current);
  }, [handleClose, showDuration]);

  return (
    isOpen &&
    createPortal(
      <ToastBackdrop role='alert' aria-live='assertive' {...attributes}>
        <ToastWrapper>{children}</ToastWrapper>
      </ToastBackdrop>,
      document.getElementById('toast-container') as Element
    )
  );
};

export default Toast;

const ToastBackdrop = styled.div`
  position: fixed;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;

  width: 100%;

  z-index: 100;
`;

const ToastWrapper = styled.div`
  width: 80%;
  height: 50px;
  background-color: #d9d9d9;
  color: black;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
