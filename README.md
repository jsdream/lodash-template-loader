# lodash-template-loader
Lodash template loader for Webpack.

This is tiny webpack loader which wraps lodash `_.template()` to render templates during webpack build. 
Global data for templates (views) is passed using `imports` property of loader options object.

Other available options:
- [options.escape] (RegExp): The HTML "escape" delimiter.
- [options.evaluate] (RegExp): The "evaluate" delimiter.
- [options.interpolate] (RegExp): The "interpolate" delimiter.

### Install

```sh
$ npm i lodash-template-loader --save
```

### Usage

WebPack 2.x
```javascript
module: {
    rules: [ {
        test: /\.html$/,
        use: [
            {
                loader: 'apply-loader'
            },
            {
                loader: 'lodash-template-loader',
                options: {
                    imports: { // data object which will be passed to templates for rendering
                        title: 'Hello World!'
                    }
                }
            }
        ]
    } ]
}
```
