import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const _connect = function (Uicomponent,reducers=[]) {

    let mapStateToProps = (state) => {
        let result ={};
        // 如果没有传入reducer的名字，认为都想要
        if(reducers.length<=0) return state;
        reducers.forEach(reducer => {
            if(typeof reducer === 'string'){
                result[reducer] = state[reducer] ? state[reducer] : {}
            }else{ //obj
                result[reducer.name] = filterObject(state[reducer.name], reducer.states)
            }
        })

        return result;
    }
    let mapDispatchToProps = (dispatch) =>{
        let result = {};
        // 如果没有传入reducer的名字，认为都想要
        if(reducers.length <= 0) return {};

        reducers.forEach(reducer => {
            let name = (typeof reducer === 'string') ? reducer : reducer.name;
            result[name + '_actions'] = bindActionCreators(_connect.actions[name], dispatch);
        })
        return result;
    }

    return connect(mapStateToProps,mapDispatchToProps)(Uicomponent)
}

_connect.configActions = function (actions)  {
    _connect.actions = actions
}

_connect.addActionCreator = function (actionCreator)  {
    _connect.actions = Object.assign({}, _connect.actions, actionCreator)
}

function filterObject(obj,arr){
    if(!arr || arr.length <= 0) return obj;
    let result ={};
    arr.forEach( key => {
        result[key] = obj[key];
    })
    return result
}

export default _connect