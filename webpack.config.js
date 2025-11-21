// webpack.config.js - Custom optimizations for Create React App
const path = require('path');

module.exports = {
  // Enable source maps for debugging in development
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
  
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // Vendor libraries
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
        },
        // Common components
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 5,
        },
        // React and React DOM
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
          priority: 20,
        },
        // UI libraries
        ui: {
          test: /[\\/]node_modules[\\/](bootstrap|react-bootstrap|react-icons)[\\/]/,
          name: 'ui',
          chunks: 'all',
          priority: 15,
        }
      }
    },
    // Runtime chunk for better caching
    runtimeChunk: {
      name: 'runtime'
    }
  },
  
  resolve: {
    // Add aliases for shorter imports
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
    
    // Optimize module resolution
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    
    // File extensions to resolve
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  
  module: {
    rules: [
      // Image optimization
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 75
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  }
};