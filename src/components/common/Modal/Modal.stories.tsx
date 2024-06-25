import type { Meta } from '@storybook/react';
import Modal from '.';
import useModal from './useModal';

const meta = {
  title: '모달',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

export const Default = ({ ...args }) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div style={{ width: '300px', height: '500px' }}>
      <button onClick={() => openModal()}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal} {...args}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum
          quidem, quis exercitationem totam consectetur illo consequuntur
          molestias maxime ratione officia dolor quae asperiores iure quia
          repudiandae ullam cupiditate ex!
        </div>
      </Modal>
    </div>
  );
};

export const Nested = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const {
    isOpen: secondIsOpen,
    openModal: secondOpen,
    closeModal: secondClose,
  } = useModal();
  const {
    isOpen: thirdIsOpen,
    openModal: thirdOpen,
    closeModal: thirdClose,
  } = useModal();

  return (
    <div style={{ width: '300px', height: '500px' }}>
      <button onClick={() => openModal()}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <button onClick={secondOpen}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum
          quidem, quis exercitationem totam consectetur illo consequuntur
          molestias maxime ratione officia dolor quae asperiores iure quia
          repudiandae ullam cupiditate ex! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Hic eum quidem, quis exercitationem
          totam consectetur illo consequuntur molestias maxime ratione officia
          dolor quae asperiores iure quia repudiandae ullam cupiditate ex!Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Hic eum quidem,
          quis exercitationem totam consectetur illo consequuntur molestias
          maxime ratione officia dolor quae asperiores iure quia repudiandae
          ullam cupiditate ex!Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Hic eum quidem, quis exercitationem totam consectetur illo
          consequuntur molestias maxime ratione officia dolor quae asperiores
          iure quia repudiandae ullam cupiditate ex!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Hic eum quidem, quis exercitationem
          totam consectetur illo consequuntur molestias maxime ratione officia
          dolor quae asperiores iure quia repudiandae ullam cupiditate ex!
        </button>
      </Modal>

      <Modal isOpen={secondIsOpen} onClose={secondClose}>
        <button onClick={thirdOpen}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum
          quidem, quis exercitationem totam consectetur illo consequuntur
          molestias maxime ratione officia dolor quae asperiores iure quia
          repudiandae ullam cupiditate ex! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Hic eum quidem, quis exercitationem
          totam consectetur illo consequuntur molestias maxime ratione officia
          dolor quae asperiores iure quia repudiandae ullam cupiditate ex!Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Hic eum quidem,
          quis exercitationem totam consectetur illo consequuntur molestias
        </button>
      </Modal>
      <Modal isOpen={thirdIsOpen} onClose={thirdClose}>
        <button onClick={thirdClose}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quo
          odio totam placeat. Ad quod dolore voluptatibus laudantium
          exercitationem pariatur reiciendis, doloribus ipsum sint magnam?
          Nihil, a ullam! Voluptatibus, aperiam!
        </button>
      </Modal>
    </div>
  );
};
