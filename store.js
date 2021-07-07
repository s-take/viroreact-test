import {useState} from 'react';
import {createContainer} from 'unstated-next';

export const useStore = () => {
  const [keywords, setKeywords] = useState([]);

  const addKeywords = (keyword, index) => {
    console.log('keyword: ');
    setKeywords([...keywords, keyword]);
  };

  return {
    keywords,
    addKeywords,
  };
};

export const StoreContainer = createContainer(useStore);
