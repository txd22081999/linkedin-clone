import React, { useState, useEffect } from 'react';
import {
  Create,
  Photo,
  YouTube,
  Event,
  VerticalSplit
} from '@material-ui/icons';

import './index.scss';
import { db } from '../../firebase';
import firebase from 'firebase';

const PostInput = (props) => {
  const [input, setInput] = useState('');

  const { addPost = () => {} } = props;

  useEffect(() => {
    // db.collection("post").onSnapshot(snapshot => {
    //   const docs = snapshot.docs()
    // })
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    // console.log(input);
  };

  const sendPost = (newPost) => {
    db.collection('posts').add(newPost);
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    console.log(input);

    const mockPhotoUrl =
      'https://www.designhill.com/resize_img.php?atyp=page_file&pth=ft_ca_ct||117||contestfile_1&flp=1554116576-13511971185ca1efe0bcd5a0-26602492.jpg';

    const newPost = {
      name: 'John Doe',
      content: input,
      description: 'desc',
      photoUrl: mockPhotoUrl,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    };
    // addPost(newPost);
    sendPost(newPost);
    setInput('');
  };

  return (
    <div className='post-input'>
      <div className='input'>
        <Create />
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Start a post'
            value={input}
            onChange={handleInputChange}
          />
        </form>
      </div>

      <div className='action'>
        <div className='action-item'>
          <Photo />
          <span>Photo</span>
        </div>

        <div className='action-item'>
          <YouTube />
          <span>Video</span>
        </div>

        <div className='action-item'>
          <Event />
          <span>Event</span>
        </div>

        <div className='action-item'>
          <VerticalSplit />
          <span>Write article</span>
        </div>
      </div>
    </div>
  );
};

export default PostInput;
