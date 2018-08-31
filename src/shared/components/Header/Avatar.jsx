import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import avatar from '../../assets/avatar.jpg';

const Avatar = () => (
  <Link to="/">
    <Image alt="avatar" src={avatar} />
  </Link>
);

export default Avatar;
