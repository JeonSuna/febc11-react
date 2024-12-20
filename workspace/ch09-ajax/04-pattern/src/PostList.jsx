import FetchThenRender from './02-FetchThenRender';
import FetchOnRender from './01-FetchOnRender';
import axios from 'axios';
import { useEffect, useState } from 'react';

function fetchPostList() {
  return axios.get('https://11.fesp.shop/posts?type=brunch&delay=4000', {
    headers: {
      'client-id': '00-brunch',
    },
  });
}

function PostList() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchPostList().then((res) => setData(res.data));
  }, []);

  if (!data) {
    return <div>게시물 목록 로딩중</div>;
  }
  return (
    <>
      <h2>게시물{data.item.length}건이 있습니다</h2>

      <h3>fetch-on-render방식</h3>
      <FetchOnRender />

      <h3>fetch-Then-render방식</h3>
      <FetchThenRender />
    </>
  );
}

export default PostList;
