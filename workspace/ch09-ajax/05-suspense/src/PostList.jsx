import { useSuspenseQuery } from '@tanstack/react-query';
import FetchOnRender from './03-FetchAsYouRender';
import axios from 'axios';
import { useEffect, useState } from 'react';

function fetchPostList() {
  return axios.get('https://11.fesp.shop/posts?type=brunch&delay=2000', {
    headers: {
      'client-id': '00-brunch',
    },
  });
}

function PostList() {
  const { data } = useSuspenseQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPostList(), //fetchPostList의 반환 결과가 캐시인 posts라는 캐시값으로 저장된다
    select: (res) => {
      return res.data;
    },
    staleTime: 1000 * 10,
  });
  return (
    <>
      <h2>게시물{data.item.length}건이 있습니다</h2>
    </>
  );
}

export default PostList;
