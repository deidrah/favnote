import React from 'react';
import './ListItem.scss';
import danAbramovImage from '../../../assets/images/danabramov.jpg';

const ListItem = () => (
  <li className="listItem__wrapper">
    <img className="listItem__image" src={danAbramovImage} />
    <div>
      <h2 className="listItem__name">Dan Abramov</h2>
      <p className="listItem__description">All users on MySpace will know that there are millions of people out there. Every day besided so many people joining.</p>
      <button className="listItem__button">visit twitter page</button>
    </div>
  </li>
);

export default ListItem;