/**
  "상위경로/src/" 의 경로를 @로 대체하는 코드
 */
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  }
};
