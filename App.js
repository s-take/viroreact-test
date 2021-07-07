import React, {useState, Component} from 'react';
import {StoreContainer} from './store';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroARImageMarker,
} from '@viro-community/react-viro';
// import KeyWordButton from './component/KeyWordButton';
import BottomMenu from './component/BottomMenu';

function HelloWorldSceneAR() {
  const goods = StoreContainer.useContainer();
  const [state, setState] = useState({text: 'Initializing AR...'});
  const [positionOne, setPositionOne] = useState([0, 0, 0]);
  const [positionTwo, setPositionTwo] = useState([0, 0, 0]);
  const _onInitialized = (viroconstants, reason) => {
    // console.log(ViroConstants);
    if (viroconstants === ViroConstants.TRACKING_NORMAL) {
      setState({
        ...state,
        text: 'Hello',
      });
    } else if (viroconstants === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  };
  const _onAnchorFoundOne = (anchor) => {
    setPositionOne(anchor.position);
    // console.log('found!');
    // console.log(anchor);
    goods.addKeywords('ほ', 0);
  };
  const _onAnchorFoundTwo = (anchor) => {
    setPositionTwo(anchor.position);
    // console.log('found!');
    // console.log(anchor);
    goods.addKeywords('げ', 1);
  };
  return (
    <ViroARScene onTrackingUpdated={_onInitialized}>
      {/* <ViroText
        text={state.text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      /> */}
      <ViroARImageMarker target={'targetOne'} onAnchorFound={_onAnchorFoundOne}>
        <ViroText
          text="Found!"
          scale={[0.5, 0.5, 0.5]}
          position={positionOne}
          style={styles.helloWorldTextStyle}
        />
        {/* <ViroBox position={position} scale={[0.5, 0.5, 0.5]} /> */}
      </ViroARImageMarker>
      <ViroARImageMarker target={'targetTwo'} onAnchorFound={_onAnchorFoundTwo}>
        <ViroText
          text="Found!"
          scale={[0.5, 0.5, 0.5]}
          position={positionTwo}
          style={styles.helloWorldTextStyle}
        />
        {/* <ViroBox position={position} scale={[0.5, 0.5, 0.5]} /> */}
      </ViroARImageMarker>
    </ViroARScene>
  );
}

var styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  helloWorldTextStyle: {
    fontFamily: 'Roboto, NotoSansCJK',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  listView: {
    flex: 1,
    height: 100,
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    // marginHorizontal: 5,
    // padding: 20,
    backgroundColor: '#F2EFFB',
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    // flexWrap: 'wrap',
  },
  listViewText: {
    fontSize: 20,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default function App() {
  // const [keywords, setKeywords] = useState(['', '', '']);
  // const goods = StoreContainer.useContainer();
  // const keywordsList = goods.keywords.map((v, i) => (
  // const keywordsList = keywords.map((v, i) => (
  //   <KeyWordButton text={v} key={i.toString()} />
  // ));

  return (
    <StoreContainer.Provider>
      <View style={styles.flex}>
        <ViroARSceneNavigator
          autofocus={true}
          initialScene={{
            scene: HelloWorldSceneAR,
          }}
          style={{flex: 1}}
        />

        <View style={styles.listView}>
          <BottomMenu />
        </View>
      </View>
    </StoreContainer.Provider>
  );
}

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require('./assets/Hiro.png'),
    orientation: 'Up',
    physicalWidth: 0.16, // real world width in meters
  },
  targetTwo: {
    source: require('./assets/AR.png'),
    orientation: 'Up',
    physicalWidth: 0.16, // real world width in meters
  },
});
