const data = require("./pages/api/products.json")

module.exports = {
  trailingSlash: true,
  distDir : 'build',
  // target: 'serverless',
  exportPathMap: function(defaultPathMap,{ dev= true, dir, outDir, distDir, buildId }) {
    const paths = {
      '/' : {page:'/'},
      '/about': {page: '/about'},
      '/products': {page: '/products'}
    }
    // data.forEach(product => {
    //   paths[`/products/${product.id}`] = { page: '/products/[id]', id: product.id}
    // });
    return paths;
  }
};