import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div className="city-list-container">
                <h3>城市列表</h3>
                <ul className="clear-fix" onClick={this.clickHandle.bind(this)}>
                    <li><span id="beijing">北京</span></li>
                    <li><span id="shanghai">上海</span></li>
                    <li><span id="hangzhou">杭州</span></li>
                    <li><span id="guangzhou">广州</span></li>
                    <li><span id="suzhou">苏州</span></li>
                    <li><span id="shenzhen">深圳</span></li>
                    <li><span id="nanjing">南京</span></li>
                    <li><span id="tianjin">天津</span></li>
                    <li><span id="chongqing">重庆</span></li>
                    <li><span id="xiamen">厦门</span></li>
                    <li><span id="wuhan">武汉</span></li>
                    <li><span id="xian">西安</span></li>
                </ul>
            </div>
        )
    }
    clickHandle(e) {
        let id = e.target.id
        let newCity
        switch(id) {
            case "beijing":
                newCity='北京'
                break;
            case "shanghai":
                newCity='上海'
                break;
            case "hangzhou":
                newCity='杭州'
                break;
            case "guangzhou":
                newCity='广州'
                break;
            case "suzhou":
                newCity='苏州'
                break;
            case "xiamen":
                newCity='厦门'
                break;
            case "wuhan":
                newCity='武汉'
                break;
            case "xian":
                newCity='西安'
                break;
            case "nanjing":
                newCity='南京'
                break;
            case "tianjin":
                newCity='天津'
                break;
            case "shenzhen":
                newCity='深圳'
                break;
            case "chognqing":
                newCity='重庆'
                break;
        }
        this.props.changeFn(newCity)
    }
}

export default CityList
