import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class App extends Component {
  render() {
    return (
      <WebView
      injectedJavaScript={`document.getElementById('warning').remove()`}
        startInLoadingState={true}
        source={{ uri: 'https://script.google.com/macros/s/AKfycbwkG-qqVIIhdD3DyDLjS9PpZrNaMybAt1hS6FvhU_ArkvHFniVgpvmbkn1wbrdWxDM2/exec' }}
        style={{ margin: 0 }}
      />
    );
  }
}

export default App;

