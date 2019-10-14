const path = require('path')
const webpack = require('webpack') 


module.exports = {  
  entry: './src/index.js',

  output: {  
    path: path.resolve('dist'),  
    filename: 'main.js'  
  },

  plugins: [  
    new webpack.ProvidePlugin({  
      cowsay: 'cowsay-browser'  
    })  
  ],
  
  
  module: {  
    rules: [  
      {  
        test: /\.js$/,  
        exclude: /node_modules/,   
        use: {
            loader: 'babel-loader',
            options: {  
            cacheDirectory: true  
          }
        } 
      },
      
      {  
        test: /\.css$/,  
        use: ['style-loader', 'css-loader']  
      },  

      {  
        test: /\.scss$/,  
        use: ['style-loader', 'css-loader', 'sass-loader']  
      },

      {  
        test: /\.(png|jpg)$/,  
        use: {  
          loader: 'file-loader',  
          options: {  
            name: '[name]-[hash].[ext]',
            outputPath: 'images/',
            publicPath: 'dist/images/'
          }  
        }    
      }
    ]  
  }    
}