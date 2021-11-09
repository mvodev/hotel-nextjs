const path = require('path')

module.exports = {
  webpack: (config, options) => {
    const alias = {
      ...config.resolve.alias,  
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@components': path.resolve(__dirname, 'src/components'),
    };

    config.resolve.alias = alias;

    return config;
  }
}
