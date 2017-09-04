import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data=this.props.data
        const arr = data.map((item,index)=>{
            return <div key={index} className="ad-item float-left">
                <a href={item.link} target="_blank">
                    <img src={item.img} alt={item.title}/>
                </a>
            </div>
        })
        return (
            <div id="home-ad">
                <h2>超值特惠</h2>
                <div className="ad-container clear-fix">
                    {arr}
                </div>
            </div>
        )
    }
}

export default HomeAd