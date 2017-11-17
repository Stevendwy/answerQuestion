import ajax from '../config/ajax'

export default {
	//点击下一题记录答案 最后一题就不跳转
	addNum({commit,state},id){
		commit('REMBER_ANSWER', id);
		if (state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM',1)
		}
	},
	
	//初始化信息
	initializeData({commit}){
		commit('INITIALIZE_DATA')
	}
}
