module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'], // Use this if you're using Expo
      plugins: [
        ['module:react-native-dotenv', {
          moduleName: '@env',
          path: '.env',
        }],
      ],
    };
  };
  