import axios from 'axios';
import { useState } from 'react';

export default function UseLoadingList() {
  const [list, setList] = useState({
    data: [],
    loading: false
  });

  async function loadingList() {
    console.log('###loadingList');

    setList({
      data: [],
      loading: true
    });

    const result: any = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    console.log('result', result);

    setTimeout(() => {
      setList({
        data: result.data,
        loading: false
      });
    }, 1000);
  }

  return {
    list,
    loadingList
  };
}