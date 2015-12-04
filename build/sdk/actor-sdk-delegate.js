"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (C) 2015 Actor LLC. <https://actor.im>
 */

var ActorSDKDelegate = function ActorSDKDelegate() {
  var components = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  _classCallCheck(this, ActorSDKDelegate);

  this.loginComponent = components.loginComponent || null;
  this.sidebarComponent = components.sidebarComponent || null;
};

exports.default = ActorSDKDelegate;
//# sourceMappingURL=actor-sdk-delegate.js.map