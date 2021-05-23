import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.scss';
import { twitterAccounts } from '../../data/twitterAccounts';

const ListWrapper = () => (
  <ul className="listWrapper_wrapper">
    {twitterAccounts.map(item => (
      <ListItem key={item.name} {...item} />
    ))}
  </ul>
);

export default ListWrapper;