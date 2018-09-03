'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
  function PraiseButton(num) {
    _classCallCheck(this, PraiseButton);

    this.num = num || 0;
    this.$element = null;
  }

  _createClass(PraiseButton, [{
    key: 'handleClick',
    value: function handleClick($element) {}
  }]);

  return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
  _inherits(Thumb, _PraiseButton);

  function Thumb(num, $element) {
    _classCallCheck(this, Thumb);

    var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num));

    _this.$element = $element || $(document.body);
    return _this;
  }

  _createClass(Thumb, [{
    key: 'handleClick',
    value: function handleClick($element) {
      var _this2 = this;

      this.$element.on('click', function () {
        _this2.num = winAdd(1);
        console.log(num);
      });
    }
  }]);

  return Thumb;
}(PraiseButton);

exports.default = Thumb;
