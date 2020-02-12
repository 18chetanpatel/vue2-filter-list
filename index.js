import util from './util/index'
import * as stringFilters from './string'
import * as booleanFilters from './boolean'
import * as mathFilters from './math'
import * as otherFilters from './other'
import * as arrayFilters from './collection'

var VueFilterList = {
  install: function(Vue, options) {
    for(let i in stringFilters){
      Vue.filter(i, stringFilters[i].bind(options))
    }
    for(let i in booleanFilters){
      Vue.filter(i, booleanFilters[i].bind(options))
    }
    for(let i in mathFilters){
      Vue.filter(i, mathFilters[i].bind(options))
    }
    for(let i in otherFilters){
      Vue.filter(i, otherFilters[i].bind(options))
    }
    Vue.filter('reverse',arrayFilters['reverse'].bind(options))
    Vue.filter('join',arrayFilters['join'].bind(options))
  },
  mixin: {
    methods: {
        after: arrayFilters.after,
        afterWhere: arrayFilters.afterWhere,
        before: arrayFilters.before,
        beforeWhere: arrayFilters.beforeWhere,
        concat: arrayFilters.concat,
        filterBy: arrayFilters.filterBy,
        find: arrayFilters.find,
        flatten: arrayFilters.flatten,
        fuzzy: arrayFilters.fuzzy,
        isEmpty: arrayFilters.isEmpty,
        limitBy: arrayFilters.limitBy,
        orderBy: arrayFilters.orderBy,
        range: arrayFilters.range,
        removeWith: arrayFilters.removeWith,
        reverse: arrayFilters.reverse,
        where: arrayFilters.where
    }
  }
};

export default VueFilterList;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFilterList);
  window.VueFilterList = VueFilterList;
}
