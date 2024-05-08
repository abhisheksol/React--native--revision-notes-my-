import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

function WebViewComponent() {
    return (
        
            <WebView source={{ uri: 'https://abhishekportfolios2.netlify.app/' }}  />
       
    );
}

export default WebViewComponent;
