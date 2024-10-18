import React from 'react';
import '../styles/components/tagList.scss';

const TagList = ({ tags }) => {
  return (
    <ul className="tags-list">
      {tags.map((item, index) => (
        <li className="tags-list__tag" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
