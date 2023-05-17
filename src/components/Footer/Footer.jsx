import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as InstagramFooter } from
'../Icons/InstagramFooter.svg';
import { ReactComponent as FacebookFooter } from '../Icons/FacebookFooter.svg';
import { ReactComponent as TwitterFooter } from '../Icons/TwitterFooter.svg';
import {
  FooterTitle, FooterMediaList, FooterYellowBlock,
  FooterBlueBlock, FooterTextList, FooterTextItem,
  FooterTeamSpan, FooterWrapper,
} from './Footer.styled';

const footerText = ['Info', 'Support', 'Contact', 'Terms of Use',
  'Privacy Policy'];

export const Footer = () => (
  <FooterWrapper>
    <FooterBlueBlock>
      <FooterTitle>GoUkraine</FooterTitle>
      <FooterMediaList>
        <li key="InstagramFooter">
          <Link
            to="https://www.instagram.com/accounts/login/"
            replace
          >
            <InstagramFooter />
          </Link>
        </li>
        <li key="FacebookFooter">
          <Link
            to="https://www.facebook.com/login/"
            replace
          >
            <FacebookFooter />
          </Link>
        </li>
        <li key="TwitterFooter">
          <Link
            to="https://twitter.com/i/flow/login"
            replace
          >
            <TwitterFooter />
          </Link>
        </li>
      </FooterMediaList>
    </FooterBlueBlock>
    <FooterYellowBlock>
      <FooterTextList>
        {footerText.map(item => (
          <FooterTextItem
            key={item}
          >
            {item}
          </FooterTextItem>
        ))}
      </FooterTextList>
      <FooterTeamSpan>@ 2023 GoUkraine.team</FooterTeamSpan>
    </FooterYellowBlock>
  </FooterWrapper>
);
