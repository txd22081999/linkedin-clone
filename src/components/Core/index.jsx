import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';

import Post from '../Post';
import PostInput from '../PostInput';

import './index.scss';

const Core = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const docs = await db
        .collection('posts')
        .orderBy('timeStamp', 'desc')
        .onSnapshot((snapshot) => {
          setPosts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data()
            }))
          );
          // console.log(snapshot);
          // const a = snapshot.docs.map((doc) => doc.data());
          // console.log(a);
          // // return snapshot.docs;
          // return snapshot.docs.map((doc) => doc.data());
        });

      console.log(docs);
      // if (docs.length === 0) return;

      // console.log(1);
      // const newPosts = docs.map((doc) => {
      //   const { id = 0 } = doc;
      //   return {
      //     id,
      //     content: doc.data()
      //   };
      // });
      // console.log(2);
      // console.log(newPosts);

      // setPosts(newPosts);
    };

    getAllPosts();
  }, []);

  const updatePosts = (postArr) => {
    setPosts(postArr);
  };

  const addPost = (post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  return (
    <div className='core'>
      <PostInput addPost={addPost} />
      <div className='divider' />
      {posts.map((post) => {
        const { content = '', id = 0 } = post;
        return <Post key={id} post={post.data} />;
      })}
    </div>
  );
};

export default Core;
