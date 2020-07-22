import React from 'react';

import { createQueryParamModalHelpers } from 'shared/utils/queryParamModal';
import { Modal } from 'shared/components';

import { Container, LinkButton } from './Styles';
import Support from './Support';
import Modification from './Modification';

const Footer = () => {
  const contactSupportModalHelpers = createQueryParamModalHelpers('contact-support');
  const requestModificationModalHelpers = createQueryParamModalHelpers('request-modification');

  return (
    <Container>
      <LinkButton variant="primary" onClick={() => contactSupportModalHelpers.open()}>Contact Support</LinkButton>
      <LinkButton variant="primary" onClick={() => requestModificationModalHelpers.open()}>Request Modification/Cancellation</LinkButton>

      {contactSupportModalHelpers.isOpen() && (
        <Modal
          isOpen
          testid="modal:contact-support"
          width={800}
          withCloseIcon
          onClose={contactSupportModalHelpers.close}
          renderContent={modal => (
            <Support
              modalClose={modal.close}
            />
          )}
        />
      )}
      
      {requestModificationModalHelpers.isOpen() && (
        <Modal
          isOpen
          testid="modal:request-modification"
          width={800}
          withCloseIcon
          onClose={requestModificationModalHelpers.close}
          renderContent={modal => (
            <Modification
              modalClose={modal.close}
            />
          )}
        />
      )}
    </Container>
  );
};

export default Footer;
