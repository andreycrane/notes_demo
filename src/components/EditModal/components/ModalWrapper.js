// @flow

import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

import type { Node } from 'react';

export type TProps = {
  isOpen: boolean,
  title: string,
  children: Node,
};


export default function ModalWrapper(props: TProps): Node {
  const {
    isOpen,
    title,
    children,
  } = props;

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
    </Modal>
  );
}
