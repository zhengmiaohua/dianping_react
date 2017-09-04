import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getAdData} from '../../../fetch/home/home.js'
import HomeAd from '../../../components/HomeAd'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            data: []
        }
    }
    render() {
        return (
            <h1>{
                    this.state.data.length ? 
                    <HomeAd data={this.state.data}/> : 
                    <div>加载中...</div>
                }
            </h1>
        )
    }
    componentDidMount() {
        let result = getAdData();
        result.then((res)=>{
            return res.json()
        }).then((json)=>{
            this.setState({data: json})
        })
    }
}

export default Ad
