import styled from 'styled-components';
import ModalPortal from './ModalPortal';
import { useRecoilValue } from 'recoil';
import { modalState } from '@/atoms';
import CloseIcon from '@/assets/svg/icon-close.svg?react';
import { ComponentPropsWithoutRef } from 'react';

export interface ModalProps extends ComponentPropsWithoutRef<'div'> {
  /** Modal이 열렸는지 판단하는 변수 */
  isOpen: boolean;
  /** Modal을 닫을 때 실행할 함수 */
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, children, ...attributes }: ModalProps) => {
  const modal = useRecoilValue(modalState);

  const handleClickInnerModal = (e: React.MouseEvent<HTMLDivElement>) => {
    // ModalWrapper로 이벤트 전파 방지
    e.stopPropagation();
  };

  const onClickBackDrop = (e: React.MouseEvent<HTMLDivElement>) => {
    const { target } = e;
    if ((target as HTMLElement).id !== 'modal-backdrop') {
      return;
    }
    onClose();
  };

  return (
    <>
      {isOpen && (
        <ModalPortal>
          <BackDrop
            {...attributes}
            id='modal-backdrop'
            onClick={onClickBackDrop}
            backdropColor={
              modal.length > 1 ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.3)'
            }
          >
            <Wrapper>
              <CloseButton>
                <CloseIcon
                  onClick={() => {
                    onClose();
                  }}
                />
              </CloseButton>
              <Content onClick={handleClickInnerModal}>{children}</Content>
            </Wrapper>
          </BackDrop>
        </ModalPortal>
      )}
    </>
  );
};

export default Modal;

const BackDrop = styled.div<{ backdropColor: string }>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ backdropColor }) => backdropColor};
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 480px;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  background-color: #fff;
`;

const CloseButton = styled.div`
  width: 100%;
  text-align: right;
  cursor: pointer;
  &:hover,
  &:active {
    color: lightgray;
  }
`;

const Content = styled.div`
  width: 100%;
`;
