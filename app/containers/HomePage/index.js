/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import {
  CornerDialog,
  Pane,
  Heading,
  IconButton,
  SideSheet,
  Card,
  TextInput,
} from 'evergreen-ui';

import Comprehend from '../../images/aws-services/comprehend.png';
import Textract from '../../images/aws-services/textract.jpg';
import Lex from '../../images/aws-services/lex.jpg';
import Rekognition from '../../images/aws-services/rekognition.jpg';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isShown: true,
      isSideShow: false,
      comprehend: {
        inputTextNum: 1,
      },
    };

    this.toggleSideShow = this.toggleSideShow.bind(this);
    this.addTextNum = this.addTextNum.bind(this);
  }

  toggleSideShow(isSideShow = true) {
    this.setState({
      isSideShow,
    });
  }

  addTextNum() {
    const { comprehend } = this.state;

    this.setState({
      comprehend: {
        inputTextNum: (comprehend.inputTextNum += 1),
      },
    });
  }

  render() {
    const { isShown, isSideShow, comprehend } = this.state;

    const indexTextInput = [];

    for (let i = 0; i < comprehend.inputTextNum; i += 1) {
      indexTextInput.push(`textNumber${i + 1}`);
    }

    return (
      <>
        {/* Head Contents */}
        <Pane display="flex" padding={25} background="tint2" borderRadius={3}>
          <Pane flex={1} alignItems="center" display="flex">
            <Heading size={500}>ScenicFlighter Laboratory</Heading>
          </Pane>
          <Pane>
            <IconButton
              appearance="minimal"
              icon="menu"
              iconSize={18}
              onClick={this.toggleSideShow}
            />
          </Pane>
        </Pane>

        {/* Sub Head Content */}
        <Pane
          display="flex"
          padding={16}
          background="tealTint"
          borderRadius={3}
        >
          <Pane flex={1} alignItems="center" display="flex" margin={10}>
            <Heading size={500}>Comprehend</Heading>
          </Pane>
        </Pane>

        {/* Main Content */}
        <Pane
          display="flex"
          padding={16}
          background="tint"
          borderRadius={3}
          marginTop={50}
        >
          <Pane flex={1} alignItems="center" display="flex" width="500px">
            <IconButton
              appearance="minimal"
              icon="add"
              iconSize={18}
              onClick={this.addTextNum}
            />
            {indexTextInput.map(inputText => (
              <TextInput name={inputText} placeholder="Input Text" />
            ))}
          </Pane>
          <Pane flex={1} alignItems="center">
            Result
          </Pane>
        </Pane>
        {/* State Contents */}
        <CornerDialog
          title="Welcome to Laboratory"
          isShown={isShown}
          onCloseComplete={() => this.setState({ isShown: false })}
          confirmLabel="Confirm"
        >
          このプロジェクトは未完成です。随時、お遊びを追加していきます。
        </CornerDialog>
        <SideSheet
          isShown={isSideShow}
          onCloseComplete={() => this.setState({ isSideShow: false })}
        >
          <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
            <Pane padding={16}>
              <Heading size={600}>Labo Menu</Heading>
            </Pane>
          </Pane>
          <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
            <Card
              backgroundColor="white"
              elevation={0}
              hoverElevation={3}
              height={240}
              margin={20}
              display="flex"
              alignItems="center"
              justifyContent="center"
              style={{
                cursor: 'pointer',
                backgroundImage: `url(${Comprehend})`,
                backgroundSize: 'cover',
              }}
            />
            <Card
              backgroundColor="white"
              elevation={0}
              hoverElevation={3}
              margin={20}
              height={240}
              display="flex"
              alignItems="center"
              justifyContent="center"
              style={{
                cursor: 'pointer',
                backgroundImage: `url(${Textract})`,
                backgroundSize: 'cover',
              }}
            />
            <Card
              backgroundColor="white"
              elevation={0}
              hoverElevation={3}
              margin={20}
              height={240}
              display="flex"
              alignItems="center"
              justifyContent="center"
              style={{
                cursor: 'pointer',
                backgroundImage: `url(${Rekognition})`,
                backgroundSize: 'cover',
              }}
            />
            <Card
              backgroundColor="white"
              elevation={0}
              hoverElevation={3}
              margin={20}
              height={240}
              display="flex"
              alignItems="center"
              justifyContent="center"
              style={{
                cursor: 'pointer',
                backgroundImage: `url(${Lex})`,
                backgroundSize: 'cover',
              }}
            />
          </Pane>
        </SideSheet>
      </>
    );
  }
}
