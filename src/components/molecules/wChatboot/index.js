import React from 'react';
import { useSelector } from 'react-redux';
import { pathServer } from '../../../lib/shared/constants/Strings';
import { linkToMobileWhatsapp, linkToWebWhatsapp } from '../../../lib/util/Util';
import { COMPANY_LOCATION, MESSAGE_WHATSAPP } from '../../../lib/util/Company';

const renderPhone = (phone) => (
  <>
    <a
      href={linkToWebWhatsapp(phone, MESSAGE_WHATSAPP)}
      target="__blank"
      aria-label="Open chatbot"
      aria-expanded="false"
      className="chatbot__button"
    >
      <img src={`${pathServer.PATH_ICONS}ic_chat.gif`} alt="" />
    </a>
    <a
      target="__blank"
      aria-label="Open chatbot"
      aria-expanded="false"
      className="chatbot__button to-m"
      href={linkToMobileWhatsapp(phone, MESSAGE_WHATSAPP)}
    >
      <img src={`${pathServer.PATH_ICONS}ic_chat.gif`} alt="" />
    </a>
  </>
);

const wChatBoot = React.forwardRef(() => {
  const { location } = useSelector((state) => state.cart);
  const phone = location?.whatsapp || COMPANY_LOCATION.santa_anita.whatsapp;

  return <div className="chatbot">{renderPhone(phone)}</div>;
});

wChatBoot.displayName = 'wChatBoot';

wChatBoot.defaultProps = {};

wChatBoot.propTypes = {};

export default wChatBoot;
