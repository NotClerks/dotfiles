'use babel';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var RefCountedTokenList = (function () {
  function RefCountedTokenList() {
    _classCallCheck(this, RefCountedTokenList);

    this.clear();
  }

  _createClass(RefCountedTokenList, [{
    key: 'clear',
    value: function clear() {
      this.references = {};
      this.tokens = [];
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.tokens.length;
    }
  }, {
    key: 'getTokens',
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: 'getTokenWrappers',
    value: function getTokenWrappers() {
      var _this = this;

      return (function () {
        var result = [];
        for (var key in _this.references) {
          var tokenWrapper = _this.references[key];
          result.push(tokenWrapper);
        }
        return result;
      })();
    }
  }, {
    key: 'getToken',
    value: function getToken(tokenKey) {
      var wrapper = this.getTokenWrapper(tokenKey);
      if (wrapper) {
        return wrapper.token;
      }
    }
  }, {
    key: 'getTokenWrapper',
    value: function getTokenWrapper(tokenKey) {
      tokenKey = this.getTokenKey(tokenKey);
      return this.references[tokenKey];
    }
  }, {
    key: 'refCountForToken',
    value: function refCountForToken(tokenKey) {
      tokenKey = this.getTokenKey(tokenKey);
      if (this.references[tokenKey] && this.references[tokenKey].count) {
        return this.references[tokenKey].count;
      }
      return 0;
    }
  }, {
    key: 'addToken',
    value: function addToken(token, tokenKey) {
      tokenKey = this.getTokenKey(token, tokenKey);
      return this.updateRefCount(tokenKey, token, 1);
    }

    // Returns true when the token was removed
    // Returns false when the token was not present and thus not removed
  }, {
    key: 'removeToken',
    value: function removeToken(token, tokenKey) {
      tokenKey = this.getTokenKey(token, tokenKey);
      if (this.references[tokenKey] != null) {
        token = this.references[tokenKey].token;

        this.updateRefCount(tokenKey, token, -1);
        return true;
      } else {
        return false;
      }
    }

    /*
    Private Methods
    */

  }, {
    key: 'updateRefCount',
    value: function updateRefCount(tokenKey, token, increment) {
      if (increment > 0 && this.references[tokenKey] == null) {
        if (this.references[tokenKey] == null) {
          this.references[tokenKey] = { tokenKey: tokenKey, token: token, count: 0 };
        }
        this.addTokenToList(token);
      }

      if (this.references[tokenKey] != null) {
        this.references[tokenKey].count += increment;
      }

      if (this.references[tokenKey] && this.references[tokenKey].count <= 0) {
        delete this.references[tokenKey];
        return this.removeTokenFromList(token);
      }
    }
  }, {
    key: 'addTokenToList',
    value: function addTokenToList(token) {
      return this.tokens.push(token);
    }
  }, {
    key: 'removeTokenFromList',
    value: function removeTokenFromList(token) {
      var index = this.tokens.indexOf(token);
      if (index > -1) {
        return this.tokens.splice(index, 1);
      }
    }
  }, {
    key: 'getTokenKey',
    value: function getTokenKey(token, tokenKey) {
      // some words are reserved, like 'constructor' :/
      if (tokenKey) {
        return tokenKey + '$$';
      }

      return token + '$$';
    }
  }]);

  return RefCountedTokenList;
})();

exports['default'] = RefCountedTokenList;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZC9hdG9tL3NyYy9hdG9tLTEuMTguMC9vdXQvYXBwL25vZGVfbW9kdWxlcy9hdXRvY29tcGxldGUtcGx1cy9saWIvcmVmLWNvdW50ZWQtdG9rZW4tbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLENBQUE7O0FBRVgsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDLE9BQUssRUFBRSxJQUFJO0NBQ1osQ0FBQyxDQUFDOztBQUVILElBQUksWUFBWSxHQUFHLENBQUMsWUFBWTtBQUFFLFdBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUFFLFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQUUsVUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEFBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxBQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEFBQUMsSUFBSSxPQUFPLElBQUksVUFBVSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEFBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUFFO0dBQUUsQUFBQyxPQUFPLFVBQVUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUU7QUFBRSxRQUFJLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEFBQUMsSUFBSSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLEFBQUMsT0FBTyxXQUFXLENBQUM7R0FBRSxDQUFDO0NBQUUsQ0FBQSxFQUFHLENBQUM7O0FBRXRqQixT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O0NBNEl2QyxDQUFBLEVBQUcsQ0FBQzs7QUFFTCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBOUlHLG1CQUFtQixDQUFBO0FBK0l4QyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyIsImZpbGUiOiIvYnVpbGQvYXRvbS9zcmMvYXRvbS0xLjE4LjAvb3V0L2FwcC9ub2RlX21vZHVsZXMvYXV0b2NvbXBsZXRlLXBsdXMvbGliL3JlZi1jb3VudGVkLXRva2VuLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWZDb3VudGVkVG9rZW5MaXN0IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuY2xlYXIoKVxuICB9XG5cbiAgY2xlYXIgKCkge1xuICAgIHRoaXMucmVmZXJlbmNlcyA9IHt9XG4gICAgdGhpcy50b2tlbnMgPSBbXVxuICB9XG5cbiAgZ2V0TGVuZ3RoICgpIHsgcmV0dXJuIHRoaXMudG9rZW5zLmxlbmd0aCB9XG5cbiAgZ2V0VG9rZW5zICgpIHsgcmV0dXJuIHRoaXMudG9rZW5zIH1cblxuICBnZXRUb2tlbldyYXBwZXJzICgpIHtcbiAgICByZXR1cm4gKCgoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBbXVxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5yZWZlcmVuY2VzKSB7XG4gICAgICAgIGNvbnN0IHRva2VuV3JhcHBlciA9IHRoaXMucmVmZXJlbmNlc1trZXldXG4gICAgICAgIHJlc3VsdC5wdXNoKHRva2VuV3JhcHBlcilcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9KSgpKVxuICB9XG5cbiAgZ2V0VG9rZW4gKHRva2VuS2V5KSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuZ2V0VG9rZW5XcmFwcGVyKHRva2VuS2V5KVxuICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICByZXR1cm4gd3JhcHBlci50b2tlblxuICAgIH1cbiAgfVxuXG4gIGdldFRva2VuV3JhcHBlciAodG9rZW5LZXkpIHtcbiAgICB0b2tlbktleSA9IHRoaXMuZ2V0VG9rZW5LZXkodG9rZW5LZXkpXG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlc1t0b2tlbktleV1cbiAgfVxuXG4gIHJlZkNvdW50Rm9yVG9rZW4gKHRva2VuS2V5KSB7XG4gICAgdG9rZW5LZXkgPSB0aGlzLmdldFRva2VuS2V5KHRva2VuS2V5KVxuICAgIGlmICh0aGlzLnJlZmVyZW5jZXNbdG9rZW5LZXldICYmIHRoaXMucmVmZXJlbmNlc1t0b2tlbktleV0uY291bnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZXNbdG9rZW5LZXldLmNvdW50XG4gICAgfVxuICAgIHJldHVybiAwXG4gIH1cblxuICBhZGRUb2tlbiAodG9rZW4sIHRva2VuS2V5KSB7XG4gICAgdG9rZW5LZXkgPSB0aGlzLmdldFRva2VuS2V5KHRva2VuLCB0b2tlbktleSlcbiAgICByZXR1cm4gdGhpcy51cGRhdGVSZWZDb3VudCh0b2tlbktleSwgdG9rZW4sIDEpXG4gIH1cblxuICAvLyBSZXR1cm5zIHRydWUgd2hlbiB0aGUgdG9rZW4gd2FzIHJlbW92ZWRcbiAgLy8gUmV0dXJucyBmYWxzZSB3aGVuIHRoZSB0b2tlbiB3YXMgbm90IHByZXNlbnQgYW5kIHRodXMgbm90IHJlbW92ZWRcbiAgcmVtb3ZlVG9rZW4gKHRva2VuLCB0b2tlbktleSkge1xuICAgIHRva2VuS2V5ID0gdGhpcy5nZXRUb2tlbktleSh0b2tlbiwgdG9rZW5LZXkpXG4gICAgaWYgKHRoaXMucmVmZXJlbmNlc1t0b2tlbktleV0gIT0gbnVsbCkge1xuICAgICAgKHsgdG9rZW4gfSA9IHRoaXMucmVmZXJlbmNlc1t0b2tlbktleV0pXG4gICAgICB0aGlzLnVwZGF0ZVJlZkNvdW50KHRva2VuS2V5LCB0b2tlbiwgLTEpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICAvKlxuICBQcml2YXRlIE1ldGhvZHNcbiAgKi9cblxuICB1cGRhdGVSZWZDb3VudCAodG9rZW5LZXksIHRva2VuLCBpbmNyZW1lbnQpIHtcbiAgICBpZiAoaW5jcmVtZW50ID4gMCAmJiAodGhpcy5yZWZlcmVuY2VzW3Rva2VuS2V5XSA9PSBudWxsKSkge1xuICAgICAgaWYgKHRoaXMucmVmZXJlbmNlc1t0b2tlbktleV0gPT0gbnVsbCkgeyB0aGlzLnJlZmVyZW5jZXNbdG9rZW5LZXldID0ge3Rva2VuS2V5LCB0b2tlbiwgY291bnQ6IDB9IH1cbiAgICAgIHRoaXMuYWRkVG9rZW5Ub0xpc3QodG9rZW4pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVmZXJlbmNlc1t0b2tlbktleV0gIT0gbnVsbCkgeyB0aGlzLnJlZmVyZW5jZXNbdG9rZW5LZXldLmNvdW50ICs9IGluY3JlbWVudCB9XG5cbiAgICBpZiAodGhpcy5yZWZlcmVuY2VzW3Rva2VuS2V5XSAmJiB0aGlzLnJlZmVyZW5jZXNbdG9rZW5LZXldLmNvdW50IDw9IDApIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnJlZmVyZW5jZXNbdG9rZW5LZXldXG4gICAgICByZXR1cm4gdGhpcy5yZW1vdmVUb2tlbkZyb21MaXN0KHRva2VuKVxuICAgIH1cbiAgfVxuXG4gIGFkZFRva2VuVG9MaXN0ICh0b2tlbikge1xuICAgIHJldHVybiB0aGlzLnRva2Vucy5wdXNoKHRva2VuKVxuICB9XG5cbiAgcmVtb3ZlVG9rZW5Gcm9tTGlzdCAodG9rZW4pIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudG9rZW5zLmluZGV4T2YodG9rZW4pXG4gICAgaWYgKGluZGV4ID4gLTEpIHsgcmV0dXJuIHRoaXMudG9rZW5zLnNwbGljZShpbmRleCwgMSkgfVxuICB9XG5cbiAgZ2V0VG9rZW5LZXkgKHRva2VuLCB0b2tlbktleSkge1xuICAgIC8vIHNvbWUgd29yZHMgYXJlIHJlc2VydmVkLCBsaWtlICdjb25zdHJ1Y3RvcicgOi9cbiAgICBpZiAodG9rZW5LZXkpIHtcbiAgICAgIHJldHVybiB0b2tlbktleSArICckJCdcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW4gKyAnJCQnXG4gIH1cbn1cbiJdfQ==