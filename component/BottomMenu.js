import React from 'react';
import {StoreContainer} from '../store';
import KeyWordButton from './KeyWordButton';

// eslint-disable-next-line no-undef
export default BottomMenu = () => {
  const goods = StoreContainer.useContainer();
  const keywords = goods.keywords;
  console.log(keywords);
  // const keywordsList = goods.keywords.map((v, i) => (
  //   const keywordsList = goods.keywords.map((v, i) => (
  //     <KeyWordButton text={v} key={i.toString()} />
  //   ));
  return keywords.map((v, i) => <KeyWordButton text={v} key={i.toString()} />);
};
