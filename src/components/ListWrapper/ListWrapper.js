import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.scss';

const ListWrapper = (props) => (
  <ul className="listWrapper_wrapper">
    {props.items.map(item => (
      <ListItem key={item.name} {...item} />
    ))}
  </ul>
);

export default ListWrapper;