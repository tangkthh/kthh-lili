
'use strict';

// css
require('normalize.css/normalize.css');
require('styles/App.scss');
let React = require('`react`/addons');

// import React from 'react';
// import ReactDOM from 'react-dom';

let yeomanImage = require('../images/yeoman.png'); // 路径直接可以转化为地址

// 获取图片相关的数据
let imageDatas = require('../data/imageDatas.json');

// // 利用自执行函数，将图片的信息转化图片的路径信息
imageDatas = (function genImageUrl(imageDataArr) {
	for (var i = 0; i < imageDataArr.length; i ++ ){
		var singleImageData = imageDataArr[i]; // 单个的图片数据

		// 处理单个数据是添加一条键值imageUrl
		singleImageData.imageUrl = require('../images/' + singleImageData.fileName);

        // 赋值回来
        imageDataArr[i] = singleImageData;

    }
    return imageDataArr;

})(imageDatas);

// 把图片名，转化为图片路径
// imageDatas = genImageUrl(imageDatas);
console.log(imageDatas);

let ImgFigure = React.createClass({
// class ImgFigure extends React.Component {
	render() {
		return (
			<figure className="img_figure">
			<img src = {this.props.data.imageUrl} alt = {this.props.data.title}/>
			<figcaption>
			<h2 className="img_title">{this.props.data.title}</h2>
			</figcaption>  
			</figure>
			);
	}
});



let GalleryByReactApp = React.createClass({

    // Constant: {
    //     centerPos: {
    //         left: 0,
    //         right: 0
    //     }
    // },

    // componentDidMount: function() {

    // },

    render() {

    	let controllerUnits = [],
    	imgFigures = [];

    	imageDatas.forEach(function (value) {
    		imgFigures.push(<ImgFigure data= {value}/>);
    	});
    	// console.log(imgFigures);
    	return (
    		<section className="stage">
    		<section className="img_sec">
    		{imgFigures}
    		</section>
    		<nav className="controller_nav">
    		{controllerUnits}
    		</nav>
    		</section>
    		);
    	}
    });

    // React.render(<GalleryByReactApp />, document.getElementById('contentWrap'));
