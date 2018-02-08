require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class App1Component extends React.Component {
    render() {
        return (
            <div className="index">
			<img src={yeomanImage} alt="Yeoman Generator" />
			<div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
			<div className="notice">请编辑：<code>src/components/Main.js</code> 作为开始！</div>
			</div>
        );
    }
}

App1Component.defaultProps = {
};

export default App1Component;
