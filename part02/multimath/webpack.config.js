module.exports = {
  entry: './app/app.ts',
  devtool: 'inline-source-map', // to tell webpack the source map should be created inline with the final  bundle it produces
  module :{
      rules :[
        {
          test :/\.tsx?$/,
          use : 'ts-loader',
          exclude : /node-modules/
        }
      ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ] //Tpo tell webpack which files it should use for module resolution
  },
  output: {
    filename: 'bundle.js' // name of the bundle webpack will produce ; Name of the file that will be sent to the browser
  },
  devServer: {
    inline: false // false prevents the browser from refreshing every time a bundle is produced 
  }
};
