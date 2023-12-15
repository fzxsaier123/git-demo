export const nativeToString = Object.prototype.toString
function isTyle(type) {
    return function(value) {
        return nativeToString.call(value) === `[object ${type}]`
    }
}
/**
 * 检测变量类型
 * @param type
 */
export const variableTypeDetection = {
    isNumber: isTyle('Number'),
    isString: isTyle('String'),
    isBoolan: isTyle('Boolan'),
    isNull: isTyle('Null'),
    isUndefined: isTyle('Undefined'),
    isSymbol: isTyle('Symbol'),
    isFunction: isTyle('Function'),
    isObject: isTyle('Object'),
    isArray: isTyle('Array'),
    isProcess: isTyle('process'),
    isWindow: isTyle('Window')
}

export function isInstanceOf(wat, base) {
    try {
        return wat instanceof base
    } catch (_e) {
        return false
    }
}

export function isEmptyObject(obj) {
    return variableTypeDetection.isObject(obj) && Object.keys(obj).length === 0
}

export function isEmpty(wat) {
    return (
       (variableTypeDetection.isString(wat) && wat.trim() === '') || wat === undefined || wat === null
    )
}

export function isExistProperty(obj, key) {
    return obj.hasOwnProperty(key)
}

export function isError(wat) {
    switch(nativeToString.call(wat)) {
        case '[object Error]':
            return true
        case '[object Exception]':
            return true
        case '[object DOMException]':
            return true
        default:
            return isInstanceOf(wat, Error)
    }
}

export function parseUrlToObj(url){
    if (!url) {
      return {};
    }
  
    const match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  
    if (!match) {
      return {};
    }
    const query = match[6] || '';
    const fragment = match[8] || '';
    return {
      host: match[4],
      path: match[5],
      protocol: match[2],
      relative: match[5] + query + fragment, // everything minus origin
    };
  }

