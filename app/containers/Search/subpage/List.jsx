import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home.js'
import ListComponent from '../../../components/List/index.jsx'
import LoadMore from '../../../components/LoadMore'
const initialState={
    data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 1
}
class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state=initialState
    }
    render() {
        return (
            <div>
                {
                    this.state.data.length
                    ? <ListComponent data={this.state.data}/> 
                    : <div>加载中...</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
                }
            </div>
            
        )
    }
    //页面初次渲染
    componentDidMount() {
        this.loadFirstPageData();
    }
    //页面再次渲染
    componentDidUpdate(prevProps, prevState) {
        const keyword = this.props.keyword
        const type = this.props.type
        if(keyword===prevProps.keyword && type===prevProps.type) return 
        this.setState(initialState)
        this.loadFirstPageData()
    }
    //获取首屏数据
    loadFirstPageData() {
        const cityName = this.props.cityName
        const keyword=this.props.keyword || ''
        const type=this.props.type
        const result = getListData(cityName, 0, keyword, type)
        this.resultHandle(result)
    }
    loadMoreData() {
        this.setState({
            isLoadingMore: true
        })
        const page = this.state.page
        const cityName = this.props.cityName
        const keyword=this.props.keyword || ''
        const type=this.props.type
        const result = getListData(cityName, page, keyword, type)
        this.resultHandle(result)
        this.setState({
            page: page+1,
            isLoadingMore: false
        })
    }
    resultHandle(result) {
        result.then((res)=>{
            return res.json()
        }).then((json)=>{
            const hasMore = json.hasMore
            const data = json.data
            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data)
            })
        })
    }
}

export default List
