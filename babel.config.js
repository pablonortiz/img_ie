module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@apis': './src/apis',
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@images': './src/assets/images',
          '@redux': './src/redux',
          '@navigators': './src/navigators',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
