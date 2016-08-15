/**
 * Created by fangxianzheng on 2016/8/15.
 */
;(function(win){
    var BoxSize = function(elem){
        this.elems = document.querySelectorAll(elem);
    };
    BoxSize.prototype = {
        width: function(){
            var self = this;
            var value, i = 0, valueArr = [];
            for(; i < self.elems.length; i++){
                var clientWidth;
                swap(self.elems[i],function(el){
                    clientWidth = el.clientWidth;
                });
                var padding = parseInt(getStyles(self.elems[i]).paddingLeft) + parseInt(getStyles(self.elems[i]).paddingRight);
                value = clientWidth - padding;
                valueArr.push(value)
            }
            return valueArr.length ===1 ? valueArr[0] : valueArr;
        },
        height: function(){
            var self = this;
            var value, i = 0, valueArr = [];
            for(; i < self.elems.length; i++){
                var clientHeight;
                swap(self.elems[i],function(el){
                    clientHeight = el.clientHeight;
                });
                var padding = parseInt(getStyles(self.elems[i]).paddingTop) + parseInt(getStyles(self.elems[i]).paddingBottom);
                value = clientHeight - padding;
                valueArr.push(value)
            }
            return valueArr.length ===1 ? valueArr[0] : valueArr;
        },
        innerWidth: function(){
            var self = this;
            var value, i = 0, valueArr = [];
            for(; i < self.elems.length; i++){
                valueArr.push(self.elems[i].clientWidth)
            }
            return valueArr.length ===1 ? valueArr[0] : valueArr;
        },
        innerHeight: function(){
            var self = this;
            var value, i = 0, valueArr = [];
            for(; i < self.elems.length; i++){
                valueArr.push(self.elems[i].clientHeight)
            }
            return valueArr.length ===1 ? valueArr[0] : valueArr;
        },
        outerWidth: function(hasMargin){
            var self = this;
            var value, i = 0, valueArr = [];
            for(; i < self.elems.length; i++){
                var clientWidth;
                swap(self.elems[i],function(el){
                    clientWidth = el.clientWidth;
                });
                var border = parseInt(getStyles(self.elems[i]).borderLeftWidth) + parseInt(getStyles(self.elems[i]).borderRightWidth);
                var margin = parseInt(getStyles(self.elems[i]).marginLeft) + parseInt(getStyles(self.elems[i]).marginRight);
                if(hasMargin === true){
                    value = clientWidth + border + margin;
                }else{
                    value = clientWidth + border;
                }
                valueArr.push(value)
            }
            return valueArr.length ===1 ? valueArr[0] : valueArr;
        },
        outerHeight: function(hasMargin){
            var self = this;
            var value, i = 0, valueArr = [];
            for(; i < self.elems.length; i++){
                var clientHeight;
                swap(self.elems[i],function(el){
                    clientHeight = el.clientHeight;
                });
                var border = parseInt(getStyles(self.elems[i]).borderTopWidth) + parseInt(getStyles(self.elems[i]).borderBottomWidth);
                var margin = parseInt(getStyles(self.elems[i]).marginTop) + parseInt(getStyles(self.elems[i]).marginBottom);
                if(hasMargin === true){
                    value = clientHeight + border + margin;
                }else{
                    value = clientHeight + border;
                }
                valueArr.push(value)
            }
            return valueArr.length ===1 ? valueArr[0] : valueArr;
        }
    };
    function getStyles(el){
        return win.getComputedStyle(el);
    }
    function swap(el, callback){
        var name, old = {};
        var cssShow = {position: "absolute", visibility: "hidden", display: "block"};

        for(name in cssShow){
            old[name] = el.style[name];
            el.style[name] = cssShow[name];
        }
        callback(el);
        for(name in cssShow){
            el.style[name] = old[name];
        }
    }
    var boxsize = function(elem){
        return new BoxSize(elem);
    };
    win.boxsize = boxsize;
}(window));