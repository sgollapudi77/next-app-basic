const data = require("./pages/api/products.json")

module.exports = {
  output: 'standalone',
  trailingSlash: true,
  distDir : 'build',
  images: {
    domains: ['images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com'],
  },
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