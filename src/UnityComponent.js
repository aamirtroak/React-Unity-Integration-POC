// UnityComponent.js
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const UnityComponent = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'build/ZigZag.loader.js',
    dataUrl: 'build/ZigZag.data',
    frameworkUrl: 'build/ZigZag.framework.js',
    codeUrl: 'build/ZigZag.wasm',
  });

  const unityStyles = {
    width: '100%',
    height: '100vh',
    // Add other styles as needed
  };

  return <Unity unityProvider={unityProvider} style={unityStyles} />;
};

export default UnityComponent;
