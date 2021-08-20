"use strict";



define('ember-app/app', ['exports', 'ember-app/resolver', 'ember-load-initializers', 'ember-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('ember-app/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('ember-app/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('ember-app/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('ember-app/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('ember-app/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('ember-app/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('ember-app/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('ember-app/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('ember-app/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('ember-app/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('ember-app/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('ember-app/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('ember-app/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('ember-app/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('ember-app/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('ember-app/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('ember-app/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('ember-app/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('ember-app/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('ember-app/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('ember-app/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('ember-app/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-app/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('ember-app/components/bs-form/element/control/radio', ['exports', 'ember-bootstrap/components/bs-form/element/control/radio'], function (exports, _radio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
define('ember-app/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('ember-app/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('ember-app/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('ember-app/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('ember-app/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('ember-app/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('ember-app/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-app/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('ember-app/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-app/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('ember-app/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-app/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('ember-app/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('ember-app/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('ember-app/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('ember-app/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('ember-app/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('ember-app/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('ember-app/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('ember-app/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('ember-app/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('ember-app/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('ember-app/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('ember-app/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('ember-app/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('ember-app/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('ember-app/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('ember-app/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('ember-app/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('ember-app/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('ember-app/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('ember-app/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('ember-app/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('ember-app/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('ember-app/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('ember-app/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('ember-app/components/ember-popper-targeting-parent', ['exports', 'ember-popper/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('ember-app/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('ember-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('ember-app/helpers/-link-to-params', ['exports', 'ember-angle-bracket-invocation-polyfill/helpers/-link-to-params'], function (exports, _linkToParams) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkToParams.default;
    }
  });
});
define('ember-app/helpers/app-version', ['exports', 'ember-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('ember-app/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('ember-app/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('ember-app/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
define('ember-app/helpers/on-document', ['exports', 'ember-on-helper/helpers/on-document'], function (exports, _onDocument) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
define('ember-app/helpers/on-window', ['exports', 'ember-on-helper/helpers/on-window'], function (exports, _onWindow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
define('ember-app/helpers/on', ['exports', 'ember-on-helper/helpers/on'], function (exports, _on) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
define('ember-app/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
define('ember-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('ember-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('ember-app/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
define('ember-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('ember-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-app/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
define('ember-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('ember-app/initializers/export-application-global', ['exports', 'ember-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-app/initializers/load-bootstrap-config', ['exports', 'ember-app/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize
  };
});
define("ember-app/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('ember-app/modifiers/focus-trap', ['exports', 'ember-focus-trap/modifiers/focus-trap'], function (exports, _focusTrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
define('ember-app/modifiers/ref', ['exports', 'ember-ref-modifier/modifiers/ref'], function (exports, _ref) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ref.default;
    }
  });
});
define('ember-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('ember-app/router', ['exports', 'ember-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define('ember-app/routes/index', ['module', 'exports', 'ember-app/templates/css/styles.css'], function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});


  module.exports = {

    included: function (app) {
      app.import('./templates/css/style.css');
    }

  };
});
define('ember-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("ember-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "StZc90DP", "block": "{\"symbols\":[],\"statements\":[[6,\"head\"],[8],[0,\"\\n  \"],[6,\"meta\"],[10,\"charset\",\"UTF-8\"],[8],[9],[0,\"\\n  \"],[6,\"meta\"],[10,\"name\",\"viewport\"],[10,\"content\",\"width=device-width, initial-scale=1, shrink-to-fit=no\"],[8],[9],[0,\"\\n  \"],[6,\"title\"],[8],[0,\"Книжный клуб Skyori\"],[9],[0,\"\\n  \"],[6,\"script\"],[10,\"src\",\"bootstrap/js/jquery-3.5.1.slim.min.js\"],[8],[9],[0,\"\\n  \"],[6,\"link\"],[10,\"rel\",\"stylesheet\"],[10,\"href\",\"bootstrap/css/bootstrap.min.css\"],[8],[9],[0,\"\\n  \"],[6,\"link\"],[10,\"rel\",\"stylesheet\"],[10,\"href\",\"app/styles/styles.scss\"],[8],[9],[0,\"\\n  \"],[6,\"script\"],[10,\"src\",\"bootstrap/js/bootstrap.bundle.min.js\"],[8],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"body\"],[8],[0,\"\\n\"],[6,\"nav\"],[10,\"class\",\"navbar fixed-top navbar-expand-lg navbar-light bg-light\"],[8],[0,\"\\n  \"],[6,\"a\"],[10,\"class\",\"navbar-brand\"],[10,\"href\",\"../index.html\"],[8],[0,\"\\n    \"],[6,\"img\"],[10,\"src\",\"images/logo-dark.png\"],[10,\"width\",\"30\"],[10,\"height\",\"30\"],[10,\"class\",\"d-inline-block align-top\"],[10,\"alt\",\"\"],[10,\"loading\",\"lazy\"],[8],[9],[0,\"\\n    Книжный клуб\\n  \"],[9],[0,\"\\n  \"],[6,\"button\"],[10,\"class\",\"navbar-toggler\"],[10,\"data-toggle\",\"collapse\"],[10,\"data-target\",\"#navbarContent\"],[10,\"aria-controls\",\"navbarSupportedContent\"],[10,\"aria-expanded\",\"false\"],[10,\"aria-label\",\"Открыть меню\"],[10,\"type\",\"button\"],[8],[0,\"\\n    \"],[6,\"span\"],[10,\"class\",\"navbar-toggler-icon\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"collapse navbar-collapse\"],[10,\"id\",\"navbarContent\"],[8],[0,\"\\n    \"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav navigation-main\"],[8],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item active\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"../index.html\"],[8],[0,\"Рабочий стол \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"(текущий)\"],[9],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"#\"],[8],[0,\"Встречи клуба\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"books.html\"],[8],[0,\"Книги\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"speakers.html\"],[8],[0,\"Спикеры\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"nav-link text-success\"],[10,\"href\",\"#\"],[8],[0,\"Оставить заявку\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"nav-link text-primary\"],[10,\"href\",\"#\"],[8],[0,\"Запланировать встречи\"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav\"],[8],[0,\"\\n      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"#\"],[8],[0,\"Войти\"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[8],[0,\"\\n\"],[1,[20,\"outlet\"],false],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"footer\"],[10,\"class\",\"footer\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n    \"],[6,\"span\"],[8],[0,\"© Skyori, 2020\"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/application.hbs" } });
});
define('ember-app/templates/bootstrap/js/bootstrap.bundle', ['module', 'exports', 'jquery'], function (module, exports) {
  'use strict';

  /*!
    * Bootstrap v4.5.3 (https://getbootstrap.com/)
    * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.bootstrap = {}, global.jQuery));
  })(undefined, function (exports, $) {
    'use strict';

    function _interopDefaultLegacy(e) {
      return e && typeof e === 'object' && 'default' in e ? e : { 'default': e };
    }

    var $__default = /*#__PURE__*/_interopDefaultLegacy($);

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.5.3): util.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */

    var TRANSITION_END = 'transitionend';
    var MAX_UID = 1000000;
    var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

    function toType(obj) {
      if (obj === null || typeof obj === 'undefined') {
        return "" + obj;
      }

      return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
    }

    function getSpecialTransitionEndEvent() {
      return {
        bindType: TRANSITION_END,
        delegateType: TRANSITION_END,
        handle: function handle(event) {
          if ($__default['default'](event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
          }

          return undefined;
        }
      };
    }

    function transitionEndEmulator(duration) {
      var _this = this;

      var called = false;
      $__default['default'](this).one(Util.TRANSITION_END, function () {
        called = true;
      });
      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(_this);
        }
      }, duration);
      return this;
    }

    function setTransitionEndSupport() {
      $__default['default'].fn.emulateTransitionEnd = transitionEndEmulator;
      $__default['default'].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */

    var Util = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function getUID(prefix) {
        do {
          prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
        } while (document.getElementById(prefix));

        return prefix;
      },
      getSelectorFromElement: function getSelectorFromElement(element) {
        var selector = element.getAttribute('data-target');

        if (!selector || selector === '#') {
          var hrefAttr = element.getAttribute('href');
          selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
        }

        try {
          return document.querySelector(selector) ? selector : null;
        } catch (_) {
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
        if (!element) {
          return 0;
        } // Get transition-duration of the element


        var transitionDuration = $__default['default'](element).css('transition-duration');
        var transitionDelay = $__default['default'](element).css('transition-delay');
        var floatTransitionDuration = parseFloat(transitionDuration);
        var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

        if (!floatTransitionDuration && !floatTransitionDelay) {
          return 0;
        } // If multiple durations are defined, take the first


        transitionDuration = transitionDuration.split(',')[0];
        transitionDelay = transitionDelay.split(',')[0];
        return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
      },
      reflow: function reflow(element) {
        return element.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $__default['default'](element).trigger(TRANSITION_END);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(TRANSITION_END);
      },
      isElement: function isElement(obj) {
        return (obj[0] || obj).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
        for (var property in configTypes) {
          if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
            var expectedTypes = configTypes[property];
            var value = config[property];
            var valueType = value && Util.isElement(value) ? 'element' : toType(value);

            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
            }
          }
        }
      },
      findShadowRoot: function findShadowRoot(element) {
        if (!document.documentElement.attachShadow) {
          return null;
        } // Can find the shadow root otherwise it'll return the document


        if (typeof element.getRootNode === 'function') {
          var root = element.getRootNode();
          return root instanceof ShadowRoot ? root : null;
        }

        if (element instanceof ShadowRoot) {
          return element;
        } // when we don't find a shadow root


        if (!element.parentNode) {
          return null;
        }

        return Util.findShadowRoot(element.parentNode);
      },
      jQueryDetection: function jQueryDetection() {
        if (typeof $__default['default'] === 'undefined') {
          throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
        }

        var version = $__default['default'].fn.jquery.split(' ')[0].split('.');
        var minMajor = 1;
        var ltMajor = 2;
        var minMinor = 9;
        var minPatch = 1;
        var maxMajor = 4;

        if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
          throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
        }
      }
    };
    Util.jQueryDetection();
    setTransitionEndSupport();

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'alert';
    var VERSION = '4.5.3';
    var DATA_KEY = 'bs.alert';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
    var SELECTOR_DISMISS = '[data-dismiss="alert"]';
    var EVENT_CLOSE = "close" + EVENT_KEY;
    var EVENT_CLOSED = "closed" + EVENT_KEY;
    var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
    var CLASS_NAME_ALERT = 'alert';
    var CLASS_NAME_FADE = 'fade';
    var CLASS_NAME_SHOW = 'show';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Alert = /*#__PURE__*/function () {
      function Alert(element) {
        this._element = element;
      } // Getters


      var _proto = Alert.prototype;

      // Public
      _proto.close = function close(element) {
        var rootElement = this._element;

        if (element) {
          rootElement = this._getRootElement(element);
        }

        var customEvent = this._triggerCloseEvent(rootElement);

        if (customEvent.isDefaultPrevented()) {
          return;
        }

        this._removeElement(rootElement);
      };

      _proto.dispose = function dispose() {
        $__default['default'].removeData(this._element, DATA_KEY);
        this._element = null;
      } // Private
      ;

      _proto._getRootElement = function _getRootElement(element) {
        var selector = Util.getSelectorFromElement(element);
        var parent = false;

        if (selector) {
          parent = document.querySelector(selector);
        }

        if (!parent) {
          parent = $__default['default'](element).closest("." + CLASS_NAME_ALERT)[0];
        }

        return parent;
      };

      _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
        var closeEvent = $__default['default'].Event(EVENT_CLOSE);
        $__default['default'](element).trigger(closeEvent);
        return closeEvent;
      };

      _proto._removeElement = function _removeElement(element) {
        var _this = this;

        $__default['default'](element).removeClass(CLASS_NAME_SHOW);

        if (!$__default['default'](element).hasClass(CLASS_NAME_FADE)) {
          this._destroyElement(element);

          return;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(element);
        $__default['default'](element).one(Util.TRANSITION_END, function (event) {
          return _this._destroyElement(element, event);
        }).emulateTransitionEnd(transitionDuration);
      };

      _proto._destroyElement = function _destroyElement(element) {
        $__default['default'](element).detach().trigger(EVENT_CLOSED).remove();
      } // Static
      ;

      Alert._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $element = $__default['default'](this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Alert(this);
            $element.data(DATA_KEY, data);
          }

          if (config === 'close') {
            data[config](this);
          }
        });
      };

      Alert._handleDismiss = function _handleDismiss(alertInstance) {
        return function (event) {
          if (event) {
            event.preventDefault();
          }

          alertInstance.close(this);
        };
      };

      _createClass(Alert, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Alert;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME] = Alert._jQueryInterface;
    $__default['default'].fn[NAME].Constructor = Alert;

    $__default['default'].fn[NAME].noConflict = function () {
      $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
      return Alert._jQueryInterface;
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$1 = 'button';
    var VERSION$1 = '4.5.3';
    var DATA_KEY$1 = 'bs.button';
    var EVENT_KEY$1 = "." + DATA_KEY$1;
    var DATA_API_KEY$1 = '.data-api';
    var JQUERY_NO_CONFLICT$1 = $__default['default'].fn[NAME$1];
    var CLASS_NAME_ACTIVE = 'active';
    var CLASS_NAME_BUTTON = 'btn';
    var CLASS_NAME_FOCUS = 'focus';
    var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
    var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
    var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
    var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
    var SELECTOR_INPUT = 'input:not([type="hidden"])';
    var SELECTOR_ACTIVE = '.active';
    var SELECTOR_BUTTON = '.btn';
    var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
    var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
    var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Button = /*#__PURE__*/function () {
      function Button(element) {
        this._element = element;
        this.shouldAvoidTriggerChange = false;
      } // Getters


      var _proto = Button.prototype;

      // Public
      _proto.toggle = function toggle() {
        var triggerChangeEvent = true;
        var addAriaPressed = true;
        var rootElement = $__default['default'](this._element).closest(SELECTOR_DATA_TOGGLES)[0];

        if (rootElement) {
          var input = this._element.querySelector(SELECTOR_INPUT);

          if (input) {
            if (input.type === 'radio') {
              if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
                triggerChangeEvent = false;
              } else {
                var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

                if (activeElement) {
                  $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE);
                }
              }
            }

            if (triggerChangeEvent) {
              // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
              if (input.type === 'checkbox' || input.type === 'radio') {
                input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
              }

              if (!this.shouldAvoidTriggerChange) {
                $__default['default'](input).trigger('change');
              }
            }

            input.focus();
            addAriaPressed = false;
          }
        }

        if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
          if (addAriaPressed) {
            this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
          }

          if (triggerChangeEvent) {
            $__default['default'](this._element).toggleClass(CLASS_NAME_ACTIVE);
          }
        }
      };

      _proto.dispose = function dispose() {
        $__default['default'].removeData(this._element, DATA_KEY$1);
        this._element = null;
      } // Static
      ;

      Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
        return this.each(function () {
          var $element = $__default['default'](this);
          var data = $element.data(DATA_KEY$1);

          if (!data) {
            data = new Button(this);
            $element.data(DATA_KEY$1, data);
          }

          data.shouldAvoidTriggerChange = avoidTriggerChange;

          if (config === 'toggle') {
            data[config]();
          }
        });
      };

      _createClass(Button, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$1;
        }
      }]);

      return Button;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $__default['default'](document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
      var button = event.target;
      var initialButton = button;

      if (!$__default['default'](button).hasClass(CLASS_NAME_BUTTON)) {
        button = $__default['default'](button).closest(SELECTOR_BUTTON)[0];
      }

      if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
        event.preventDefault(); // work around Firefox bug #1540995
      } else {
        var inputBtn = button.querySelector(SELECTOR_INPUT);

        if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
          event.preventDefault(); // work around Firefox bug #1540995

          return;
        }

        if (initialButton.tagName === 'INPUT' || button.tagName !== 'LABEL') {
          Button._jQueryInterface.call($__default['default'](button), 'toggle', initialButton.tagName === 'INPUT');
        }
      }
    }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
      var button = $__default['default'](event.target).closest(SELECTOR_BUTTON)[0];
      $__default['default'](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
    });
    $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
      // ensure correct active class is set to match the controls' actual values/states
      // find all checkboxes/readio buttons inside data-toggle groups
      var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

      for (var i = 0, len = buttons.length; i < len; i++) {
        var button = buttons[i];
        var input = button.querySelector(SELECTOR_INPUT);

        if (input.checked || input.hasAttribute('checked')) {
          button.classList.add(CLASS_NAME_ACTIVE);
        } else {
          button.classList.remove(CLASS_NAME_ACTIVE);
        }
      } // find all button toggles


      buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

      for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
        var _button = buttons[_i];

        if (_button.getAttribute('aria-pressed') === 'true') {
          _button.classList.add(CLASS_NAME_ACTIVE);
        } else {
          _button.classList.remove(CLASS_NAME_ACTIVE);
        }
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$1] = Button._jQueryInterface;
    $__default['default'].fn[NAME$1].Constructor = Button;

    $__default['default'].fn[NAME$1].noConflict = function () {
      $__default['default'].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
      return Button._jQueryInterface;
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$2 = 'carousel';
    var VERSION$2 = '4.5.3';
    var DATA_KEY$2 = 'bs.carousel';
    var EVENT_KEY$2 = "." + DATA_KEY$2;
    var DATA_API_KEY$2 = '.data-api';
    var JQUERY_NO_CONFLICT$2 = $__default['default'].fn[NAME$2];
    var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

    var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

    var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

    var SWIPE_THRESHOLD = 40;
    var Default = {
      interval: 5000,
      keyboard: true,
      slide: false,
      pause: 'hover',
      wrap: true,
      touch: true
    };
    var DefaultType = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean'
    };
    var DIRECTION_NEXT = 'next';
    var DIRECTION_PREV = 'prev';
    var DIRECTION_LEFT = 'left';
    var DIRECTION_RIGHT = 'right';
    var EVENT_SLIDE = "slide" + EVENT_KEY$2;
    var EVENT_SLID = "slid" + EVENT_KEY$2;
    var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
    var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
    var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
    var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
    var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
    var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
    var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
    var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
    var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
    var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
    var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
    var CLASS_NAME_CAROUSEL = 'carousel';
    var CLASS_NAME_ACTIVE$1 = 'active';
    var CLASS_NAME_SLIDE = 'slide';
    var CLASS_NAME_RIGHT = 'carousel-item-right';
    var CLASS_NAME_LEFT = 'carousel-item-left';
    var CLASS_NAME_NEXT = 'carousel-item-next';
    var CLASS_NAME_PREV = 'carousel-item-prev';
    var CLASS_NAME_POINTER_EVENT = 'pointer-event';
    var SELECTOR_ACTIVE$1 = '.active';
    var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
    var SELECTOR_ITEM = '.carousel-item';
    var SELECTOR_ITEM_IMG = '.carousel-item img';
    var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
    var SELECTOR_INDICATORS = '.carousel-indicators';
    var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
    var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
    var PointerType = {
      TOUCH: 'touch',
      PEN: 'pen'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Carousel = /*#__PURE__*/function () {
      function Carousel(element, config) {
        this._items = null;
        this._interval = null;
        this._activeElement = null;
        this._isPaused = false;
        this._isSliding = false;
        this.touchTimeout = null;
        this.touchStartX = 0;
        this.touchDeltaX = 0;
        this._config = this._getConfig(config);
        this._element = element;
        this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
        this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
        this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

        this._addEventListeners();
      } // Getters


      var _proto = Carousel.prototype;

      // Public
      _proto.next = function next() {
        if (!this._isSliding) {
          this._slide(DIRECTION_NEXT);
        }
      };

      _proto.nextWhenVisible = function nextWhenVisible() {
        var $element = $__default['default'](this._element); // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible

        if (!document.hidden && $element.is(':visible') && $element.css('visibility') !== 'hidden') {
          this.next();
        }
      };

      _proto.prev = function prev() {
        if (!this._isSliding) {
          this._slide(DIRECTION_PREV);
        }
      };

      _proto.pause = function pause(event) {
        if (!event) {
          this._isPaused = true;
        }

        if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
          Util.triggerTransitionEnd(this._element);
          this.cycle(true);
        }

        clearInterval(this._interval);
        this._interval = null;
      };

      _proto.cycle = function cycle(event) {
        if (!event) {
          this._isPaused = false;
        }

        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }

        if (this._config.interval && !this._isPaused) {
          this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
      };

      _proto.to = function to(index) {
        var _this = this;

        this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

        var activeIndex = this._getItemIndex(this._activeElement);

        if (index > this._items.length - 1 || index < 0) {
          return;
        }

        if (this._isSliding) {
          $__default['default'](this._element).one(EVENT_SLID, function () {
            return _this.to(index);
          });
          return;
        }

        if (activeIndex === index) {
          this.pause();
          this.cycle();
          return;
        }

        var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

        this._slide(direction, this._items[index]);
      };

      _proto.dispose = function dispose() {
        $__default['default'](this._element).off(EVENT_KEY$2);
        $__default['default'].removeData(this._element, DATA_KEY$2);
        this._items = null;
        this._config = null;
        this._element = null;
        this._interval = null;
        this._isPaused = null;
        this._isSliding = null;
        this._activeElement = null;
        this._indicatorsElement = null;
      } // Private
      ;

      _proto._getConfig = function _getConfig(config) {
        config = _extends({}, Default, config);
        Util.typeCheckConfig(NAME$2, config, DefaultType);
        return config;
      };

      _proto._handleSwipe = function _handleSwipe() {
        var absDeltax = Math.abs(this.touchDeltaX);

        if (absDeltax <= SWIPE_THRESHOLD) {
          return;
        }

        var direction = absDeltax / this.touchDeltaX;
        this.touchDeltaX = 0; // swipe left

        if (direction > 0) {
          this.prev();
        } // swipe right


        if (direction < 0) {
          this.next();
        }
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this2 = this;

        if (this._config.keyboard) {
          $__default['default'](this._element).on(EVENT_KEYDOWN, function (event) {
            return _this2._keydown(event);
          });
        }

        if (this._config.pause === 'hover') {
          $__default['default'](this._element).on(EVENT_MOUSEENTER, function (event) {
            return _this2.pause(event);
          }).on(EVENT_MOUSELEAVE, function (event) {
            return _this2.cycle(event);
          });
        }

        if (this._config.touch) {
          this._addTouchEventListeners();
        }
      };

      _proto._addTouchEventListeners = function _addTouchEventListeners() {
        var _this3 = this;

        if (!this._touchSupported) {
          return;
        }

        var start = function start(event) {
          if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
            _this3.touchStartX = event.originalEvent.clientX;
          } else if (!_this3._pointerEvent) {
            _this3.touchStartX = event.originalEvent.touches[0].clientX;
          }
        };

        var move = function move(event) {
          // ensure swiping with one touch and not pinching
          if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
            _this3.touchDeltaX = 0;
          } else {
            _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
          }
        };

        var end = function end(event) {
          if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
            _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
          }

          _this3._handleSwipe();

          if (_this3._config.pause === 'hover') {
            // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            _this3.pause();

            if (_this3.touchTimeout) {
              clearTimeout(_this3.touchTimeout);
            }

            _this3.touchTimeout = setTimeout(function (event) {
              return _this3.cycle(event);
            }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
          }
        };

        $__default['default'](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
          return e.preventDefault();
        });

        if (this._pointerEvent) {
          $__default['default'](this._element).on(EVENT_POINTERDOWN, function (event) {
            return start(event);
          });
          $__default['default'](this._element).on(EVENT_POINTERUP, function (event) {
            return end(event);
          });

          this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
          $__default['default'](this._element).on(EVENT_TOUCHSTART, function (event) {
            return start(event);
          });
          $__default['default'](this._element).on(EVENT_TOUCHMOVE, function (event) {
            return move(event);
          });
          $__default['default'](this._element).on(EVENT_TOUCHEND, function (event) {
            return end(event);
          });
        }
      };

      _proto._keydown = function _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }

        switch (event.which) {
          case ARROW_LEFT_KEYCODE:
            event.preventDefault();
            this.prev();
            break;

          case ARROW_RIGHT_KEYCODE:
            event.preventDefault();
            this.next();
            break;
        }
      };

      _proto._getItemIndex = function _getItemIndex(element) {
        this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
        return this._items.indexOf(element);
      };

      _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
        var isNextDirection = direction === DIRECTION_NEXT;
        var isPrevDirection = direction === DIRECTION_PREV;

        var activeIndex = this._getItemIndex(activeElement);

        var lastItemIndex = this._items.length - 1;
        var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

        if (isGoingToWrap && !this._config.wrap) {
          return activeElement;
        }

        var delta = direction === DIRECTION_PREV ? -1 : 1;
        var itemIndex = (activeIndex + delta) % this._items.length;
        return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
      };

      _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
        var targetIndex = this._getItemIndex(relatedTarget);

        var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

        var slideEvent = $__default['default'].Event(EVENT_SLIDE, {
          relatedTarget: relatedTarget,
          direction: eventDirectionName,
          from: fromIndex,
          to: targetIndex
        });
        $__default['default'](this._element).trigger(slideEvent);
        return slideEvent;
      };

      _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
          var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
          $__default['default'](indicators).removeClass(CLASS_NAME_ACTIVE$1);

          var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

          if (nextIndicator) {
            $__default['default'](nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
          }
        }
      };

      _proto._slide = function _slide(direction, element) {
        var _this4 = this;

        var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

        var activeElementIndex = this._getItemIndex(activeElement);

        var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

        var nextElementIndex = this._getItemIndex(nextElement);

        var isCycling = Boolean(this._interval);
        var directionalClassName;
        var orderClassName;
        var eventDirectionName;

        if (direction === DIRECTION_NEXT) {
          directionalClassName = CLASS_NAME_LEFT;
          orderClassName = CLASS_NAME_NEXT;
          eventDirectionName = DIRECTION_LEFT;
        } else {
          directionalClassName = CLASS_NAME_RIGHT;
          orderClassName = CLASS_NAME_PREV;
          eventDirectionName = DIRECTION_RIGHT;
        }

        if (nextElement && $__default['default'](nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
          this._isSliding = false;
          return;
        }

        var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

        if (slideEvent.isDefaultPrevented()) {
          return;
        }

        if (!activeElement || !nextElement) {
          // Some weirdness is happening, so we bail
          return;
        }

        this._isSliding = true;

        if (isCycling) {
          this.pause();
        }

        this._setActiveIndicatorElement(nextElement);

        var slidEvent = $__default['default'].Event(EVENT_SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });

        if ($__default['default'](this._element).hasClass(CLASS_NAME_SLIDE)) {
          $__default['default'](nextElement).addClass(orderClassName);
          Util.reflow(nextElement);
          $__default['default'](activeElement).addClass(directionalClassName);
          $__default['default'](nextElement).addClass(directionalClassName);
          var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

          if (nextElementInterval) {
            this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
            this._config.interval = nextElementInterval;
          } else {
            this._config.interval = this._config.defaultInterval || this._config.interval;
          }

          var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
          $__default['default'](activeElement).one(Util.TRANSITION_END, function () {
            $__default['default'](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
            $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
            _this4._isSliding = false;
            setTimeout(function () {
              return $__default['default'](_this4._element).trigger(slidEvent);
            }, 0);
          }).emulateTransitionEnd(transitionDuration);
        } else {
          $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1);
          $__default['default'](nextElement).addClass(CLASS_NAME_ACTIVE$1);
          this._isSliding = false;
          $__default['default'](this._element).trigger(slidEvent);
        }

        if (isCycling) {
          this.cycle();
        }
      } // Static
      ;

      Carousel._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $__default['default'](this).data(DATA_KEY$2);

          var _config = _extends({}, Default, $__default['default'](this).data());

          if (typeof config === 'object') {
            _config = _extends({}, _config, config);
          }

          var action = typeof config === 'string' ? config : _config.slide;

          if (!data) {
            data = new Carousel(this, _config);
            $__default['default'](this).data(DATA_KEY$2, data);
          }

          if (typeof config === 'number') {
            data.to(config);
          } else if (typeof action === 'string') {
            if (typeof data[action] === 'undefined') {
              throw new TypeError("No method named \"" + action + "\"");
            }

            data[action]();
          } else if (_config.interval && _config.ride) {
            data.pause();
            data.cycle();
          }
        });
      };

      Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
        var selector = Util.getSelectorFromElement(this);

        if (!selector) {
          return;
        }

        var target = $__default['default'](selector)[0];

        if (!target || !$__default['default'](target).hasClass(CLASS_NAME_CAROUSEL)) {
          return;
        }

        var config = _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

        var slideIndex = this.getAttribute('data-slide-to');

        if (slideIndex) {
          config.interval = false;
        }

        Carousel._jQueryInterface.call($__default['default'](target), config);

        if (slideIndex) {
          $__default['default'](target).data(DATA_KEY$2).to(slideIndex);
        }

        event.preventDefault();
      };

      _createClass(Carousel, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$2;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return Carousel;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $__default['default'](document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
    $__default['default'](window).on(EVENT_LOAD_DATA_API$1, function () {
      var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

      for (var i = 0, len = carousels.length; i < len; i++) {
        var $carousel = $__default['default'](carousels[i]);

        Carousel._jQueryInterface.call($carousel, $carousel.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$2] = Carousel._jQueryInterface;
    $__default['default'].fn[NAME$2].Constructor = Carousel;

    $__default['default'].fn[NAME$2].noConflict = function () {
      $__default['default'].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
      return Carousel._jQueryInterface;
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$3 = 'collapse';
    var VERSION$3 = '4.5.3';
    var DATA_KEY$3 = 'bs.collapse';
    var EVENT_KEY$3 = "." + DATA_KEY$3;
    var DATA_API_KEY$3 = '.data-api';
    var JQUERY_NO_CONFLICT$3 = $__default['default'].fn[NAME$3];
    var Default$1 = {
      toggle: true,
      parent: ''
    };
    var DefaultType$1 = {
      toggle: 'boolean',
      parent: '(string|element)'
    };
    var EVENT_SHOW = "show" + EVENT_KEY$3;
    var EVENT_SHOWN = "shown" + EVENT_KEY$3;
    var EVENT_HIDE = "hide" + EVENT_KEY$3;
    var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
    var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
    var CLASS_NAME_SHOW$1 = 'show';
    var CLASS_NAME_COLLAPSE = 'collapse';
    var CLASS_NAME_COLLAPSING = 'collapsing';
    var CLASS_NAME_COLLAPSED = 'collapsed';
    var DIMENSION_WIDTH = 'width';
    var DIMENSION_HEIGHT = 'height';
    var SELECTOR_ACTIVES = '.show, .collapsing';
    var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Collapse = /*#__PURE__*/function () {
      function Collapse(element, config) {
        this._isTransitioning = false;
        this._element = element;
        this._config = this._getConfig(config);
        this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
        var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

        for (var i = 0, len = toggleList.length; i < len; i++) {
          var elem = toggleList[i];
          var selector = Util.getSelectorFromElement(elem);
          var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
            return foundElem === element;
          });

          if (selector !== null && filterElement.length > 0) {
            this._selector = selector;

            this._triggerArray.push(elem);
          }
        }

        this._parent = this._config.parent ? this._getParent() : null;

        if (!this._config.parent) {
          this._addAriaAndCollapsedClass(this._element, this._triggerArray);
        }

        if (this._config.toggle) {
          this.toggle();
        }
      } // Getters


      var _proto = Collapse.prototype;

      // Public
      _proto.toggle = function toggle() {
        if ($__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
          this.hide();
        } else {
          this.show();
        }
      };

      _proto.show = function show() {
        var _this = this;

        if (this._isTransitioning || $__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
          return;
        }

        var actives;
        var activesData;

        if (this._parent) {
          actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
            if (typeof _this._config.parent === 'string') {
              return elem.getAttribute('data-parent') === _this._config.parent;
            }

            return elem.classList.contains(CLASS_NAME_COLLAPSE);
          });

          if (actives.length === 0) {
            actives = null;
          }
        }

        if (actives) {
          activesData = $__default['default'](actives).not(this._selector).data(DATA_KEY$3);

          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        var startEvent = $__default['default'].Event(EVENT_SHOW);
        $__default['default'](this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        if (actives) {
          Collapse._jQueryInterface.call($__default['default'](actives).not(this._selector), 'hide');

          if (!activesData) {
            $__default['default'](actives).data(DATA_KEY$3, null);
          }
        }

        var dimension = this._getDimension();

        $__default['default'](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
        this._element.style[dimension] = 0;

        if (this._triggerArray.length) {
          $__default['default'](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
        }

        this.setTransitioning(true);

        var complete = function complete() {
          $__default['default'](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
          _this._element.style[dimension] = '';

          _this.setTransitioning(false);

          $__default['default'](_this._element).trigger(EVENT_SHOWN);
        };

        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = "scroll" + capitalizedDimension;
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        this._element.style[dimension] = this._element[scrollSize] + "px";
      };

      _proto.hide = function hide() {
        var _this2 = this;

        if (this._isTransitioning || !$__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
          return;
        }

        var startEvent = $__default['default'].Event(EVENT_HIDE);
        $__default['default'](this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        var dimension = this._getDimension();

        this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
        Util.reflow(this._element);
        $__default['default'](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
        var triggerArrayLength = this._triggerArray.length;

        if (triggerArrayLength > 0) {
          for (var i = 0; i < triggerArrayLength; i++) {
            var trigger = this._triggerArray[i];
            var selector = Util.getSelectorFromElement(trigger);

            if (selector !== null) {
              var $elem = $__default['default']([].slice.call(document.querySelectorAll(selector)));

              if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
                $__default['default'](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
              }
            }
          }
        }

        this.setTransitioning(true);

        var complete = function complete() {
          _this2.setTransitioning(false);

          $__default['default'](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
        };

        this._element.style[dimension] = '';
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      };

      _proto.setTransitioning = function setTransitioning(isTransitioning) {
        this._isTransitioning = isTransitioning;
      };

      _proto.dispose = function dispose() {
        $__default['default'].removeData(this._element, DATA_KEY$3);
        this._config = null;
        this._parent = null;
        this._element = null;
        this._triggerArray = null;
        this._isTransitioning = null;
      } // Private
      ;

      _proto._getConfig = function _getConfig(config) {
        config = _extends({}, Default$1, config);
        config.toggle = Boolean(config.toggle); // Coerce string values

        Util.typeCheckConfig(NAME$3, config, DefaultType$1);
        return config;
      };

      _proto._getDimension = function _getDimension() {
        var hasWidth = $__default['default'](this._element).hasClass(DIMENSION_WIDTH);
        return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
      };

      _proto._getParent = function _getParent() {
        var _this3 = this;

        var parent;

        if (Util.isElement(this._config.parent)) {
          parent = this._config.parent; // It's a jQuery object

          if (typeof this._config.parent.jquery !== 'undefined') {
            parent = this._config.parent[0];
          }
        } else {
          parent = document.querySelector(this._config.parent);
        }

        var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
        var children = [].slice.call(parent.querySelectorAll(selector));
        $__default['default'](children).each(function (i, element) {
          _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
        });
        return parent;
      };

      _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
        var isOpen = $__default['default'](element).hasClass(CLASS_NAME_SHOW$1);

        if (triggerArray.length) {
          $__default['default'](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
        }
      } // Static
      ;

      Collapse._getTargetFromElement = function _getTargetFromElement(element) {
        var selector = Util.getSelectorFromElement(element);
        return selector ? document.querySelector(selector) : null;
      };

      Collapse._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $element = $__default['default'](this);
          var data = $element.data(DATA_KEY$3);

          var _config = _extends({}, Default$1, $element.data(), typeof config === 'object' && config ? config : {});

          if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
            _config.toggle = false;
          }

          if (!data) {
            data = new Collapse(this, _config);
            $element.data(DATA_KEY$3, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Collapse, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$3;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default$1;
        }
      }]);

      return Collapse;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $__default['default'](document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
      // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
      if (event.currentTarget.tagName === 'A') {
        event.preventDefault();
      }

      var $trigger = $__default['default'](this);
      var selector = Util.getSelectorFromElement(this);
      var selectors = [].slice.call(document.querySelectorAll(selector));
      $__default['default'](selectors).each(function () {
        var $target = $__default['default'](this);
        var data = $target.data(DATA_KEY$3);
        var config = data ? 'toggle' : $trigger.data();

        Collapse._jQueryInterface.call($target, config);
      });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$3] = Collapse._jQueryInterface;
    $__default['default'].fn[NAME$3].Constructor = Collapse;

    $__default['default'].fn[NAME$3].noConflict = function () {
      $__default['default'].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
      return Collapse._jQueryInterface;
    };

    /**!
     * @fileOverview Kickass library to create and place poppers near their reference elements.
     * @version 1.16.1
     * @license
     * Copyright (c) 2016 Federico Zivolo and contributors
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     */
    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

    var timeoutDuration = function () {
      var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
      for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
        if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
          return 1;
        }
      }
      return 0;
    }();

    function microtaskDebounce(fn) {
      var called = false;
      return function () {
        if (called) {
          return;
        }
        called = true;
        window.Promise.resolve().then(function () {
          called = false;
          fn();
        });
      };
    }

    function taskDebounce(fn) {
      var scheduled = false;
      return function () {
        if (!scheduled) {
          scheduled = true;
          setTimeout(function () {
            scheduled = false;
            fn();
          }, timeoutDuration);
        }
      };
    }

    var supportsMicroTasks = isBrowser && window.Promise;

    /**
    * Create a debounced version of a method, that's asynchronously deferred
    * but called in the minimum time possible.
    *
    * @method
    * @memberof Popper.Utils
    * @argument {Function} fn
    * @returns {Function}
    */
    var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

    /**
     * Check if the given variable is a function
     * @method
     * @memberof Popper.Utils
     * @argument {Any} functionToCheck - variable to check
     * @returns {Boolean} answer to: is a function?
     */
    function isFunction(functionToCheck) {
      var getType = {};
      return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }

    /**
     * Get CSS computed property of the given element
     * @method
     * @memberof Popper.Utils
     * @argument {Eement} element
     * @argument {String} property
     */
    function getStyleComputedProperty(element, property) {
      if (element.nodeType !== 1) {
        return [];
      }
      // NOTE: 1 DOM access here
      var window = element.ownerDocument.defaultView;
      var css = window.getComputedStyle(element, null);
      return property ? css[property] : css;
    }

    /**
     * Returns the parentNode or the host of the element
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @returns {Element} parent
     */
    function getParentNode(element) {
      if (element.nodeName === 'HTML') {
        return element;
      }
      return element.parentNode || element.host;
    }

    /**
     * Returns the scrolling parent of the given element
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @returns {Element} scroll parent
     */
    function getScrollParent(element) {
      // Return body, `getScroll` will take care to get the correct `scrollTop` from it
      if (!element) {
        return document.body;
      }

      switch (element.nodeName) {
        case 'HTML':
        case 'BODY':
          return element.ownerDocument.body;
        case '#document':
          return element.body;
      }

      // Firefox want us to check `-x` and `-y` variations as well

      var _getStyleComputedProp = getStyleComputedProperty(element),
          overflow = _getStyleComputedProp.overflow,
          overflowX = _getStyleComputedProp.overflowX,
          overflowY = _getStyleComputedProp.overflowY;

      if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
        return element;
      }

      return getScrollParent(getParentNode(element));
    }

    /**
     * Returns the reference node of the reference object, or the reference object itself.
     * @method
     * @memberof Popper.Utils
     * @param {Element|Object} reference - the reference element (the popper will be relative to this)
     * @returns {Element} parent
     */
    function getReferenceNode(reference) {
      return reference && reference.referenceNode ? reference.referenceNode : reference;
    }

    var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
    var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

    /**
     * Determines if the browser is Internet Explorer
     * @method
     * @memberof Popper.Utils
     * @param {Number} version to check
     * @returns {Boolean} isIE
     */
    function isIE(version) {
      if (version === 11) {
        return isIE11;
      }
      if (version === 10) {
        return isIE10;
      }
      return isIE11 || isIE10;
    }

    /**
     * Returns the offset parent of the given element
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @returns {Element} offset parent
     */
    function getOffsetParent(element) {
      if (!element) {
        return document.documentElement;
      }

      var noOffsetParent = isIE(10) ? document.body : null;

      // NOTE: 1 DOM access here
      var offsetParent = element.offsetParent || null;
      // Skip hidden elements which don't have an offsetParent
      while (offsetParent === noOffsetParent && element.nextElementSibling) {
        offsetParent = (element = element.nextElementSibling).offsetParent;
      }

      var nodeName = offsetParent && offsetParent.nodeName;

      if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return element ? element.ownerDocument.documentElement : document.documentElement;
      }

      // .offsetParent will return the closest TH, TD or TABLE in case
      // no offsetParent is present, I hate this job...
      if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
      }

      return offsetParent;
    }

    function isOffsetContainer(element) {
      var nodeName = element.nodeName;

      if (nodeName === 'BODY') {
        return false;
      }
      return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
    }

    /**
     * Finds the root node (document, shadowDOM root) of the given element
     * @method
     * @memberof Popper.Utils
     * @argument {Element} node
     * @returns {Element} root node
     */
    function getRoot(node) {
      if (node.parentNode !== null) {
        return getRoot(node.parentNode);
      }

      return node;
    }

    /**
     * Finds the offset parent common to the two provided nodes
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element1
     * @argument {Element} element2
     * @returns {Element} common offset parent
     */
    function findCommonOffsetParent(element1, element2) {
      // This check is needed to avoid errors in case one of the elements isn't defined for any reason
      if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
        return document.documentElement;
      }

      // Here we make sure to give as "start" the element that comes first in the DOM
      var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
      var start = order ? element1 : element2;
      var end = order ? element2 : element1;

      // Get common ancestor container
      var range = document.createRange();
      range.setStart(start, 0);
      range.setEnd(end, 0);
      var commonAncestorContainer = range.commonAncestorContainer;

      // Both nodes are inside #document

      if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
          return commonAncestorContainer;
        }

        return getOffsetParent(commonAncestorContainer);
      }

      // one of the nodes is inside shadowDOM, find which one
      var element1root = getRoot(element1);
      if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
      } else {
        return findCommonOffsetParent(element1, getRoot(element2).host);
      }
    }

    /**
     * Gets the scroll value of the given element in the given side (top and left)
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @argument {String} side `top` or `left`
     * @returns {number} amount of scrolled pixels
     */
    function getScroll(element) {
      var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

      var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
      var nodeName = element.nodeName;

      if (nodeName === 'BODY' || nodeName === 'HTML') {
        var html = element.ownerDocument.documentElement;
        var scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
      }

      return element[upperSide];
    }

    /*
     * Sum or subtract the element scroll values (left and top) from a given rect object
     * @method
     * @memberof Popper.Utils
     * @param {Object} rect - Rect object you want to change
     * @param {HTMLElement} element - The element from the function reads the scroll values
     * @param {Boolean} subtract - set to true if you want to subtract the scroll values
     * @return {Object} rect - The modifier rect object
     */
    function includeScroll(rect, element) {
      var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      var modifier = subtract ? -1 : 1;
      rect.top += scrollTop * modifier;
      rect.bottom += scrollTop * modifier;
      rect.left += scrollLeft * modifier;
      rect.right += scrollLeft * modifier;
      return rect;
    }

    /*
     * Helper to detect borders of a given element
     * @method
     * @memberof Popper.Utils
     * @param {CSSStyleDeclaration} styles
     * Result of `getStyleComputedProperty` on the given element
     * @param {String} axis - `x` or `y`
     * @return {number} borders - The borders size of the given axis
     */

    function getBordersSize(styles, axis) {
      var sideA = axis === 'x' ? 'Left' : 'Top';
      var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

      return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
    }

    function getSize(axis, body, html, computedStyle) {
      return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
    }

    function getWindowSizes(document) {
      var body = document.body;
      var html = document.documentElement;
      var computedStyle = isIE(10) && getComputedStyle(html);

      return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
      };
    }

    var classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    var createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var defineProperty = function (obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    };

    var _extends$1 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    /**
     * Given element offsets, generate an output similar to getBoundingClientRect
     * @method
     * @memberof Popper.Utils
     * @argument {Object} offsets
     * @returns {Object} ClientRect like output
     */
    function getClientRect(offsets) {
      return _extends$1({}, offsets, {
        right: offsets.left + offsets.width,
        bottom: offsets.top + offsets.height
      });
    }

    /**
     * Get bounding client rect of given element
     * @method
     * @memberof Popper.Utils
     * @param {HTMLElement} element
     * @return {Object} client rect
     */
    function getBoundingClientRect(element) {
      var rect = {};

      // IE10 10 FIX: Please, don't ask, the element isn't
      // considered in DOM in some circumstances...
      // This isn't reproducible in IE10 compatibility mode of IE11
      try {
        if (isIE(10)) {
          rect = element.getBoundingClientRect();
          var scrollTop = getScroll(element, 'top');
          var scrollLeft = getScroll(element, 'left');
          rect.top += scrollTop;
          rect.left += scrollLeft;
          rect.bottom += scrollTop;
          rect.right += scrollLeft;
        } else {
          rect = element.getBoundingClientRect();
        }
      } catch (e) {}

      var result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };

      // subtract scrollbar size from sizes
      var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
      var width = sizes.width || element.clientWidth || result.width;
      var height = sizes.height || element.clientHeight || result.height;

      var horizScrollbar = element.offsetWidth - width;
      var vertScrollbar = element.offsetHeight - height;

      // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
      // we make this check conditional for performance reasons
      if (horizScrollbar || vertScrollbar) {
        var styles = getStyleComputedProperty(element);
        horizScrollbar -= getBordersSize(styles, 'x');
        vertScrollbar -= getBordersSize(styles, 'y');

        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
      }

      return getClientRect(result);
    }

    function getOffsetRectRelativeToArbitraryNode(children, parent) {
      var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var isIE10 = isIE(10);
      var isHTML = parent.nodeName === 'HTML';
      var childrenRect = getBoundingClientRect(children);
      var parentRect = getBoundingClientRect(parent);
      var scrollParent = getScrollParent(children);

      var styles = getStyleComputedProperty(parent);
      var borderTopWidth = parseFloat(styles.borderTopWidth);
      var borderLeftWidth = parseFloat(styles.borderLeftWidth);

      // In cases where the parent is fixed, we must ignore negative scroll in offset calc
      if (fixedPosition && isHTML) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
      }
      var offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
      });
      offsets.marginTop = 0;
      offsets.marginLeft = 0;

      // Subtract margins of documentElement in case it's being used as parent
      // we do this only on HTML because it's the only element that behaves
      // differently when margins are applied to it. The margins are included in
      // the box of the documentElement, in the other cases not.
      if (!isIE10 && isHTML) {
        var marginTop = parseFloat(styles.marginTop);
        var marginLeft = parseFloat(styles.marginLeft);

        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft;

        // Attach marginTop and marginLeft because in some circumstances we may need them
        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
      }

      if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
      }

      return offsets;
    }

    function getViewportOffsetRectRelativeToArtbitraryNode(element) {
      var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var html = element.ownerDocument.documentElement;
      var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
      var width = Math.max(html.clientWidth, window.innerWidth || 0);
      var height = Math.max(html.clientHeight, window.innerHeight || 0);

      var scrollTop = !excludeScroll ? getScroll(html) : 0;
      var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

      var offset = {
        top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
        left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
        width: width,
        height: height
      };

      return getClientRect(offset);
    }

    /**
     * Check if the given element is fixed or is inside a fixed parent
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @argument {Element} customContainer
     * @returns {Boolean} answer to "isFixed?"
     */
    function isFixed(element) {
      var nodeName = element.nodeName;
      if (nodeName === 'BODY' || nodeName === 'HTML') {
        return false;
      }
      if (getStyleComputedProperty(element, 'position') === 'fixed') {
        return true;
      }
      var parentNode = getParentNode(element);
      if (!parentNode) {
        return false;
      }
      return isFixed(parentNode);
    }

    /**
     * Finds the first parent of an element that has a transformed property defined
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @returns {Element} first transformed parent or documentElement
     */

    function getFixedPositionOffsetParent(element) {
      // This check is needed to avoid errors in case one of the elements isn't defined for any reason
      if (!element || !element.parentElement || isIE()) {
        return document.documentElement;
      }
      var el = element.parentElement;
      while (el && getStyleComputedProperty(el, 'transform') === 'none') {
        el = el.parentElement;
      }
      return el || document.documentElement;
    }

    /**
     * Computed the boundaries limits and return them
     * @method
     * @memberof Popper.Utils
     * @param {HTMLElement} popper
     * @param {HTMLElement} reference
     * @param {number} padding
     * @param {HTMLElement} boundariesElement - Element used to define the boundaries
     * @param {Boolean} fixedPosition - Is in fixed position mode
     * @returns {Object} Coordinates of the boundaries
     */
    function getBoundaries(popper, reference, padding, boundariesElement) {
      var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      // NOTE: 1 DOM access here

      var boundaries = { top: 0, left: 0 };
      var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

      // Handle viewport case
      if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
      } else {
        // Handle other cases based on DOM element used as boundaries
        var boundariesNode = void 0;
        if (boundariesElement === 'scrollParent') {
          boundariesNode = getScrollParent(getParentNode(reference));
          if (boundariesNode.nodeName === 'BODY') {
            boundariesNode = popper.ownerDocument.documentElement;
          }
        } else if (boundariesElement === 'window') {
          boundariesNode = popper.ownerDocument.documentElement;
        } else {
          boundariesNode = boundariesElement;
        }

        var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

        // In case of HTML, we need a different computation
        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
          var _getWindowSizes = getWindowSizes(popper.ownerDocument),
              height = _getWindowSizes.height,
              width = _getWindowSizes.width;

          boundaries.top += offsets.top - offsets.marginTop;
          boundaries.bottom = height + offsets.top;
          boundaries.left += offsets.left - offsets.marginLeft;
          boundaries.right = width + offsets.left;
        } else {
          // for all the other DOM elements, this one is good
          boundaries = offsets;
        }
      }

      // Add paddings
      padding = padding || 0;
      var isPaddingNumber = typeof padding === 'number';
      boundaries.left += isPaddingNumber ? padding : padding.left || 0;
      boundaries.top += isPaddingNumber ? padding : padding.top || 0;
      boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
      boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

      return boundaries;
    }

    function getArea(_ref) {
      var width = _ref.width,
          height = _ref.height;

      return width * height;
    }

    /**
     * Utility used to transform the `auto` placement to the placement with more
     * available space.
     * @method
     * @memberof Popper.Utils
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
      var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

      if (placement.indexOf('auto') === -1) {
        return placement;
      }

      var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

      var rects = {
        top: {
          width: boundaries.width,
          height: refRect.top - boundaries.top
        },
        right: {
          width: boundaries.right - refRect.right,
          height: boundaries.height
        },
        bottom: {
          width: boundaries.width,
          height: boundaries.bottom - refRect.bottom
        },
        left: {
          width: refRect.left - boundaries.left,
          height: boundaries.height
        }
      };

      var sortedAreas = Object.keys(rects).map(function (key) {
        return _extends$1({
          key: key
        }, rects[key], {
          area: getArea(rects[key])
        });
      }).sort(function (a, b) {
        return b.area - a.area;
      });

      var filteredAreas = sortedAreas.filter(function (_ref2) {
        var width = _ref2.width,
            height = _ref2.height;
        return width >= popper.clientWidth && height >= popper.clientHeight;
      });

      var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

      var variation = placement.split('-')[1];

      return computedPlacement + (variation ? '-' + variation : '');
    }

    /**
     * Get offsets to the reference element
     * @method
     * @memberof Popper.Utils
     * @param {Object} state
     * @param {Element} popper - the popper element
     * @param {Element} reference - the reference element (the popper will be relative to this)
     * @param {Element} fixedPosition - is in fixed position mode
     * @returns {Object} An object containing the offsets which will be applied to the popper
     */
    function getReferenceOffsets(state, popper, reference) {
      var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
      return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
    }

    /**
     * Get the outer sizes of the given element (offset size + margins)
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element
     * @returns {Object} object containing width and height properties
     */
    function getOuterSizes(element) {
      var window = element.ownerDocument.defaultView;
      var styles = window.getComputedStyle(element);
      var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
      var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
      var result = {
        width: element.offsetWidth + y,
        height: element.offsetHeight + x
      };
      return result;
    }

    /**
     * Get the opposite placement of the given one
     * @method
     * @memberof Popper.Utils
     * @argument {String} placement
     * @returns {String} flipped placement
     */
    function getOppositePlacement(placement) {
      var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      return placement.replace(/left|right|bottom|top/g, function (matched) {
        return hash[matched];
      });
    }

    /**
     * Get offsets to the popper
     * @method
     * @memberof Popper.Utils
     * @param {Object} position - CSS position the Popper will get applied
     * @param {HTMLElement} popper - the popper element
     * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
     * @param {String} placement - one of the valid placement options
     * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
     */
    function getPopperOffsets(popper, referenceOffsets, placement) {
      placement = placement.split('-')[0];

      // Get popper node sizes
      var popperRect = getOuterSizes(popper);

      // Add position, width and height to our offsets object
      var popperOffsets = {
        width: popperRect.width,
        height: popperRect.height
      };

      // depending by the popper placement we have to compute its offsets slightly differently
      var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
      var mainSide = isHoriz ? 'top' : 'left';
      var secondarySide = isHoriz ? 'left' : 'top';
      var measurement = isHoriz ? 'height' : 'width';
      var secondaryMeasurement = !isHoriz ? 'height' : 'width';

      popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
      if (placement === secondarySide) {
        popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
      } else {
        popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
      }

      return popperOffsets;
    }

    /**
     * Mimics the `find` method of Array
     * @method
     * @memberof Popper.Utils
     * @argument {Array} arr
     * @argument prop
     * @argument value
     * @returns index or -1
     */
    function find(arr, check) {
      // use native find if supported
      if (Array.prototype.find) {
        return arr.find(check);
      }

      // use `filter` to obtain the same behavior of `find`
      return arr.filter(check)[0];
    }

    /**
     * Return the index of the matching object
     * @method
     * @memberof Popper.Utils
     * @argument {Array} arr
     * @argument prop
     * @argument value
     * @returns index or -1
     */
    function findIndex(arr, prop, value) {
      // use native findIndex if supported
      if (Array.prototype.findIndex) {
        return arr.findIndex(function (cur) {
          return cur[prop] === value;
        });
      }

      // use `find` + `indexOf` if `findIndex` isn't supported
      var match = find(arr, function (obj) {
        return obj[prop] === value;
      });
      return arr.indexOf(match);
    }

    /**
     * Loop trough the list of modifiers and run them in order,
     * each of them will then edit the data object.
     * @method
     * @memberof Popper.Utils
     * @param {dataObject} data
     * @param {Array} modifiers
     * @param {String} ends - Optional modifier name used as stopper
     * @returns {dataObject}
     */
    function runModifiers(modifiers, data, ends) {
      var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

      modifiersToRun.forEach(function (modifier) {
        if (modifier['function']) {
          // eslint-disable-line dot-notation
          console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        }
        var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
        if (modifier.enabled && isFunction(fn)) {
          // Add properties to offsets to make them a complete clientRect object
          // we do this before each modifier to make sure the previous one doesn't
          // mess with these values
          data.offsets.popper = getClientRect(data.offsets.popper);
          data.offsets.reference = getClientRect(data.offsets.reference);

          data = fn(data, modifier);
        }
      });

      return data;
    }

    /**
     * Updates the position of the popper, computing the new offsets and applying
     * the new style.<br />
     * Prefer `scheduleUpdate` over `update` because of performance reasons.
     * @method
     * @memberof Popper
     */
    function update() {
      // if popper is destroyed, don't perform any further update
      if (this.state.isDestroyed) {
        return;
      }

      var data = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: false,
        offsets: {}
      };

      // compute reference element offsets
      data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

      // compute auto placement, store placement inside the data object,
      // modifiers will be able to edit `placement` if needed
      // and refer to originalPlacement to know the original value
      data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

      // store the computed placement inside `originalPlacement`
      data.originalPlacement = data.placement;

      data.positionFixed = this.options.positionFixed;

      // compute the popper offsets
      data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

      data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

      // run the modifiers
      data = runModifiers(this.modifiers, data);

      // the first `update` will call `onCreate` callback
      // the other ones will call `onUpdate` callback
      if (!this.state.isCreated) {
        this.state.isCreated = true;
        this.options.onCreate(data);
      } else {
        this.options.onUpdate(data);
      }
    }

    /**
     * Helper used to know if the given modifier is enabled.
     * @method
     * @memberof Popper.Utils
     * @returns {Boolean}
     */
    function isModifierEnabled(modifiers, modifierName) {
      return modifiers.some(function (_ref) {
        var name = _ref.name,
            enabled = _ref.enabled;
        return enabled && name === modifierName;
      });
    }

    /**
     * Get the prefixed supported property name
     * @method
     * @memberof Popper.Utils
     * @argument {String} property (camelCase)
     * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
     */
    function getSupportedPropertyName(property) {
      var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
      var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

      for (var i = 0; i < prefixes.length; i++) {
        var prefix = prefixes[i];
        var toCheck = prefix ? '' + prefix + upperProp : property;
        if (typeof document.body.style[toCheck] !== 'undefined') {
          return toCheck;
        }
      }
      return null;
    }

    /**
     * Destroys the popper.
     * @method
     * @memberof Popper
     */
    function destroy() {
      this.state.isDestroyed = true;

      // touch DOM only if `applyStyle` modifier is enabled
      if (isModifierEnabled(this.modifiers, 'applyStyle')) {
        this.popper.removeAttribute('x-placement');
        this.popper.style.position = '';
        this.popper.style.top = '';
        this.popper.style.left = '';
        this.popper.style.right = '';
        this.popper.style.bottom = '';
        this.popper.style.willChange = '';
        this.popper.style[getSupportedPropertyName('transform')] = '';
      }

      this.disableEventListeners();

      // remove the popper if user explicitly asked for the deletion on destroy
      // do not use `remove` because IE11 doesn't support it
      if (this.options.removeOnDestroy) {
        this.popper.parentNode.removeChild(this.popper);
      }
      return this;
    }

    /**
     * Get the window associated with the element
     * @argument {Element} element
     * @returns {Window}
     */
    function getWindow(element) {
      var ownerDocument = element.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView : window;
    }

    function attachToScrollParents(scrollParent, event, callback, scrollParents) {
      var isBody = scrollParent.nodeName === 'BODY';
      var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
      target.addEventListener(event, callback, { passive: true });

      if (!isBody) {
        attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
      }
      scrollParents.push(target);
    }

    /**
     * Setup needed event listeners used to update the popper position
     * @method
     * @memberof Popper.Utils
     * @private
     */
    function setupEventListeners(reference, options, state, updateBound) {
      // Resize event listener on window
      state.updateBound = updateBound;
      getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

      // Scroll event listener on scroll parents
      var scrollElement = getScrollParent(reference);
      attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
      state.scrollElement = scrollElement;
      state.eventsEnabled = true;

      return state;
    }

    /**
     * It will add resize/scroll events and start recalculating
     * position of the popper element when they are triggered.
     * @method
     * @memberof Popper
     */
    function enableEventListeners() {
      if (!this.state.eventsEnabled) {
        this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
      }
    }

    /**
     * Remove event listeners used to update the popper position
     * @method
     * @memberof Popper.Utils
     * @private
     */
    function removeEventListeners(reference, state) {
      // Remove resize event listener on window
      getWindow(reference).removeEventListener('resize', state.updateBound);

      // Remove scroll event listener on scroll parents
      state.scrollParents.forEach(function (target) {
        target.removeEventListener('scroll', state.updateBound);
      });

      // Reset state
      state.updateBound = null;
      state.scrollParents = [];
      state.scrollElement = null;
      state.eventsEnabled = false;
      return state;
    }

    /**
     * It will remove resize/scroll events and won't recalculate popper position
     * when they are triggered. It also won't trigger `onUpdate` callback anymore,
     * unless you call `update` method manually.
     * @method
     * @memberof Popper
     */
    function disableEventListeners() {
      if (this.state.eventsEnabled) {
        cancelAnimationFrame(this.scheduleUpdate);
        this.state = removeEventListeners(this.reference, this.state);
      }
    }

    /**
     * Tells if a given input is a number
     * @method
     * @memberof Popper.Utils
     * @param {*} input to check
     * @return {Boolean}
     */
    function isNumeric(n) {
      return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
    }

    /**
     * Set the style to the given popper
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element - Element to apply the style to
     * @argument {Object} styles
     * Object with a list of properties and values which will be applied to the element
     */
    function setStyles(element, styles) {
      Object.keys(styles).forEach(function (prop) {
        var unit = '';
        // add unit if the value is numeric and is one of the following
        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
          unit = 'px';
        }
        element.style[prop] = styles[prop] + unit;
      });
    }

    /**
     * Set the attributes to the given popper
     * @method
     * @memberof Popper.Utils
     * @argument {Element} element - Element to apply the attributes to
     * @argument {Object} styles
     * Object with a list of properties and values which will be applied to the element
     */
    function setAttributes(element, attributes) {
      Object.keys(attributes).forEach(function (prop) {
        var value = attributes[prop];
        if (value !== false) {
          element.setAttribute(prop, attributes[prop]);
        } else {
          element.removeAttribute(prop);
        }
      });
    }

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @argument {Object} data.styles - List of style properties - values to apply to popper element
     * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The same data object
     */
    function applyStyle(data) {
      // any property present in `data.styles` will be applied to the popper,
      // in this way we can make the 3rd party modifiers add custom styles to it
      // Be aware, modifiers could override the properties defined in the previous
      // lines of this modifier!
      setStyles(data.instance.popper, data.styles);

      // any property present in `data.attributes` will be applied to the popper,
      // they will be set as HTML attributes of the element
      setAttributes(data.instance.popper, data.attributes);

      // if arrowElement is defined and arrowStyles has some properties
      if (data.arrowElement && Object.keys(data.arrowStyles).length) {
        setStyles(data.arrowElement, data.arrowStyles);
      }

      return data;
    }

    /**
     * Set the x-placement attribute before everything else because it could be used
     * to add margins to the popper margins needs to be calculated to get the
     * correct popper offsets.
     * @method
     * @memberof Popper.modifiers
     * @param {HTMLElement} reference - The reference element used to position the popper
     * @param {HTMLElement} popper - The HTML element used as popper
     * @param {Object} options - Popper.js options
     */
    function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
      // compute reference element offsets
      var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

      // compute auto placement, store placement inside the data object,
      // modifiers will be able to edit `placement` if needed
      // and refer to originalPlacement to know the original value
      var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

      popper.setAttribute('x-placement', placement);

      // Apply `position` to popper before anything else because
      // without the position applied we can't guarantee correct computations
      setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

      return options;
    }

    /**
     * @function
     * @memberof Popper.Utils
     * @argument {Object} data - The data object generated by `update` method
     * @argument {Boolean} shouldRound - If the offsets should be rounded at all
     * @returns {Object} The popper's position offsets rounded
     *
     * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
     * good as it can be within reason.
     * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
     *
     * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
     * as well on High DPI screens).
     *
     * Firefox prefers no rounding for positioning and does not have blurriness on
     * high DPI screens.
     *
     * Only horizontal placement and left/right values need to be considered.
     */
    function getRoundedOffsets(data, shouldRound) {
      var _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;
      var round = Math.round,
          floor = Math.floor;

      var noRound = function noRound(v) {
        return v;
      };

      var referenceWidth = round(reference.width);
      var popperWidth = round(popper.width);

      var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
      var isVariation = data.placement.indexOf('-') !== -1;
      var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
      var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

      var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
      var verticalToInteger = !shouldRound ? noRound : round;

      return {
        left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
        top: verticalToInteger(popper.top),
        bottom: verticalToInteger(popper.bottom),
        right: horizontalToInteger(popper.right)
      };
    }

    var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function computeStyle(data, options) {
      var x = options.x,
          y = options.y;
      var popper = data.offsets.popper;

      // Remove this legacy support in Popper.js v2

      var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
        return modifier.name === 'applyStyle';
      }).gpuAcceleration;
      if (legacyGpuAccelerationOption !== undefined) {
        console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
      }
      var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

      var offsetParent = getOffsetParent(data.instance.popper);
      var offsetParentRect = getBoundingClientRect(offsetParent);

      // Styles
      var styles = {
        position: popper.position
      };

      var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

      var sideA = x === 'bottom' ? 'top' : 'bottom';
      var sideB = y === 'right' ? 'left' : 'right';

      // if gpuAcceleration is set to `true` and transform is supported,
      //  we use `translate3d` to apply the position to the popper we
      // automatically use the supported prefixed version if needed
      var prefixedProperty = getSupportedPropertyName('transform');

      // now, let's make a step back and look at this code closely (wtf?)
      // If the content of the popper grows once it's been positioned, it
      // may happen that the popper gets misplaced because of the new content
      // overflowing its reference element
      // To avoid this problem, we provide two options (x and y), which allow
      // the consumer to define the offset origin.
      // If we position a popper on top of a reference element, we can set
      // `x` to `top` to make the popper grow towards its top instead of
      // its bottom.
      var left = void 0,
          top = void 0;
      if (sideA === 'bottom') {
        // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
        // and not the bottom of the html element
        if (offsetParent.nodeName === 'HTML') {
          top = -offsetParent.clientHeight + offsets.bottom;
        } else {
          top = -offsetParentRect.height + offsets.bottom;
        }
      } else {
        top = offsets.top;
      }
      if (sideB === 'right') {
        if (offsetParent.nodeName === 'HTML') {
          left = -offsetParent.clientWidth + offsets.right;
        } else {
          left = -offsetParentRect.width + offsets.right;
        }
      } else {
        left = offsets.left;
      }
      if (gpuAcceleration && prefixedProperty) {
        styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
        styles[sideA] = 0;
        styles[sideB] = 0;
        styles.willChange = 'transform';
      } else {
        // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
        var invertTop = sideA === 'bottom' ? -1 : 1;
        var invertLeft = sideB === 'right' ? -1 : 1;
        styles[sideA] = top * invertTop;
        styles[sideB] = left * invertLeft;
        styles.willChange = sideA + ', ' + sideB;
      }

      // Attributes
      var attributes = {
        'x-placement': data.placement
      };

      // Update `data` attributes, styles and arrowStyles
      data.attributes = _extends$1({}, attributes, data.attributes);
      data.styles = _extends$1({}, styles, data.styles);
      data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);

      return data;
    }

    /**
     * Helper used to know if the given modifier depends from another one.<br />
     * It checks if the needed modifier is listed and enabled.
     * @method
     * @memberof Popper.Utils
     * @param {Array} modifiers - list of modifiers
     * @param {String} requestingName - name of requesting modifier
     * @param {String} requestedName - name of requested modifier
     * @returns {Boolean}
     */
    function isModifierRequired(modifiers, requestingName, requestedName) {
      var requesting = find(modifiers, function (_ref) {
        var name = _ref.name;
        return name === requestingName;
      });

      var isRequired = !!requesting && modifiers.some(function (modifier) {
        return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
      });

      if (!isRequired) {
        var _requesting = '`' + requestingName + '`';
        var requested = '`' + requestedName + '`';
        console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
      }
      return isRequired;
    }

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function arrow(data, options) {
      var _data$offsets$arrow;

      // arrow depends on keepTogether in order to work
      if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
        return data;
      }

      var arrowElement = options.element;

      // if arrowElement is a string, suppose it's a CSS selector
      if (typeof arrowElement === 'string') {
        arrowElement = data.instance.popper.querySelector(arrowElement);

        // if arrowElement is not found, don't run the modifier
        if (!arrowElement) {
          return data;
        }
      } else {
        // if the arrowElement isn't a query selector we must check that the
        // provided DOM node is child of its popper node
        if (!data.instance.popper.contains(arrowElement)) {
          console.warn('WARNING: `arrow.element` must be child of its popper element!');
          return data;
        }
      }

      var placement = data.placement.split('-')[0];
      var _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;

      var isVertical = ['left', 'right'].indexOf(placement) !== -1;

      var len = isVertical ? 'height' : 'width';
      var sideCapitalized = isVertical ? 'Top' : 'Left';
      var side = sideCapitalized.toLowerCase();
      var altSide = isVertical ? 'left' : 'top';
      var opSide = isVertical ? 'bottom' : 'right';
      var arrowElementSize = getOuterSizes(arrowElement)[len];

      //
      // extends keepTogether behavior making sure the popper and its
      // reference have enough pixels in conjunction
      //

      // top/left side
      if (reference[opSide] - arrowElementSize < popper[side]) {
        data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
      }
      // bottom/right side
      if (reference[side] + arrowElementSize > popper[opSide]) {
        data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
      }
      data.offsets.popper = getClientRect(data.offsets.popper);

      // compute center of the popper
      var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

      // Compute the sideValue using the updated popper offsets
      // take popper margin in account because we don't have this info available
      var css = getStyleComputedProperty(data.instance.popper);
      var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
      var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
      var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

      // prevent arrowElement from being placed not contiguously to its popper
      sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

      data.arrowElement = arrowElement;
      data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

      return data;
    }

    /**
     * Get the opposite placement variation of the given one
     * @method
     * @memberof Popper.Utils
     * @argument {String} placement variation
     * @returns {String} flipped placement variation
     */
    function getOppositeVariation(variation) {
      if (variation === 'end') {
        return 'start';
      } else if (variation === 'start') {
        return 'end';
      }
      return variation;
    }

    /**
     * List of accepted placements to use as values of the `placement` option.<br />
     * Valid placements are:
     * - `auto`
     * - `top`
     * - `right`
     * - `bottom`
     * - `left`
     *
     * Each placement can have a variation from this list:
     * - `-start`
     * - `-end`
     *
     * Variations are interpreted easily if you think of them as the left to right
     * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
     * is right.<br />
     * Vertically (`left` and `right`), `start` is top and `end` is bottom.
     *
     * Some valid examples are:
     * - `top-end` (on top of reference, right aligned)
     * - `right-start` (on right of reference, top aligned)
     * - `bottom` (on bottom, centered)
     * - `auto-end` (on the side with more space available, alignment depends by placement)
     *
     * @static
     * @type {Array}
     * @enum {String}
     * @readonly
     * @method placements
     * @memberof Popper
     */
    var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

    // Get rid of `auto` `auto-start` and `auto-end`
    var validPlacements = placements.slice(3);

    /**
     * Given an initial placement, returns all the subsequent placements
     * clockwise (or counter-clockwise).
     *
     * @method
     * @memberof Popper.Utils
     * @argument {String} placement - A valid placement (it accepts variations)
     * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
     * @returns {Array} placements including their variations
     */
    function clockwise(placement) {
      var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var index = validPlacements.indexOf(placement);
      var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
      return counter ? arr.reverse() : arr;
    }

    var BEHAVIORS = {
      FLIP: 'flip',
      CLOCKWISE: 'clockwise',
      COUNTERCLOCKWISE: 'counterclockwise'
    };

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function flip(data, options) {
      // if `inner` modifier is enabled, we can't use the `flip` modifier
      if (isModifierEnabled(data.instance.modifiers, 'inner')) {
        return data;
      }

      if (data.flipped && data.placement === data.originalPlacement) {
        // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
        return data;
      }

      var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

      var placement = data.placement.split('-')[0];
      var placementOpposite = getOppositePlacement(placement);
      var variation = data.placement.split('-')[1] || '';

      var flipOrder = [];

      switch (options.behavior) {
        case BEHAVIORS.FLIP:
          flipOrder = [placement, placementOpposite];
          break;
        case BEHAVIORS.CLOCKWISE:
          flipOrder = clockwise(placement);
          break;
        case BEHAVIORS.COUNTERCLOCKWISE:
          flipOrder = clockwise(placement, true);
          break;
        default:
          flipOrder = options.behavior;
      }

      flipOrder.forEach(function (step, index) {
        if (placement !== step || flipOrder.length === index + 1) {
          return data;
        }

        placement = data.placement.split('-')[0];
        placementOpposite = getOppositePlacement(placement);

        var popperOffsets = data.offsets.popper;
        var refOffsets = data.offsets.reference;

        // using floor because the reference offsets may contain decimals we are not going to consider here
        var floor = Math.floor;
        var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

        var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
        var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
        var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
        var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

        var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

        // flip the variation if required
        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

        // flips variation if reference element overflows boundaries
        var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

        // flips variation if popper content overflows boundaries
        var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

        var flippedVariation = flippedVariationByRef || flippedVariationByContent;

        if (overlapsRef || overflowsBoundaries || flippedVariation) {
          // this boolean to detect any flip loop
          data.flipped = true;

          if (overlapsRef || overflowsBoundaries) {
            placement = flipOrder[index + 1];
          }

          if (flippedVariation) {
            variation = getOppositeVariation(variation);
          }

          data.placement = placement + (variation ? '-' + variation : '');

          // this object contains `position`, we want to preserve it along with
          // any additional property we may add in the future
          data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

          data = runModifiers(data.instance.modifiers, data, 'flip');
        }
      });
      return data;
    }

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function keepTogether(data) {
      var _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;

      var placement = data.placement.split('-')[0];
      var floor = Math.floor;
      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
      var side = isVertical ? 'right' : 'bottom';
      var opSide = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';

      if (popper[side] < floor(reference[opSide])) {
        data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
      }
      if (popper[opSide] > floor(reference[side])) {
        data.offsets.popper[opSide] = floor(reference[side]);
      }

      return data;
    }

    /**
     * Converts a string containing value + unit into a px value number
     * @function
     * @memberof {modifiers~offset}
     * @private
     * @argument {String} str - Value + unit string
     * @argument {String} measurement - `height` or `width`
     * @argument {Object} popperOffsets
     * @argument {Object} referenceOffsets
     * @returns {Number|String}
     * Value in pixels, or original string if no values were extracted
     */
    function toValue(str, measurement, popperOffsets, referenceOffsets) {
      // separate value from unit
      var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
      var value = +split[1];
      var unit = split[2];

      // If it's not a number it's an operator, I guess
      if (!value) {
        return str;
      }

      if (unit.indexOf('%') === 0) {
        var element = void 0;
        switch (unit) {
          case '%p':
            element = popperOffsets;
            break;
          case '%':
          case '%r':
          default:
            element = referenceOffsets;
        }

        var rect = getClientRect(element);
        return rect[measurement] / 100 * value;
      } else if (unit === 'vh' || unit === 'vw') {
        // if is a vh or vw, we calculate the size based on the viewport
        var size = void 0;
        if (unit === 'vh') {
          size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        } else {
          size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        }
        return size / 100 * value;
      } else {
        // if is an explicit pixel unit, we get rid of the unit and keep the value
        // if is an implicit unit, it's px, and we return just the value
        return value;
      }
    }

    /**
     * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
     * @function
     * @memberof {modifiers~offset}
     * @private
     * @argument {String} offset
     * @argument {Object} popperOffsets
     * @argument {Object} referenceOffsets
     * @argument {String} basePlacement
     * @returns {Array} a two cells array with x and y offsets in numbers
     */
    function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
      var offsets = [0, 0];

      // Use height if placement is left or right and index is 0 otherwise use width
      // in this way the first offset will use an axis and the second one
      // will use the other one
      var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

      // Split the offset string to obtain a list of values and operands
      // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
      var fragments = offset.split(/(\+|\-)/).map(function (frag) {
        return frag.trim();
      });

      // Detect if the offset string contains a pair of values or a single one
      // they could be separated by comma or space
      var divider = fragments.indexOf(find(fragments, function (frag) {
        return frag.search(/,|\s/) !== -1;
      }));

      if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
        console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
      }

      // If divider is found, we divide the list of values and operands to divide
      // them by ofset X and Y.
      var splitRegex = /\s*,\s*|\s+/;
      var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

      // Convert the values with units to absolute pixels to allow our computations
      ops = ops.map(function (op, index) {
        // Most of the units rely on the orientation of the popper
        var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
        var mergeWithPrevious = false;
        return op
        // This aggregates any `+` or `-` sign that aren't considered operators
        // e.g.: 10 + +5 => [10, +, +5]
        .reduce(function (a, b) {
          if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
            a[a.length - 1] = b;
            mergeWithPrevious = true;
            return a;
          } else if (mergeWithPrevious) {
            a[a.length - 1] += b;
            mergeWithPrevious = false;
            return a;
          } else {
            return a.concat(b);
          }
        }, [])
        // Here we convert the string values into number values (in px)
        .map(function (str) {
          return toValue(str, measurement, popperOffsets, referenceOffsets);
        });
      });

      // Loop trough the offsets arrays and execute the operations
      ops.forEach(function (op, index) {
        op.forEach(function (frag, index2) {
          if (isNumeric(frag)) {
            offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
          }
        });
      });
      return offsets;
    }

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @argument {Number|String} options.offset=0
     * The offset value as described in the modifier description
     * @returns {Object} The data object, properly modified
     */
    function offset(data, _ref) {
      var offset = _ref.offset;
      var placement = data.placement,
          _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;

      var basePlacement = placement.split('-')[0];

      var offsets = void 0;
      if (isNumeric(+offset)) {
        offsets = [+offset, 0];
      } else {
        offsets = parseOffset(offset, popper, reference, basePlacement);
      }

      if (basePlacement === 'left') {
        popper.top += offsets[0];
        popper.left -= offsets[1];
      } else if (basePlacement === 'right') {
        popper.top += offsets[0];
        popper.left += offsets[1];
      } else if (basePlacement === 'top') {
        popper.left += offsets[0];
        popper.top -= offsets[1];
      } else if (basePlacement === 'bottom') {
        popper.left += offsets[0];
        popper.top += offsets[1];
      }

      data.popper = popper;
      return data;
    }

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function preventOverflow(data, options) {
      var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

      // If offsetParent is the reference element, we really want to
      // go one step up and use the next offsetParent as reference to
      // avoid to make this modifier completely useless and look like broken
      if (data.instance.reference === boundariesElement) {
        boundariesElement = getOffsetParent(boundariesElement);
      }

      // NOTE: DOM access here
      // resets the popper's position so that the document size can be calculated excluding
      // the size of the popper element itself
      var transformProp = getSupportedPropertyName('transform');
      var popperStyles = data.instance.popper.style; // assignment to help minification
      var top = popperStyles.top,
          left = popperStyles.left,
          transform = popperStyles[transformProp];

      popperStyles.top = '';
      popperStyles.left = '';
      popperStyles[transformProp] = '';

      var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

      // NOTE: DOM access here
      // restores the original style properties after the offsets have been computed
      popperStyles.top = top;
      popperStyles.left = left;
      popperStyles[transformProp] = transform;

      options.boundaries = boundaries;

      var order = options.priority;
      var popper = data.offsets.popper;

      var check = {
        primary: function primary(placement) {
          var value = popper[placement];
          if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
            value = Math.max(popper[placement], boundaries[placement]);
          }
          return defineProperty({}, placement, value);
        },
        secondary: function secondary(placement) {
          var mainSide = placement === 'right' ? 'left' : 'top';
          var value = popper[mainSide];
          if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
            value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
          }
          return defineProperty({}, mainSide, value);
        }
      };

      order.forEach(function (placement) {
        var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
        popper = _extends$1({}, popper, check[side](placement));
      });

      data.offsets.popper = popper;

      return data;
    }

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function shift(data) {
      var placement = data.placement;
      var basePlacement = placement.split('-')[0];
      var shiftvariation = placement.split('-')[1];

      // if shift shiftvariation is specified, run the modifier
      if (shiftvariation) {
        var _data$offsets = data.offsets,
            reference = _data$offsets.reference,
            popper = _data$offsets.popper;

        var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        var side = isVertical ? 'left' : 'top';
        var measurement = isVertical ? 'width' : 'height';

        var shiftOffsets = {
          start: defineProperty({}, side, reference[side]),
          end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
        };

        data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
      }

      return data;
    }

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by update method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function hide(data) {
      if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
        return data;
      }

      var refRect = data.offsets.reference;
      var bound = find(data.instance.modifiers, function (modifier) {
        return modifier.name === 'preventOverflow';
      }).boundaries;

      if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
        // Avoid unnecessary DOM access if visibility hasn't changed
        if (data.hide === true) {
          return data;
        }

        data.hide = true;
        data.attributes['x-out-of-boundaries'] = '';
      } else {
        // Avoid unnecessary DOM access if visibility hasn't changed
        if (data.hide === false) {
          return data;
        }

        data.hide = false;
        data.attributes['x-out-of-boundaries'] = false;
      }

      return data;
    }

    /**
     * @function
     * @memberof Modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {Object} The data object, properly modified
     */
    function inner(data) {
      var placement = data.placement;
      var basePlacement = placement.split('-')[0];
      var _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;

      var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

      var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

      popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

      data.placement = getOppositePlacement(placement);
      data.offsets.popper = getClientRect(popper);

      return data;
    }

    /**
     * Modifier function, each modifier can have a function of this type assigned
     * to its `fn` property.<br />
     * These functions will be called on each update, this means that you must
     * make sure they are performant enough to avoid performance bottlenecks.
     *
     * @function ModifierFn
     * @argument {dataObject} data - The data object generated by `update` method
     * @argument {Object} options - Modifiers configuration and options
     * @returns {dataObject} The data object, properly modified
     */

    /**
     * Modifiers are plugins used to alter the behavior of your poppers.<br />
     * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
     * needed by the library.
     *
     * Usually you don't want to override the `order`, `fn` and `onLoad` props.
     * All the other properties are configurations that could be tweaked.
     * @namespace modifiers
     */
    var modifiers = {
      /**
       * Modifier used to shift the popper on the start or end of its reference
       * element.<br />
       * It will read the variation of the `placement` property.<br />
       * It can be one either `-end` or `-start`.
       * @memberof modifiers
       * @inner
       */
      shift: {
        /** @prop {number} order=100 - Index used to define the order of execution */
        order: 100,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: shift
      },

      /**
       * The `offset` modifier can shift your popper on both its axis.
       *
       * It accepts the following units:
       * - `px` or unit-less, interpreted as pixels
       * - `%` or `%r`, percentage relative to the length of the reference element
       * - `%p`, percentage relative to the length of the popper element
       * - `vw`, CSS viewport width unit
       * - `vh`, CSS viewport height unit
       *
       * For length is intended the main axis relative to the placement of the popper.<br />
       * This means that if the placement is `top` or `bottom`, the length will be the
       * `width`. In case of `left` or `right`, it will be the `height`.
       *
       * You can provide a single value (as `Number` or `String`), or a pair of values
       * as `String` divided by a comma or one (or more) white spaces.<br />
       * The latter is a deprecated method because it leads to confusion and will be
       * removed in v2.<br />
       * Additionally, it accepts additions and subtractions between different units.
       * Note that multiplications and divisions aren't supported.
       *
       * Valid examples are:
       * ```
       * 10
       * '10%'
       * '10, 10'
       * '10%, 10'
       * '10 + 10%'
       * '10 - 5vh + 3%'
       * '-10px + 5vh, 5px - 6%'
       * ```
       * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
       * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
       * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
       *
       * @memberof modifiers
       * @inner
       */
      offset: {
        /** @prop {number} order=200 - Index used to define the order of execution */
        order: 200,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: offset,
        /** @prop {Number|String} offset=0
         * The offset value as described in the modifier description
         */
        offset: 0
      },

      /**
       * Modifier used to prevent the popper from being positioned outside the boundary.
       *
       * A scenario exists where the reference itself is not within the boundaries.<br />
       * We can say it has "escaped the boundaries" — or just "escaped".<br />
       * In this case we need to decide whether the popper should either:
       *
       * - detach from the reference and remain "trapped" in the boundaries, or
       * - if it should ignore the boundary and "escape with its reference"
       *
       * When `escapeWithReference` is set to`true` and reference is completely
       * outside its boundaries, the popper will overflow (or completely leave)
       * the boundaries in order to remain attached to the edge of the reference.
       *
       * @memberof modifiers
       * @inner
       */
      preventOverflow: {
        /** @prop {number} order=300 - Index used to define the order of execution */
        order: 300,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: preventOverflow,
        /**
         * @prop {Array} [priority=['left','right','top','bottom']]
         * Popper will try to prevent overflow following these priorities by default,
         * then, it could overflow on the left and on top of the `boundariesElement`
         */
        priority: ['left', 'right', 'top', 'bottom'],
        /**
         * @prop {number} padding=5
         * Amount of pixel used to define a minimum distance between the boundaries
         * and the popper. This makes sure the popper always has a little padding
         * between the edges of its container
         */
        padding: 5,
        /**
         * @prop {String|HTMLElement} boundariesElement='scrollParent'
         * Boundaries used by the modifier. Can be `scrollParent`, `window`,
         * `viewport` or any DOM element.
         */
        boundariesElement: 'scrollParent'
      },

      /**
       * Modifier used to make sure the reference and its popper stay near each other
       * without leaving any gap between the two. Especially useful when the arrow is
       * enabled and you want to ensure that it points to its reference element.
       * It cares only about the first axis. You can still have poppers with margin
       * between the popper and its reference element.
       * @memberof modifiers
       * @inner
       */
      keepTogether: {
        /** @prop {number} order=400 - Index used to define the order of execution */
        order: 400,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: keepTogether
      },

      /**
       * This modifier is used to move the `arrowElement` of the popper to make
       * sure it is positioned between the reference element and its popper element.
       * It will read the outer size of the `arrowElement` node to detect how many
       * pixels of conjunction are needed.
       *
       * It has no effect if no `arrowElement` is provided.
       * @memberof modifiers
       * @inner
       */
      arrow: {
        /** @prop {number} order=500 - Index used to define the order of execution */
        order: 500,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: arrow,
        /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
        element: '[x-arrow]'
      },

      /**
       * Modifier used to flip the popper's placement when it starts to overlap its
       * reference element.
       *
       * Requires the `preventOverflow` modifier before it in order to work.
       *
       * **NOTE:** this modifier will interrupt the current update cycle and will
       * restart it if it detects the need to flip the placement.
       * @memberof modifiers
       * @inner
       */
      flip: {
        /** @prop {number} order=600 - Index used to define the order of execution */
        order: 600,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: flip,
        /**
         * @prop {String|Array} behavior='flip'
         * The behavior used to change the popper's placement. It can be one of
         * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
         * placements (with optional variations)
         */
        behavior: 'flip',
        /**
         * @prop {number} padding=5
         * The popper will flip if it hits the edges of the `boundariesElement`
         */
        padding: 5,
        /**
         * @prop {String|HTMLElement} boundariesElement='viewport'
         * The element which will define the boundaries of the popper position.
         * The popper will never be placed outside of the defined boundaries
         * (except if `keepTogether` is enabled)
         */
        boundariesElement: 'viewport',
        /**
         * @prop {Boolean} flipVariations=false
         * The popper will switch placement variation between `-start` and `-end` when
         * the reference element overlaps its boundaries.
         *
         * The original placement should have a set variation.
         */
        flipVariations: false,
        /**
         * @prop {Boolean} flipVariationsByContent=false
         * The popper will switch placement variation between `-start` and `-end` when
         * the popper element overlaps its reference boundaries.
         *
         * The original placement should have a set variation.
         */
        flipVariationsByContent: false
      },

      /**
       * Modifier used to make the popper flow toward the inner of the reference element.
       * By default, when this modifier is disabled, the popper will be placed outside
       * the reference element.
       * @memberof modifiers
       * @inner
       */
      inner: {
        /** @prop {number} order=700 - Index used to define the order of execution */
        order: 700,
        /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
        enabled: false,
        /** @prop {ModifierFn} */
        fn: inner
      },

      /**
       * Modifier used to hide the popper when its reference element is outside of the
       * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
       * be used to hide with a CSS selector the popper when its reference is
       * out of boundaries.
       *
       * Requires the `preventOverflow` modifier before it in order to work.
       * @memberof modifiers
       * @inner
       */
      hide: {
        /** @prop {number} order=800 - Index used to define the order of execution */
        order: 800,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: hide
      },

      /**
       * Computes the style that will be applied to the popper element to gets
       * properly positioned.
       *
       * Note that this modifier will not touch the DOM, it just prepares the styles
       * so that `applyStyle` modifier can apply it. This separation is useful
       * in case you need to replace `applyStyle` with a custom implementation.
       *
       * This modifier has `850` as `order` value to maintain backward compatibility
       * with previous versions of Popper.js. Expect the modifiers ordering method
       * to change in future major versions of the library.
       *
       * @memberof modifiers
       * @inner
       */
      computeStyle: {
        /** @prop {number} order=850 - Index used to define the order of execution */
        order: 850,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: computeStyle,
        /**
         * @prop {Boolean} gpuAcceleration=true
         * If true, it uses the CSS 3D transformation to position the popper.
         * Otherwise, it will use the `top` and `left` properties
         */
        gpuAcceleration: true,
        /**
         * @prop {string} [x='bottom']
         * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
         * Change this if your popper should grow in a direction different from `bottom`
         */
        x: 'bottom',
        /**
         * @prop {string} [x='left']
         * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
         * Change this if your popper should grow in a direction different from `right`
         */
        y: 'right'
      },

      /**
       * Applies the computed styles to the popper element.
       *
       * All the DOM manipulations are limited to this modifier. This is useful in case
       * you want to integrate Popper.js inside a framework or view library and you
       * want to delegate all the DOM manipulations to it.
       *
       * Note that if you disable this modifier, you must make sure the popper element
       * has its position set to `absolute` before Popper.js can do its work!
       *
       * Just disable this modifier and define your own to achieve the desired effect.
       *
       * @memberof modifiers
       * @inner
       */
      applyStyle: {
        /** @prop {number} order=900 - Index used to define the order of execution */
        order: 900,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
        enabled: true,
        /** @prop {ModifierFn} */
        fn: applyStyle,
        /** @prop {Function} */
        onLoad: applyStyleOnLoad,
        /**
         * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
         * @prop {Boolean} gpuAcceleration=true
         * If true, it uses the CSS 3D transformation to position the popper.
         * Otherwise, it will use the `top` and `left` properties
         */
        gpuAcceleration: undefined
      }
    };

    /**
     * The `dataObject` is an object containing all the information used by Popper.js.
     * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
     * @name dataObject
     * @property {Object} data.instance The Popper.js instance
     * @property {String} data.placement Placement applied to popper
     * @property {String} data.originalPlacement Placement originally defined on init
     * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
     * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
     * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
     * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
     * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
     * @property {Object} data.boundaries Offsets of the popper boundaries
     * @property {Object} data.offsets The measurements of popper, reference and arrow elements
     * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
     * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
     * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
     */

    /**
     * Default options provided to Popper.js constructor.<br />
     * These can be overridden using the `options` argument of Popper.js.<br />
     * To override an option, simply pass an object with the same
     * structure of the `options` object, as the 3rd argument. For example:
     * ```
     * new Popper(ref, pop, {
     *   modifiers: {
     *     preventOverflow: { enabled: false }
     *   }
     * })
     * ```
     * @type {Object}
     * @static
     * @memberof Popper
     */
    var Defaults = {
      /**
       * Popper's placement.
       * @prop {Popper.placements} placement='bottom'
       */
      placement: 'bottom',

      /**
       * Set this to true if you want popper to position it self in 'fixed' mode
       * @prop {Boolean} positionFixed=false
       */
      positionFixed: false,

      /**
       * Whether events (resize, scroll) are initially enabled.
       * @prop {Boolean} eventsEnabled=true
       */
      eventsEnabled: true,

      /**
       * Set to true if you want to automatically remove the popper when
       * you call the `destroy` method.
       * @prop {Boolean} removeOnDestroy=false
       */
      removeOnDestroy: false,

      /**
       * Callback called when the popper is created.<br />
       * By default, it is set to no-op.<br />
       * Access Popper.js instance with `data.instance`.
       * @prop {onCreate}
       */
      onCreate: function onCreate() {},

      /**
       * Callback called when the popper is updated. This callback is not called
       * on the initialization/creation of the popper, but only on subsequent
       * updates.<br />
       * By default, it is set to no-op.<br />
       * Access Popper.js instance with `data.instance`.
       * @prop {onUpdate}
       */
      onUpdate: function onUpdate() {},

      /**
       * List of modifiers used to modify the offsets before they are applied to the popper.
       * They provide most of the functionalities of Popper.js.
       * @prop {modifiers}
       */
      modifiers: modifiers
    };

    /**
     * @callback onCreate
     * @param {dataObject} data
     */

    /**
     * @callback onUpdate
     * @param {dataObject} data
     */

    // Utils
    // Methods
    var Popper = function () {
      /**
       * Creates a new Popper.js instance.
       * @class Popper
       * @param {Element|referenceObject} reference - The reference element used to position the popper
       * @param {Element} popper - The HTML / XML element used as the popper
       * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
       * @return {Object} instance - The generated Popper.js instance
       */
      function Popper(reference, popper) {
        var _this = this;

        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        classCallCheck(this, Popper);

        this.scheduleUpdate = function () {
          return requestAnimationFrame(_this.update);
        };

        // make update() debounced, so that it only runs at most once-per-tick
        this.update = debounce(this.update.bind(this));

        // with {} we create a new object with the options inside it
        this.options = _extends$1({}, Popper.Defaults, options);

        // init state
        this.state = {
          isDestroyed: false,
          isCreated: false,
          scrollParents: []
        };

        // get reference and popper elements (allow jQuery wrappers)
        this.reference = reference && reference.jquery ? reference[0] : reference;
        this.popper = popper && popper.jquery ? popper[0] : popper;

        // Deep merge modifiers options
        this.options.modifiers = {};
        Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
          _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
        });

        // Refactoring modifiers' list (Object => Array)
        this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
          return _extends$1({
            name: name
          }, _this.options.modifiers[name]);
        })
        // sort the modifiers by order
        .sort(function (a, b) {
          return a.order - b.order;
        });

        // modifiers have the ability to execute arbitrary code when Popper.js get inited
        // such code is executed in the same order of its modifier
        // they could add new properties to their options configuration
        // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
        this.modifiers.forEach(function (modifierOptions) {
          if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
            modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
          }
        });

        // fire the first update to position the popper in the right place
        this.update();

        var eventsEnabled = this.options.eventsEnabled;
        if (eventsEnabled) {
          // setup event listeners, they will take care of update the position in specific situations
          this.enableEventListeners();
        }

        this.state.eventsEnabled = eventsEnabled;
      }

      // We can't use class properties because they don't get listed in the
      // class prototype and break stuff like Sinon stubs


      createClass(Popper, [{
        key: 'update',
        value: function update$$1() {
          return update.call(this);
        }
      }, {
        key: 'destroy',
        value: function destroy$$1() {
          return destroy.call(this);
        }
      }, {
        key: 'enableEventListeners',
        value: function enableEventListeners$$1() {
          return enableEventListeners.call(this);
        }
      }, {
        key: 'disableEventListeners',
        value: function disableEventListeners$$1() {
          return disableEventListeners.call(this);
        }

        /**
         * Schedules an update. It will run on the next UI update available.
         * @method scheduleUpdate
         * @memberof Popper
         */

        /**
         * Collection of utilities useful when writing custom modifiers.
         * Starting from version 1.7, this method is available only if you
         * include `popper-utils.js` before `popper.js`.
         *
         * **DEPRECATION**: This way to access PopperUtils is deprecated
         * and will be removed in v2! Use the PopperUtils module directly instead.
         * Due to the high instability of the methods contained in Utils, we can't
         * guarantee them to follow semver. Use them at your own risk!
         * @static
         * @private
         * @type {Object}
         * @deprecated since version 1.8
         * @member Utils
         * @memberof Popper
         */

      }]);
      return Popper;
    }();

    /**
     * The `referenceObject` is an object that provides an interface compatible with Popper.js
     * and lets you use it as replacement of a real DOM node.<br />
     * You can use this method to position a popper relatively to a set of coordinates
     * in case you don't have a DOM node to use as reference.
     *
     * ```
     * new Popper(referenceObject, popperNode);
     * ```
     *
     * NB: This feature isn't supported in Internet Explorer 10.
     * @name referenceObject
     * @property {Function} data.getBoundingClientRect
     * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
     * @property {number} data.clientWidth
     * An ES6 getter that will return the width of the virtual reference element.
     * @property {number} data.clientHeight
     * An ES6 getter that will return the height of the virtual reference element.
     */

    Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
    Popper.placements = placements;
    Popper.Defaults = Defaults;

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$4 = 'dropdown';
    var VERSION$4 = '4.5.3';
    var DATA_KEY$4 = 'bs.dropdown';
    var EVENT_KEY$4 = "." + DATA_KEY$4;
    var DATA_API_KEY$4 = '.data-api';
    var JQUERY_NO_CONFLICT$4 = $__default['default'].fn[NAME$4];
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

    var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

    var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

    var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

    var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

    var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

    var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
    var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
    var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
    var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
    var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
    var EVENT_CLICK = "click" + EVENT_KEY$4;
    var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
    var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
    var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
    var CLASS_NAME_DISABLED = 'disabled';
    var CLASS_NAME_SHOW$2 = 'show';
    var CLASS_NAME_DROPUP = 'dropup';
    var CLASS_NAME_DROPRIGHT = 'dropright';
    var CLASS_NAME_DROPLEFT = 'dropleft';
    var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
    var CLASS_NAME_POSITION_STATIC = 'position-static';
    var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
    var SELECTOR_FORM_CHILD = '.dropdown form';
    var SELECTOR_MENU = '.dropdown-menu';
    var SELECTOR_NAVBAR_NAV = '.navbar-nav';
    var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
    var PLACEMENT_TOP = 'top-start';
    var PLACEMENT_TOPEND = 'top-end';
    var PLACEMENT_BOTTOM = 'bottom-start';
    var PLACEMENT_BOTTOMEND = 'bottom-end';
    var PLACEMENT_RIGHT = 'right-start';
    var PLACEMENT_LEFT = 'left-start';
    var Default$2 = {
      offset: 0,
      flip: true,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic',
      popperConfig: null
    };
    var DefaultType$2 = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string',
      popperConfig: '(null|object)'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Dropdown = /*#__PURE__*/function () {
      function Dropdown(element, config) {
        this._element = element;
        this._popper = null;
        this._config = this._getConfig(config);
        this._menu = this._getMenuElement();
        this._inNavbar = this._detectNavbar();

        this._addEventListeners();
      } // Getters


      var _proto = Dropdown.prototype;

      // Public
      _proto.toggle = function toggle() {
        if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED)) {
          return;
        }

        var isActive = $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2);

        Dropdown._clearMenus();

        if (isActive) {
          return;
        }

        this.show(true);
      };

      _proto.show = function show(usePopper) {
        if (usePopper === void 0) {
          usePopper = false;
        }

        if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
          return;
        }

        var relatedTarget = {
          relatedTarget: this._element
        };
        var showEvent = $__default['default'].Event(EVENT_SHOW$1, relatedTarget);

        var parent = Dropdown._getParentFromElement(this._element);

        $__default['default'](parent).trigger(showEvent);

        if (showEvent.isDefaultPrevented()) {
          return;
        } // Disable totally Popper.js for Dropdown in Navbar


        if (!this._inNavbar && usePopper) {
          /**
           * Check for Popper dependency
           * Popper - https://popper.js.org
           */
          if (typeof Popper === 'undefined') {
            throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
          }

          var referenceElement = this._element;

          if (this._config.reference === 'parent') {
            referenceElement = parent;
          } else if (Util.isElement(this._config.reference)) {
            referenceElement = this._config.reference; // Check if it's jQuery element

            if (typeof this._config.reference.jquery !== 'undefined') {
              referenceElement = this._config.reference[0];
            }
          } // If boundary is not `scrollParent`, then set position to `static`
          // to allow the menu to "escape" the scroll parent's boundaries
          // https://github.com/twbs/bootstrap/issues/24251


          if (this._config.boundary !== 'scrollParent') {
            $__default['default'](parent).addClass(CLASS_NAME_POSITION_STATIC);
          }

          this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


        if ('ontouchstart' in document.documentElement && $__default['default'](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
          $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
        }

        this._element.focus();

        this._element.setAttribute('aria-expanded', true);

        $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
        $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_SHOWN$1, relatedTarget));
      };

      _proto.hide = function hide() {
        if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || !$__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
          return;
        }

        var relatedTarget = {
          relatedTarget: this._element
        };
        var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);

        var parent = Dropdown._getParentFromElement(this._element);

        $__default['default'](parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          return;
        }

        if (this._popper) {
          this._popper.destroy();
        }

        $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
        $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
      };

      _proto.dispose = function dispose() {
        $__default['default'].removeData(this._element, DATA_KEY$4);
        $__default['default'](this._element).off(EVENT_KEY$4);
        this._element = null;
        this._menu = null;

        if (this._popper !== null) {
          this._popper.destroy();

          this._popper = null;
        }
      };

      _proto.update = function update() {
        this._inNavbar = this._detectNavbar();

        if (this._popper !== null) {
          this._popper.scheduleUpdate();
        }
      } // Private
      ;

      _proto._addEventListeners = function _addEventListeners() {
        var _this = this;

        $__default['default'](this._element).on(EVENT_CLICK, function (event) {
          event.preventDefault();
          event.stopPropagation();

          _this.toggle();
        });
      };

      _proto._getConfig = function _getConfig(config) {
        config = _extends({}, this.constructor.Default, $__default['default'](this._element).data(), config);
        Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
        return config;
      };

      _proto._getMenuElement = function _getMenuElement() {
        if (!this._menu) {
          var parent = Dropdown._getParentFromElement(this._element);

          if (parent) {
            this._menu = parent.querySelector(SELECTOR_MENU);
          }
        }

        return this._menu;
      };

      _proto._getPlacement = function _getPlacement() {
        var $parentDropdown = $__default['default'](this._element.parentNode);
        var placement = PLACEMENT_BOTTOM; // Handle dropup

        if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
          placement = $__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
        } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
          placement = PLACEMENT_RIGHT;
        } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
          placement = PLACEMENT_LEFT;
        } else if ($__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
          placement = PLACEMENT_BOTTOMEND;
        }

        return placement;
      };

      _proto._detectNavbar = function _detectNavbar() {
        return $__default['default'](this._element).closest('.navbar').length > 0;
      };

      _proto._getOffset = function _getOffset() {
        var _this2 = this;

        var offset = {};

        if (typeof this._config.offset === 'function') {
          offset.fn = function (data) {
            data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
            return data;
          };
        } else {
          offset.offset = this._config.offset;
        }

        return offset;
      };

      _proto._getPopperConfig = function _getPopperConfig() {
        var popperConfig = {
          placement: this._getPlacement(),
          modifiers: {
            offset: this._getOffset(),
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          }
        }; // Disable Popper.js if we have a static display

        if (this._config.display === 'static') {
          popperConfig.modifiers.applyStyle = {
            enabled: false
          };
        }

        return _extends({}, popperConfig, this._config.popperConfig);
      } // Static
      ;

      Dropdown._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $__default['default'](this).data(DATA_KEY$4);

          var _config = typeof config === 'object' ? config : null;

          if (!data) {
            data = new Dropdown(this, _config);
            $__default['default'](this).data(DATA_KEY$4, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      Dropdown._clearMenus = function _clearMenus(event) {
        if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
          return;
        }

        var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

        for (var i = 0, len = toggles.length; i < len; i++) {
          var parent = Dropdown._getParentFromElement(toggles[i]);

          var context = $__default['default'](toggles[i]).data(DATA_KEY$4);
          var relatedTarget = {
            relatedTarget: toggles[i]
          };

          if (event && event.type === 'click') {
            relatedTarget.clickEvent = event;
          }

          if (!context) {
            continue;
          }

          var dropdownMenu = context._menu;

          if (!$__default['default'](parent).hasClass(CLASS_NAME_SHOW$2)) {
            continue;
          }

          if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $__default['default'].contains(parent, event.target)) {
            continue;
          }

          var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);
          $__default['default'](parent).trigger(hideEvent);

          if (hideEvent.isDefaultPrevented()) {
            continue;
          } // If this is a touch-enabled device we remove the extra
          // empty mouseover listeners we added for iOS support


          if ('ontouchstart' in document.documentElement) {
            $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
          }

          toggles[i].setAttribute('aria-expanded', 'false');

          if (context._popper) {
            context._popper.destroy();
          }

          $__default['default'](dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
          $__default['default'](parent).removeClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
        }
      };

      Dropdown._getParentFromElement = function _getParentFromElement(element) {
        var parent;
        var selector = Util.getSelectorFromElement(element);

        if (selector) {
          parent = document.querySelector(selector);
        }

        return parent || element.parentNode;
      } // eslint-disable-next-line complexity
      ;

      Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
        // If not input/textarea:
        //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
        // If input/textarea:
        //  - If space key => not a dropdown command
        //  - If key is other than escape
        //    - If key is not up or down => not a dropdown command
        //    - If trigger inside the menu => not a dropdown command
        if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default['default'](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
          return;
        }

        if (this.disabled || $__default['default'](this).hasClass(CLASS_NAME_DISABLED)) {
          return;
        }

        var parent = Dropdown._getParentFromElement(this);

        var isActive = $__default['default'](parent).hasClass(CLASS_NAME_SHOW$2);

        if (!isActive && event.which === ESCAPE_KEYCODE) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (!isActive || event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE) {
          if (event.which === ESCAPE_KEYCODE) {
            $__default['default'](parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
          }

          $__default['default'](this).trigger('click');
          return;
        }

        var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
          return $__default['default'](item).is(':visible');
        });

        if (items.length === 0) {
          return;
        }

        var index = items.indexOf(event.target);

        if (event.which === ARROW_UP_KEYCODE && index > 0) {
          // Up
          index--;
        }

        if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
          // Down
          index++;
        }

        if (index < 0) {
          index = 0;
        }

        items[index].focus();
      };

      _createClass(Dropdown, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$4;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default$2;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType$2;
        }
      }]);

      return Dropdown;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $__default['default'](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
      event.preventDefault();
      event.stopPropagation();

      Dropdown._jQueryInterface.call($__default['default'](this), 'toggle');
    }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
      e.stopPropagation();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$4] = Dropdown._jQueryInterface;
    $__default['default'].fn[NAME$4].Constructor = Dropdown;

    $__default['default'].fn[NAME$4].noConflict = function () {
      $__default['default'].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
      return Dropdown._jQueryInterface;
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$5 = 'modal';
    var VERSION$5 = '4.5.3';
    var DATA_KEY$5 = 'bs.modal';
    var EVENT_KEY$5 = "." + DATA_KEY$5;
    var DATA_API_KEY$5 = '.data-api';
    var JQUERY_NO_CONFLICT$5 = $__default['default'].fn[NAME$5];
    var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

    var Default$3 = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: true
    };
    var DefaultType$3 = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean'
    };
    var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
    var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
    var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
    var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
    var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
    var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
    var EVENT_RESIZE = "resize" + EVENT_KEY$5;
    var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
    var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
    var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
    var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
    var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
    var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
    var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
    var CLASS_NAME_BACKDROP = 'modal-backdrop';
    var CLASS_NAME_OPEN = 'modal-open';
    var CLASS_NAME_FADE$1 = 'fade';
    var CLASS_NAME_SHOW$3 = 'show';
    var CLASS_NAME_STATIC = 'modal-static';
    var SELECTOR_DIALOG = '.modal-dialog';
    var SELECTOR_MODAL_BODY = '.modal-body';
    var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
    var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
    var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
    var SELECTOR_STICKY_CONTENT = '.sticky-top';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Modal = /*#__PURE__*/function () {
      function Modal(element, config) {
        this._config = this._getConfig(config);
        this._element = element;
        this._dialog = element.querySelector(SELECTOR_DIALOG);
        this._backdrop = null;
        this._isShown = false;
        this._isBodyOverflowing = false;
        this._ignoreBackdropClick = false;
        this._isTransitioning = false;
        this._scrollbarWidth = 0;
      } // Getters


      var _proto = Modal.prototype;

      // Public
      _proto.toggle = function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      };

      _proto.show = function show(relatedTarget) {
        var _this = this;

        if (this._isShown || this._isTransitioning) {
          return;
        }

        if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
          this._isTransitioning = true;
        }

        var showEvent = $__default['default'].Event(EVENT_SHOW$2, {
          relatedTarget: relatedTarget
        });
        $__default['default'](this._element).trigger(showEvent);

        if (this._isShown || showEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = true;

        this._checkScrollbar();

        this._setScrollbar();

        this._adjustDialog();

        this._setEscapeEvent();

        this._setResizeEvent();

        $__default['default'](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
          return _this.hide(event);
        });
        $__default['default'](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
          $__default['default'](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
            if ($__default['default'](event.target).is(_this._element)) {
              _this._ignoreBackdropClick = true;
            }
          });
        });

        this._showBackdrop(function () {
          return _this._showElement(relatedTarget);
        });
      };

      _proto.hide = function hide(event) {
        var _this2 = this;

        if (event) {
          event.preventDefault();
        }

        if (!this._isShown || this._isTransitioning) {
          return;
        }

        var hideEvent = $__default['default'].Event(EVENT_HIDE$2);
        $__default['default'](this._element).trigger(hideEvent);

        if (!this._isShown || hideEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = false;
        var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);

        if (transition) {
          this._isTransitioning = true;
        }

        this._setEscapeEvent();

        this._setResizeEvent();

        $__default['default'](document).off(EVENT_FOCUSIN);
        $__default['default'](this._element).removeClass(CLASS_NAME_SHOW$3);
        $__default['default'](this._element).off(EVENT_CLICK_DISMISS);
        $__default['default'](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

        if (transition) {
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $__default['default'](this._element).one(Util.TRANSITION_END, function (event) {
            return _this2._hideModal(event);
          }).emulateTransitionEnd(transitionDuration);
        } else {
          this._hideModal();
        }
      };

      _proto.dispose = function dispose() {
        [window, this._element, this._dialog].forEach(function (htmlElement) {
          return $__default['default'](htmlElement).off(EVENT_KEY$5);
        });
        /**
         * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
         * Do not move `document` in `htmlElements` array
         * It will remove `EVENT_CLICK_DATA_API` event that should remain
         */

        $__default['default'](document).off(EVENT_FOCUSIN);
        $__default['default'].removeData(this._element, DATA_KEY$5);
        this._config = null;
        this._element = null;
        this._dialog = null;
        this._backdrop = null;
        this._isShown = null;
        this._isBodyOverflowing = null;
        this._ignoreBackdropClick = null;
        this._isTransitioning = null;
        this._scrollbarWidth = null;
      };

      _proto.handleUpdate = function handleUpdate() {
        this._adjustDialog();
      } // Private
      ;

      _proto._getConfig = function _getConfig(config) {
        config = _extends({}, Default$3, config);
        Util.typeCheckConfig(NAME$5, config, DefaultType$3);
        return config;
      };

      _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
        var _this3 = this;

        if (this._config.backdrop === 'static') {
          var hideEventPrevented = $__default['default'].Event(EVENT_HIDE_PREVENTED);
          $__default['default'](this._element).trigger(hideEventPrevented);

          if (hideEventPrevented.isDefaultPrevented()) {
            return;
          }

          var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

          if (!isModalOverflowing) {
            this._element.style.overflowY = 'hidden';
          }

          this._element.classList.add(CLASS_NAME_STATIC);

          var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
          $__default['default'](this._element).off(Util.TRANSITION_END);
          $__default['default'](this._element).one(Util.TRANSITION_END, function () {
            _this3._element.classList.remove(CLASS_NAME_STATIC);

            if (!isModalOverflowing) {
              $__default['default'](_this3._element).one(Util.TRANSITION_END, function () {
                _this3._element.style.overflowY = '';
              }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
            }
          }).emulateTransitionEnd(modalTransitionDuration);

          this._element.focus();
        } else {
          this.hide();
        }
      };

      _proto._showElement = function _showElement(relatedTarget) {
        var _this4 = this;

        var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);
        var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          // Don't move modal's DOM position
          document.body.appendChild(this._element);
        }

        this._element.style.display = 'block';

        this._element.removeAttribute('aria-hidden');

        this._element.setAttribute('aria-modal', true);

        this._element.setAttribute('role', 'dialog');

        if ($__default['default'](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
          modalBody.scrollTop = 0;
        } else {
          this._element.scrollTop = 0;
        }

        if (transition) {
          Util.reflow(this._element);
        }

        $__default['default'](this._element).addClass(CLASS_NAME_SHOW$3);

        if (this._config.focus) {
          this._enforceFocus();
        }

        var shownEvent = $__default['default'].Event(EVENT_SHOWN$2, {
          relatedTarget: relatedTarget
        });

        var transitionComplete = function transitionComplete() {
          if (_this4._config.focus) {
            _this4._element.focus();
          }

          _this4._isTransitioning = false;
          $__default['default'](_this4._element).trigger(shownEvent);
        };

        if (transition) {
          var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
          $__default['default'](this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
        } else {
          transitionComplete();
        }
      };

      _proto._enforceFocus = function _enforceFocus() {
        var _this5 = this;

        $__default['default'](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
        .on(EVENT_FOCUSIN, function (event) {
          if (document !== event.target && _this5._element !== event.target && $__default['default'](_this5._element).has(event.target).length === 0) {
            _this5._element.focus();
          }
        });
      };

      _proto._setEscapeEvent = function _setEscapeEvent() {
        var _this6 = this;

        if (this._isShown) {
          $__default['default'](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
            if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
              event.preventDefault();

              _this6.hide();
            } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
              _this6._triggerBackdropTransition();
            }
          });
        } else if (!this._isShown) {
          $__default['default'](this._element).off(EVENT_KEYDOWN_DISMISS);
        }
      };

      _proto._setResizeEvent = function _setResizeEvent() {
        var _this7 = this;

        if (this._isShown) {
          $__default['default'](window).on(EVENT_RESIZE, function (event) {
            return _this7.handleUpdate(event);
          });
        } else {
          $__default['default'](window).off(EVENT_RESIZE);
        }
      };

      _proto._hideModal = function _hideModal() {
        var _this8 = this;

        this._element.style.display = 'none';

        this._element.setAttribute('aria-hidden', true);

        this._element.removeAttribute('aria-modal');

        this._element.removeAttribute('role');

        this._isTransitioning = false;

        this._showBackdrop(function () {
          $__default['default'](document.body).removeClass(CLASS_NAME_OPEN);

          _this8._resetAdjustments();

          _this8._resetScrollbar();

          $__default['default'](_this8._element).trigger(EVENT_HIDDEN$2);
        });
      };

      _proto._removeBackdrop = function _removeBackdrop() {
        if (this._backdrop) {
          $__default['default'](this._backdrop).remove();
          this._backdrop = null;
        }
      };

      _proto._showBackdrop = function _showBackdrop(callback) {
        var _this9 = this;

        var animate = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

        if (this._isShown && this._config.backdrop) {
          this._backdrop = document.createElement('div');
          this._backdrop.className = CLASS_NAME_BACKDROP;

          if (animate) {
            this._backdrop.classList.add(animate);
          }

          $__default['default'](this._backdrop).appendTo(document.body);
          $__default['default'](this._element).on(EVENT_CLICK_DISMISS, function (event) {
            if (_this9._ignoreBackdropClick) {
              _this9._ignoreBackdropClick = false;
              return;
            }

            if (event.target !== event.currentTarget) {
              return;
            }

            _this9._triggerBackdropTransition();
          });

          if (animate) {
            Util.reflow(this._backdrop);
          }

          $__default['default'](this._backdrop).addClass(CLASS_NAME_SHOW$3);

          if (!callback) {
            return;
          }

          if (!animate) {
            callback();
            return;
          }

          var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
          $__default['default'](this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
        } else if (!this._isShown && this._backdrop) {
          $__default['default'](this._backdrop).removeClass(CLASS_NAME_SHOW$3);

          var callbackRemove = function callbackRemove() {
            _this9._removeBackdrop();

            if (callback) {
              callback();
            }
          };

          if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
            var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

            $__default['default'](this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
          } else {
            callbackRemove();
          }
        } else if (callback) {
          callback();
        }
      } // ----------------------------------------------------------------------
      // the following methods are used to handle overflowing modals
      // todo (fat): these should probably be refactored out of modal.js
      // ----------------------------------------------------------------------
      ;

      _proto._adjustDialog = function _adjustDialog() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!this._isBodyOverflowing && isModalOverflowing) {
          this._element.style.paddingLeft = this._scrollbarWidth + "px";
        }

        if (this._isBodyOverflowing && !isModalOverflowing) {
          this._element.style.paddingRight = this._scrollbarWidth + "px";
        }
      };

      _proto._resetAdjustments = function _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
      };

      _proto._checkScrollbar = function _checkScrollbar() {
        var rect = document.body.getBoundingClientRect();
        this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
        this._scrollbarWidth = this._getScrollbarWidth();
      };

      _proto._setScrollbar = function _setScrollbar() {
        var _this10 = this;

        if (this._isBodyOverflowing) {
          // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
          //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
          var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
          var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

          $__default['default'](fixedContent).each(function (index, element) {
            var actualPadding = element.style.paddingRight;
            var calculatedPadding = $__default['default'](element).css('padding-right');
            $__default['default'](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
          }); // Adjust sticky content margin

          $__default['default'](stickyContent).each(function (index, element) {
            var actualMargin = element.style.marginRight;
            var calculatedMargin = $__default['default'](element).css('margin-right');
            $__default['default'](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
          }); // Adjust body padding

          var actualPadding = document.body.style.paddingRight;
          var calculatedPadding = $__default['default'](document.body).css('padding-right');
          $__default['default'](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
        }

        $__default['default'](document.body).addClass(CLASS_NAME_OPEN);
      };

      _proto._resetScrollbar = function _resetScrollbar() {
        // Restore fixed content padding
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        $__default['default'](fixedContent).each(function (index, element) {
          var padding = $__default['default'](element).data('padding-right');
          $__default['default'](element).removeData('padding-right');
          element.style.paddingRight = padding ? padding : '';
        }); // Restore sticky content

        var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
        $__default['default'](elements).each(function (index, element) {
          var margin = $__default['default'](element).data('margin-right');

          if (typeof margin !== 'undefined') {
            $__default['default'](element).css('margin-right', margin).removeData('margin-right');
          }
        }); // Restore body padding

        var padding = $__default['default'](document.body).data('padding-right');
        $__default['default'](document.body).removeData('padding-right');
        document.body.style.paddingRight = padding ? padding : '';
      };

      _proto._getScrollbarWidth = function _getScrollbarWidth() {
        // thx d.walsh
        var scrollDiv = document.createElement('div');
        scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
      } // Static
      ;

      Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = $__default['default'](this).data(DATA_KEY$5);

          var _config = _extends({}, Default$3, $__default['default'](this).data(), typeof config === 'object' && config ? config : {});

          if (!data) {
            data = new Modal(this, _config);
            $__default['default'](this).data(DATA_KEY$5, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config](relatedTarget);
          } else if (_config.show) {
            data.show(relatedTarget);
          }
        });
      };

      _createClass(Modal, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$5;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default$3;
        }
      }]);

      return Modal;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $__default['default'](document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
      var _this11 = this;

      var target;
      var selector = Util.getSelectorFromElement(this);

      if (selector) {
        target = document.querySelector(selector);
      }

      var config = $__default['default'](target).data(DATA_KEY$5) ? 'toggle' : _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

      if (this.tagName === 'A' || this.tagName === 'AREA') {
        event.preventDefault();
      }

      var $target = $__default['default'](target).one(EVENT_SHOW$2, function (showEvent) {
        if (showEvent.isDefaultPrevented()) {
          // Only register focus restorer if modal will actually get shown
          return;
        }

        $target.one(EVENT_HIDDEN$2, function () {
          if ($__default['default'](_this11).is(':visible')) {
            _this11.focus();
          }
        });
      });

      Modal._jQueryInterface.call($__default['default'](target), config, this);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$5] = Modal._jQueryInterface;
    $__default['default'].fn[NAME$5].Constructor = Modal;

    $__default['default'].fn[NAME$5].noConflict = function () {
      $__default['default'].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
      return Modal._jQueryInterface;
    };

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.5.3): tools/sanitizer.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
    var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
    var DefaultWhitelist = {
      // Global attributes allowed on any supplied element below.
      '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
      a: ['target', 'href', 'title', 'rel'],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    };
    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */

    var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
    /**
     * A pattern that matches safe data URLs. Only matches image, video and audio types.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */

    var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function allowedAttribute(attr, allowedAttributeList) {
      var attrName = attr.nodeName.toLowerCase();

      if (allowedAttributeList.indexOf(attrName) !== -1) {
        if (uriAttrs.indexOf(attrName) !== -1) {
          return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
        }

        return true;
      }

      var regExp = allowedAttributeList.filter(function (attrRegex) {
        return attrRegex instanceof RegExp;
      }); // Check if a regular expression validates the attribute.

      for (var i = 0, len = regExp.length; i < len; i++) {
        if (attrName.match(regExp[i])) {
          return true;
        }
      }

      return false;
    }

    function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
      if (unsafeHtml.length === 0) {
        return unsafeHtml;
      }

      if (sanitizeFn && typeof sanitizeFn === 'function') {
        return sanitizeFn(unsafeHtml);
      }

      var domParser = new window.DOMParser();
      var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
      var whitelistKeys = Object.keys(whiteList);
      var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

      var _loop = function _loop(i, len) {
        var el = elements[i];
        var elName = el.nodeName.toLowerCase();

        if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
          el.parentNode.removeChild(el);
          return "continue";
        }

        var attributeList = [].slice.call(el.attributes);
        var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
        attributeList.forEach(function (attr) {
          if (!allowedAttribute(attr, whitelistedAttributes)) {
            el.removeAttribute(attr.nodeName);
          }
        });
      };

      for (var i = 0, len = elements.length; i < len; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
      }

      return createdDocument.body.innerHTML;
    }

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$6 = 'tooltip';
    var VERSION$6 = '4.5.3';
    var DATA_KEY$6 = 'bs.tooltip';
    var EVENT_KEY$6 = "." + DATA_KEY$6;
    var JQUERY_NO_CONFLICT$6 = $__default['default'].fn[NAME$6];
    var CLASS_PREFIX = 'bs-tooltip';
    var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
    var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
    var DefaultType$4 = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      whiteList: 'object',
      popperConfig: '(null|object)'
    };
    var AttachmentMap = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left'
    };
    var Default$4 = {
      animation: true,
      template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: false,
      selector: false,
      placement: 'top',
      offset: 0,
      container: false,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent',
      sanitize: true,
      sanitizeFn: null,
      whiteList: DefaultWhitelist,
      popperConfig: null
    };
    var HOVER_STATE_SHOW = 'show';
    var HOVER_STATE_OUT = 'out';
    var Event = {
      HIDE: "hide" + EVENT_KEY$6,
      HIDDEN: "hidden" + EVENT_KEY$6,
      SHOW: "show" + EVENT_KEY$6,
      SHOWN: "shown" + EVENT_KEY$6,
      INSERTED: "inserted" + EVENT_KEY$6,
      CLICK: "click" + EVENT_KEY$6,
      FOCUSIN: "focusin" + EVENT_KEY$6,
      FOCUSOUT: "focusout" + EVENT_KEY$6,
      MOUSEENTER: "mouseenter" + EVENT_KEY$6,
      MOUSELEAVE: "mouseleave" + EVENT_KEY$6
    };
    var CLASS_NAME_FADE$2 = 'fade';
    var CLASS_NAME_SHOW$4 = 'show';
    var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
    var SELECTOR_ARROW = '.arrow';
    var TRIGGER_HOVER = 'hover';
    var TRIGGER_FOCUS = 'focus';
    var TRIGGER_CLICK = 'click';
    var TRIGGER_MANUAL = 'manual';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Tooltip = /*#__PURE__*/function () {
      function Tooltip(element, config) {
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
        } // private


        this._isEnabled = true;
        this._timeout = 0;
        this._hoverState = '';
        this._activeTrigger = {};
        this._popper = null; // Protected

        this.element = element;
        this.config = this._getConfig(config);
        this.tip = null;

        this._setListeners();
      } // Getters


      var _proto = Tooltip.prototype;

      // Public
      _proto.enable = function enable() {
        this._isEnabled = true;
      };

      _proto.disable = function disable() {
        this._isEnabled = false;
      };

      _proto.toggleEnabled = function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      };

      _proto.toggle = function toggle(event) {
        if (!this._isEnabled) {
          return;
        }

        if (event) {
          var dataKey = this.constructor.DATA_KEY;
          var context = $__default['default'](event.currentTarget).data(dataKey);

          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $__default['default'](event.currentTarget).data(dataKey, context);
          }

          context._activeTrigger.click = !context._activeTrigger.click;

          if (context._isWithActiveTrigger()) {
            context._enter(null, context);
          } else {
            context._leave(null, context);
          }
        } else {
          if ($__default['default'](this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
            this._leave(null, this);

            return;
          }

          this._enter(null, this);
        }
      };

      _proto.dispose = function dispose() {
        clearTimeout(this._timeout);
        $__default['default'].removeData(this.element, this.constructor.DATA_KEY);
        $__default['default'](this.element).off(this.constructor.EVENT_KEY);
        $__default['default'](this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

        if (this.tip) {
          $__default['default'](this.tip).remove();
        }

        this._isEnabled = null;
        this._timeout = null;
        this._hoverState = null;
        this._activeTrigger = null;

        if (this._popper) {
          this._popper.destroy();
        }

        this._popper = null;
        this.element = null;
        this.config = null;
        this.tip = null;
      };

      _proto.show = function show() {
        var _this = this;

        if ($__default['default'](this.element).css('display') === 'none') {
          throw new Error('Please use show on visible elements');
        }

        var showEvent = $__default['default'].Event(this.constructor.Event.SHOW);

        if (this.isWithContent() && this._isEnabled) {
          $__default['default'](this.element).trigger(showEvent);
          var shadowRoot = Util.findShadowRoot(this.element);
          var isInTheDom = $__default['default'].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

          if (showEvent.isDefaultPrevented() || !isInTheDom) {
            return;
          }

          var tip = this.getTipElement();
          var tipId = Util.getUID(this.constructor.NAME);
          tip.setAttribute('id', tipId);
          this.element.setAttribute('aria-describedby', tipId);
          this.setContent();

          if (this.config.animation) {
            $__default['default'](tip).addClass(CLASS_NAME_FADE$2);
          }

          var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

          var attachment = this._getAttachment(placement);

          this.addAttachmentClass(attachment);

          var container = this._getContainer();

          $__default['default'](tip).data(this.constructor.DATA_KEY, this);

          if (!$__default['default'].contains(this.element.ownerDocument.documentElement, this.tip)) {
            $__default['default'](tip).appendTo(container);
          }

          $__default['default'](this.element).trigger(this.constructor.Event.INSERTED);
          this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
          $__default['default'](tip).addClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we add extra
          // empty mouseover listeners to the body's immediate children;
          // only needed because of broken event delegation on iOS
          // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

          if ('ontouchstart' in document.documentElement) {
            $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
          }

          var complete = function complete() {
            if (_this.config.animation) {
              _this._fixTransition();
            }

            var prevHoverState = _this._hoverState;
            _this._hoverState = null;
            $__default['default'](_this.element).trigger(_this.constructor.Event.SHOWN);

            if (prevHoverState === HOVER_STATE_OUT) {
              _this._leave(null, _this);
            }
          };

          if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
            var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
            $__default['default'](this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }
        }
      };

      _proto.hide = function hide(callback) {
        var _this2 = this;

        var tip = this.getTipElement();
        var hideEvent = $__default['default'].Event(this.constructor.Event.HIDE);

        var complete = function complete() {
          if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
            tip.parentNode.removeChild(tip);
          }

          _this2._cleanTipClass();

          _this2.element.removeAttribute('aria-describedby');

          $__default['default'](_this2.element).trigger(_this2.constructor.Event.HIDDEN);

          if (_this2._popper !== null) {
            _this2._popper.destroy();
          }

          if (callback) {
            callback();
          }
        };

        $__default['default'](this.element).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          return;
        }

        $__default['default'](tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support

        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
        }

        this._activeTrigger[TRIGGER_CLICK] = false;
        this._activeTrigger[TRIGGER_FOCUS] = false;
        this._activeTrigger[TRIGGER_HOVER] = false;

        if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
          var transitionDuration = Util.getTransitionDurationFromElement(tip);
          $__default['default'](tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }

        this._hoverState = '';
      };

      _proto.update = function update() {
        if (this._popper !== null) {
          this._popper.scheduleUpdate();
        }
      } // Protected
      ;

      _proto.isWithContent = function isWithContent() {
        return Boolean(this.getTitle());
      };

      _proto.addAttachmentClass = function addAttachmentClass(attachment) {
        $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
      };

      _proto.getTipElement = function getTipElement() {
        this.tip = this.tip || $__default['default'](this.config.template)[0];
        return this.tip;
      };

      _proto.setContent = function setContent() {
        var tip = this.getTipElement();
        this.setElementContent($__default['default'](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
        $__default['default'](tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
      };

      _proto.setElementContent = function setElementContent($element, content) {
        if (typeof content === 'object' && (content.nodeType || content.jquery)) {
          // Content is a DOM node or a jQuery
          if (this.config.html) {
            if (!$__default['default'](content).parent().is($element)) {
              $element.empty().append(content);
            }
          } else {
            $element.text($__default['default'](content).text());
          }

          return;
        }

        if (this.config.html) {
          if (this.config.sanitize) {
            content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
          }

          $element.html(content);
        } else {
          $element.text(content);
        }
      };

      _proto.getTitle = function getTitle() {
        var title = this.element.getAttribute('data-original-title');

        if (!title) {
          title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
        }

        return title;
      } // Private
      ;

      _proto._getPopperConfig = function _getPopperConfig(attachment) {
        var _this3 = this;

        var defaultBsConfig = {
          placement: attachment,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: SELECTOR_ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this3._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            return _this3._handlePopperPlacementChange(data);
          }
        };
        return _extends({}, defaultBsConfig, this.config.popperConfig);
      };

      _proto._getOffset = function _getOffset() {
        var _this4 = this;

        var offset = {};

        if (typeof this.config.offset === 'function') {
          offset.fn = function (data) {
            data.offsets = _extends({}, data.offsets, _this4.config.offset(data.offsets, _this4.element) || {});
            return data;
          };
        } else {
          offset.offset = this.config.offset;
        }

        return offset;
      };

      _proto._getContainer = function _getContainer() {
        if (this.config.container === false) {
          return document.body;
        }

        if (Util.isElement(this.config.container)) {
          return $__default['default'](this.config.container);
        }

        return $__default['default'](document).find(this.config.container);
      };

      _proto._getAttachment = function _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
      };

      _proto._setListeners = function _setListeners() {
        var _this5 = this;

        var triggers = this.config.trigger.split(' ');
        triggers.forEach(function (trigger) {
          if (trigger === 'click') {
            $__default['default'](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
              return _this5.toggle(event);
            });
          } else if (trigger !== TRIGGER_MANUAL) {
            var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
            var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
            $__default['default'](_this5.element).on(eventIn, _this5.config.selector, function (event) {
              return _this5._enter(event);
            }).on(eventOut, _this5.config.selector, function (event) {
              return _this5._leave(event);
            });
          }
        });

        this._hideModalHandler = function () {
          if (_this5.element) {
            _this5.hide();
          }
        };

        $__default['default'](this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

        if (this.config.selector) {
          this.config = _extends({}, this.config, {
            trigger: 'manual',
            selector: ''
          });
        } else {
          this._fixTitle();
        }
      };

      _proto._fixTitle = function _fixTitle() {
        var titleType = typeof this.element.getAttribute('data-original-title');

        if (this.element.getAttribute('title') || titleType !== 'string') {
          this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
          this.element.setAttribute('title', '');
        }
      };

      _proto._enter = function _enter(event, context) {
        var dataKey = this.constructor.DATA_KEY;
        context = context || $__default['default'](event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default['default'](event.currentTarget).data(dataKey, context);
        }

        if (event) {
          context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
        }

        if ($__default['default'](context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
          context._hoverState = HOVER_STATE_SHOW;
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_SHOW;

        if (!context.config.delay || !context.config.delay.show) {
          context.show();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HOVER_STATE_SHOW) {
            context.show();
          }
        }, context.config.delay.show);
      };

      _proto._leave = function _leave(event, context) {
        var dataKey = this.constructor.DATA_KEY;
        context = context || $__default['default'](event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default['default'](event.currentTarget).data(dataKey, context);
        }

        if (event) {
          context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
        }

        if (context._isWithActiveTrigger()) {
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_OUT;

        if (!context.config.delay || !context.config.delay.hide) {
          context.hide();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HOVER_STATE_OUT) {
            context.hide();
          }
        }, context.config.delay.hide);
      };

      _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
        for (var trigger in this._activeTrigger) {
          if (this._activeTrigger[trigger]) {
            return true;
          }
        }

        return false;
      };

      _proto._getConfig = function _getConfig(config) {
        var dataAttributes = $__default['default'](this.element).data();
        Object.keys(dataAttributes).forEach(function (dataAttr) {
          if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
            delete dataAttributes[dataAttr];
          }
        });
        config = _extends({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

        if (typeof config.delay === 'number') {
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        }

        if (typeof config.title === 'number') {
          config.title = config.title.toString();
        }

        if (typeof config.content === 'number') {
          config.content = config.content.toString();
        }

        Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

        if (config.sanitize) {
          config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
        }

        return config;
      };

      _proto._getDelegateConfig = function _getDelegateConfig() {
        var config = {};

        if (this.config) {
          for (var key in this.config) {
            if (this.constructor.Default[key] !== this.config[key]) {
              config[key] = this.config[key];
            }
          }
        }

        return config;
      };

      _proto._cleanTipClass = function _cleanTipClass() {
        var $tip = $__default['default'](this.getTipElement());
        var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

        if (tabClass !== null && tabClass.length) {
          $tip.removeClass(tabClass.join(''));
        }
      };

      _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
        this.tip = popperData.instance.popper;

        this._cleanTipClass();

        this.addAttachmentClass(this._getAttachment(popperData.placement));
      };

      _proto._fixTransition = function _fixTransition() {
        var tip = this.getTipElement();
        var initConfigAnimation = this.config.animation;

        if (tip.getAttribute('x-placement') !== null) {
          return;
        }

        $__default['default'](tip).removeClass(CLASS_NAME_FADE$2);
        this.config.animation = false;
        this.hide();
        this.show();
        this.config.animation = initConfigAnimation;
      } // Static
      ;

      Tooltip._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $element = $__default['default'](this);
          var data = $element.data(DATA_KEY$6);

          var _config = typeof config === 'object' && config;

          if (!data && /dispose|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Tooltip(this, _config);
            $element.data(DATA_KEY$6, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Tooltip, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$6;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default$4;
        }
      }, {
        key: "NAME",
        get: function get() {
          return NAME$6;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return DATA_KEY$6;
        }
      }, {
        key: "Event",
        get: function get() {
          return Event;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return EVENT_KEY$6;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType$4;
        }
      }]);

      return Tooltip;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$6] = Tooltip._jQueryInterface;
    $__default['default'].fn[NAME$6].Constructor = Tooltip;

    $__default['default'].fn[NAME$6].noConflict = function () {
      $__default['default'].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
      return Tooltip._jQueryInterface;
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$7 = 'popover';
    var VERSION$7 = '4.5.3';
    var DATA_KEY$7 = 'bs.popover';
    var EVENT_KEY$7 = "." + DATA_KEY$7;
    var JQUERY_NO_CONFLICT$7 = $__default['default'].fn[NAME$7];
    var CLASS_PREFIX$1 = 'bs-popover';
    var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

    var Default$5 = _extends({}, Tooltip.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
    });

    var DefaultType$5 = _extends({}, Tooltip.DefaultType, {
      content: '(string|element|function)'
    });

    var CLASS_NAME_FADE$3 = 'fade';
    var CLASS_NAME_SHOW$5 = 'show';
    var SELECTOR_TITLE = '.popover-header';
    var SELECTOR_CONTENT = '.popover-body';
    var Event$1 = {
      HIDE: "hide" + EVENT_KEY$7,
      HIDDEN: "hidden" + EVENT_KEY$7,
      SHOW: "show" + EVENT_KEY$7,
      SHOWN: "shown" + EVENT_KEY$7,
      INSERTED: "inserted" + EVENT_KEY$7,
      CLICK: "click" + EVENT_KEY$7,
      FOCUSIN: "focusin" + EVENT_KEY$7,
      FOCUSOUT: "focusout" + EVENT_KEY$7,
      MOUSEENTER: "mouseenter" + EVENT_KEY$7,
      MOUSELEAVE: "mouseleave" + EVENT_KEY$7
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Popover = /*#__PURE__*/function (_Tooltip) {
      _inheritsLoose(Popover, _Tooltip);

      function Popover() {
        return _Tooltip.apply(this, arguments) || this;
      }

      var _proto = Popover.prototype;

      // Overrides
      _proto.isWithContent = function isWithContent() {
        return this.getTitle() || this._getContent();
      };

      _proto.addAttachmentClass = function addAttachmentClass(attachment) {
        $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
      };

      _proto.getTipElement = function getTipElement() {
        this.tip = this.tip || $__default['default'](this.config.template)[0];
        return this.tip;
      };

      _proto.setContent = function setContent() {
        var $tip = $__default['default'](this.getTipElement()); // We use append for html objects to maintain js events

        this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

        var content = this._getContent();

        if (typeof content === 'function') {
          content = content.call(this.element);
        }

        this.setElementContent($tip.find(SELECTOR_CONTENT), content);
        $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
      } // Private
      ;

      _proto._getContent = function _getContent() {
        return this.element.getAttribute('data-content') || this.config.content;
      };

      _proto._cleanTipClass = function _cleanTipClass() {
        var $tip = $__default['default'](this.getTipElement());
        var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

        if (tabClass !== null && tabClass.length > 0) {
          $tip.removeClass(tabClass.join(''));
        }
      } // Static
      ;

      Popover._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $__default['default'](this).data(DATA_KEY$7);

          var _config = typeof config === 'object' ? config : null;

          if (!data && /dispose|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Popover(this, _config);
            $__default['default'](this).data(DATA_KEY$7, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Popover, null, [{
        key: "VERSION",
        // Getters
        get: function get() {
          return VERSION$7;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default$5;
        }
      }, {
        key: "NAME",
        get: function get() {
          return NAME$7;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return DATA_KEY$7;
        }
      }, {
        key: "Event",
        get: function get() {
          return Event$1;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return EVENT_KEY$7;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType$5;
        }
      }]);

      return Popover;
    }(Tooltip);
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$7] = Popover._jQueryInterface;
    $__default['default'].fn[NAME$7].Constructor = Popover;

    $__default['default'].fn[NAME$7].noConflict = function () {
      $__default['default'].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
      return Popover._jQueryInterface;
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$8 = 'scrollspy';
    var VERSION$8 = '4.5.3';
    var DATA_KEY$8 = 'bs.scrollspy';
    var EVENT_KEY$8 = "." + DATA_KEY$8;
    var DATA_API_KEY$6 = '.data-api';
    var JQUERY_NO_CONFLICT$8 = $__default['default'].fn[NAME$8];
    var Default$6 = {
      offset: 10,
      method: 'auto',
      target: ''
    };
    var DefaultType$6 = {
      offset: 'number',
      method: 'string',
      target: '(string|element)'
    };
    var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
    var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
    var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
    var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
    var CLASS_NAME_ACTIVE$2 = 'active';
    var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
    var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
    var SELECTOR_NAV_LINKS = '.nav-link';
    var SELECTOR_NAV_ITEMS = '.nav-item';
    var SELECTOR_LIST_ITEMS = '.list-group-item';
    var SELECTOR_DROPDOWN = '.dropdown';
    var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
    var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
    var METHOD_OFFSET = 'offset';
    var METHOD_POSITION = 'position';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var ScrollSpy = /*#__PURE__*/function () {
      function ScrollSpy(element, config) {
        var _this = this;

        this._element = element;
        this._scrollElement = element.tagName === 'BODY' ? window : element;
        this._config = this._getConfig(config);
        this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
        this._offsets = [];
        this._targets = [];
        this._activeTarget = null;
        this._scrollHeight = 0;
        $__default['default'](this._scrollElement).on(EVENT_SCROLL, function (event) {
          return _this._process(event);
        });
        this.refresh();

        this._process();
      } // Getters


      var _proto = ScrollSpy.prototype;

      // Public
      _proto.refresh = function refresh() {
        var _this2 = this;

        var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
        var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
        var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
        this._offsets = [];
        this._targets = [];
        this._scrollHeight = this._getScrollHeight();
        var targets = [].slice.call(document.querySelectorAll(this._selector));
        targets.map(function (element) {
          var target;
          var targetSelector = Util.getSelectorFromElement(element);

          if (targetSelector) {
            target = document.querySelector(targetSelector);
          }

          if (target) {
            var targetBCR = target.getBoundingClientRect();

            if (targetBCR.width || targetBCR.height) {
              // TODO (fat): remove sketch reliance on jQuery position/offset
              return [$__default['default'](target)[offsetMethod]().top + offsetBase, targetSelector];
            }
          }

          return null;
        }).filter(function (item) {
          return item;
        }).sort(function (a, b) {
          return a[0] - b[0];
        }).forEach(function (item) {
          _this2._offsets.push(item[0]);

          _this2._targets.push(item[1]);
        });
      };

      _proto.dispose = function dispose() {
        $__default['default'].removeData(this._element, DATA_KEY$8);
        $__default['default'](this._scrollElement).off(EVENT_KEY$8);
        this._element = null;
        this._scrollElement = null;
        this._config = null;
        this._selector = null;
        this._offsets = null;
        this._targets = null;
        this._activeTarget = null;
        this._scrollHeight = null;
      } // Private
      ;

      _proto._getConfig = function _getConfig(config) {
        config = _extends({}, Default$6, typeof config === 'object' && config ? config : {});

        if (typeof config.target !== 'string' && Util.isElement(config.target)) {
          var id = $__default['default'](config.target).attr('id');

          if (!id) {
            id = Util.getUID(NAME$8);
            $__default['default'](config.target).attr('id', id);
          }

          config.target = "#" + id;
        }

        Util.typeCheckConfig(NAME$8, config, DefaultType$6);
        return config;
      };

      _proto._getScrollTop = function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      };

      _proto._getScrollHeight = function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      };

      _proto._getOffsetHeight = function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      };

      _proto._process = function _process() {
        var scrollTop = this._getScrollTop() + this._config.offset;

        var scrollHeight = this._getScrollHeight();

        var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

        if (this._scrollHeight !== scrollHeight) {
          this.refresh();
        }

        if (scrollTop >= maxScroll) {
          var target = this._targets[this._targets.length - 1];

          if (this._activeTarget !== target) {
            this._activate(target);
          }

          return;
        }

        if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
          this._activeTarget = null;

          this._clear();

          return;
        }

        for (var i = this._offsets.length; i--;) {
          var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

          if (isActiveTarget) {
            this._activate(this._targets[i]);
          }
        }
      };

      _proto._activate = function _activate(target) {
        this._activeTarget = target;

        this._clear();

        var queries = this._selector.split(',').map(function (selector) {
          return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
        });

        var $link = $__default['default']([].slice.call(document.querySelectorAll(queries.join(','))));

        if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
          $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
          $link.addClass(CLASS_NAME_ACTIVE$2);
        } else {
          // Set triggered link as active
          $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

          $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

          $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
        }

        $__default['default'](this._scrollElement).trigger(EVENT_ACTIVATE, {
          relatedTarget: target
        });
      };

      _proto._clear = function _clear() {
        [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
          return node.classList.contains(CLASS_NAME_ACTIVE$2);
        }).forEach(function (node) {
          return node.classList.remove(CLASS_NAME_ACTIVE$2);
        });
      } // Static
      ;

      ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $__default['default'](this).data(DATA_KEY$8);

          var _config = typeof config === 'object' && config;

          if (!data) {
            data = new ScrollSpy(this, _config);
            $__default['default'](this).data(DATA_KEY$8, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(ScrollSpy, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$8;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default$6;
        }
      }]);

      return ScrollSpy;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $__default['default'](window).on(EVENT_LOAD_DATA_API$2, function () {
      var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
      var scrollSpysLength = scrollSpys.length;

      for (var i = scrollSpysLength; i--;) {
        var $spy = $__default['default'](scrollSpys[i]);

        ScrollSpy._jQueryInterface.call($spy, $spy.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$8] = ScrollSpy._jQueryInterface;
    $__default['default'].fn[NAME$8].Constructor = ScrollSpy;

    $__default['default'].fn[NAME$8].noConflict = function () {
      $__default['default'].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
      return ScrollSpy._jQueryInterface;
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$9 = 'tab';
    var VERSION$9 = '4.5.3';
    var DATA_KEY$9 = 'bs.tab';
    var EVENT_KEY$9 = "." + DATA_KEY$9;
    var DATA_API_KEY$7 = '.data-api';
    var JQUERY_NO_CONFLICT$9 = $__default['default'].fn[NAME$9];
    var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
    var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
    var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
    var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
    var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
    var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
    var CLASS_NAME_ACTIVE$3 = 'active';
    var CLASS_NAME_DISABLED$1 = 'disabled';
    var CLASS_NAME_FADE$4 = 'fade';
    var CLASS_NAME_SHOW$6 = 'show';
    var SELECTOR_DROPDOWN$1 = '.dropdown';
    var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
    var SELECTOR_ACTIVE$2 = '.active';
    var SELECTOR_ACTIVE_UL = '> li > .active';
    var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
    var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
    var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Tab = /*#__PURE__*/function () {
      function Tab(element) {
        this._element = element;
      } // Getters


      var _proto = Tab.prototype;

      // Public
      _proto.show = function show() {
        var _this = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default['default'](this._element).hasClass(CLASS_NAME_ACTIVE$3) || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED$1)) {
          return;
        }

        var target;
        var previous;
        var listElement = $__default['default'](this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
        var selector = Util.getSelectorFromElement(this._element);

        if (listElement) {
          var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
          previous = $__default['default'].makeArray($__default['default'](listElement).find(itemSelector));
          previous = previous[previous.length - 1];
        }

        var hideEvent = $__default['default'].Event(EVENT_HIDE$3, {
          relatedTarget: this._element
        });
        var showEvent = $__default['default'].Event(EVENT_SHOW$3, {
          relatedTarget: previous
        });

        if (previous) {
          $__default['default'](previous).trigger(hideEvent);
        }

        $__default['default'](this._element).trigger(showEvent);

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
          return;
        }

        if (selector) {
          target = document.querySelector(selector);
        }

        this._activate(this._element, listElement);

        var complete = function complete() {
          var hiddenEvent = $__default['default'].Event(EVENT_HIDDEN$3, {
            relatedTarget: _this._element
          });
          var shownEvent = $__default['default'].Event(EVENT_SHOWN$3, {
            relatedTarget: previous
          });
          $__default['default'](previous).trigger(hiddenEvent);
          $__default['default'](_this._element).trigger(shownEvent);
        };

        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      };

      _proto.dispose = function dispose() {
        $__default['default'].removeData(this._element, DATA_KEY$9);
        this._element = null;
      } // Private
      ;

      _proto._activate = function _activate(element, container, callback) {
        var _this2 = this;

        var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $__default['default'](container).find(SELECTOR_ACTIVE_UL) : $__default['default'](container).children(SELECTOR_ACTIVE$2);
        var active = activeElements[0];
        var isTransitioning = callback && active && $__default['default'](active).hasClass(CLASS_NAME_FADE$4);

        var complete = function complete() {
          return _this2._transitionComplete(element, active, callback);
        };

        if (active && isTransitioning) {
          var transitionDuration = Util.getTransitionDurationFromElement(active);
          $__default['default'](active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      };

      _proto._transitionComplete = function _transitionComplete(element, active, callback) {
        if (active) {
          $__default['default'](active).removeClass(CLASS_NAME_ACTIVE$3);
          var dropdownChild = $__default['default'](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

          if (dropdownChild) {
            $__default['default'](dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
          }

          if (active.getAttribute('role') === 'tab') {
            active.setAttribute('aria-selected', false);
          }
        }

        $__default['default'](element).addClass(CLASS_NAME_ACTIVE$3);

        if (element.getAttribute('role') === 'tab') {
          element.setAttribute('aria-selected', true);
        }

        Util.reflow(element);

        if (element.classList.contains(CLASS_NAME_FADE$4)) {
          element.classList.add(CLASS_NAME_SHOW$6);
        }

        if (element.parentNode && $__default['default'](element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
          var dropdownElement = $__default['default'](element).closest(SELECTOR_DROPDOWN$1)[0];

          if (dropdownElement) {
            var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
            $__default['default'](dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
          }

          element.setAttribute('aria-expanded', true);
        }

        if (callback) {
          callback();
        }
      } // Static
      ;

      Tab._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $__default['default'](this);
          var data = $this.data(DATA_KEY$9);

          if (!data) {
            data = new Tab(this);
            $this.data(DATA_KEY$9, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Tab, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$9;
        }
      }]);

      return Tab;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $__default['default'](document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
      event.preventDefault();

      Tab._jQueryInterface.call($__default['default'](this), 'show');
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$9] = Tab._jQueryInterface;
    $__default['default'].fn[NAME$9].Constructor = Tab;

    $__default['default'].fn[NAME$9].noConflict = function () {
      $__default['default'].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
      return Tab._jQueryInterface;
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$a = 'toast';
    var VERSION$a = '4.5.3';
    var DATA_KEY$a = 'bs.toast';
    var EVENT_KEY$a = "." + DATA_KEY$a;
    var JQUERY_NO_CONFLICT$a = $__default['default'].fn[NAME$a];
    var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
    var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
    var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
    var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
    var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
    var CLASS_NAME_FADE$5 = 'fade';
    var CLASS_NAME_HIDE = 'hide';
    var CLASS_NAME_SHOW$7 = 'show';
    var CLASS_NAME_SHOWING = 'showing';
    var DefaultType$7 = {
      animation: 'boolean',
      autohide: 'boolean',
      delay: 'number'
    };
    var Default$7 = {
      animation: true,
      autohide: true,
      delay: 500
    };
    var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Toast = /*#__PURE__*/function () {
      function Toast(element, config) {
        this._element = element;
        this._config = this._getConfig(config);
        this._timeout = null;

        this._setListeners();
      } // Getters


      var _proto = Toast.prototype;

      // Public
      _proto.show = function show() {
        var _this = this;

        var showEvent = $__default['default'].Event(EVENT_SHOW$4);
        $__default['default'](this._element).trigger(showEvent);

        if (showEvent.isDefaultPrevented()) {
          return;
        }

        this._clearTimeout();

        if (this._config.animation) {
          this._element.classList.add(CLASS_NAME_FADE$5);
        }

        var complete = function complete() {
          _this._element.classList.remove(CLASS_NAME_SHOWING);

          _this._element.classList.add(CLASS_NAME_SHOW$7);

          $__default['default'](_this._element).trigger(EVENT_SHOWN$4);

          if (_this._config.autohide) {
            _this._timeout = setTimeout(function () {
              _this.hide();
            }, _this._config.delay);
          }
        };

        this._element.classList.remove(CLASS_NAME_HIDE);

        Util.reflow(this._element);

        this._element.classList.add(CLASS_NAME_SHOWING);

        if (this._config.animation) {
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      };

      _proto.hide = function hide() {
        if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
          return;
        }

        var hideEvent = $__default['default'].Event(EVENT_HIDE$4);
        $__default['default'](this._element).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          return;
        }

        this._close();
      };

      _proto.dispose = function dispose() {
        this._clearTimeout();

        if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
          this._element.classList.remove(CLASS_NAME_SHOW$7);
        }

        $__default['default'](this._element).off(EVENT_CLICK_DISMISS$1);
        $__default['default'].removeData(this._element, DATA_KEY$a);
        this._element = null;
        this._config = null;
      } // Private
      ;

      _proto._getConfig = function _getConfig(config) {
        config = _extends({}, Default$7, $__default['default'](this._element).data(), typeof config === 'object' && config ? config : {});
        Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
        return config;
      };

      _proto._setListeners = function _setListeners() {
        var _this2 = this;

        $__default['default'](this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
          return _this2.hide();
        });
      };

      _proto._close = function _close() {
        var _this3 = this;

        var complete = function complete() {
          _this3._element.classList.add(CLASS_NAME_HIDE);

          $__default['default'](_this3._element).trigger(EVENT_HIDDEN$4);
        };

        this._element.classList.remove(CLASS_NAME_SHOW$7);

        if (this._config.animation) {
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      };

      _proto._clearTimeout = function _clearTimeout() {
        clearTimeout(this._timeout);
        this._timeout = null;
      } // Static
      ;

      Toast._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $element = $__default['default'](this);
          var data = $element.data(DATA_KEY$a);

          var _config = typeof config === 'object' && config;

          if (!data) {
            data = new Toast(this, _config);
            $element.data(DATA_KEY$a, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config](this);
          }
        });
      };

      _createClass(Toast, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$a;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType$7;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default$7;
        }
      }]);

      return Toast;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$a] = Toast._jQueryInterface;
    $__default['default'].fn[NAME$a].Constructor = Toast;

    $__default['default'].fn[NAME$a].noConflict = function () {
      $__default['default'].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
      return Toast._jQueryInterface;
    };

    exports.Alert = Alert;
    exports.Button = Button;
    exports.Carousel = Carousel;
    exports.Collapse = Collapse;
    exports.Dropdown = Dropdown;
    exports.Modal = Modal;
    exports.Popover = Popover;
    exports.Scrollspy = ScrollSpy;
    exports.Tab = Tab;
    exports.Toast = Toast;
    exports.Tooltip = Tooltip;
    exports.Util = Util;

    Object.defineProperty(exports, '__esModule', { value: true });
  });
  //# sourceMappingURL=bootstrap.bundle.js.map
});
define("ember-app/templates/bootstrap/js/bootstrap.bundle.min", ["module", "exports", "jquery"], function (module, exports) {
  "use strict";

  /*!
    * Bootstrap v4.5.3 (https://getbootstrap.com/)
    * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  !function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}, t.jQuery);
  }(undefined, function (t, e) {
    "use strict";
    function n(t) {
      return t && "object" == typeof t && "default" in t ? t : { default: t };
    }var i = n(e);function o(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }function r(t, e, n) {
      return e && o(t.prototype, e), n && o(t, n), t;
    }function a() {
      return (a = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }return t;
      }).apply(this, arguments);
    }function s(t) {
      var e = this,
          n = !1;return i.default(this).one(l.TRANSITION_END, function () {
        n = !0;
      }), setTimeout(function () {
        n || l.triggerTransitionEnd(e);
      }, t), this;
    }var l = { TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
        do {
          t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));return t;
      }, getSelectorFromElement: function (t) {
        var e = t.getAttribute("data-target");if (!e || "#" === e) {
          var n = t.getAttribute("href");e = n && "#" !== n ? n.trim() : "";
        }try {
          return document.querySelector(e) ? e : null;
        } catch (t) {
          return null;
        }
      }, getTransitionDurationFromElement: function (t) {
        if (!t) return 0;var e = i.default(t).css("transition-duration"),
            n = i.default(t).css("transition-delay"),
            o = parseFloat(e),
            r = parseFloat(n);return o || r ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
      }, reflow: function (t) {
        return t.offsetHeight;
      }, triggerTransitionEnd: function (t) {
        i.default(t).trigger("transitionend");
      }, supportsTransitionEnd: function () {
        return Boolean("transitionend");
      }, isElement: function (t) {
        return (t[0] || t).nodeType;
      }, typeCheckConfig: function (t, e, n) {
        for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              r = e[i],
              a = r && l.isElement(r) ? "element" : null === (s = r) || "undefined" == typeof s ? "" + s : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".');
        }var s;
      }, findShadowRoot: function (t) {
        if (!document.documentElement.attachShadow) return null;if ("function" == typeof t.getRootNode) {
          var e = t.getRootNode();return e instanceof ShadowRoot ? e : null;
        }return t instanceof ShadowRoot ? t : t.parentNode ? l.findShadowRoot(t.parentNode) : null;
      }, jQueryDetection: function () {
        if ("undefined" == typeof i.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t = i.default.fn.jquery.split(" ")[0].split(".");if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
      } };l.jQueryDetection(), i.default.fn.emulateTransitionEnd = s, i.default.event.special[l.TRANSITION_END] = { bindType: "transitionend", delegateType: "transitionend", handle: function (t) {
        if (i.default(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      } };var u = "alert",
        f = i.default.fn[u],
        d = function () {
      function t(t) {
        this._element = t;
      }var e = t.prototype;return e.close = function (t) {
        var e = this._element;t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
      }, e.dispose = function () {
        i.default.removeData(this._element, "bs.alert"), this._element = null;
      }, e._getRootElement = function (t) {
        var e = l.getSelectorFromElement(t),
            n = !1;return e && (n = document.querySelector(e)), n || (n = i.default(t).closest(".alert")[0]), n;
      }, e._triggerCloseEvent = function (t) {
        var e = i.default.Event("close.bs.alert");return i.default(t).trigger(e), e;
      }, e._removeElement = function (t) {
        var e = this;if (i.default(t).removeClass("show"), i.default(t).hasClass("fade")) {
          var n = l.getTransitionDurationFromElement(t);i.default(t).one(l.TRANSITION_END, function (n) {
            return e._destroyElement(t, n);
          }).emulateTransitionEnd(n);
        } else this._destroyElement(t);
      }, e._destroyElement = function (t) {
        i.default(t).detach().trigger("closed.bs.alert").remove();
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = i.default(this),
              o = n.data("bs.alert");o || (o = new t(this), n.data("bs.alert", o)), "close" === e && o[e](this);
        });
      }, t._handleDismiss = function (t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }, r(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }]), t;
    }();i.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', d._handleDismiss(new d())), i.default.fn[u] = d._jQueryInterface, i.default.fn[u].Constructor = d, i.default.fn[u].noConflict = function () {
      return i.default.fn[u] = f, d._jQueryInterface;
    };var c = i.default.fn.button,
        h = function () {
      function t(t) {
        this._element = t, this.shouldAvoidTriggerChange = !1;
      }var e = t.prototype;return e.toggle = function () {
        var t = !0,
            e = !0,
            n = i.default(this._element).closest('[data-toggle="buttons"]')[0];if (n) {
          var o = this._element.querySelector('input:not([type="hidden"])');if (o) {
            if ("radio" === o.type) if (o.checked && this._element.classList.contains("active")) t = !1;else {
              var r = n.querySelector(".active");r && i.default(r).removeClass("active");
            }t && ("checkbox" !== o.type && "radio" !== o.type || (o.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || i.default(o).trigger("change")), o.focus(), e = !1;
          }
        }this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && i.default(this._element).toggleClass("active"));
      }, e.dispose = function () {
        i.default.removeData(this._element, "bs.button"), this._element = null;
      }, t._jQueryInterface = function (e, n) {
        return this.each(function () {
          var o = i.default(this),
              r = o.data("bs.button");r || (r = new t(this), o.data("bs.button", r)), r.shouldAvoidTriggerChange = n, "toggle" === e && r[e]();
        });
      }, r(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }]), t;
    }();i.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
      var e = t.target,
          n = e;if (i.default(e).hasClass("btn") || (e = i.default(e).closest(".btn")[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled")) t.preventDefault();else {
        var o = e.querySelector('input:not([type="hidden"])');if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled"))) return void t.preventDefault();"INPUT" !== n.tagName && "LABEL" === e.tagName || h._jQueryInterface.call(i.default(e), "toggle", "INPUT" === n.tagName);
      }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
      var e = i.default(t.target).closest(".btn")[0];i.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
    }), i.default(window).on("load.bs.button.data-api", function () {
      for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
        var i = t[e],
            o = i.querySelector('input:not([type="hidden"])');o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active");
      }for (var r = 0, a = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < a; r++) {
        var s = t[r];"true" === s.getAttribute("aria-pressed") ? s.classList.add("active") : s.classList.remove("active");
      }
    }), i.default.fn.button = h._jQueryInterface, i.default.fn.button.Constructor = h, i.default.fn.button.noConflict = function () {
      return i.default.fn.button = c, h._jQueryInterface;
    };var p = "carousel",
        m = ".bs.carousel",
        g = i.default.fn[p],
        v = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        _ = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        b = { TOUCH: "touch", PEN: "pen" },
        y = function () {
      function t(t, e) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
      }var e = t.prototype;return e.next = function () {
        this._isSliding || this._slide("next");
      }, e.nextWhenVisible = function () {
        var t = i.default(this._element);!document.hidden && t.is(":visible") && "hidden" !== t.css("visibility") && this.next();
      }, e.prev = function () {
        this._isSliding || this._slide("prev");
      }, e.pause = function (t) {
        t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (l.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, e.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, e.to = function (t) {
        var e = this;this._activeElement = this._element.querySelector(".active.carousel-item");var n = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) i.default(this._element).one("slid.bs.carousel", function () {
          return e.to(t);
        });else {
          if (n === t) return this.pause(), void this.cycle();var o = t > n ? "next" : "prev";this._slide(o, this._items[t]);
        }
      }, e.dispose = function () {
        i.default(this._element).off(m), i.default.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, e._getConfig = function (t) {
        return t = a({}, v, t), l.typeCheckConfig(p, t, _), t;
      }, e._handleSwipe = function () {
        var t = Math.abs(this.touchDeltaX);if (!(t <= 40)) {
          var e = t / this.touchDeltaX;this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next();
        }
      }, e._addEventListeners = function () {
        var t = this;this._config.keyboard && i.default(this._element).on("keydown.bs.carousel", function (e) {
          return t._keydown(e);
        }), "hover" === this._config.pause && i.default(this._element).on("mouseenter.bs.carousel", function (e) {
          return t.pause(e);
        }).on("mouseleave.bs.carousel", function (e) {
          return t.cycle(e);
        }), this._config.touch && this._addTouchEventListeners();
      }, e._addTouchEventListeners = function () {
        var t = this;if (this._touchSupported) {
          var e = function (e) {
            t._pointerEvent && b[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
          },
              n = function (e) {
            t._pointerEvent && b[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
              return t.cycle(e);
            }, 500 + t._config.interval));
          };i.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          }), this._pointerEvent ? (i.default(this._element).on("pointerdown.bs.carousel", function (t) {
            return e(t);
          }), i.default(this._element).on("pointerup.bs.carousel", function (t) {
            return n(t);
          }), this._element.classList.add("pointer-event")) : (i.default(this._element).on("touchstart.bs.carousel", function (t) {
            return e(t);
          }), i.default(this._element).on("touchmove.bs.carousel", function (e) {
            return function (e) {
              e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX;
            }(e);
          }), i.default(this._element).on("touchend.bs.carousel", function (t) {
            return n(t);
          }));
        }
      }, e._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
            t.preventDefault(), this.prev();break;case 39:
            t.preventDefault(), this.next();}
      }, e._getItemIndex = function (t) {
        return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t);
      }, e._getItemByDirection = function (t, e) {
        var n = "next" === t,
            i = "prev" === t,
            o = this._getItemIndex(e),
            r = this._items.length - 1;if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;var a = (o + ("prev" === t ? -1 : 1)) % this._items.length;return -1 === a ? this._items[this._items.length - 1] : this._items[a];
      }, e._triggerSlideEvent = function (t, e) {
        var n = this._getItemIndex(t),
            o = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
            r = i.default.Event("slide.bs.carousel", { relatedTarget: t, direction: e, from: o, to: n });return i.default(this._element).trigger(r), r;
      }, e._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          var e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));i.default(e).removeClass("active");var n = this._indicatorsElement.children[this._getItemIndex(t)];n && i.default(n).addClass("active");
        }
      }, e._slide = function (t, e) {
        var n,
            o,
            r,
            a = this,
            s = this._element.querySelector(".active.carousel-item"),
            u = this._getItemIndex(s),
            f = e || s && this._getItemByDirection(t, s),
            d = this._getItemIndex(f),
            c = Boolean(this._interval);if ("next" === t ? (n = "carousel-item-left", o = "carousel-item-next", r = "left") : (n = "carousel-item-right", o = "carousel-item-prev", r = "right"), f && i.default(f).hasClass("active")) this._isSliding = !1;else if (!this._triggerSlideEvent(f, r).isDefaultPrevented() && s && f) {
          this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(f);var h = i.default.Event("slid.bs.carousel", { relatedTarget: f, direction: r, from: u, to: d });if (i.default(this._element).hasClass("slide")) {
            i.default(f).addClass(o), l.reflow(f), i.default(s).addClass(n), i.default(f).addClass(n);var p = parseInt(f.getAttribute("data-interval"), 10);p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;var m = l.getTransitionDurationFromElement(s);i.default(s).one(l.TRANSITION_END, function () {
              i.default(f).removeClass(n + " " + o).addClass("active"), i.default(s).removeClass("active " + o + " " + n), a._isSliding = !1, setTimeout(function () {
                return i.default(a._element).trigger(h);
              }, 0);
            }).emulateTransitionEnd(m);
          } else i.default(s).removeClass("active"), i.default(f).addClass("active"), this._isSliding = !1, i.default(this._element).trigger(h);c && this.cycle();
        }
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = i.default(this).data("bs.carousel"),
              o = a({}, v, i.default(this).data());"object" == typeof e && (o = a({}, o, e));var r = "string" == typeof e ? e : o.slide;if (n || (n = new t(this, o), i.default(this).data("bs.carousel", n)), "number" == typeof e) n.to(e);else if ("string" == typeof r) {
            if ("undefined" == typeof n[r]) throw new TypeError('No method named "' + r + '"');n[r]();
          } else o.interval && o.ride && (n.pause(), n.cycle());
        });
      }, t._dataApiClickHandler = function (e) {
        var n = l.getSelectorFromElement(this);if (n) {
          var o = i.default(n)[0];if (o && i.default(o).hasClass("carousel")) {
            var r = a({}, i.default(o).data(), i.default(this).data()),
                s = this.getAttribute("data-slide-to");s && (r.interval = !1), t._jQueryInterface.call(i.default(o), r), s && i.default(o).data("bs.carousel").to(s), e.preventDefault();
          }
        }
      }, r(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }, { key: "Default", get: function () {
          return v;
        } }]), t;
    }();i.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", y._dataApiClickHandler), i.default(window).on("load.bs.carousel.data-api", function () {
      for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, n = t.length; e < n; e++) {
        var o = i.default(t[e]);y._jQueryInterface.call(o, o.data());
      }
    }), i.default.fn[p] = y._jQueryInterface, i.default.fn[p].Constructor = y, i.default.fn[p].noConflict = function () {
      return i.default.fn[p] = g, y._jQueryInterface;
    };var w = "collapse",
        E = i.default.fn[w],
        T = { toggle: !0, parent: "" },
        C = { toggle: "boolean", parent: "(string|element)" },
        S = function () {
      function t(t, e) {
        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) {
          var r = n[i],
              a = l.getSelectorFromElement(r),
              s = [].slice.call(document.querySelectorAll(a)).filter(function (e) {
            return e === t;
          });null !== a && s.length > 0 && (this._selector = a, this._triggerArray.push(r));
        }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }var e = t.prototype;return e.toggle = function () {
        i.default(this._element).hasClass("show") ? this.hide() : this.show();
      }, e.show = function () {
        var e,
            n,
            o = this;if (!this._isTransitioning && !i.default(this._element).hasClass("show") && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (t) {
          return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains("collapse");
        })).length && (e = null), !(e && (n = i.default(e).not(this._selector).data("bs.collapse")) && n._isTransitioning))) {
          var r = i.default.Event("show.bs.collapse");if (i.default(this._element).trigger(r), !r.isDefaultPrevented()) {
            e && (t._jQueryInterface.call(i.default(e).not(this._selector), "hide"), n || i.default(e).data("bs.collapse", null));var a = this._getDimension();i.default(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[a] = 0, this._triggerArray.length && i.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                u = l.getTransitionDurationFromElement(this._element);i.default(this._element).one(l.TRANSITION_END, function () {
              i.default(o._element).removeClass("collapsing").addClass("collapse show"), o._element.style[a] = "", o.setTransitioning(!1), i.default(o._element).trigger("shown.bs.collapse");
            }).emulateTransitionEnd(u), this._element.style[a] = this._element[s] + "px";
          }
        }
      }, e.hide = function () {
        var t = this;if (!this._isTransitioning && i.default(this._element).hasClass("show")) {
          var e = i.default.Event("hide.bs.collapse");if (i.default(this._element).trigger(e), !e.isDefaultPrevented()) {
            var n = this._getDimension();this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", l.reflow(this._element), i.default(this._element).addClass("collapsing").removeClass("collapse show");var o = this._triggerArray.length;if (o > 0) for (var r = 0; r < o; r++) {
              var a = this._triggerArray[r],
                  s = l.getSelectorFromElement(a);if (null !== s) i.default([].slice.call(document.querySelectorAll(s))).hasClass("show") || i.default(a).addClass("collapsed").attr("aria-expanded", !1);
            }this.setTransitioning(!0);this._element.style[n] = "";var u = l.getTransitionDurationFromElement(this._element);i.default(this._element).one(l.TRANSITION_END, function () {
              t.setTransitioning(!1), i.default(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
            }).emulateTransitionEnd(u);
          }
        }
      }, e.setTransitioning = function (t) {
        this._isTransitioning = t;
      }, e.dispose = function () {
        i.default.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, e._getConfig = function (t) {
        return (t = a({}, T, t)).toggle = Boolean(t.toggle), l.typeCheckConfig(w, t, C), t;
      }, e._getDimension = function () {
        return i.default(this._element).hasClass("width") ? "width" : "height";
      }, e._getParent = function () {
        var e,
            n = this;l.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
            r = [].slice.call(e.querySelectorAll(o));return i.default(r).each(function (e, i) {
          n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
        }), e;
      }, e._addAriaAndCollapsedClass = function (t, e) {
        var n = i.default(t).hasClass("show");e.length && i.default(e).toggleClass("collapsed", !n).attr("aria-expanded", n);
      }, t._getTargetFromElement = function (t) {
        var e = l.getSelectorFromElement(t);return e ? document.querySelector(e) : null;
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = i.default(this),
              o = n.data("bs.collapse"),
              r = a({}, T, n.data(), "object" == typeof e && e ? e : {});if (!o && r.toggle && "string" == typeof e && /show|hide/.test(e) && (r.toggle = !1), o || (o = new t(this, r), n.data("bs.collapse", o)), "string" == typeof e) {
            if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');o[e]();
          }
        });
      }, r(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }, { key: "Default", get: function () {
          return T;
        } }]), t;
    }();i.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();var e = i.default(this),
          n = l.getSelectorFromElement(this),
          o = [].slice.call(document.querySelectorAll(n));i.default(o).each(function () {
        var t = i.default(this),
            n = t.data("bs.collapse") ? "toggle" : e.data();S._jQueryInterface.call(t, n);
      });
    }), i.default.fn[w] = S._jQueryInterface, i.default.fn[w].Constructor = S, i.default.fn[w].noConflict = function () {
      return i.default.fn[w] = E, S._jQueryInterface;
    };var D = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        N = function () {
      for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1) if (D && navigator.userAgent.indexOf(t[e]) >= 0) return 1;return 0;
    }();var k = D && window.Promise ? function (t) {
      var e = !1;return function () {
        e || (e = !0, window.Promise.resolve().then(function () {
          e = !1, t();
        }));
      };
    } : function (t) {
      var e = !1;return function () {
        e || (e = !0, setTimeout(function () {
          e = !1, t();
        }, N));
      };
    };function A(t) {
      return t && "[object Function]" === {}.toString.call(t);
    }function I(t, e) {
      if (1 !== t.nodeType) return [];var n = t.ownerDocument.defaultView.getComputedStyle(t, null);return e ? n[e] : n;
    }function O(t) {
      return "HTML" === t.nodeName ? t : t.parentNode || t.host;
    }function x(t) {
      if (!t) return document.body;switch (t.nodeName) {case "HTML":case "BODY":
          return t.ownerDocument.body;case "#document":
          return t.body;}var e = I(t),
          n = e.overflow,
          i = e.overflowX,
          o = e.overflowY;return (/(auto|scroll|overlay)/.test(n + o + i) ? t : x(O(t))
      );
    }function j(t) {
      return t && t.referenceNode ? t.referenceNode : t;
    }var L = D && !(!window.MSInputMethodContext || !document.documentMode),
        P = D && /MSIE 10/.test(navigator.userAgent);function F(t) {
      return 11 === t ? L : 10 === t ? P : L || P;
    }function R(t) {
      if (!t) return document.documentElement;for (var e = F(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;var i = n && n.nodeName;return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === I(n, "position") ? R(n) : n : t ? t.ownerDocument.documentElement : document.documentElement;
    }function H(t) {
      return null !== t.parentNode ? H(t.parentNode) : t;
    }function M(t, e) {
      if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
          i = n ? t : e,
          o = n ? e : t,
          r = document.createRange();r.setStart(i, 0), r.setEnd(o, 0);var a,
          s,
          l = r.commonAncestorContainer;if (t !== l && e !== l || i.contains(o)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && R(a.firstElementChild) !== a ? R(l) : l;var u = H(t);return u.host ? M(u.host, e) : M(t, H(e).host);
    }function B(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
          n = "top" === e ? "scrollTop" : "scrollLeft",
          i = t.nodeName;if ("BODY" === i || "HTML" === i) {
        var o = t.ownerDocument.documentElement,
            r = t.ownerDocument.scrollingElement || o;return r[n];
      }return t[n];
    }function q(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = B(e, "top"),
          o = B(e, "left"),
          r = n ? -1 : 1;return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t;
    }function Q(t, e) {
      var n = "x" === e ? "Left" : "Top",
          i = "Left" === n ? "Right" : "Bottom";return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + i + "Width"]);
    }function W(t, e, n, i) {
      return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], F(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0);
    }function U(t) {
      var e = t.body,
          n = t.documentElement,
          i = F(10) && getComputedStyle(n);return { height: W("Height", e, n, i), width: W("Width", e, n, i) };
    }var V = function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    },
        Y = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
      }return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    }(),
        z = function (t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
    },
        X = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }return t;
    };function K(t) {
      return X({}, t, { right: t.left + t.width, bottom: t.top + t.height });
    }function G(t) {
      var e = {};try {
        if (F(10)) {
          e = t.getBoundingClientRect();var n = B(t, "top"),
              i = B(t, "left");e.top += n, e.left += i, e.bottom += n, e.right += i;
        } else e = t.getBoundingClientRect();
      } catch (t) {}var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
          r = "HTML" === t.nodeName ? U(t.ownerDocument) : {},
          a = r.width || t.clientWidth || o.width,
          s = r.height || t.clientHeight || o.height,
          l = t.offsetWidth - a,
          u = t.offsetHeight - s;if (l || u) {
        var f = I(t);l -= Q(f, "x"), u -= Q(f, "y"), o.width -= l, o.height -= u;
      }return K(o);
    }function $(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = F(10),
          o = "HTML" === e.nodeName,
          r = G(t),
          a = G(e),
          s = x(t),
          l = I(e),
          u = parseFloat(l.borderTopWidth),
          f = parseFloat(l.borderLeftWidth);n && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));var d = K({ top: r.top - a.top - u, left: r.left - a.left - f, width: r.width, height: r.height });if (d.marginTop = 0, d.marginLeft = 0, !i && o) {
        var c = parseFloat(l.marginTop),
            h = parseFloat(l.marginLeft);d.top -= u - c, d.bottom -= u - c, d.left -= f - h, d.right -= f - h, d.marginTop = c, d.marginLeft = h;
      }return (i && !n ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (d = q(d, e)), d;
    }function J(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = t.ownerDocument.documentElement,
          i = $(t, n),
          o = Math.max(n.clientWidth, window.innerWidth || 0),
          r = Math.max(n.clientHeight, window.innerHeight || 0),
          a = e ? 0 : B(n),
          s = e ? 0 : B(n, "left"),
          l = { top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: o, height: r };return K(l);
    }function Z(t) {
      var e = t.nodeName;if ("BODY" === e || "HTML" === e) return !1;if ("fixed" === I(t, "position")) return !0;var n = O(t);return !!n && Z(n);
    }function tt(t) {
      if (!t || !t.parentElement || F()) return document.documentElement;for (var e = t.parentElement; e && "none" === I(e, "transform");) e = e.parentElement;return e || document.documentElement;
    }function et(t, e, n, i) {
      var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          r = { top: 0, left: 0 },
          a = o ? tt(t) : M(t, j(e));if ("viewport" === i) r = J(a, o);else {
        var s = void 0;"scrollParent" === i ? "BODY" === (s = x(O(e))).nodeName && (s = t.ownerDocument.documentElement) : s = "window" === i ? t.ownerDocument.documentElement : i;var l = $(s, a, o);if ("HTML" !== s.nodeName || Z(a)) r = l;else {
          var u = U(t.ownerDocument),
              f = u.height,
              d = u.width;r.top += l.top - l.marginTop, r.bottom = f + l.top, r.left += l.left - l.marginLeft, r.right = d + l.left;
        }
      }var c = "number" == typeof (n = n || 0);return r.left += c ? n : n.left || 0, r.top += c ? n : n.top || 0, r.right -= c ? n : n.right || 0, r.bottom -= c ? n : n.bottom || 0, r;
    }function nt(t) {
      return t.width * t.height;
    }function it(t, e, n, i, o) {
      var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === t.indexOf("auto")) return t;var a = et(n, i, r, o),
          s = { top: { width: a.width, height: e.top - a.top }, right: { width: a.right - e.right, height: a.height }, bottom: { width: a.width, height: a.bottom - e.bottom }, left: { width: e.left - a.left, height: a.height } },
          l = Object.keys(s).map(function (t) {
        return X({ key: t }, s[t], { area: nt(s[t]) });
      }).sort(function (t, e) {
        return e.area - t.area;
      }),
          u = l.filter(function (t) {
        var e = t.width,
            i = t.height;return e >= n.clientWidth && i >= n.clientHeight;
      }),
          f = u.length > 0 ? u[0].key : l[0].key,
          d = t.split("-")[1];return f + (d ? "-" + d : "");
    }function ot(t, e, n) {
      var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          o = i ? tt(e) : M(e, j(n));return $(n, o, i);
    }function rt(t) {
      var e = t.ownerDocument.defaultView.getComputedStyle(t),
          n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
          i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);return { width: t.offsetWidth + i, height: t.offsetHeight + n };
    }function at(t) {
      var e = { left: "right", right: "left", bottom: "top", top: "bottom" };return t.replace(/left|right|bottom|top/g, function (t) {
        return e[t];
      });
    }function st(t, e, n) {
      n = n.split("-")[0];var i = rt(t),
          o = { width: i.width, height: i.height },
          r = -1 !== ["right", "left"].indexOf(n),
          a = r ? "top" : "left",
          s = r ? "left" : "top",
          l = r ? "height" : "width",
          u = r ? "width" : "height";return o[a] = e[a] + e[l] / 2 - i[l] / 2, o[s] = n === s ? e[s] - i[u] : e[at(s)], o;
    }function lt(t, e) {
      return Array.prototype.find ? t.find(e) : t.filter(e)[0];
    }function ut(t, e, n) {
      return (void 0 === n ? t : t.slice(0, function (t, e, n) {
        if (Array.prototype.findIndex) return t.findIndex(function (t) {
          return t[e] === n;
        });var i = lt(t, function (t) {
          return t[e] === n;
        });return t.indexOf(i);
      }(t, "name", n))).forEach(function (t) {
        t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n = t.function || t.fn;t.enabled && A(n) && (e.offsets.popper = K(e.offsets.popper), e.offsets.reference = K(e.offsets.reference), e = n(e, t));
      }), e;
    }function ft() {
      if (!this.state.isDestroyed) {
        var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };t.offsets.reference = ot(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = it(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = st(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = ut(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
      }
    }function dt(t, e) {
      return t.some(function (t) {
        var n = t.name;return t.enabled && n === e;
      });
    }function ct(t) {
      for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
        var o = e[i],
            r = o ? "" + o + n : t;if ("undefined" != typeof document.body.style[r]) return r;
      }return null;
    }function ht() {
      return this.state.isDestroyed = !0, dt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ct("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
    }function pt(t) {
      var e = t.ownerDocument;return e ? e.defaultView : window;
    }function mt(t, e, n, i) {
      n.updateBound = i, pt(t).addEventListener("resize", n.updateBound, { passive: !0 });var o = x(t);return function t(e, n, i, o) {
        var r = "BODY" === e.nodeName,
            a = r ? e.ownerDocument.defaultView : e;a.addEventListener(n, i, { passive: !0 }), r || t(x(a.parentNode), n, i, o), o.push(a);
      }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n;
    }function gt() {
      this.state.eventsEnabled || (this.state = mt(this.reference, this.options, this.state, this.scheduleUpdate));
    }function vt() {
      var t, e;this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, pt(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
        t.removeEventListener("scroll", e.updateBound);
      }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e));
    }function _t(t) {
      return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
    }function bt(t, e) {
      Object.keys(e).forEach(function (n) {
        var i = "";-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && _t(e[n]) && (i = "px"), t.style[n] = e[n] + i;
      });
    }var yt = D && /Firefox/i.test(navigator.userAgent);function wt(t, e, n) {
      var i = lt(t, function (t) {
        return t.name === e;
      }),
          o = !!i && t.some(function (t) {
        return t.name === n && t.enabled && t.order < i.order;
      });if (!o) {
        var r = "`" + e + "`",
            a = "`" + n + "`";console.warn(a + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
      }return o;
    }var Et = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Tt = Et.slice(3);function Ct(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = Tt.indexOf(t),
          i = Tt.slice(n + 1).concat(Tt.slice(0, n));return e ? i.reverse() : i;
    }var St = "flip",
        Dt = "clockwise",
        Nt = "counterclockwise";function kt(t, e, n, i) {
      var o = [0, 0],
          r = -1 !== ["right", "left"].indexOf(i),
          a = t.split(/(\+|\-)/).map(function (t) {
        return t.trim();
      }),
          s = a.indexOf(lt(a, function (t) {
        return -1 !== t.search(/,|\s/);
      }));a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l = /\s*,\s*|\s+/,
          u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];return (u = u.map(function (t, i) {
        var o = (1 === i ? !r : r) ? "height" : "width",
            a = !1;return t.reduce(function (t, e) {
          return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, a = !0, t) : a ? (t[t.length - 1] += e, a = !1, t) : t.concat(e);
        }, []).map(function (t) {
          return function (t, e, n, i) {
            var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                r = +o[1],
                a = o[2];if (!r) return t;if (0 === a.indexOf("%")) {
              var s = void 0;switch (a) {case "%p":
                  s = n;break;case "%":case "%r":default:
                  s = i;}return K(s)[e] / 100 * r;
            }if ("vh" === a || "vw" === a) {
              return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
            }return r;
          }(t, o, e, n);
        });
      })).forEach(function (t, e) {
        t.forEach(function (n, i) {
          _t(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
        });
      }), o;
    }var At = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {}, onUpdate: function () {}, modifiers: { shift: { order: 100, enabled: !0, fn: function (t) {
            var e = t.placement,
                n = e.split("-")[0],
                i = e.split("-")[1];if (i) {
              var o = t.offsets,
                  r = o.reference,
                  a = o.popper,
                  s = -1 !== ["bottom", "top"].indexOf(n),
                  l = s ? "left" : "top",
                  u = s ? "width" : "height",
                  f = { start: z({}, l, r[l]), end: z({}, l, r[l] + r[u] - a[u]) };t.offsets.popper = X({}, a, f[i]);
            }return t;
          } }, offset: { order: 200, enabled: !0, fn: function (t, e) {
            var n = e.offset,
                i = t.placement,
                o = t.offsets,
                r = o.popper,
                a = o.reference,
                s = i.split("-")[0],
                l = void 0;return l = _t(+n) ? [+n, 0] : kt(n, r, a, s), "left" === s ? (r.top += l[0], r.left -= l[1]) : "right" === s ? (r.top += l[0], r.left += l[1]) : "top" === s ? (r.left += l[0], r.top -= l[1]) : "bottom" === s && (r.left += l[0], r.top += l[1]), t.popper = r, t;
          }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function (t, e) {
            var n = e.boundariesElement || R(t.instance.popper);t.instance.reference === n && (n = R(n));var i = ct("transform"),
                o = t.instance.popper.style,
                r = o.top,
                a = o.left,
                s = o[i];o.top = "", o.left = "", o[i] = "";var l = et(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);o.top = r, o.left = a, o[i] = s, e.boundaries = l;var u = e.priority,
                f = t.offsets.popper,
                d = { primary: function (t) {
                var n = f[t];return f[t] < l[t] && !e.escapeWithReference && (n = Math.max(f[t], l[t])), z({}, t, n);
              }, secondary: function (t) {
                var n = "right" === t ? "left" : "top",
                    i = f[n];return f[t] > l[t] && !e.escapeWithReference && (i = Math.min(f[n], l[t] - ("right" === t ? f.width : f.height))), z({}, n, i);
              } };return u.forEach(function (t) {
              var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";f = X({}, f, d[e](t));
            }), t.offsets.popper = f, t;
          }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function (t) {
            var e = t.offsets,
                n = e.popper,
                i = e.reference,
                o = t.placement.split("-")[0],
                r = Math.floor,
                a = -1 !== ["top", "bottom"].indexOf(o),
                s = a ? "right" : "bottom",
                l = a ? "left" : "top",
                u = a ? "width" : "height";return n[s] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[u]), n[l] > r(i[s]) && (t.offsets.popper[l] = r(i[s])), t;
          } }, arrow: { order: 500, enabled: !0, fn: function (t, e) {
            var n;if (!wt(t.instance.modifiers, "arrow", "keepTogether")) return t;var i = e.element;if ("string" == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;var o = t.placement.split("-")[0],
                r = t.offsets,
                a = r.popper,
                s = r.reference,
                l = -1 !== ["left", "right"].indexOf(o),
                u = l ? "height" : "width",
                f = l ? "Top" : "Left",
                d = f.toLowerCase(),
                c = l ? "left" : "top",
                h = l ? "bottom" : "right",
                p = rt(i)[u];s[h] - p < a[d] && (t.offsets.popper[d] -= a[d] - (s[h] - p)), s[d] + p > a[h] && (t.offsets.popper[d] += s[d] + p - a[h]), t.offsets.popper = K(t.offsets.popper);var m = s[d] + s[u] / 2 - p / 2,
                g = I(t.instance.popper),
                v = parseFloat(g["margin" + f]),
                _ = parseFloat(g["border" + f + "Width"]),
                b = m - t.offsets.popper[d] - v - _;return b = Math.max(Math.min(a[u] - p, b), 0), t.arrowElement = i, t.offsets.arrow = (z(n = {}, d, Math.round(b)), z(n, c, ""), n), t;
          }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function (t, e) {
            if (dt(t.instance.modifiers, "inner")) return t;if (t.flipped && t.placement === t.originalPlacement) return t;var n = et(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                i = t.placement.split("-")[0],
                o = at(i),
                r = t.placement.split("-")[1] || "",
                a = [];switch (e.behavior) {case St:
                a = [i, o];break;case Dt:
                a = Ct(i);break;case Nt:
                a = Ct(i, !0);break;default:
                a = e.behavior;}return a.forEach(function (s, l) {
              if (i !== s || a.length === l + 1) return t;i = t.placement.split("-")[0], o = at(i);var u = t.offsets.popper,
                  f = t.offsets.reference,
                  d = Math.floor,
                  c = "left" === i && d(u.right) > d(f.left) || "right" === i && d(u.left) < d(f.right) || "top" === i && d(u.bottom) > d(f.top) || "bottom" === i && d(u.top) < d(f.bottom),
                  h = d(u.left) < d(n.left),
                  p = d(u.right) > d(n.right),
                  m = d(u.top) < d(n.top),
                  g = d(u.bottom) > d(n.bottom),
                  v = "left" === i && h || "right" === i && p || "top" === i && m || "bottom" === i && g,
                  _ = -1 !== ["top", "bottom"].indexOf(i),
                  b = !!e.flipVariations && (_ && "start" === r && h || _ && "end" === r && p || !_ && "start" === r && m || !_ && "end" === r && g),
                  y = !!e.flipVariationsByContent && (_ && "start" === r && p || _ && "end" === r && h || !_ && "start" === r && g || !_ && "end" === r && m),
                  w = b || y;(c || v || w) && (t.flipped = !0, (c || v) && (i = a[l + 1]), w && (r = function (t) {
                return "end" === t ? "start" : "start" === t ? "end" : t;
              }(r)), t.placement = i + (r ? "-" + r : ""), t.offsets.popper = X({}, t.offsets.popper, st(t.instance.popper, t.offsets.reference, t.placement)), t = ut(t.instance.modifiers, t, "flip"));
            }), t;
          }, behavior: "flip", padding: 5, boundariesElement: "viewport", flipVariations: !1, flipVariationsByContent: !1 }, inner: { order: 700, enabled: !1, fn: function (t) {
            var e = t.placement,
                n = e.split("-")[0],
                i = t.offsets,
                o = i.popper,
                r = i.reference,
                a = -1 !== ["left", "right"].indexOf(n),
                s = -1 === ["top", "left"].indexOf(n);return o[a ? "left" : "top"] = r[n] - (s ? o[a ? "width" : "height"] : 0), t.placement = at(e), t.offsets.popper = K(o), t;
          } }, hide: { order: 800, enabled: !0, fn: function (t) {
            if (!wt(t.instance.modifiers, "hide", "preventOverflow")) return t;var e = t.offsets.reference,
                n = lt(t.instance.modifiers, function (t) {
              return "preventOverflow" === t.name;
            }).boundaries;if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
              if (!0 === t.hide) return t;t.hide = !0, t.attributes["x-out-of-boundaries"] = "";
            } else {
              if (!1 === t.hide) return t;t.hide = !1, t.attributes["x-out-of-boundaries"] = !1;
            }return t;
          } }, computeStyle: { order: 850, enabled: !0, fn: function (t, e) {
            var n = e.x,
                i = e.y,
                o = t.offsets.popper,
                r = lt(t.instance.modifiers, function (t) {
              return "applyStyle" === t.name;
            }).gpuAcceleration;void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a = void 0 !== r ? r : e.gpuAcceleration,
                s = R(t.instance.popper),
                l = G(s),
                u = { position: o.position },
                f = function (t, e) {
              var n = t.offsets,
                  i = n.popper,
                  o = n.reference,
                  r = Math.round,
                  a = Math.floor,
                  s = function (t) {
                return t;
              },
                  l = r(o.width),
                  u = r(i.width),
                  f = -1 !== ["left", "right"].indexOf(t.placement),
                  d = -1 !== t.placement.indexOf("-"),
                  c = e ? f || d || l % 2 == u % 2 ? r : a : s,
                  h = e ? r : s;return { left: c(l % 2 == 1 && u % 2 == 1 && !d && e ? i.left - 1 : i.left), top: h(i.top), bottom: h(i.bottom), right: c(i.right) };
            }(t, window.devicePixelRatio < 2 || !yt),
                d = "bottom" === n ? "top" : "bottom",
                c = "right" === i ? "left" : "right",
                h = ct("transform"),
                p = void 0,
                m = void 0;if (m = "bottom" === d ? "HTML" === s.nodeName ? -s.clientHeight + f.bottom : -l.height + f.bottom : f.top, p = "right" === c ? "HTML" === s.nodeName ? -s.clientWidth + f.right : -l.width + f.right : f.left, a && h) u[h] = "translate3d(" + p + "px, " + m + "px, 0)", u[d] = 0, u[c] = 0, u.willChange = "transform";else {
              var g = "bottom" === d ? -1 : 1,
                  v = "right" === c ? -1 : 1;u[d] = m * g, u[c] = p * v, u.willChange = d + ", " + c;
            }var _ = { "x-placement": t.placement };return t.attributes = X({}, _, t.attributes), t.styles = X({}, u, t.styles), t.arrowStyles = X({}, t.offsets.arrow, t.arrowStyles), t;
          }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function (t) {
            var e, n;return bt(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
              !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
            }), t.arrowElement && Object.keys(t.arrowStyles).length && bt(t.arrowElement, t.arrowStyles), t;
          }, onLoad: function (t, e, n, i, o) {
            var r = ot(o, e, t, n.positionFixed),
                a = it(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);return e.setAttribute("x-placement", a), bt(e, { position: n.positionFixed ? "fixed" : "absolute" }), n;
          }, gpuAcceleration: void 0 } } },
        It = function () {
      function t(e, n) {
        var i = this,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};V(this, t), this.scheduleUpdate = function () {
          return requestAnimationFrame(i.update);
        }, this.update = k(this.update.bind(this)), this.options = X({}, t.Defaults, o), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(X({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
          i.options.modifiers[e] = X({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {});
        }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
          return X({ name: t }, i.options.modifiers[t]);
        }).sort(function (t, e) {
          return t.order - e.order;
        }), this.modifiers.forEach(function (t) {
          t.enabled && A(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
        }), this.update();var r = this.options.eventsEnabled;r && this.enableEventListeners(), this.state.eventsEnabled = r;
      }return Y(t, [{ key: "update", value: function () {
          return ft.call(this);
        } }, { key: "destroy", value: function () {
          return ht.call(this);
        } }, { key: "enableEventListeners", value: function () {
          return gt.call(this);
        } }, { key: "disableEventListeners", value: function () {
          return vt.call(this);
        } }]), t;
    }();It.Utils = ("undefined" != typeof window ? window : global).PopperUtils, It.placements = Et, It.Defaults = At;var Ot = "dropdown",
        xt = i.default.fn[Ot],
        jt = new RegExp("38|40|27"),
        Lt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
        Pt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
        Ft = function () {
      function t(t, e) {
        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
      }var e = t.prototype;return e.toggle = function () {
        if (!this._element.disabled && !i.default(this._element).hasClass("disabled")) {
          var e = i.default(this._menu).hasClass("show");t._clearMenus(), e || this.show(!0);
        }
      }, e.show = function (e) {
        if (void 0 === e && (e = !1), !(this._element.disabled || i.default(this._element).hasClass("disabled") || i.default(this._menu).hasClass("show"))) {
          var n = { relatedTarget: this._element },
              o = i.default.Event("show.bs.dropdown", n),
              r = t._getParentFromElement(this._element);if (i.default(r).trigger(o), !o.isDefaultPrevented()) {
            if (!this._inNavbar && e) {
              if ("undefined" == typeof It) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var a = this._element;"parent" === this._config.reference ? a = r : l.isElement(this._config.reference) && (a = this._config.reference, "undefined" != typeof this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && i.default(r).addClass("position-static"), this._popper = new It(a, this._menu, this._getPopperConfig());
            }"ontouchstart" in document.documentElement && 0 === i.default(r).closest(".navbar-nav").length && i.default(document.body).children().on("mouseover", null, i.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), i.default(this._menu).toggleClass("show"), i.default(r).toggleClass("show").trigger(i.default.Event("shown.bs.dropdown", n));
          }
        }
      }, e.hide = function () {
        if (!this._element.disabled && !i.default(this._element).hasClass("disabled") && i.default(this._menu).hasClass("show")) {
          var e = { relatedTarget: this._element },
              n = i.default.Event("hide.bs.dropdown", e),
              o = t._getParentFromElement(this._element);i.default(o).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), i.default(this._menu).toggleClass("show"), i.default(o).toggleClass("show").trigger(i.default.Event("hidden.bs.dropdown", e)));
        }
      }, e.dispose = function () {
        i.default.removeData(this._element, "bs.dropdown"), i.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
      }, e.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
      }, e._addEventListeners = function () {
        var t = this;i.default(this._element).on("click.bs.dropdown", function (e) {
          e.preventDefault(), e.stopPropagation(), t.toggle();
        });
      }, e._getConfig = function (t) {
        return t = a({}, this.constructor.Default, i.default(this._element).data(), t), l.typeCheckConfig(Ot, t, this.constructor.DefaultType), t;
      }, e._getMenuElement = function () {
        if (!this._menu) {
          var e = t._getParentFromElement(this._element);e && (this._menu = e.querySelector(".dropdown-menu"));
        }return this._menu;
      }, e._getPlacement = function () {
        var t = i.default(this._element.parentNode),
            e = "bottom-start";return t.hasClass("dropup") ? e = i.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : i.default(this._menu).hasClass("dropdown-menu-right") && (e = "bottom-end"), e;
      }, e._detectNavbar = function () {
        return i.default(this._element).closest(".navbar").length > 0;
      }, e._getOffset = function () {
        var t = this,
            e = {};return "function" == typeof this._config.offset ? e.fn = function (e) {
          return e.offsets = a({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e;
        } : e.offset = this._config.offset, e;
      }, e._getPopperConfig = function () {
        var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), a({}, t, this._config.popperConfig);
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = i.default(this).data("bs.dropdown");if (n || (n = new t(this, "object" == typeof e ? e : null), i.default(this).data("bs.dropdown", n)), "string" == typeof e) {
            if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');n[e]();
          }
        });
      }, t._clearMenus = function (e) {
        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), o = 0, r = n.length; o < r; o++) {
          var a = t._getParentFromElement(n[o]),
              s = i.default(n[o]).data("bs.dropdown"),
              l = { relatedTarget: n[o] };if (e && "click" === e.type && (l.clickEvent = e), s) {
            var u = s._menu;if (i.default(a).hasClass("show") && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && i.default.contains(a, e.target))) {
              var f = i.default.Event("hide.bs.dropdown", l);i.default(a).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), n[o].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), i.default(u).removeClass("show"), i.default(a).removeClass("show").trigger(i.default.Event("hidden.bs.dropdown", l)));
            }
          }
        }
      }, t._getParentFromElement = function (t) {
        var e,
            n = l.getSelectorFromElement(t);return n && (e = document.querySelector(n)), e || t.parentNode;
      }, t._dataApiKeydownHandler = function (e) {
        if (!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || i.default(e.target).closest(".dropdown-menu").length) : !jt.test(e.which)) && !this.disabled && !i.default(this).hasClass("disabled")) {
          var n = t._getParentFromElement(this),
              o = i.default(n).hasClass("show");if (o || 27 !== e.which) {
            if (e.preventDefault(), e.stopPropagation(), !o || 27 === e.which || 32 === e.which) return 27 === e.which && i.default(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void i.default(this).trigger("click");var r = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (t) {
              return i.default(t).is(":visible");
            });if (0 !== r.length) {
              var a = r.indexOf(e.target);38 === e.which && a > 0 && a--, 40 === e.which && a < r.length - 1 && a++, a < 0 && (a = 0), r[a].focus();
            }
          }
        }
      }, r(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }, { key: "Default", get: function () {
          return Lt;
        } }, { key: "DefaultType", get: function () {
          return Pt;
        } }]), t;
    }();i.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', Ft._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Ft._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", Ft._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
      t.preventDefault(), t.stopPropagation(), Ft._jQueryInterface.call(i.default(this), "toggle");
    }).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
      t.stopPropagation();
    }), i.default.fn[Ot] = Ft._jQueryInterface, i.default.fn[Ot].Constructor = Ft, i.default.fn[Ot].noConflict = function () {
      return i.default.fn[Ot] = xt, Ft._jQueryInterface;
    };var Rt = i.default.fn.modal,
        Ht = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        Mt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        Bt = function () {
      function t(t, e) {
        this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
      }var e = t.prototype;return e.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t);
      }, e.show = function (t) {
        var e = this;if (!this._isShown && !this._isTransitioning) {
          i.default(this._element).hasClass("fade") && (this._isTransitioning = !0);var n = i.default.Event("show.bs.modal", { relatedTarget: t });i.default(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), i.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (t) {
            return e.hide(t);
          }), i.default(this._dialog).on("mousedown.dismiss.bs.modal", function () {
            i.default(e._element).one("mouseup.dismiss.bs.modal", function (t) {
              i.default(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
            });
          }), this._showBackdrop(function () {
            return e._showElement(t);
          }));
        }
      }, e.hide = function (t) {
        var e = this;if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
          var n = i.default.Event("hide.bs.modal");if (i.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
            this._isShown = !1;var o = i.default(this._element).hasClass("fade");if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), i.default(document).off("focusin.bs.modal"), i.default(this._element).removeClass("show"), i.default(this._element).off("click.dismiss.bs.modal"), i.default(this._dialog).off("mousedown.dismiss.bs.modal"), o) {
              var r = l.getTransitionDurationFromElement(this._element);i.default(this._element).one(l.TRANSITION_END, function (t) {
                return e._hideModal(t);
              }).emulateTransitionEnd(r);
            } else this._hideModal();
          }
        }
      }, e.dispose = function () {
        [window, this._element, this._dialog].forEach(function (t) {
          return i.default(t).off(".bs.modal");
        }), i.default(document).off("focusin.bs.modal"), i.default.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
      }, e.handleUpdate = function () {
        this._adjustDialog();
      }, e._getConfig = function (t) {
        return t = a({}, Ht, t), l.typeCheckConfig("modal", t, Mt), t;
      }, e._triggerBackdropTransition = function () {
        var t = this;if ("static" === this._config.backdrop) {
          var e = i.default.Event("hidePrevented.bs.modal");if (i.default(this._element).trigger(e), e.isDefaultPrevented()) return;var n = this._element.scrollHeight > document.documentElement.clientHeight;n || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");var o = l.getTransitionDurationFromElement(this._dialog);i.default(this._element).off(l.TRANSITION_END), i.default(this._element).one(l.TRANSITION_END, function () {
            t._element.classList.remove("modal-static"), n || i.default(t._element).one(l.TRANSITION_END, function () {
              t._element.style.overflowY = "";
            }).emulateTransitionEnd(t._element, o);
          }).emulateTransitionEnd(o), this._element.focus();
        } else this.hide();
      }, e._showElement = function (t) {
        var e = this,
            n = i.default(this._element).hasClass("fade"),
            o = this._dialog ? this._dialog.querySelector(".modal-body") : null;this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), i.default(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0, n && l.reflow(this._element), i.default(this._element).addClass("show"), this._config.focus && this._enforceFocus();var r = i.default.Event("shown.bs.modal", { relatedTarget: t }),
            a = function () {
          e._config.focus && e._element.focus(), e._isTransitioning = !1, i.default(e._element).trigger(r);
        };if (n) {
          var s = l.getTransitionDurationFromElement(this._dialog);i.default(this._dialog).one(l.TRANSITION_END, a).emulateTransitionEnd(s);
        } else a();
      }, e._enforceFocus = function () {
        var t = this;i.default(document).off("focusin.bs.modal").on("focusin.bs.modal", function (e) {
          document !== e.target && t._element !== e.target && 0 === i.default(t._element).has(e.target).length && t._element.focus();
        });
      }, e._setEscapeEvent = function () {
        var t = this;this._isShown ? i.default(this._element).on("keydown.dismiss.bs.modal", function (e) {
          t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition();
        }) : this._isShown || i.default(this._element).off("keydown.dismiss.bs.modal");
      }, e._setResizeEvent = function () {
        var t = this;this._isShown ? i.default(window).on("resize.bs.modal", function (e) {
          return t.handleUpdate(e);
        }) : i.default(window).off("resize.bs.modal");
      }, e._hideModal = function () {
        var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
          i.default(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), i.default(t._element).trigger("hidden.bs.modal");
        });
      }, e._removeBackdrop = function () {
        this._backdrop && (i.default(this._backdrop).remove(), this._backdrop = null);
      }, e._showBackdrop = function (t) {
        var e = this,
            n = i.default(this._element).hasClass("fade") ? "fade" : "";if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), i.default(this._backdrop).appendTo(document.body), i.default(this._element).on("click.dismiss.bs.modal", function (t) {
            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition();
          }), n && l.reflow(this._backdrop), i.default(this._backdrop).addClass("show"), !t) return;if (!n) return void t();var o = l.getTransitionDurationFromElement(this._backdrop);i.default(this._backdrop).one(l.TRANSITION_END, t).emulateTransitionEnd(o);
        } else if (!this._isShown && this._backdrop) {
          i.default(this._backdrop).removeClass("show");var r = function () {
            e._removeBackdrop(), t && t();
          };if (i.default(this._element).hasClass("fade")) {
            var a = l.getTransitionDurationFromElement(this._backdrop);i.default(this._backdrop).one(l.TRANSITION_END, r).emulateTransitionEnd(a);
          } else r();
        } else t && t();
      }, e._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }, e._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }, e._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, e._setScrollbar = function () {
        var t = this;if (this._isBodyOverflowing) {
          var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
              n = [].slice.call(document.querySelectorAll(".sticky-top"));i.default(e).each(function (e, n) {
            var o = n.style.paddingRight,
                r = i.default(n).css("padding-right");i.default(n).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
          }), i.default(n).each(function (e, n) {
            var o = n.style.marginRight,
                r = i.default(n).css("margin-right");i.default(n).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px");
          });var o = document.body.style.paddingRight,
              r = i.default(document.body).css("padding-right");i.default(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
        }i.default(document.body).addClass("modal-open");
      }, e._resetScrollbar = function () {
        var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));i.default(t).each(function (t, e) {
          var n = i.default(e).data("padding-right");i.default(e).removeData("padding-right"), e.style.paddingRight = n || "";
        });var e = [].slice.call(document.querySelectorAll(".sticky-top"));i.default(e).each(function (t, e) {
          var n = i.default(e).data("margin-right");"undefined" != typeof n && i.default(e).css("margin-right", n).removeData("margin-right");
        });var n = i.default(document.body).data("padding-right");i.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
      }, e._getScrollbarWidth = function () {
        var t = document.createElement("div");t.className = "modal-scrollbar-measure", document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
      }, t._jQueryInterface = function (e, n) {
        return this.each(function () {
          var o = i.default(this).data("bs.modal"),
              r = a({}, Ht, i.default(this).data(), "object" == typeof e && e ? e : {});if (o || (o = new t(this, r), i.default(this).data("bs.modal", o)), "string" == typeof e) {
            if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');o[e](n);
          } else r.show && o.show(n);
        });
      }, r(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }, { key: "Default", get: function () {
          return Ht;
        } }]), t;
    }();i.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
      var e,
          n = this,
          o = l.getSelectorFromElement(this);o && (e = document.querySelector(o));var r = i.default(e).data("bs.modal") ? "toggle" : a({}, i.default(e).data(), i.default(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var s = i.default(e).one("show.bs.modal", function (t) {
        t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
          i.default(n).is(":visible") && n.focus();
        });
      });Bt._jQueryInterface.call(i.default(e), r, this);
    }), i.default.fn.modal = Bt._jQueryInterface, i.default.fn.modal.Constructor = Bt, i.default.fn.modal.noConflict = function () {
      return i.default.fn.modal = Rt, Bt._jQueryInterface;
    };var qt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Qt = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
        Wt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        Ut = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function Vt(t, e, n) {
      if (0 === t.length) return t;if (n && "function" == typeof n) return n(t);for (var i = new window.DOMParser().parseFromString(t, "text/html"), o = Object.keys(e), r = [].slice.call(i.body.querySelectorAll("*")), a = function (t, n) {
        var i = r[t],
            a = i.nodeName.toLowerCase();if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";var s = [].slice.call(i.attributes),
            l = [].concat(e["*"] || [], e[a] || []);s.forEach(function (t) {
          (function (t, e) {
            var n = t.nodeName.toLowerCase();if (-1 !== e.indexOf(n)) return -1 === qt.indexOf(n) || Boolean(t.nodeValue.match(Wt) || t.nodeValue.match(Ut));for (var i = e.filter(function (t) {
              return t instanceof RegExp;
            }), o = 0, r = i.length; o < r; o++) if (n.match(i[o])) return !0;return !1;
          })(t, l) || i.removeAttribute(t.nodeName);
        });
      }, s = 0, l = r.length; s < l; s++) a(s);return i.body.innerHTML;
    }var Yt = "tooltip",
        zt = i.default.fn[Yt],
        Xt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        Kt = ["sanitize", "whiteList", "sanitizeFn"],
        Gt = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" },
        $t = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        Jt = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: Qt, popperConfig: null },
        Zt = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" },
        te = function () {
      function t(t, e) {
        if ("undefined" == typeof It) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
      }var e = t.prototype;return e.enable = function () {
        this._isEnabled = !0;
      }, e.disable = function () {
        this._isEnabled = !1;
      }, e.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, e.toggle = function (t) {
        if (this._isEnabled) if (t) {
          var e = this.constructor.DATA_KEY,
              n = i.default(t.currentTarget).data(e);n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), i.default(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
        } else {
          if (i.default(this.getTipElement()).hasClass("show")) return void this._leave(null, this);this._enter(null, this);
        }
      }, e.dispose = function () {
        clearTimeout(this._timeout), i.default.removeData(this.element, this.constructor.DATA_KEY), i.default(this.element).off(this.constructor.EVENT_KEY), i.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && i.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, e.show = function () {
        var t = this;if ("none" === i.default(this.element).css("display")) throw new Error("Please use show on visible elements");var e = i.default.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
          i.default(this.element).trigger(e);var n = l.findShadowRoot(this.element),
              o = i.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);if (e.isDefaultPrevented() || !o) return;var r = this.getTipElement(),
              a = l.getUID(this.constructor.NAME);r.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && i.default(r).addClass("fade");var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
              u = this._getAttachment(s);this.addAttachmentClass(u);var f = this._getContainer();i.default(r).data(this.constructor.DATA_KEY, this), i.default.contains(this.element.ownerDocument.documentElement, this.tip) || i.default(r).appendTo(f), i.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new It(this.element, r, this._getPopperConfig(u)), i.default(r).addClass("show"), "ontouchstart" in document.documentElement && i.default(document.body).children().on("mouseover", null, i.default.noop);var d = function () {
            t.config.animation && t._fixTransition();var e = t._hoverState;t._hoverState = null, i.default(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t);
          };if (i.default(this.tip).hasClass("fade")) {
            var c = l.getTransitionDurationFromElement(this.tip);i.default(this.tip).one(l.TRANSITION_END, d).emulateTransitionEnd(c);
          } else d();
        }
      }, e.hide = function (t) {
        var e = this,
            n = this.getTipElement(),
            o = i.default.Event(this.constructor.Event.HIDE),
            r = function () {
          "show" !== e._hoverState && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), i.default(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
        };if (i.default(this.element).trigger(o), !o.isDefaultPrevented()) {
          if (i.default(n).removeClass("show"), "ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, i.default(this.tip).hasClass("fade")) {
            var a = l.getTransitionDurationFromElement(n);i.default(n).one(l.TRANSITION_END, r).emulateTransitionEnd(a);
          } else r();this._hoverState = "";
        }
      }, e.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      }, e.isWithContent = function () {
        return Boolean(this.getTitle());
      }, e.addAttachmentClass = function (t) {
        i.default(this.getTipElement()).addClass("bs-tooltip-" + t);
      }, e.getTipElement = function () {
        return this.tip = this.tip || i.default(this.config.template)[0], this.tip;
      }, e.setContent = function () {
        var t = this.getTipElement();this.setElementContent(i.default(t.querySelectorAll(".tooltip-inner")), this.getTitle()), i.default(t).removeClass("fade show");
      }, e.setElementContent = function (t, e) {
        "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Vt(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? i.default(e).parent().is(t) || t.empty().append(e) : t.text(i.default(e).text());
      }, e.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
      }, e._getPopperConfig = function (t) {
        var e = this;return a({}, { placement: t, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function (t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          }, onUpdate: function (t) {
            return e._handlePopperPlacementChange(t);
          } }, this.config.popperConfig);
      }, e._getOffset = function () {
        var t = this,
            e = {};return "function" == typeof this.config.offset ? e.fn = function (e) {
          return e.offsets = a({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e;
        } : e.offset = this.config.offset, e;
      }, e._getContainer = function () {
        return !1 === this.config.container ? document.body : l.isElement(this.config.container) ? i.default(this.config.container) : i.default(document).find(this.config.container);
      }, e._getAttachment = function (t) {
        return $t[t.toUpperCase()];
      }, e._setListeners = function () {
        var t = this;this.config.trigger.split(" ").forEach(function (e) {
          if ("click" === e) i.default(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
            return t.toggle(e);
          });else if ("manual" !== e) {
            var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                o = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;i.default(t.element).on(n, t.config.selector, function (e) {
              return t._enter(e);
            }).on(o, t.config.selector, function (e) {
              return t._leave(e);
            });
          }
        }), this._hideModalHandler = function () {
          t.element && t.hide();
        }, i.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = a({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
      }, e._fixTitle = function () {
        var t = typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, e._enter = function (t, e) {
        var n = this.constructor.DATA_KEY;(e = e || i.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), i.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), i.default(e.getTipElement()).hasClass("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
          "show" === e._hoverState && e.show();
        }, e.config.delay.show) : e.show());
      }, e._leave = function (t, e) {
        var n = this.constructor.DATA_KEY;(e = e || i.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), i.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
          "out" === e._hoverState && e.hide();
        }, e.config.delay.hide) : e.hide());
      }, e._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;return !1;
      }, e._getConfig = function (t) {
        var e = i.default(this.element).data();return Object.keys(e).forEach(function (t) {
          -1 !== Kt.indexOf(t) && delete e[t];
        }), "number" == typeof (t = a({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l.typeCheckConfig(Yt, t, this.constructor.DefaultType), t.sanitize && (t.template = Vt(t.template, t.whiteList, t.sanitizeFn)), t;
      }, e._getDelegateConfig = function () {
        var t = {};if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);return t;
      }, e._cleanTipClass = function () {
        var t = i.default(this.getTipElement()),
            e = t.attr("class").match(Xt);null !== e && e.length && t.removeClass(e.join(""));
      }, e._handlePopperPlacementChange = function (t) {
        this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
      }, e._fixTransition = function () {
        var t = this.getTipElement(),
            e = this.config.animation;null === t.getAttribute("x-placement") && (i.default(t).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = i.default(this),
              o = n.data("bs.tooltip"),
              r = "object" == typeof e && e;if ((o || !/dispose|hide/.test(e)) && (o || (o = new t(this, r), n.data("bs.tooltip", o)), "string" == typeof e)) {
            if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');o[e]();
          }
        });
      }, r(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }, { key: "Default", get: function () {
          return Jt;
        } }, { key: "NAME", get: function () {
          return Yt;
        } }, { key: "DATA_KEY", get: function () {
          return "bs.tooltip";
        } }, { key: "Event", get: function () {
          return Zt;
        } }, { key: "EVENT_KEY", get: function () {
          return ".bs.tooltip";
        } }, { key: "DefaultType", get: function () {
          return Gt;
        } }]), t;
    }();i.default.fn[Yt] = te._jQueryInterface, i.default.fn[Yt].Constructor = te, i.default.fn[Yt].noConflict = function () {
      return i.default.fn[Yt] = zt, te._jQueryInterface;
    };var ee = "popover",
        ne = i.default.fn[ee],
        ie = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        oe = a({}, te.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        re = a({}, te.DefaultType, { content: "(string|element|function)" }),
        ae = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" },
        se = function (t) {
      var e, n;function o() {
        return t.apply(this, arguments) || this;
      }n = t, (e = o).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;var a = o.prototype;return a.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, a.addAttachmentClass = function (t) {
        i.default(this.getTipElement()).addClass("bs-popover-" + t);
      }, a.getTipElement = function () {
        return this.tip = this.tip || i.default(this.config.template)[0], this.tip;
      }, a.setContent = function () {
        var t = i.default(this.getTipElement());this.setElementContent(t.find(".popover-header"), this.getTitle());var e = this._getContent();"function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show");
      }, a._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content;
      }, a._cleanTipClass = function () {
        var t = i.default(this.getTipElement()),
            e = t.attr("class").match(ie);null !== e && e.length > 0 && t.removeClass(e.join(""));
      }, o._jQueryInterface = function (t) {
        return this.each(function () {
          var e = i.default(this).data("bs.popover"),
              n = "object" == typeof t ? t : null;if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this, n), i.default(this).data("bs.popover", e)), "string" == typeof t)) {
            if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');e[t]();
          }
        });
      }, r(o, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }, { key: "Default", get: function () {
          return oe;
        } }, { key: "NAME", get: function () {
          return ee;
        } }, { key: "DATA_KEY", get: function () {
          return "bs.popover";
        } }, { key: "Event", get: function () {
          return ae;
        } }, { key: "EVENT_KEY", get: function () {
          return ".bs.popover";
        } }, { key: "DefaultType", get: function () {
          return re;
        } }]), o;
    }(te);i.default.fn[ee] = se._jQueryInterface, i.default.fn[ee].Constructor = se, i.default.fn[ee].noConflict = function () {
      return i.default.fn[ee] = ne, se._jQueryInterface;
    };var le = "scrollspy",
        ue = i.default.fn[le],
        fe = { offset: 10, method: "auto", target: "" },
        de = { offset: "number", method: "string", target: "(string|element)" },
        ce = function () {
      function t(t, e) {
        var n = this;this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, i.default(this._scrollElement).on("scroll.bs.scrollspy", function (t) {
          return n._process(t);
        }), this.refresh(), this._process();
      }var e = t.prototype;return e.refresh = function () {
        var t = this,
            e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            n = "auto" === this._config.method ? e : this._config.method,
            o = "position" === n ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
          var e,
              r = l.getSelectorFromElement(t);if (r && (e = document.querySelector(r)), e) {
            var a = e.getBoundingClientRect();if (a.width || a.height) return [i.default(e)[n]().top + o, r];
          }return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (e) {
          t._offsets.push(e[0]), t._targets.push(e[1]);
        });
      }, e.dispose = function () {
        i.default.removeData(this._element, "bs.scrollspy"), i.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, e._getConfig = function (t) {
        if ("string" != typeof (t = a({}, fe, "object" == typeof t && t ? t : {})).target && l.isElement(t.target)) {
          var e = i.default(t.target).attr("id");e || (e = l.getUID(le), i.default(t.target).attr("id", e)), t.target = "#" + e;
        }return l.typeCheckConfig(le, t, de), t;
      }, e._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, e._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, e._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, e._process = function () {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), t >= n) {
          var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var o = this._offsets.length; o--;) {
            this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
          }
        }
      }, e._activate = function (t) {
        this._activeTarget = t, this._clear();var e = this._selector.split(",").map(function (e) {
          return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
        }),
            n = i.default([].slice.call(document.querySelectorAll(e.join(","))));n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"), n.addClass("active")) : (n.addClass("active"), n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), i.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: t });
      }, e._clear = function () {
        [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
          return t.classList.contains("active");
        }).forEach(function (t) {
          return t.classList.remove("active");
        });
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = i.default(this).data("bs.scrollspy");if (n || (n = new t(this, "object" == typeof e && e), i.default(this).data("bs.scrollspy", n)), "string" == typeof e) {
            if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');n[e]();
          }
        });
      }, r(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }, { key: "Default", get: function () {
          return fe;
        } }]), t;
    }();i.default(window).on("load.bs.scrollspy.data-api", function () {
      for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--;) {
        var n = i.default(t[e]);ce._jQueryInterface.call(n, n.data());
      }
    }), i.default.fn[le] = ce._jQueryInterface, i.default.fn[le].Constructor = ce, i.default.fn[le].noConflict = function () {
      return i.default.fn[le] = ue, ce._jQueryInterface;
    };var he = i.default.fn.tab,
        pe = function () {
      function t(t) {
        this._element = t;
      }var e = t.prototype;return e.show = function () {
        var t = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && i.default(this._element).hasClass("active") || i.default(this._element).hasClass("disabled"))) {
          var e,
              n,
              o = i.default(this._element).closest(".nav, .list-group")[0],
              r = l.getSelectorFromElement(this._element);if (o) {
            var a = "UL" === o.nodeName || "OL" === o.nodeName ? "> li > .active" : ".active";n = (n = i.default.makeArray(i.default(o).find(a)))[n.length - 1];
          }var s = i.default.Event("hide.bs.tab", { relatedTarget: this._element }),
              u = i.default.Event("show.bs.tab", { relatedTarget: n });if (n && i.default(n).trigger(s), i.default(this._element).trigger(u), !u.isDefaultPrevented() && !s.isDefaultPrevented()) {
            r && (e = document.querySelector(r)), this._activate(this._element, o);var f = function () {
              var e = i.default.Event("hidden.bs.tab", { relatedTarget: t._element }),
                  o = i.default.Event("shown.bs.tab", { relatedTarget: n });i.default(n).trigger(e), i.default(t._element).trigger(o);
            };e ? this._activate(e, e.parentNode, f) : f();
          }
        }
      }, e.dispose = function () {
        i.default.removeData(this._element, "bs.tab"), this._element = null;
      }, e._activate = function (t, e, n) {
        var o = this,
            r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? i.default(e).children(".active") : i.default(e).find("> li > .active"))[0],
            a = n && r && i.default(r).hasClass("fade"),
            s = function () {
          return o._transitionComplete(t, r, n);
        };if (r && a) {
          var u = l.getTransitionDurationFromElement(r);i.default(r).removeClass("show").one(l.TRANSITION_END, s).emulateTransitionEnd(u);
        } else s();
      }, e._transitionComplete = function (t, e, n) {
        if (e) {
          i.default(e).removeClass("active");var o = i.default(e.parentNode).find("> .dropdown-menu .active")[0];o && i.default(o).removeClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
        }if (i.default(t).addClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), l.reflow(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && i.default(t.parentNode).hasClass("dropdown-menu")) {
          var r = i.default(t).closest(".dropdown")[0];if (r) {
            var a = [].slice.call(r.querySelectorAll(".dropdown-toggle"));i.default(a).addClass("active");
          }t.setAttribute("aria-expanded", !0);
        }n && n();
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = i.default(this),
              o = n.data("bs.tab");if (o || (o = new t(this), n.data("bs.tab", o)), "string" == typeof e) {
            if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');o[e]();
          }
        });
      }, r(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }]), t;
    }();i.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
      t.preventDefault(), pe._jQueryInterface.call(i.default(this), "show");
    }), i.default.fn.tab = pe._jQueryInterface, i.default.fn.tab.Constructor = pe, i.default.fn.tab.noConflict = function () {
      return i.default.fn.tab = he, pe._jQueryInterface;
    };var me = i.default.fn.toast,
        ge = { animation: "boolean", autohide: "boolean", delay: "number" },
        ve = { animation: !0, autohide: !0, delay: 500 },
        _e = function () {
      function t(t, e) {
        this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
      }var e = t.prototype;return e.show = function () {
        var t = this,
            e = i.default.Event("show.bs.toast");if (i.default(this._element).trigger(e), !e.isDefaultPrevented()) {
          this._clearTimeout(), this._config.animation && this._element.classList.add("fade");var n = function () {
            t._element.classList.remove("showing"), t._element.classList.add("show"), i.default(t._element).trigger("shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout(function () {
              t.hide();
            }, t._config.delay));
          };if (this._element.classList.remove("hide"), l.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
            var o = l.getTransitionDurationFromElement(this._element);i.default(this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(o);
          } else n();
        }
      }, e.hide = function () {
        if (this._element.classList.contains("show")) {
          var t = i.default.Event("hide.bs.toast");i.default(this._element).trigger(t), t.isDefaultPrevented() || this._close();
        }
      }, e.dispose = function () {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), i.default(this._element).off("click.dismiss.bs.toast"), i.default.removeData(this._element, "bs.toast"), this._element = null, this._config = null;
      }, e._getConfig = function (t) {
        return t = a({}, ve, i.default(this._element).data(), "object" == typeof t && t ? t : {}), l.typeCheckConfig("toast", t, this.constructor.DefaultType), t;
      }, e._setListeners = function () {
        var t = this;i.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
          return t.hide();
        });
      }, e._close = function () {
        var t = this,
            e = function () {
          t._element.classList.add("hide"), i.default(t._element).trigger("hidden.bs.toast");
        };if (this._element.classList.remove("show"), this._config.animation) {
          var n = l.getTransitionDurationFromElement(this._element);i.default(this._element).one(l.TRANSITION_END, e).emulateTransitionEnd(n);
        } else e();
      }, e._clearTimeout = function () {
        clearTimeout(this._timeout), this._timeout = null;
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = i.default(this),
              o = n.data("bs.toast");if (o || (o = new t(this, "object" == typeof e && e), n.data("bs.toast", o)), "string" == typeof e) {
            if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');o[e](this);
          }
        });
      }, r(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }, { key: "DefaultType", get: function () {
          return ge;
        } }, { key: "Default", get: function () {
          return ve;
        } }]), t;
    }();i.default.fn.toast = _e._jQueryInterface, i.default.fn.toast.Constructor = _e, i.default.fn.toast.noConflict = function () {
      return i.default.fn.toast = me, _e._jQueryInterface;
    }, t.Alert = d, t.Button = h, t.Carousel = y, t.Collapse = S, t.Dropdown = Ft, t.Modal = Bt, t.Popover = se, t.Scrollspy = ce, t.Tab = pe, t.Toast = _e, t.Tooltip = te, t.Util = l, Object.defineProperty(t, "__esModule", { value: !0 });
  });
  //# sourceMappingURL=bootstrap.bundle.min.js.map
});
define('ember-app/templates/bootstrap/js/bootstrap', ['module', 'exports', 'jquery', 'popper.js'], function (module, exports) {
  'use strict';

  /*!
    * Bootstrap v4.5.3 (https://getbootstrap.com/)
    * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.bootstrap = {}, global.jQuery, global.Popper));
  })(undefined, function (exports, $, Popper) {
    'use strict';

    function _interopDefaultLegacy(e) {
      return e && typeof e === 'object' && 'default' in e ? e : { 'default': e };
    }

    var $__default = /*#__PURE__*/_interopDefaultLegacy($);
    var Popper__default = /*#__PURE__*/_interopDefaultLegacy(Popper);

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.5.3): util.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    /**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */

    var TRANSITION_END = 'transitionend';
    var MAX_UID = 1000000;
    var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

    function toType(obj) {
      if (obj === null || typeof obj === 'undefined') {
        return "" + obj;
      }

      return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
    }

    function getSpecialTransitionEndEvent() {
      return {
        bindType: TRANSITION_END,
        delegateType: TRANSITION_END,
        handle: function handle(event) {
          if ($__default['default'](event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
          }

          return undefined;
        }
      };
    }

    function transitionEndEmulator(duration) {
      var _this = this;

      var called = false;
      $__default['default'](this).one(Util.TRANSITION_END, function () {
        called = true;
      });
      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(_this);
        }
      }, duration);
      return this;
    }

    function setTransitionEndSupport() {
      $__default['default'].fn.emulateTransitionEnd = transitionEndEmulator;
      $__default['default'].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */

    var Util = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function getUID(prefix) {
        do {
          prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
        } while (document.getElementById(prefix));

        return prefix;
      },
      getSelectorFromElement: function getSelectorFromElement(element) {
        var selector = element.getAttribute('data-target');

        if (!selector || selector === '#') {
          var hrefAttr = element.getAttribute('href');
          selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
        }

        try {
          return document.querySelector(selector) ? selector : null;
        } catch (_) {
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
        if (!element) {
          return 0;
        } // Get transition-duration of the element


        var transitionDuration = $__default['default'](element).css('transition-duration');
        var transitionDelay = $__default['default'](element).css('transition-delay');
        var floatTransitionDuration = parseFloat(transitionDuration);
        var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

        if (!floatTransitionDuration && !floatTransitionDelay) {
          return 0;
        } // If multiple durations are defined, take the first


        transitionDuration = transitionDuration.split(',')[0];
        transitionDelay = transitionDelay.split(',')[0];
        return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
      },
      reflow: function reflow(element) {
        return element.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $__default['default'](element).trigger(TRANSITION_END);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(TRANSITION_END);
      },
      isElement: function isElement(obj) {
        return (obj[0] || obj).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
        for (var property in configTypes) {
          if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
            var expectedTypes = configTypes[property];
            var value = config[property];
            var valueType = value && Util.isElement(value) ? 'element' : toType(value);

            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
            }
          }
        }
      },
      findShadowRoot: function findShadowRoot(element) {
        if (!document.documentElement.attachShadow) {
          return null;
        } // Can find the shadow root otherwise it'll return the document


        if (typeof element.getRootNode === 'function') {
          var root = element.getRootNode();
          return root instanceof ShadowRoot ? root : null;
        }

        if (element instanceof ShadowRoot) {
          return element;
        } // when we don't find a shadow root


        if (!element.parentNode) {
          return null;
        }

        return Util.findShadowRoot(element.parentNode);
      },
      jQueryDetection: function jQueryDetection() {
        if (typeof $__default['default'] === 'undefined') {
          throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
        }

        var version = $__default['default'].fn.jquery.split(' ')[0].split('.');
        var minMajor = 1;
        var ltMajor = 2;
        var minMinor = 9;
        var minPatch = 1;
        var maxMajor = 4;

        if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
          throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
        }
      }
    };
    Util.jQueryDetection();
    setTransitionEndSupport();

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'alert';
    var VERSION = '4.5.3';
    var DATA_KEY = 'bs.alert';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
    var SELECTOR_DISMISS = '[data-dismiss="alert"]';
    var EVENT_CLOSE = "close" + EVENT_KEY;
    var EVENT_CLOSED = "closed" + EVENT_KEY;
    var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
    var CLASS_NAME_ALERT = 'alert';
    var CLASS_NAME_FADE = 'fade';
    var CLASS_NAME_SHOW = 'show';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Alert = /*#__PURE__*/function () {
      function Alert(element) {
        this._element = element;
      } // Getters


      var _proto = Alert.prototype;

      // Public
      _proto.close = function close(element) {
        var rootElement = this._element;

        if (element) {
          rootElement = this._getRootElement(element);
        }

        var customEvent = this._triggerCloseEvent(rootElement);

        if (customEvent.isDefaultPrevented()) {
          return;
        }

        this._removeElement(rootElement);
      };

      _proto.dispose = function dispose() {
        $__default['default'].removeData(this._element, DATA_KEY);
        this._element = null;
      } // Private
      ;

      _proto._getRootElement = function _getRootElement(element) {
        var selector = Util.getSelectorFromElement(element);
        var parent = false;

        if (selector) {
          parent = document.querySelector(selector);
        }

        if (!parent) {
          parent = $__default['default'](element).closest("." + CLASS_NAME_ALERT)[0];
        }

        return parent;
      };

      _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
        var closeEvent = $__default['default'].Event(EVENT_CLOSE);
        $__default['default'](element).trigger(closeEvent);
        return closeEvent;
      };

      _proto._removeElement = function _removeElement(element) {
        var _this = this;

        $__default['default'](element).removeClass(CLASS_NAME_SHOW);

        if (!$__default['default'](element).hasClass(CLASS_NAME_FADE)) {
          this._destroyElement(element);

          return;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(element);
        $__default['default'](element).one(Util.TRANSITION_END, function (event) {
          return _this._destroyElement(element, event);
        }).emulateTransitionEnd(transitionDuration);
      };

      _proto._destroyElement = function _destroyElement(element) {
        $__default['default'](element).detach().trigger(EVENT_CLOSED).remove();
      } // Static
      ;

      Alert._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $element = $__default['default'](this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Alert(this);
            $element.data(DATA_KEY, data);
          }

          if (config === 'close') {
            data[config](this);
          }
        });
      };

      Alert._handleDismiss = function _handleDismiss(alertInstance) {
        return function (event) {
          if (event) {
            event.preventDefault();
          }

          alertInstance.close(this);
        };
      };

      _createClass(Alert, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Alert;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME] = Alert._jQueryInterface;
    $__default['default'].fn[NAME].Constructor = Alert;

    $__default['default'].fn[NAME].noConflict = function () {
      $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
      return Alert._jQueryInterface;
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$1 = 'button';
    var VERSION$1 = '4.5.3';
    var DATA_KEY$1 = 'bs.button';
    var EVENT_KEY$1 = "." + DATA_KEY$1;
    var DATA_API_KEY$1 = '.data-api';
    var JQUERY_NO_CONFLICT$1 = $__default['default'].fn[NAME$1];
    var CLASS_NAME_ACTIVE = 'active';
    var CLASS_NAME_BUTTON = 'btn';
    var CLASS_NAME_FOCUS = 'focus';
    var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
    var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
    var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
    var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
    var SELECTOR_INPUT = 'input:not([type="hidden"])';
    var SELECTOR_ACTIVE = '.active';
    var SELECTOR_BUTTON = '.btn';
    var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
    var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
    var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Button = /*#__PURE__*/function () {
      function Button(element) {
        this._element = element;
        this.shouldAvoidTriggerChange = false;
      } // Getters


      var _proto = Button.prototype;

      // Public
      _proto.toggle = function toggle() {
        var triggerChangeEvent = true;
        var addAriaPressed = true;
        var rootElement = $__default['default'](this._element).closest(SELECTOR_DATA_TOGGLES)[0];

        if (rootElement) {
          var input = this._element.querySelector(SELECTOR_INPUT);

          if (input) {
            if (input.type === 'radio') {
              if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
                triggerChangeEvent = false;
              } else {
                var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

                if (activeElement) {
                  $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE);
                }
              }
            }

            if (triggerChangeEvent) {
              // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
              if (input.type === 'checkbox' || input.type === 'radio') {
                input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
              }

              if (!this.shouldAvoidTriggerChange) {
                $__default['default'](input).trigger('change');
              }
            }

            input.focus();
            addAriaPressed = false;
          }
        }

        if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
          if (addAriaPressed) {
            this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
          }

          if (triggerChangeEvent) {
            $__default['default'](this._element).toggleClass(CLASS_NAME_ACTIVE);
          }
        }
      };

      _proto.dispose = function dispose() {
        $__default['default'].removeData(this._element, DATA_KEY$1);
        this._element = null;
      } // Static
      ;

      Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
        return this.each(function () {
          var $element = $__default['default'](this);
          var data = $element.data(DATA_KEY$1);

          if (!data) {
            data = new Button(this);
            $element.data(DATA_KEY$1, data);
          }

          data.shouldAvoidTriggerChange = avoidTriggerChange;

          if (config === 'toggle') {
            data[config]();
          }
        });
      };

      _createClass(Button, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$1;
        }
      }]);

      return Button;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $__default['default'](document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
      var button = event.target;
      var initialButton = button;

      if (!$__default['default'](button).hasClass(CLASS_NAME_BUTTON)) {
        button = $__default['default'](button).closest(SELECTOR_BUTTON)[0];
      }

      if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
        event.preventDefault(); // work around Firefox bug #1540995
      } else {
        var inputBtn = button.querySelector(SELECTOR_INPUT);

        if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
          event.preventDefault(); // work around Firefox bug #1540995

          return;
        }

        if (initialButton.tagName === 'INPUT' || button.tagName !== 'LABEL') {
          Button._jQueryInterface.call($__default['default'](button), 'toggle', initialButton.tagName === 'INPUT');
        }
      }
    }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
      var button = $__default['default'](event.target).closest(SELECTOR_BUTTON)[0];
      $__default['default'](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
    });
    $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
      // ensure correct active class is set to match the controls' actual values/states
      // find all checkboxes/readio buttons inside data-toggle groups
      var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

      for (var i = 0, len = buttons.length; i < len; i++) {
        var button = buttons[i];
        var input = button.querySelector(SELECTOR_INPUT);

        if (input.checked || input.hasAttribute('checked')) {
          button.classList.add(CLASS_NAME_ACTIVE);
        } else {
          button.classList.remove(CLASS_NAME_ACTIVE);
        }
      } // find all button toggles


      buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

      for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
        var _button = buttons[_i];

        if (_button.getAttribute('aria-pressed') === 'true') {
          _button.classList.add(CLASS_NAME_ACTIVE);
        } else {
          _button.classList.remove(CLASS_NAME_ACTIVE);
        }
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$1] = Button._jQueryInterface;
    $__default['default'].fn[NAME$1].Constructor = Button;

    $__default['default'].fn[NAME$1].noConflict = function () {
      $__default['default'].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
      return Button._jQueryInterface;
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$2 = 'carousel';
    var VERSION$2 = '4.5.3';
    var DATA_KEY$2 = 'bs.carousel';
    var EVENT_KEY$2 = "." + DATA_KEY$2;
    var DATA_API_KEY$2 = '.data-api';
    var JQUERY_NO_CONFLICT$2 = $__default['default'].fn[NAME$2];
    var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

    var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

    var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

    var SWIPE_THRESHOLD = 40;
    var Default = {
      interval: 5000,
      keyboard: true,
      slide: false,
      pause: 'hover',
      wrap: true,
      touch: true
    };
    var DefaultType = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean'
    };
    var DIRECTION_NEXT = 'next';
    var DIRECTION_PREV = 'prev';
    var DIRECTION_LEFT = 'left';
    var DIRECTION_RIGHT = 'right';
    var EVENT_SLIDE = "slide" + EVENT_KEY$2;
    var EVENT_SLID = "slid" + EVENT_KEY$2;
    var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
    var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
    var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
    var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
    var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
    var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
    var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
    var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
    var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
    var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
    var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
    var CLASS_NAME_CAROUSEL = 'carousel';
    var CLASS_NAME_ACTIVE$1 = 'active';
    var CLASS_NAME_SLIDE = 'slide';
    var CLASS_NAME_RIGHT = 'carousel-item-right';
    var CLASS_NAME_LEFT = 'carousel-item-left';
    var CLASS_NAME_NEXT = 'carousel-item-next';
    var CLASS_NAME_PREV = 'carousel-item-prev';
    var CLASS_NAME_POINTER_EVENT = 'pointer-event';
    var SELECTOR_ACTIVE$1 = '.active';
    var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
    var SELECTOR_ITEM = '.carousel-item';
    var SELECTOR_ITEM_IMG = '.carousel-item img';
    var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
    var SELECTOR_INDICATORS = '.carousel-indicators';
    var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
    var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
    var PointerType = {
      TOUCH: 'touch',
      PEN: 'pen'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Carousel = /*#__PURE__*/function () {
      function Carousel(element, config) {
        this._items = null;
        this._interval = null;
        this._activeElement = null;
        this._isPaused = false;
        this._isSliding = false;
        this.touchTimeout = null;
        this.touchStartX = 0;
        this.touchDeltaX = 0;
        this._config = this._getConfig(config);
        this._element = element;
        this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
        this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
        this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

        this._addEventListeners();
      } // Getters


      var _proto = Carousel.prototype;

      // Public
      _proto.next = function next() {
        if (!this._isSliding) {
          this._slide(DIRECTION_NEXT);
        }
      };

      _proto.nextWhenVisible = function nextWhenVisible() {
        var $element = $__default['default'](this._element); // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible

        if (!document.hidden && $element.is(':visible') && $element.css('visibility') !== 'hidden') {
          this.next();
        }
      };

      _proto.prev = function prev() {
        if (!this._isSliding) {
          this._slide(DIRECTION_PREV);
        }
      };

      _proto.pause = function pause(event) {
        if (!event) {
          this._isPaused = true;
        }

        if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
          Util.triggerTransitionEnd(this._element);
          this.cycle(true);
        }

        clearInterval(this._interval);
        this._interval = null;
      };

      _proto.cycle = function cycle(event) {
        if (!event) {
          this._isPaused = false;
        }

        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }

        if (this._config.interval && !this._isPaused) {
          this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
      };

      _proto.to = function to(index) {
        var _this = this;

        this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

        var activeIndex = this._getItemIndex(this._activeElement);

        if (index > this._items.length - 1 || index < 0) {
          return;
        }

        if (this._isSliding) {
          $__default['default'](this._element).one(EVENT_SLID, function () {
            return _this.to(index);
          });
          return;
        }

        if (activeIndex === index) {
          this.pause();
          this.cycle();
          return;
        }

        var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

        this._slide(direction, this._items[index]);
      };

      _proto.dispose = function dispose() {
        $__default['default'](this._element).off(EVENT_KEY$2);
        $__default['default'].removeData(this._element, DATA_KEY$2);
        this._items = null;
        this._config = null;
        this._element = null;
        this._interval = null;
        this._isPaused = null;
        this._isSliding = null;
        this._activeElement = null;
        this._indicatorsElement = null;
      } // Private
      ;

      _proto._getConfig = function _getConfig(config) {
        config = _extends({}, Default, config);
        Util.typeCheckConfig(NAME$2, config, DefaultType);
        return config;
      };

      _proto._handleSwipe = function _handleSwipe() {
        var absDeltax = Math.abs(this.touchDeltaX);

        if (absDeltax <= SWIPE_THRESHOLD) {
          return;
        }

        var direction = absDeltax / this.touchDeltaX;
        this.touchDeltaX = 0; // swipe left

        if (direction > 0) {
          this.prev();
        } // swipe right


        if (direction < 0) {
          this.next();
        }
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this2 = this;

        if (this._config.keyboard) {
          $__default['default'](this._element).on(EVENT_KEYDOWN, function (event) {
            return _this2._keydown(event);
          });
        }

        if (this._config.pause === 'hover') {
          $__default['default'](this._element).on(EVENT_MOUSEENTER, function (event) {
            return _this2.pause(event);
          }).on(EVENT_MOUSELEAVE, function (event) {
            return _this2.cycle(event);
          });
        }

        if (this._config.touch) {
          this._addTouchEventListeners();
        }
      };

      _proto._addTouchEventListeners = function _addTouchEventListeners() {
        var _this3 = this;

        if (!this._touchSupported) {
          return;
        }

        var start = function start(event) {
          if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
            _this3.touchStartX = event.originalEvent.clientX;
          } else if (!_this3._pointerEvent) {
            _this3.touchStartX = event.originalEvent.touches[0].clientX;
          }
        };

        var move = function move(event) {
          // ensure swiping with one touch and not pinching
          if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
            _this3.touchDeltaX = 0;
          } else {
            _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
          }
        };

        var end = function end(event) {
          if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
            _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
          }

          _this3._handleSwipe();

          if (_this3._config.pause === 'hover') {
            // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            _this3.pause();

            if (_this3.touchTimeout) {
              clearTimeout(_this3.touchTimeout);
            }

            _this3.touchTimeout = setTimeout(function (event) {
              return _this3.cycle(event);
            }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
          }
        };

        $__default['default'](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
          return e.preventDefault();
        });

        if (this._pointerEvent) {
          $__default['default'](this._element).on(EVENT_POINTERDOWN, function (event) {
            return start(event);
          });
          $__default['default'](this._element).on(EVENT_POINTERUP, function (event) {
            return end(event);
          });

          this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
          $__default['default'](this._element).on(EVENT_TOUCHSTART, function (event) {
            return start(event);
          });
          $__default['default'](this._element).on(EVENT_TOUCHMOVE, function (event) {
            return move(event);
          });
          $__default['default'](this._element).on(EVENT_TOUCHEND, function (event) {
            return end(event);
          });
        }
      };

      _proto._keydown = function _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }

        switch (event.which) {
          case ARROW_LEFT_KEYCODE:
            event.preventDefault();
            this.prev();
            break;

          case ARROW_RIGHT_KEYCODE:
            event.preventDefault();
            this.next();
            break;
        }
      };

      _proto._getItemIndex = function _getItemIndex(element) {
        this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
        return this._items.indexOf(element);
      };

      _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
        var isNextDirection = direction === DIRECTION_NEXT;
        var isPrevDirection = direction === DIRECTION_PREV;

        var activeIndex = this._getItemIndex(activeElement);

        var lastItemIndex = this._items.length - 1;
        var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

        if (isGoingToWrap && !this._config.wrap) {
          return activeElement;
        }

        var delta = direction === DIRECTION_PREV ? -1 : 1;
        var itemIndex = (activeIndex + delta) % this._items.length;
        return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
      };

      _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
        var targetIndex = this._getItemIndex(relatedTarget);

        var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

        var slideEvent = $__default['default'].Event(EVENT_SLIDE, {
          relatedTarget: relatedTarget,
          direction: eventDirectionName,
          from: fromIndex,
          to: targetIndex
        });
        $__default['default'](this._element).trigger(slideEvent);
        return slideEvent;
      };

      _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
          var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
          $__default['default'](indicators).removeClass(CLASS_NAME_ACTIVE$1);

          var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

          if (nextIndicator) {
            $__default['default'](nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
          }
        }
      };

      _proto._slide = function _slide(direction, element) {
        var _this4 = this;

        var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

        var activeElementIndex = this._getItemIndex(activeElement);

        var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

        var nextElementIndex = this._getItemIndex(nextElement);

        var isCycling = Boolean(this._interval);
        var directionalClassName;
        var orderClassName;
        var eventDirectionName;

        if (direction === DIRECTION_NEXT) {
          directionalClassName = CLASS_NAME_LEFT;
          orderClassName = CLASS_NAME_NEXT;
          eventDirectionName = DIRECTION_LEFT;
        } else {
          directionalClassName = CLASS_NAME_RIGHT;
          orderClassName = CLASS_NAME_PREV;
          eventDirectionName = DIRECTION_RIGHT;
        }

        if (nextElement && $__default['default'](nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
          this._isSliding = false;
          return;
        }

        var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

        if (slideEvent.isDefaultPrevented()) {
          return;
        }

        if (!activeElement || !nextElement) {
          // Some weirdness is happening, so we bail
          return;
        }

        this._isSliding = true;

        if (isCycling) {
          this.pause();
        }

        this._setActiveIndicatorElement(nextElement);

        var slidEvent = $__default['default'].Event(EVENT_SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });

        if ($__default['default'](this._element).hasClass(CLASS_NAME_SLIDE)) {
          $__default['default'](nextElement).addClass(orderClassName);
          Util.reflow(nextElement);
          $__default['default'](activeElement).addClass(directionalClassName);
          $__default['default'](nextElement).addClass(directionalClassName);
          var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

          if (nextElementInterval) {
            this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
            this._config.interval = nextElementInterval;
          } else {
            this._config.interval = this._config.defaultInterval || this._config.interval;
          }

          var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
          $__default['default'](activeElement).one(Util.TRANSITION_END, function () {
            $__default['default'](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
            $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
            _this4._isSliding = false;
            setTimeout(function () {
              return $__default['default'](_this4._element).trigger(slidEvent);
            }, 0);
          }).emulateTransitionEnd(transitionDuration);
        } else {
          $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1);
          $__default['default'](nextElement).addClass(CLASS_NAME_ACTIVE$1);
          this._isSliding = false;
          $__default['default'](this._element).trigger(slidEvent);
        }

        if (isCycling) {
          this.cycle();
        }
      } // Static
      ;

      Carousel._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $__default['default'](this).data(DATA_KEY$2);

          var _config = _extends({}, Default, $__default['default'](this).data());

          if (typeof config === 'object') {
            _config = _extends({}, _config, config);
          }

          var action = typeof config === 'string' ? config : _config.slide;

          if (!data) {
            data = new Carousel(this, _config);
            $__default['default'](this).data(DATA_KEY$2, data);
          }

          if (typeof config === 'number') {
            data.to(config);
          } else if (typeof action === 'string') {
            if (typeof data[action] === 'undefined') {
              throw new TypeError("No method named \"" + action + "\"");
            }

            data[action]();
          } else if (_config.interval && _config.ride) {
            data.pause();
            data.cycle();
          }
        });
      };

      Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
        var selector = Util.getSelectorFromElement(this);

        if (!selector) {
          return;
        }

        var target = $__default['default'](selector)[0];

        if (!target || !$__default['default'](target).hasClass(CLASS_NAME_CAROUSEL)) {
          return;
        }

        var config = _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

        var slideIndex = this.getAttribute('data-slide-to');

        if (slideIndex) {
          config.interval = false;
        }

        Carousel._jQueryInterface.call($__default['default'](target), config);

        if (slideIndex) {
          $__default['default'](target).data(DATA_KEY$2).to(slideIndex);
        }

        event.preventDefault();
      };

      _createClass(Carousel, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$2;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return Carousel;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $__default['default'](document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
    $__default['default'](window).on(EVENT_LOAD_DATA_API$1, function () {
      var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

      for (var i = 0, len = carousels.length; i < len; i++) {
        var $carousel = $__default['default'](carousels[i]);

        Carousel._jQueryInterface.call($carousel, $carousel.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$2] = Carousel._jQueryInterface;
    $__default['default'].fn[NAME$2].Constructor = Carousel;

    $__default['default'].fn[NAME$2].noConflict = function () {
      $__default['default'].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
      return Carousel._jQueryInterface;
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$3 = 'collapse';
    var VERSION$3 = '4.5.3';
    var DATA_KEY$3 = 'bs.collapse';
    var EVENT_KEY$3 = "." + DATA_KEY$3;
    var DATA_API_KEY$3 = '.data-api';
    var JQUERY_NO_CONFLICT$3 = $__default['default'].fn[NAME$3];
    var Default$1 = {
      toggle: true,
      parent: ''
    };
    var DefaultType$1 = {
      toggle: 'boolean',
      parent: '(string|element)'
    };
    var EVENT_SHOW = "show" + EVENT_KEY$3;
    var EVENT_SHOWN = "shown" + EVENT_KEY$3;
    var EVENT_HIDE = "hide" + EVENT_KEY$3;
    var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
    var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
    var CLASS_NAME_SHOW$1 = 'show';
    var CLASS_NAME_COLLAPSE = 'collapse';
    var CLASS_NAME_COLLAPSING = 'collapsing';
    var CLASS_NAME_COLLAPSED = 'collapsed';
    var DIMENSION_WIDTH = 'width';
    var DIMENSION_HEIGHT = 'height';
    var SELECTOR_ACTIVES = '.show, .collapsing';
    var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Collapse = /*#__PURE__*/function () {
      function Collapse(element, config) {
        this._isTransitioning = false;
        this._element = element;
        this._config = this._getConfig(config);
        this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
        var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

        for (var i = 0, len = toggleList.length; i < len; i++) {
          var elem = toggleList[i];
          var selector = Util.getSelectorFromElement(elem);
          var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
            return foundElem === element;
          });

          if (selector !== null && filterElement.length > 0) {
            this._selector = selector;

            this._triggerArray.push(elem);
          }
        }

        this._parent = this._config.parent ? this._getParent() : null;

        if (!this._config.parent) {
          this._addAriaAndCollapsedClass(this._element, this._triggerArray);
        }

        if (this._config.toggle) {
          this.toggle();
        }
      } // Getters


      var _proto = Collapse.prototype;

      // Public
      _proto.toggle = function toggle() {
        if ($__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
          this.hide();
        } else {
          this.show();
        }
      };

      _proto.show = function show() {
        var _this = this;

        if (this._isTransitioning || $__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
          return;
        }

        var actives;
        var activesData;

        if (this._parent) {
          actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
            if (typeof _this._config.parent === 'string') {
              return elem.getAttribute('data-parent') === _this._config.parent;
            }

            return elem.classList.contains(CLASS_NAME_COLLAPSE);
          });

          if (actives.length === 0) {
            actives = null;
          }
        }

        if (actives) {
          activesData = $__default['default'](actives).not(this._selector).data(DATA_KEY$3);

          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        var startEvent = $__default['default'].Event(EVENT_SHOW);
        $__default['default'](this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        if (actives) {
          Collapse._jQueryInterface.call($__default['default'](actives).not(this._selector), 'hide');

          if (!activesData) {
            $__default['default'](actives).data(DATA_KEY$3, null);
          }
        }

        var dimension = this._getDimension();

        $__default['default'](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
        this._element.style[dimension] = 0;

        if (this._triggerArray.length) {
          $__default['default'](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
        }

        this.setTransitioning(true);

        var complete = function complete() {
          $__default['default'](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
          _this._element.style[dimension] = '';

          _this.setTransitioning(false);

          $__default['default'](_this._element).trigger(EVENT_SHOWN);
        };

        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = "scroll" + capitalizedDimension;
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        this._element.style[dimension] = this._element[scrollSize] + "px";
      };

      _proto.hide = function hide() {
        var _this2 = this;

        if (this._isTransitioning || !$__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
          return;
        }

        var startEvent = $__default['default'].Event(EVENT_HIDE);
        $__default['default'](this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        var dimension = this._getDimension();

        this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
        Util.reflow(this._element);
        $__default['default'](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
        var triggerArrayLength = this._triggerArray.length;

        if (triggerArrayLength > 0) {
          for (var i = 0; i < triggerArrayLength; i++) {
            var trigger = this._triggerArray[i];
            var selector = Util.getSelectorFromElement(trigger);

            if (selector !== null) {
              var $elem = $__default['default']([].slice.call(document.querySelectorAll(selector)));

              if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
                $__default['default'](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
              }
            }
          }
        }

        this.setTransitioning(true);

        var complete = function complete() {
          _this2.setTransitioning(false);

          $__default['default'](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
        };

        this._element.style[dimension] = '';
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      };

      _proto.setTransitioning = function setTransitioning(isTransitioning) {
        this._isTransitioning = isTransitioning;
      };

      _proto.dispose = function dispose() {
        $__default['default'].removeData(this._element, DATA_KEY$3);
        this._config = null;
        this._parent = null;
        this._element = null;
        this._triggerArray = null;
        this._isTransitioning = null;
      } // Private
      ;

      _proto._getConfig = function _getConfig(config) {
        config = _extends({}, Default$1, config);
        config.toggle = Boolean(config.toggle); // Coerce string values

        Util.typeCheckConfig(NAME$3, config, DefaultType$1);
        return config;
      };

      _proto._getDimension = function _getDimension() {
        var hasWidth = $__default['default'](this._element).hasClass(DIMENSION_WIDTH);
        return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
      };

      _proto._getParent = function _getParent() {
        var _this3 = this;

        var parent;

        if (Util.isElement(this._config.parent)) {
          parent = this._config.parent; // It's a jQuery object

          if (typeof this._config.parent.jquery !== 'undefined') {
            parent = this._config.parent[0];
          }
        } else {
          parent = document.querySelector(this._config.parent);
        }

        var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
        var children = [].slice.call(parent.querySelectorAll(selector));
        $__default['default'](children).each(function (i, element) {
          _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
        });
        return parent;
      };

      _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
        var isOpen = $__default['default'](element).hasClass(CLASS_NAME_SHOW$1);

        if (triggerArray.length) {
          $__default['default'](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
        }
      } // Static
      ;

      Collapse._getTargetFromElement = function _getTargetFromElement(element) {
        var selector = Util.getSelectorFromElement(element);
        return selector ? document.querySelector(selector) : null;
      };

      Collapse._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $element = $__default['default'](this);
          var data = $element.data(DATA_KEY$3);

          var _config = _extends({}, Default$1, $element.data(), typeof config === 'object' && config ? config : {});

          if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
            _config.toggle = false;
          }

          if (!data) {
            data = new Collapse(this, _config);
            $element.data(DATA_KEY$3, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Collapse, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$3;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default$1;
        }
      }]);

      return Collapse;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $__default['default'](document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
      // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
      if (event.currentTarget.tagName === 'A') {
        event.preventDefault();
      }

      var $trigger = $__default['default'](this);
      var selector = Util.getSelectorFromElement(this);
      var selectors = [].slice.call(document.querySelectorAll(selector));
      $__default['default'](selectors).each(function () {
        var $target = $__default['default'](this);
        var data = $target.data(DATA_KEY$3);
        var config = data ? 'toggle' : $trigger.data();

        Collapse._jQueryInterface.call($target, config);
      });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$3] = Collapse._jQueryInterface;
    $__default['default'].fn[NAME$3].Constructor = Collapse;

    $__default['default'].fn[NAME$3].noConflict = function () {
      $__default['default'].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
      return Collapse._jQueryInterface;
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$4 = 'dropdown';
    var VERSION$4 = '4.5.3';
    var DATA_KEY$4 = 'bs.dropdown';
    var EVENT_KEY$4 = "." + DATA_KEY$4;
    var DATA_API_KEY$4 = '.data-api';
    var JQUERY_NO_CONFLICT$4 = $__default['default'].fn[NAME$4];
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

    var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

    var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

    var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

    var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

    var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

    var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
    var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
    var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
    var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
    var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
    var EVENT_CLICK = "click" + EVENT_KEY$4;
    var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
    var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
    var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
    var CLASS_NAME_DISABLED = 'disabled';
    var CLASS_NAME_SHOW$2 = 'show';
    var CLASS_NAME_DROPUP = 'dropup';
    var CLASS_NAME_DROPRIGHT = 'dropright';
    var CLASS_NAME_DROPLEFT = 'dropleft';
    var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
    var CLASS_NAME_POSITION_STATIC = 'position-static';
    var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
    var SELECTOR_FORM_CHILD = '.dropdown form';
    var SELECTOR_MENU = '.dropdown-menu';
    var SELECTOR_NAVBAR_NAV = '.navbar-nav';
    var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
    var PLACEMENT_TOP = 'top-start';
    var PLACEMENT_TOPEND = 'top-end';
    var PLACEMENT_BOTTOM = 'bottom-start';
    var PLACEMENT_BOTTOMEND = 'bottom-end';
    var PLACEMENT_RIGHT = 'right-start';
    var PLACEMENT_LEFT = 'left-start';
    var Default$2 = {
      offset: 0,
      flip: true,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic',
      popperConfig: null
    };
    var DefaultType$2 = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string',
      popperConfig: '(null|object)'
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Dropdown = /*#__PURE__*/function () {
      function Dropdown(element, config) {
        this._element = element;
        this._popper = null;
        this._config = this._getConfig(config);
        this._menu = this._getMenuElement();
        this._inNavbar = this._detectNavbar();

        this._addEventListeners();
      } // Getters


      var _proto = Dropdown.prototype;

      // Public
      _proto.toggle = function toggle() {
        if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED)) {
          return;
        }

        var isActive = $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2);

        Dropdown._clearMenus();

        if (isActive) {
          return;
        }

        this.show(true);
      };

      _proto.show = function show(usePopper) {
        if (usePopper === void 0) {
          usePopper = false;
        }

        if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
          return;
        }

        var relatedTarget = {
          relatedTarget: this._element
        };
        var showEvent = $__default['default'].Event(EVENT_SHOW$1, relatedTarget);

        var parent = Dropdown._getParentFromElement(this._element);

        $__default['default'](parent).trigger(showEvent);

        if (showEvent.isDefaultPrevented()) {
          return;
        } // Disable totally Popper.js for Dropdown in Navbar


        if (!this._inNavbar && usePopper) {
          /**
           * Check for Popper dependency
           * Popper - https://popper.js.org
           */
          if (typeof Popper__default['default'] === 'undefined') {
            throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
          }

          var referenceElement = this._element;

          if (this._config.reference === 'parent') {
            referenceElement = parent;
          } else if (Util.isElement(this._config.reference)) {
            referenceElement = this._config.reference; // Check if it's jQuery element

            if (typeof this._config.reference.jquery !== 'undefined') {
              referenceElement = this._config.reference[0];
            }
          } // If boundary is not `scrollParent`, then set position to `static`
          // to allow the menu to "escape" the scroll parent's boundaries
          // https://github.com/twbs/bootstrap/issues/24251


          if (this._config.boundary !== 'scrollParent') {
            $__default['default'](parent).addClass(CLASS_NAME_POSITION_STATIC);
          }

          this._popper = new Popper__default['default'](referenceElement, this._menu, this._getPopperConfig());
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


        if ('ontouchstart' in document.documentElement && $__default['default'](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
          $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
        }

        this._element.focus();

        this._element.setAttribute('aria-expanded', true);

        $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
        $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_SHOWN$1, relatedTarget));
      };

      _proto.hide = function hide() {
        if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || !$__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
          return;
        }

        var relatedTarget = {
          relatedTarget: this._element
        };
        var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);

        var parent = Dropdown._getParentFromElement(this._element);

        $__default['default'](parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          return;
        }

        if (this._popper) {
          this._popper.destroy();
        }

        $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
        $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
      };

      _proto.dispose = function dispose() {
        $__default['default'].removeData(this._element, DATA_KEY$4);
        $__default['default'](this._element).off(EVENT_KEY$4);
        this._element = null;
        this._menu = null;

        if (this._popper !== null) {
          this._popper.destroy();

          this._popper = null;
        }
      };

      _proto.update = function update() {
        this._inNavbar = this._detectNavbar();

        if (this._popper !== null) {
          this._popper.scheduleUpdate();
        }
      } // Private
      ;

      _proto._addEventListeners = function _addEventListeners() {
        var _this = this;

        $__default['default'](this._element).on(EVENT_CLICK, function (event) {
          event.preventDefault();
          event.stopPropagation();

          _this.toggle();
        });
      };

      _proto._getConfig = function _getConfig(config) {
        config = _extends({}, this.constructor.Default, $__default['default'](this._element).data(), config);
        Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
        return config;
      };

      _proto._getMenuElement = function _getMenuElement() {
        if (!this._menu) {
          var parent = Dropdown._getParentFromElement(this._element);

          if (parent) {
            this._menu = parent.querySelector(SELECTOR_MENU);
          }
        }

        return this._menu;
      };

      _proto._getPlacement = function _getPlacement() {
        var $parentDropdown = $__default['default'](this._element.parentNode);
        var placement = PLACEMENT_BOTTOM; // Handle dropup

        if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
          placement = $__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
        } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
          placement = PLACEMENT_RIGHT;
        } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
          placement = PLACEMENT_LEFT;
        } else if ($__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
          placement = PLACEMENT_BOTTOMEND;
        }

        return placement;
      };

      _proto._detectNavbar = function _detectNavbar() {
        return $__default['default'](this._element).closest('.navbar').length > 0;
      };

      _proto._getOffset = function _getOffset() {
        var _this2 = this;

        var offset = {};

        if (typeof this._config.offset === 'function') {
          offset.fn = function (data) {
            data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
            return data;
          };
        } else {
          offset.offset = this._config.offset;
        }

        return offset;
      };

      _proto._getPopperConfig = function _getPopperConfig() {
        var popperConfig = {
          placement: this._getPlacement(),
          modifiers: {
            offset: this._getOffset(),
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          }
        }; // Disable Popper.js if we have a static display

        if (this._config.display === 'static') {
          popperConfig.modifiers.applyStyle = {
            enabled: false
          };
        }

        return _extends({}, popperConfig, this._config.popperConfig);
      } // Static
      ;

      Dropdown._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $__default['default'](this).data(DATA_KEY$4);

          var _config = typeof config === 'object' ? config : null;

          if (!data) {
            data = new Dropdown(this, _config);
            $__default['default'](this).data(DATA_KEY$4, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      Dropdown._clearMenus = function _clearMenus(event) {
        if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
          return;
        }

        var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

        for (var i = 0, len = toggles.length; i < len; i++) {
          var parent = Dropdown._getParentFromElement(toggles[i]);

          var context = $__default['default'](toggles[i]).data(DATA_KEY$4);
          var relatedTarget = {
            relatedTarget: toggles[i]
          };

          if (event && event.type === 'click') {
            relatedTarget.clickEvent = event;
          }

          if (!context) {
            continue;
          }

          var dropdownMenu = context._menu;

          if (!$__default['default'](parent).hasClass(CLASS_NAME_SHOW$2)) {
            continue;
          }

          if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $__default['default'].contains(parent, event.target)) {
            continue;
          }

          var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);
          $__default['default'](parent).trigger(hideEvent);

          if (hideEvent.isDefaultPrevented()) {
            continue;
          } // If this is a touch-enabled device we remove the extra
          // empty mouseover listeners we added for iOS support


          if ('ontouchstart' in document.documentElement) {
            $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
          }

          toggles[i].setAttribute('aria-expanded', 'false');

          if (context._popper) {
            context._popper.destroy();
          }

          $__default['default'](dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
          $__default['default'](parent).removeClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
        }
      };

      Dropdown._getParentFromElement = function _getParentFromElement(element) {
        var parent;
        var selector = Util.getSelectorFromElement(element);

        if (selector) {
          parent = document.querySelector(selector);
        }

        return parent || element.parentNode;
      } // eslint-disable-next-line complexity
      ;

      Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
        // If not input/textarea:
        //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
        // If input/textarea:
        //  - If space key => not a dropdown command
        //  - If key is other than escape
        //    - If key is not up or down => not a dropdown command
        //    - If trigger inside the menu => not a dropdown command
        if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default['default'](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
          return;
        }

        if (this.disabled || $__default['default'](this).hasClass(CLASS_NAME_DISABLED)) {
          return;
        }

        var parent = Dropdown._getParentFromElement(this);

        var isActive = $__default['default'](parent).hasClass(CLASS_NAME_SHOW$2);

        if (!isActive && event.which === ESCAPE_KEYCODE) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (!isActive || event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE) {
          if (event.which === ESCAPE_KEYCODE) {
            $__default['default'](parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
          }

          $__default['default'](this).trigger('click');
          return;
        }

        var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
          return $__default['default'](item).is(':visible');
        });

        if (items.length === 0) {
          return;
        }

        var index = items.indexOf(event.target);

        if (event.which === ARROW_UP_KEYCODE && index > 0) {
          // Up
          index--;
        }

        if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
          // Down
          index++;
        }

        if (index < 0) {
          index = 0;
        }

        items[index].focus();
      };

      _createClass(Dropdown, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$4;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default$2;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType$2;
        }
      }]);

      return Dropdown;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $__default['default'](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
      event.preventDefault();
      event.stopPropagation();

      Dropdown._jQueryInterface.call($__default['default'](this), 'toggle');
    }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
      e.stopPropagation();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$4] = Dropdown._jQueryInterface;
    $__default['default'].fn[NAME$4].Constructor = Dropdown;

    $__default['default'].fn[NAME$4].noConflict = function () {
      $__default['default'].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
      return Dropdown._jQueryInterface;
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$5 = 'modal';
    var VERSION$5 = '4.5.3';
    var DATA_KEY$5 = 'bs.modal';
    var EVENT_KEY$5 = "." + DATA_KEY$5;
    var DATA_API_KEY$5 = '.data-api';
    var JQUERY_NO_CONFLICT$5 = $__default['default'].fn[NAME$5];
    var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

    var Default$3 = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: true
    };
    var DefaultType$3 = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean'
    };
    var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
    var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
    var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
    var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
    var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
    var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
    var EVENT_RESIZE = "resize" + EVENT_KEY$5;
    var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
    var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
    var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
    var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
    var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
    var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
    var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
    var CLASS_NAME_BACKDROP = 'modal-backdrop';
    var CLASS_NAME_OPEN = 'modal-open';
    var CLASS_NAME_FADE$1 = 'fade';
    var CLASS_NAME_SHOW$3 = 'show';
    var CLASS_NAME_STATIC = 'modal-static';
    var SELECTOR_DIALOG = '.modal-dialog';
    var SELECTOR_MODAL_BODY = '.modal-body';
    var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
    var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
    var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
    var SELECTOR_STICKY_CONTENT = '.sticky-top';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Modal = /*#__PURE__*/function () {
      function Modal(element, config) {
        this._config = this._getConfig(config);
        this._element = element;
        this._dialog = element.querySelector(SELECTOR_DIALOG);
        this._backdrop = null;
        this._isShown = false;
        this._isBodyOverflowing = false;
        this._ignoreBackdropClick = false;
        this._isTransitioning = false;
        this._scrollbarWidth = 0;
      } // Getters


      var _proto = Modal.prototype;

      // Public
      _proto.toggle = function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      };

      _proto.show = function show(relatedTarget) {
        var _this = this;

        if (this._isShown || this._isTransitioning) {
          return;
        }

        if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
          this._isTransitioning = true;
        }

        var showEvent = $__default['default'].Event(EVENT_SHOW$2, {
          relatedTarget: relatedTarget
        });
        $__default['default'](this._element).trigger(showEvent);

        if (this._isShown || showEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = true;

        this._checkScrollbar();

        this._setScrollbar();

        this._adjustDialog();

        this._setEscapeEvent();

        this._setResizeEvent();

        $__default['default'](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
          return _this.hide(event);
        });
        $__default['default'](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
          $__default['default'](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
            if ($__default['default'](event.target).is(_this._element)) {
              _this._ignoreBackdropClick = true;
            }
          });
        });

        this._showBackdrop(function () {
          return _this._showElement(relatedTarget);
        });
      };

      _proto.hide = function hide(event) {
        var _this2 = this;

        if (event) {
          event.preventDefault();
        }

        if (!this._isShown || this._isTransitioning) {
          return;
        }

        var hideEvent = $__default['default'].Event(EVENT_HIDE$2);
        $__default['default'](this._element).trigger(hideEvent);

        if (!this._isShown || hideEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = false;
        var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);

        if (transition) {
          this._isTransitioning = true;
        }

        this._setEscapeEvent();

        this._setResizeEvent();

        $__default['default'](document).off(EVENT_FOCUSIN);
        $__default['default'](this._element).removeClass(CLASS_NAME_SHOW$3);
        $__default['default'](this._element).off(EVENT_CLICK_DISMISS);
        $__default['default'](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

        if (transition) {
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $__default['default'](this._element).one(Util.TRANSITION_END, function (event) {
            return _this2._hideModal(event);
          }).emulateTransitionEnd(transitionDuration);
        } else {
          this._hideModal();
        }
      };

      _proto.dispose = function dispose() {
        [window, this._element, this._dialog].forEach(function (htmlElement) {
          return $__default['default'](htmlElement).off(EVENT_KEY$5);
        });
        /**
         * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
         * Do not move `document` in `htmlElements` array
         * It will remove `EVENT_CLICK_DATA_API` event that should remain
         */

        $__default['default'](document).off(EVENT_FOCUSIN);
        $__default['default'].removeData(this._element, DATA_KEY$5);
        this._config = null;
        this._element = null;
        this._dialog = null;
        this._backdrop = null;
        this._isShown = null;
        this._isBodyOverflowing = null;
        this._ignoreBackdropClick = null;
        this._isTransitioning = null;
        this._scrollbarWidth = null;
      };

      _proto.handleUpdate = function handleUpdate() {
        this._adjustDialog();
      } // Private
      ;

      _proto._getConfig = function _getConfig(config) {
        config = _extends({}, Default$3, config);
        Util.typeCheckConfig(NAME$5, config, DefaultType$3);
        return config;
      };

      _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
        var _this3 = this;

        if (this._config.backdrop === 'static') {
          var hideEventPrevented = $__default['default'].Event(EVENT_HIDE_PREVENTED);
          $__default['default'](this._element).trigger(hideEventPrevented);

          if (hideEventPrevented.isDefaultPrevented()) {
            return;
          }

          var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

          if (!isModalOverflowing) {
            this._element.style.overflowY = 'hidden';
          }

          this._element.classList.add(CLASS_NAME_STATIC);

          var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
          $__default['default'](this._element).off(Util.TRANSITION_END);
          $__default['default'](this._element).one(Util.TRANSITION_END, function () {
            _this3._element.classList.remove(CLASS_NAME_STATIC);

            if (!isModalOverflowing) {
              $__default['default'](_this3._element).one(Util.TRANSITION_END, function () {
                _this3._element.style.overflowY = '';
              }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
            }
          }).emulateTransitionEnd(modalTransitionDuration);

          this._element.focus();
        } else {
          this.hide();
        }
      };

      _proto._showElement = function _showElement(relatedTarget) {
        var _this4 = this;

        var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);
        var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          // Don't move modal's DOM position
          document.body.appendChild(this._element);
        }

        this._element.style.display = 'block';

        this._element.removeAttribute('aria-hidden');

        this._element.setAttribute('aria-modal', true);

        this._element.setAttribute('role', 'dialog');

        if ($__default['default'](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
          modalBody.scrollTop = 0;
        } else {
          this._element.scrollTop = 0;
        }

        if (transition) {
          Util.reflow(this._element);
        }

        $__default['default'](this._element).addClass(CLASS_NAME_SHOW$3);

        if (this._config.focus) {
          this._enforceFocus();
        }

        var shownEvent = $__default['default'].Event(EVENT_SHOWN$2, {
          relatedTarget: relatedTarget
        });

        var transitionComplete = function transitionComplete() {
          if (_this4._config.focus) {
            _this4._element.focus();
          }

          _this4._isTransitioning = false;
          $__default['default'](_this4._element).trigger(shownEvent);
        };

        if (transition) {
          var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
          $__default['default'](this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
        } else {
          transitionComplete();
        }
      };

      _proto._enforceFocus = function _enforceFocus() {
        var _this5 = this;

        $__default['default'](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
        .on(EVENT_FOCUSIN, function (event) {
          if (document !== event.target && _this5._element !== event.target && $__default['default'](_this5._element).has(event.target).length === 0) {
            _this5._element.focus();
          }
        });
      };

      _proto._setEscapeEvent = function _setEscapeEvent() {
        var _this6 = this;

        if (this._isShown) {
          $__default['default'](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
            if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
              event.preventDefault();

              _this6.hide();
            } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
              _this6._triggerBackdropTransition();
            }
          });
        } else if (!this._isShown) {
          $__default['default'](this._element).off(EVENT_KEYDOWN_DISMISS);
        }
      };

      _proto._setResizeEvent = function _setResizeEvent() {
        var _this7 = this;

        if (this._isShown) {
          $__default['default'](window).on(EVENT_RESIZE, function (event) {
            return _this7.handleUpdate(event);
          });
        } else {
          $__default['default'](window).off(EVENT_RESIZE);
        }
      };

      _proto._hideModal = function _hideModal() {
        var _this8 = this;

        this._element.style.display = 'none';

        this._element.setAttribute('aria-hidden', true);

        this._element.removeAttribute('aria-modal');

        this._element.removeAttribute('role');

        this._isTransitioning = false;

        this._showBackdrop(function () {
          $__default['default'](document.body).removeClass(CLASS_NAME_OPEN);

          _this8._resetAdjustments();

          _this8._resetScrollbar();

          $__default['default'](_this8._element).trigger(EVENT_HIDDEN$2);
        });
      };

      _proto._removeBackdrop = function _removeBackdrop() {
        if (this._backdrop) {
          $__default['default'](this._backdrop).remove();
          this._backdrop = null;
        }
      };

      _proto._showBackdrop = function _showBackdrop(callback) {
        var _this9 = this;

        var animate = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

        if (this._isShown && this._config.backdrop) {
          this._backdrop = document.createElement('div');
          this._backdrop.className = CLASS_NAME_BACKDROP;

          if (animate) {
            this._backdrop.classList.add(animate);
          }

          $__default['default'](this._backdrop).appendTo(document.body);
          $__default['default'](this._element).on(EVENT_CLICK_DISMISS, function (event) {
            if (_this9._ignoreBackdropClick) {
              _this9._ignoreBackdropClick = false;
              return;
            }

            if (event.target !== event.currentTarget) {
              return;
            }

            _this9._triggerBackdropTransition();
          });

          if (animate) {
            Util.reflow(this._backdrop);
          }

          $__default['default'](this._backdrop).addClass(CLASS_NAME_SHOW$3);

          if (!callback) {
            return;
          }

          if (!animate) {
            callback();
            return;
          }

          var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
          $__default['default'](this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
        } else if (!this._isShown && this._backdrop) {
          $__default['default'](this._backdrop).removeClass(CLASS_NAME_SHOW$3);

          var callbackRemove = function callbackRemove() {
            _this9._removeBackdrop();

            if (callback) {
              callback();
            }
          };

          if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
            var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

            $__default['default'](this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
          } else {
            callbackRemove();
          }
        } else if (callback) {
          callback();
        }
      } // ----------------------------------------------------------------------
      // the following methods are used to handle overflowing modals
      // todo (fat): these should probably be refactored out of modal.js
      // ----------------------------------------------------------------------
      ;

      _proto._adjustDialog = function _adjustDialog() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!this._isBodyOverflowing && isModalOverflowing) {
          this._element.style.paddingLeft = this._scrollbarWidth + "px";
        }

        if (this._isBodyOverflowing && !isModalOverflowing) {
          this._element.style.paddingRight = this._scrollbarWidth + "px";
        }
      };

      _proto._resetAdjustments = function _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
      };

      _proto._checkScrollbar = function _checkScrollbar() {
        var rect = document.body.getBoundingClientRect();
        this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
        this._scrollbarWidth = this._getScrollbarWidth();
      };

      _proto._setScrollbar = function _setScrollbar() {
        var _this10 = this;

        if (this._isBodyOverflowing) {
          // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
          //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
          var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
          var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

          $__default['default'](fixedContent).each(function (index, element) {
            var actualPadding = element.style.paddingRight;
            var calculatedPadding = $__default['default'](element).css('padding-right');
            $__default['default'](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
          }); // Adjust sticky content margin

          $__default['default'](stickyContent).each(function (index, element) {
            var actualMargin = element.style.marginRight;
            var calculatedMargin = $__default['default'](element).css('margin-right');
            $__default['default'](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
          }); // Adjust body padding

          var actualPadding = document.body.style.paddingRight;
          var calculatedPadding = $__default['default'](document.body).css('padding-right');
          $__default['default'](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
        }

        $__default['default'](document.body).addClass(CLASS_NAME_OPEN);
      };

      _proto._resetScrollbar = function _resetScrollbar() {
        // Restore fixed content padding
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        $__default['default'](fixedContent).each(function (index, element) {
          var padding = $__default['default'](element).data('padding-right');
          $__default['default'](element).removeData('padding-right');
          element.style.paddingRight = padding ? padding : '';
        }); // Restore sticky content

        var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
        $__default['default'](elements).each(function (index, element) {
          var margin = $__default['default'](element).data('margin-right');

          if (typeof margin !== 'undefined') {
            $__default['default'](element).css('margin-right', margin).removeData('margin-right');
          }
        }); // Restore body padding

        var padding = $__default['default'](document.body).data('padding-right');
        $__default['default'](document.body).removeData('padding-right');
        document.body.style.paddingRight = padding ? padding : '';
      };

      _proto._getScrollbarWidth = function _getScrollbarWidth() {
        // thx d.walsh
        var scrollDiv = document.createElement('div');
        scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
      } // Static
      ;

      Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = $__default['default'](this).data(DATA_KEY$5);

          var _config = _extends({}, Default$3, $__default['default'](this).data(), typeof config === 'object' && config ? config : {});

          if (!data) {
            data = new Modal(this, _config);
            $__default['default'](this).data(DATA_KEY$5, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config](relatedTarget);
          } else if (_config.show) {
            data.show(relatedTarget);
          }
        });
      };

      _createClass(Modal, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$5;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default$3;
        }
      }]);

      return Modal;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $__default['default'](document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
      var _this11 = this;

      var target;
      var selector = Util.getSelectorFromElement(this);

      if (selector) {
        target = document.querySelector(selector);
      }

      var config = $__default['default'](target).data(DATA_KEY$5) ? 'toggle' : _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

      if (this.tagName === 'A' || this.tagName === 'AREA') {
        event.preventDefault();
      }

      var $target = $__default['default'](target).one(EVENT_SHOW$2, function (showEvent) {
        if (showEvent.isDefaultPrevented()) {
          // Only register focus restorer if modal will actually get shown
          return;
        }

        $target.one(EVENT_HIDDEN$2, function () {
          if ($__default['default'](_this11).is(':visible')) {
            _this11.focus();
          }
        });
      });

      Modal._jQueryInterface.call($__default['default'](target), config, this);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$5] = Modal._jQueryInterface;
    $__default['default'].fn[NAME$5].Constructor = Modal;

    $__default['default'].fn[NAME$5].noConflict = function () {
      $__default['default'].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
      return Modal._jQueryInterface;
    };

    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v4.5.3): tools/sanitizer.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */
    var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
    var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
    var DefaultWhitelist = {
      // Global attributes allowed on any supplied element below.
      '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
      a: ['target', 'href', 'title', 'rel'],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    };
    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */

    var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
    /**
     * A pattern that matches safe data URLs. Only matches image, video and audio types.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */

    var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function allowedAttribute(attr, allowedAttributeList) {
      var attrName = attr.nodeName.toLowerCase();

      if (allowedAttributeList.indexOf(attrName) !== -1) {
        if (uriAttrs.indexOf(attrName) !== -1) {
          return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
        }

        return true;
      }

      var regExp = allowedAttributeList.filter(function (attrRegex) {
        return attrRegex instanceof RegExp;
      }); // Check if a regular expression validates the attribute.

      for (var i = 0, len = regExp.length; i < len; i++) {
        if (attrName.match(regExp[i])) {
          return true;
        }
      }

      return false;
    }

    function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
      if (unsafeHtml.length === 0) {
        return unsafeHtml;
      }

      if (sanitizeFn && typeof sanitizeFn === 'function') {
        return sanitizeFn(unsafeHtml);
      }

      var domParser = new window.DOMParser();
      var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
      var whitelistKeys = Object.keys(whiteList);
      var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

      var _loop = function _loop(i, len) {
        var el = elements[i];
        var elName = el.nodeName.toLowerCase();

        if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
          el.parentNode.removeChild(el);
          return "continue";
        }

        var attributeList = [].slice.call(el.attributes);
        var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
        attributeList.forEach(function (attr) {
          if (!allowedAttribute(attr, whitelistedAttributes)) {
            el.removeAttribute(attr.nodeName);
          }
        });
      };

      for (var i = 0, len = elements.length; i < len; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
      }

      return createdDocument.body.innerHTML;
    }

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$6 = 'tooltip';
    var VERSION$6 = '4.5.3';
    var DATA_KEY$6 = 'bs.tooltip';
    var EVENT_KEY$6 = "." + DATA_KEY$6;
    var JQUERY_NO_CONFLICT$6 = $__default['default'].fn[NAME$6];
    var CLASS_PREFIX = 'bs-tooltip';
    var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
    var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
    var DefaultType$4 = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      whiteList: 'object',
      popperConfig: '(null|object)'
    };
    var AttachmentMap = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left'
    };
    var Default$4 = {
      animation: true,
      template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: false,
      selector: false,
      placement: 'top',
      offset: 0,
      container: false,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent',
      sanitize: true,
      sanitizeFn: null,
      whiteList: DefaultWhitelist,
      popperConfig: null
    };
    var HOVER_STATE_SHOW = 'show';
    var HOVER_STATE_OUT = 'out';
    var Event = {
      HIDE: "hide" + EVENT_KEY$6,
      HIDDEN: "hidden" + EVENT_KEY$6,
      SHOW: "show" + EVENT_KEY$6,
      SHOWN: "shown" + EVENT_KEY$6,
      INSERTED: "inserted" + EVENT_KEY$6,
      CLICK: "click" + EVENT_KEY$6,
      FOCUSIN: "focusin" + EVENT_KEY$6,
      FOCUSOUT: "focusout" + EVENT_KEY$6,
      MOUSEENTER: "mouseenter" + EVENT_KEY$6,
      MOUSELEAVE: "mouseleave" + EVENT_KEY$6
    };
    var CLASS_NAME_FADE$2 = 'fade';
    var CLASS_NAME_SHOW$4 = 'show';
    var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
    var SELECTOR_ARROW = '.arrow';
    var TRIGGER_HOVER = 'hover';
    var TRIGGER_FOCUS = 'focus';
    var TRIGGER_CLICK = 'click';
    var TRIGGER_MANUAL = 'manual';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Tooltip = /*#__PURE__*/function () {
      function Tooltip(element, config) {
        if (typeof Popper__default['default'] === 'undefined') {
          throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
        } // private


        this._isEnabled = true;
        this._timeout = 0;
        this._hoverState = '';
        this._activeTrigger = {};
        this._popper = null; // Protected

        this.element = element;
        this.config = this._getConfig(config);
        this.tip = null;

        this._setListeners();
      } // Getters


      var _proto = Tooltip.prototype;

      // Public
      _proto.enable = function enable() {
        this._isEnabled = true;
      };

      _proto.disable = function disable() {
        this._isEnabled = false;
      };

      _proto.toggleEnabled = function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      };

      _proto.toggle = function toggle(event) {
        if (!this._isEnabled) {
          return;
        }

        if (event) {
          var dataKey = this.constructor.DATA_KEY;
          var context = $__default['default'](event.currentTarget).data(dataKey);

          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $__default['default'](event.currentTarget).data(dataKey, context);
          }

          context._activeTrigger.click = !context._activeTrigger.click;

          if (context._isWithActiveTrigger()) {
            context._enter(null, context);
          } else {
            context._leave(null, context);
          }
        } else {
          if ($__default['default'](this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
            this._leave(null, this);

            return;
          }

          this._enter(null, this);
        }
      };

      _proto.dispose = function dispose() {
        clearTimeout(this._timeout);
        $__default['default'].removeData(this.element, this.constructor.DATA_KEY);
        $__default['default'](this.element).off(this.constructor.EVENT_KEY);
        $__default['default'](this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

        if (this.tip) {
          $__default['default'](this.tip).remove();
        }

        this._isEnabled = null;
        this._timeout = null;
        this._hoverState = null;
        this._activeTrigger = null;

        if (this._popper) {
          this._popper.destroy();
        }

        this._popper = null;
        this.element = null;
        this.config = null;
        this.tip = null;
      };

      _proto.show = function show() {
        var _this = this;

        if ($__default['default'](this.element).css('display') === 'none') {
          throw new Error('Please use show on visible elements');
        }

        var showEvent = $__default['default'].Event(this.constructor.Event.SHOW);

        if (this.isWithContent() && this._isEnabled) {
          $__default['default'](this.element).trigger(showEvent);
          var shadowRoot = Util.findShadowRoot(this.element);
          var isInTheDom = $__default['default'].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

          if (showEvent.isDefaultPrevented() || !isInTheDom) {
            return;
          }

          var tip = this.getTipElement();
          var tipId = Util.getUID(this.constructor.NAME);
          tip.setAttribute('id', tipId);
          this.element.setAttribute('aria-describedby', tipId);
          this.setContent();

          if (this.config.animation) {
            $__default['default'](tip).addClass(CLASS_NAME_FADE$2);
          }

          var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

          var attachment = this._getAttachment(placement);

          this.addAttachmentClass(attachment);

          var container = this._getContainer();

          $__default['default'](tip).data(this.constructor.DATA_KEY, this);

          if (!$__default['default'].contains(this.element.ownerDocument.documentElement, this.tip)) {
            $__default['default'](tip).appendTo(container);
          }

          $__default['default'](this.element).trigger(this.constructor.Event.INSERTED);
          this._popper = new Popper__default['default'](this.element, tip, this._getPopperConfig(attachment));
          $__default['default'](tip).addClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we add extra
          // empty mouseover listeners to the body's immediate children;
          // only needed because of broken event delegation on iOS
          // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

          if ('ontouchstart' in document.documentElement) {
            $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
          }

          var complete = function complete() {
            if (_this.config.animation) {
              _this._fixTransition();
            }

            var prevHoverState = _this._hoverState;
            _this._hoverState = null;
            $__default['default'](_this.element).trigger(_this.constructor.Event.SHOWN);

            if (prevHoverState === HOVER_STATE_OUT) {
              _this._leave(null, _this);
            }
          };

          if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
            var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
            $__default['default'](this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }
        }
      };

      _proto.hide = function hide(callback) {
        var _this2 = this;

        var tip = this.getTipElement();
        var hideEvent = $__default['default'].Event(this.constructor.Event.HIDE);

        var complete = function complete() {
          if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
            tip.parentNode.removeChild(tip);
          }

          _this2._cleanTipClass();

          _this2.element.removeAttribute('aria-describedby');

          $__default['default'](_this2.element).trigger(_this2.constructor.Event.HIDDEN);

          if (_this2._popper !== null) {
            _this2._popper.destroy();
          }

          if (callback) {
            callback();
          }
        };

        $__default['default'](this.element).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          return;
        }

        $__default['default'](tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support

        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
        }

        this._activeTrigger[TRIGGER_CLICK] = false;
        this._activeTrigger[TRIGGER_FOCUS] = false;
        this._activeTrigger[TRIGGER_HOVER] = false;

        if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
          var transitionDuration = Util.getTransitionDurationFromElement(tip);
          $__default['default'](tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }

        this._hoverState = '';
      };

      _proto.update = function update() {
        if (this._popper !== null) {
          this._popper.scheduleUpdate();
        }
      } // Protected
      ;

      _proto.isWithContent = function isWithContent() {
        return Boolean(this.getTitle());
      };

      _proto.addAttachmentClass = function addAttachmentClass(attachment) {
        $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
      };

      _proto.getTipElement = function getTipElement() {
        this.tip = this.tip || $__default['default'](this.config.template)[0];
        return this.tip;
      };

      _proto.setContent = function setContent() {
        var tip = this.getTipElement();
        this.setElementContent($__default['default'](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
        $__default['default'](tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
      };

      _proto.setElementContent = function setElementContent($element, content) {
        if (typeof content === 'object' && (content.nodeType || content.jquery)) {
          // Content is a DOM node or a jQuery
          if (this.config.html) {
            if (!$__default['default'](content).parent().is($element)) {
              $element.empty().append(content);
            }
          } else {
            $element.text($__default['default'](content).text());
          }

          return;
        }

        if (this.config.html) {
          if (this.config.sanitize) {
            content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
          }

          $element.html(content);
        } else {
          $element.text(content);
        }
      };

      _proto.getTitle = function getTitle() {
        var title = this.element.getAttribute('data-original-title');

        if (!title) {
          title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
        }

        return title;
      } // Private
      ;

      _proto._getPopperConfig = function _getPopperConfig(attachment) {
        var _this3 = this;

        var defaultBsConfig = {
          placement: attachment,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: SELECTOR_ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this3._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            return _this3._handlePopperPlacementChange(data);
          }
        };
        return _extends({}, defaultBsConfig, this.config.popperConfig);
      };

      _proto._getOffset = function _getOffset() {
        var _this4 = this;

        var offset = {};

        if (typeof this.config.offset === 'function') {
          offset.fn = function (data) {
            data.offsets = _extends({}, data.offsets, _this4.config.offset(data.offsets, _this4.element) || {});
            return data;
          };
        } else {
          offset.offset = this.config.offset;
        }

        return offset;
      };

      _proto._getContainer = function _getContainer() {
        if (this.config.container === false) {
          return document.body;
        }

        if (Util.isElement(this.config.container)) {
          return $__default['default'](this.config.container);
        }

        return $__default['default'](document).find(this.config.container);
      };

      _proto._getAttachment = function _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
      };

      _proto._setListeners = function _setListeners() {
        var _this5 = this;

        var triggers = this.config.trigger.split(' ');
        triggers.forEach(function (trigger) {
          if (trigger === 'click') {
            $__default['default'](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
              return _this5.toggle(event);
            });
          } else if (trigger !== TRIGGER_MANUAL) {
            var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
            var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
            $__default['default'](_this5.element).on(eventIn, _this5.config.selector, function (event) {
              return _this5._enter(event);
            }).on(eventOut, _this5.config.selector, function (event) {
              return _this5._leave(event);
            });
          }
        });

        this._hideModalHandler = function () {
          if (_this5.element) {
            _this5.hide();
          }
        };

        $__default['default'](this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

        if (this.config.selector) {
          this.config = _extends({}, this.config, {
            trigger: 'manual',
            selector: ''
          });
        } else {
          this._fixTitle();
        }
      };

      _proto._fixTitle = function _fixTitle() {
        var titleType = typeof this.element.getAttribute('data-original-title');

        if (this.element.getAttribute('title') || titleType !== 'string') {
          this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
          this.element.setAttribute('title', '');
        }
      };

      _proto._enter = function _enter(event, context) {
        var dataKey = this.constructor.DATA_KEY;
        context = context || $__default['default'](event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default['default'](event.currentTarget).data(dataKey, context);
        }

        if (event) {
          context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
        }

        if ($__default['default'](context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
          context._hoverState = HOVER_STATE_SHOW;
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_SHOW;

        if (!context.config.delay || !context.config.delay.show) {
          context.show();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HOVER_STATE_SHOW) {
            context.show();
          }
        }, context.config.delay.show);
      };

      _proto._leave = function _leave(event, context) {
        var dataKey = this.constructor.DATA_KEY;
        context = context || $__default['default'](event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default['default'](event.currentTarget).data(dataKey, context);
        }

        if (event) {
          context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
        }

        if (context._isWithActiveTrigger()) {
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_OUT;

        if (!context.config.delay || !context.config.delay.hide) {
          context.hide();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HOVER_STATE_OUT) {
            context.hide();
          }
        }, context.config.delay.hide);
      };

      _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
        for (var trigger in this._activeTrigger) {
          if (this._activeTrigger[trigger]) {
            return true;
          }
        }

        return false;
      };

      _proto._getConfig = function _getConfig(config) {
        var dataAttributes = $__default['default'](this.element).data();
        Object.keys(dataAttributes).forEach(function (dataAttr) {
          if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
            delete dataAttributes[dataAttr];
          }
        });
        config = _extends({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

        if (typeof config.delay === 'number') {
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        }

        if (typeof config.title === 'number') {
          config.title = config.title.toString();
        }

        if (typeof config.content === 'number') {
          config.content = config.content.toString();
        }

        Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

        if (config.sanitize) {
          config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
        }

        return config;
      };

      _proto._getDelegateConfig = function _getDelegateConfig() {
        var config = {};

        if (this.config) {
          for (var key in this.config) {
            if (this.constructor.Default[key] !== this.config[key]) {
              config[key] = this.config[key];
            }
          }
        }

        return config;
      };

      _proto._cleanTipClass = function _cleanTipClass() {
        var $tip = $__default['default'](this.getTipElement());
        var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

        if (tabClass !== null && tabClass.length) {
          $tip.removeClass(tabClass.join(''));
        }
      };

      _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
        this.tip = popperData.instance.popper;

        this._cleanTipClass();

        this.addAttachmentClass(this._getAttachment(popperData.placement));
      };

      _proto._fixTransition = function _fixTransition() {
        var tip = this.getTipElement();
        var initConfigAnimation = this.config.animation;

        if (tip.getAttribute('x-placement') !== null) {
          return;
        }

        $__default['default'](tip).removeClass(CLASS_NAME_FADE$2);
        this.config.animation = false;
        this.hide();
        this.show();
        this.config.animation = initConfigAnimation;
      } // Static
      ;

      Tooltip._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $element = $__default['default'](this);
          var data = $element.data(DATA_KEY$6);

          var _config = typeof config === 'object' && config;

          if (!data && /dispose|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Tooltip(this, _config);
            $element.data(DATA_KEY$6, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Tooltip, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$6;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default$4;
        }
      }, {
        key: "NAME",
        get: function get() {
          return NAME$6;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return DATA_KEY$6;
        }
      }, {
        key: "Event",
        get: function get() {
          return Event;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return EVENT_KEY$6;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType$4;
        }
      }]);

      return Tooltip;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$6] = Tooltip._jQueryInterface;
    $__default['default'].fn[NAME$6].Constructor = Tooltip;

    $__default['default'].fn[NAME$6].noConflict = function () {
      $__default['default'].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
      return Tooltip._jQueryInterface;
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$7 = 'popover';
    var VERSION$7 = '4.5.3';
    var DATA_KEY$7 = 'bs.popover';
    var EVENT_KEY$7 = "." + DATA_KEY$7;
    var JQUERY_NO_CONFLICT$7 = $__default['default'].fn[NAME$7];
    var CLASS_PREFIX$1 = 'bs-popover';
    var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

    var Default$5 = _extends({}, Tooltip.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
    });

    var DefaultType$5 = _extends({}, Tooltip.DefaultType, {
      content: '(string|element|function)'
    });

    var CLASS_NAME_FADE$3 = 'fade';
    var CLASS_NAME_SHOW$5 = 'show';
    var SELECTOR_TITLE = '.popover-header';
    var SELECTOR_CONTENT = '.popover-body';
    var Event$1 = {
      HIDE: "hide" + EVENT_KEY$7,
      HIDDEN: "hidden" + EVENT_KEY$7,
      SHOW: "show" + EVENT_KEY$7,
      SHOWN: "shown" + EVENT_KEY$7,
      INSERTED: "inserted" + EVENT_KEY$7,
      CLICK: "click" + EVENT_KEY$7,
      FOCUSIN: "focusin" + EVENT_KEY$7,
      FOCUSOUT: "focusout" + EVENT_KEY$7,
      MOUSEENTER: "mouseenter" + EVENT_KEY$7,
      MOUSELEAVE: "mouseleave" + EVENT_KEY$7
    };
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Popover = /*#__PURE__*/function (_Tooltip) {
      _inheritsLoose(Popover, _Tooltip);

      function Popover() {
        return _Tooltip.apply(this, arguments) || this;
      }

      var _proto = Popover.prototype;

      // Overrides
      _proto.isWithContent = function isWithContent() {
        return this.getTitle() || this._getContent();
      };

      _proto.addAttachmentClass = function addAttachmentClass(attachment) {
        $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
      };

      _proto.getTipElement = function getTipElement() {
        this.tip = this.tip || $__default['default'](this.config.template)[0];
        return this.tip;
      };

      _proto.setContent = function setContent() {
        var $tip = $__default['default'](this.getTipElement()); // We use append for html objects to maintain js events

        this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

        var content = this._getContent();

        if (typeof content === 'function') {
          content = content.call(this.element);
        }

        this.setElementContent($tip.find(SELECTOR_CONTENT), content);
        $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
      } // Private
      ;

      _proto._getContent = function _getContent() {
        return this.element.getAttribute('data-content') || this.config.content;
      };

      _proto._cleanTipClass = function _cleanTipClass() {
        var $tip = $__default['default'](this.getTipElement());
        var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

        if (tabClass !== null && tabClass.length > 0) {
          $tip.removeClass(tabClass.join(''));
        }
      } // Static
      ;

      Popover._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $__default['default'](this).data(DATA_KEY$7);

          var _config = typeof config === 'object' ? config : null;

          if (!data && /dispose|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Popover(this, _config);
            $__default['default'](this).data(DATA_KEY$7, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Popover, null, [{
        key: "VERSION",
        // Getters
        get: function get() {
          return VERSION$7;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default$5;
        }
      }, {
        key: "NAME",
        get: function get() {
          return NAME$7;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return DATA_KEY$7;
        }
      }, {
        key: "Event",
        get: function get() {
          return Event$1;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return EVENT_KEY$7;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType$5;
        }
      }]);

      return Popover;
    }(Tooltip);
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$7] = Popover._jQueryInterface;
    $__default['default'].fn[NAME$7].Constructor = Popover;

    $__default['default'].fn[NAME$7].noConflict = function () {
      $__default['default'].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
      return Popover._jQueryInterface;
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$8 = 'scrollspy';
    var VERSION$8 = '4.5.3';
    var DATA_KEY$8 = 'bs.scrollspy';
    var EVENT_KEY$8 = "." + DATA_KEY$8;
    var DATA_API_KEY$6 = '.data-api';
    var JQUERY_NO_CONFLICT$8 = $__default['default'].fn[NAME$8];
    var Default$6 = {
      offset: 10,
      method: 'auto',
      target: ''
    };
    var DefaultType$6 = {
      offset: 'number',
      method: 'string',
      target: '(string|element)'
    };
    var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
    var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
    var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
    var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
    var CLASS_NAME_ACTIVE$2 = 'active';
    var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
    var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
    var SELECTOR_NAV_LINKS = '.nav-link';
    var SELECTOR_NAV_ITEMS = '.nav-item';
    var SELECTOR_LIST_ITEMS = '.list-group-item';
    var SELECTOR_DROPDOWN = '.dropdown';
    var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
    var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
    var METHOD_OFFSET = 'offset';
    var METHOD_POSITION = 'position';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var ScrollSpy = /*#__PURE__*/function () {
      function ScrollSpy(element, config) {
        var _this = this;

        this._element = element;
        this._scrollElement = element.tagName === 'BODY' ? window : element;
        this._config = this._getConfig(config);
        this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
        this._offsets = [];
        this._targets = [];
        this._activeTarget = null;
        this._scrollHeight = 0;
        $__default['default'](this._scrollElement).on(EVENT_SCROLL, function (event) {
          return _this._process(event);
        });
        this.refresh();

        this._process();
      } // Getters


      var _proto = ScrollSpy.prototype;

      // Public
      _proto.refresh = function refresh() {
        var _this2 = this;

        var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
        var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
        var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
        this._offsets = [];
        this._targets = [];
        this._scrollHeight = this._getScrollHeight();
        var targets = [].slice.call(document.querySelectorAll(this._selector));
        targets.map(function (element) {
          var target;
          var targetSelector = Util.getSelectorFromElement(element);

          if (targetSelector) {
            target = document.querySelector(targetSelector);
          }

          if (target) {
            var targetBCR = target.getBoundingClientRect();

            if (targetBCR.width || targetBCR.height) {
              // TODO (fat): remove sketch reliance on jQuery position/offset
              return [$__default['default'](target)[offsetMethod]().top + offsetBase, targetSelector];
            }
          }

          return null;
        }).filter(function (item) {
          return item;
        }).sort(function (a, b) {
          return a[0] - b[0];
        }).forEach(function (item) {
          _this2._offsets.push(item[0]);

          _this2._targets.push(item[1]);
        });
      };

      _proto.dispose = function dispose() {
        $__default['default'].removeData(this._element, DATA_KEY$8);
        $__default['default'](this._scrollElement).off(EVENT_KEY$8);
        this._element = null;
        this._scrollElement = null;
        this._config = null;
        this._selector = null;
        this._offsets = null;
        this._targets = null;
        this._activeTarget = null;
        this._scrollHeight = null;
      } // Private
      ;

      _proto._getConfig = function _getConfig(config) {
        config = _extends({}, Default$6, typeof config === 'object' && config ? config : {});

        if (typeof config.target !== 'string' && Util.isElement(config.target)) {
          var id = $__default['default'](config.target).attr('id');

          if (!id) {
            id = Util.getUID(NAME$8);
            $__default['default'](config.target).attr('id', id);
          }

          config.target = "#" + id;
        }

        Util.typeCheckConfig(NAME$8, config, DefaultType$6);
        return config;
      };

      _proto._getScrollTop = function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      };

      _proto._getScrollHeight = function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      };

      _proto._getOffsetHeight = function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      };

      _proto._process = function _process() {
        var scrollTop = this._getScrollTop() + this._config.offset;

        var scrollHeight = this._getScrollHeight();

        var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

        if (this._scrollHeight !== scrollHeight) {
          this.refresh();
        }

        if (scrollTop >= maxScroll) {
          var target = this._targets[this._targets.length - 1];

          if (this._activeTarget !== target) {
            this._activate(target);
          }

          return;
        }

        if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
          this._activeTarget = null;

          this._clear();

          return;
        }

        for (var i = this._offsets.length; i--;) {
          var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

          if (isActiveTarget) {
            this._activate(this._targets[i]);
          }
        }
      };

      _proto._activate = function _activate(target) {
        this._activeTarget = target;

        this._clear();

        var queries = this._selector.split(',').map(function (selector) {
          return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
        });

        var $link = $__default['default']([].slice.call(document.querySelectorAll(queries.join(','))));

        if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
          $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
          $link.addClass(CLASS_NAME_ACTIVE$2);
        } else {
          // Set triggered link as active
          $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

          $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

          $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
        }

        $__default['default'](this._scrollElement).trigger(EVENT_ACTIVATE, {
          relatedTarget: target
        });
      };

      _proto._clear = function _clear() {
        [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
          return node.classList.contains(CLASS_NAME_ACTIVE$2);
        }).forEach(function (node) {
          return node.classList.remove(CLASS_NAME_ACTIVE$2);
        });
      } // Static
      ;

      ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $__default['default'](this).data(DATA_KEY$8);

          var _config = typeof config === 'object' && config;

          if (!data) {
            data = new ScrollSpy(this, _config);
            $__default['default'](this).data(DATA_KEY$8, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(ScrollSpy, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$8;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default$6;
        }
      }]);

      return ScrollSpy;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $__default['default'](window).on(EVENT_LOAD_DATA_API$2, function () {
      var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
      var scrollSpysLength = scrollSpys.length;

      for (var i = scrollSpysLength; i--;) {
        var $spy = $__default['default'](scrollSpys[i]);

        ScrollSpy._jQueryInterface.call($spy, $spy.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$8] = ScrollSpy._jQueryInterface;
    $__default['default'].fn[NAME$8].Constructor = ScrollSpy;

    $__default['default'].fn[NAME$8].noConflict = function () {
      $__default['default'].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
      return ScrollSpy._jQueryInterface;
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$9 = 'tab';
    var VERSION$9 = '4.5.3';
    var DATA_KEY$9 = 'bs.tab';
    var EVENT_KEY$9 = "." + DATA_KEY$9;
    var DATA_API_KEY$7 = '.data-api';
    var JQUERY_NO_CONFLICT$9 = $__default['default'].fn[NAME$9];
    var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
    var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
    var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
    var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
    var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
    var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
    var CLASS_NAME_ACTIVE$3 = 'active';
    var CLASS_NAME_DISABLED$1 = 'disabled';
    var CLASS_NAME_FADE$4 = 'fade';
    var CLASS_NAME_SHOW$6 = 'show';
    var SELECTOR_DROPDOWN$1 = '.dropdown';
    var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
    var SELECTOR_ACTIVE$2 = '.active';
    var SELECTOR_ACTIVE_UL = '> li > .active';
    var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
    var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
    var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Tab = /*#__PURE__*/function () {
      function Tab(element) {
        this._element = element;
      } // Getters


      var _proto = Tab.prototype;

      // Public
      _proto.show = function show() {
        var _this = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default['default'](this._element).hasClass(CLASS_NAME_ACTIVE$3) || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED$1)) {
          return;
        }

        var target;
        var previous;
        var listElement = $__default['default'](this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
        var selector = Util.getSelectorFromElement(this._element);

        if (listElement) {
          var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
          previous = $__default['default'].makeArray($__default['default'](listElement).find(itemSelector));
          previous = previous[previous.length - 1];
        }

        var hideEvent = $__default['default'].Event(EVENT_HIDE$3, {
          relatedTarget: this._element
        });
        var showEvent = $__default['default'].Event(EVENT_SHOW$3, {
          relatedTarget: previous
        });

        if (previous) {
          $__default['default'](previous).trigger(hideEvent);
        }

        $__default['default'](this._element).trigger(showEvent);

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
          return;
        }

        if (selector) {
          target = document.querySelector(selector);
        }

        this._activate(this._element, listElement);

        var complete = function complete() {
          var hiddenEvent = $__default['default'].Event(EVENT_HIDDEN$3, {
            relatedTarget: _this._element
          });
          var shownEvent = $__default['default'].Event(EVENT_SHOWN$3, {
            relatedTarget: previous
          });
          $__default['default'](previous).trigger(hiddenEvent);
          $__default['default'](_this._element).trigger(shownEvent);
        };

        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      };

      _proto.dispose = function dispose() {
        $__default['default'].removeData(this._element, DATA_KEY$9);
        this._element = null;
      } // Private
      ;

      _proto._activate = function _activate(element, container, callback) {
        var _this2 = this;

        var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $__default['default'](container).find(SELECTOR_ACTIVE_UL) : $__default['default'](container).children(SELECTOR_ACTIVE$2);
        var active = activeElements[0];
        var isTransitioning = callback && active && $__default['default'](active).hasClass(CLASS_NAME_FADE$4);

        var complete = function complete() {
          return _this2._transitionComplete(element, active, callback);
        };

        if (active && isTransitioning) {
          var transitionDuration = Util.getTransitionDurationFromElement(active);
          $__default['default'](active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      };

      _proto._transitionComplete = function _transitionComplete(element, active, callback) {
        if (active) {
          $__default['default'](active).removeClass(CLASS_NAME_ACTIVE$3);
          var dropdownChild = $__default['default'](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

          if (dropdownChild) {
            $__default['default'](dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
          }

          if (active.getAttribute('role') === 'tab') {
            active.setAttribute('aria-selected', false);
          }
        }

        $__default['default'](element).addClass(CLASS_NAME_ACTIVE$3);

        if (element.getAttribute('role') === 'tab') {
          element.setAttribute('aria-selected', true);
        }

        Util.reflow(element);

        if (element.classList.contains(CLASS_NAME_FADE$4)) {
          element.classList.add(CLASS_NAME_SHOW$6);
        }

        if (element.parentNode && $__default['default'](element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
          var dropdownElement = $__default['default'](element).closest(SELECTOR_DROPDOWN$1)[0];

          if (dropdownElement) {
            var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
            $__default['default'](dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
          }

          element.setAttribute('aria-expanded', true);
        }

        if (callback) {
          callback();
        }
      } // Static
      ;

      Tab._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $__default['default'](this);
          var data = $this.data(DATA_KEY$9);

          if (!data) {
            data = new Tab(this);
            $this.data(DATA_KEY$9, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      _createClass(Tab, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$9;
        }
      }]);

      return Tab;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $__default['default'](document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
      event.preventDefault();

      Tab._jQueryInterface.call($__default['default'](this), 'show');
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$9] = Tab._jQueryInterface;
    $__default['default'].fn[NAME$9].Constructor = Tab;

    $__default['default'].fn[NAME$9].noConflict = function () {
      $__default['default'].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
      return Tab._jQueryInterface;
    };

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME$a = 'toast';
    var VERSION$a = '4.5.3';
    var DATA_KEY$a = 'bs.toast';
    var EVENT_KEY$a = "." + DATA_KEY$a;
    var JQUERY_NO_CONFLICT$a = $__default['default'].fn[NAME$a];
    var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
    var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
    var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
    var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
    var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
    var CLASS_NAME_FADE$5 = 'fade';
    var CLASS_NAME_HIDE = 'hide';
    var CLASS_NAME_SHOW$7 = 'show';
    var CLASS_NAME_SHOWING = 'showing';
    var DefaultType$7 = {
      animation: 'boolean',
      autohide: 'boolean',
      delay: 'number'
    };
    var Default$7 = {
      animation: true,
      autohide: true,
      delay: 500
    };
    var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Toast = /*#__PURE__*/function () {
      function Toast(element, config) {
        this._element = element;
        this._config = this._getConfig(config);
        this._timeout = null;

        this._setListeners();
      } // Getters


      var _proto = Toast.prototype;

      // Public
      _proto.show = function show() {
        var _this = this;

        var showEvent = $__default['default'].Event(EVENT_SHOW$4);
        $__default['default'](this._element).trigger(showEvent);

        if (showEvent.isDefaultPrevented()) {
          return;
        }

        this._clearTimeout();

        if (this._config.animation) {
          this._element.classList.add(CLASS_NAME_FADE$5);
        }

        var complete = function complete() {
          _this._element.classList.remove(CLASS_NAME_SHOWING);

          _this._element.classList.add(CLASS_NAME_SHOW$7);

          $__default['default'](_this._element).trigger(EVENT_SHOWN$4);

          if (_this._config.autohide) {
            _this._timeout = setTimeout(function () {
              _this.hide();
            }, _this._config.delay);
          }
        };

        this._element.classList.remove(CLASS_NAME_HIDE);

        Util.reflow(this._element);

        this._element.classList.add(CLASS_NAME_SHOWING);

        if (this._config.animation) {
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      };

      _proto.hide = function hide() {
        if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
          return;
        }

        var hideEvent = $__default['default'].Event(EVENT_HIDE$4);
        $__default['default'](this._element).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          return;
        }

        this._close();
      };

      _proto.dispose = function dispose() {
        this._clearTimeout();

        if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
          this._element.classList.remove(CLASS_NAME_SHOW$7);
        }

        $__default['default'](this._element).off(EVENT_CLICK_DISMISS$1);
        $__default['default'].removeData(this._element, DATA_KEY$a);
        this._element = null;
        this._config = null;
      } // Private
      ;

      _proto._getConfig = function _getConfig(config) {
        config = _extends({}, Default$7, $__default['default'](this._element).data(), typeof config === 'object' && config ? config : {});
        Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
        return config;
      };

      _proto._setListeners = function _setListeners() {
        var _this2 = this;

        $__default['default'](this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
          return _this2.hide();
        });
      };

      _proto._close = function _close() {
        var _this3 = this;

        var complete = function complete() {
          _this3._element.classList.add(CLASS_NAME_HIDE);

          $__default['default'](_this3._element).trigger(EVENT_HIDDEN$4);
        };

        this._element.classList.remove(CLASS_NAME_SHOW$7);

        if (this._config.animation) {
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      };

      _proto._clearTimeout = function _clearTimeout() {
        clearTimeout(this._timeout);
        this._timeout = null;
      } // Static
      ;

      Toast._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $element = $__default['default'](this);
          var data = $element.data(DATA_KEY$a);

          var _config = typeof config === 'object' && config;

          if (!data) {
            data = new Toast(this, _config);
            $element.data(DATA_KEY$a, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"" + config + "\"");
            }

            data[config](this);
          }
        });
      };

      _createClass(Toast, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION$a;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType$7;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default$7;
        }
      }]);

      return Toast;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $__default['default'].fn[NAME$a] = Toast._jQueryInterface;
    $__default['default'].fn[NAME$a].Constructor = Toast;

    $__default['default'].fn[NAME$a].noConflict = function () {
      $__default['default'].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
      return Toast._jQueryInterface;
    };

    exports.Alert = Alert;
    exports.Button = Button;
    exports.Carousel = Carousel;
    exports.Collapse = Collapse;
    exports.Dropdown = Dropdown;
    exports.Modal = Modal;
    exports.Popover = Popover;
    exports.Scrollspy = ScrollSpy;
    exports.Tab = Tab;
    exports.Toast = Toast;
    exports.Tooltip = Tooltip;
    exports.Util = Util;

    Object.defineProperty(exports, '__esModule', { value: true });
  });
  //# sourceMappingURL=bootstrap.js.map
});
define("ember-app/templates/bootstrap/js/bootstrap.min", ["module", "exports", "jquery", "popper.js"], function (module, exports) {
  "use strict";

  /*!
    * Bootstrap v4.5.3 (https://getbootstrap.com/)
    * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */
  !function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}, t.jQuery, t.Popper);
  }(undefined, function (t, e, n) {
    "use strict";
    function i(t) {
      return t && "object" == typeof t && "default" in t ? t : { default: t };
    }var o = i(e),
        a = i(n);function s(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }function l(t, e, n) {
      return e && s(t.prototype, e), n && s(t, n), t;
    }function r() {
      return (r = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }return t;
      }).apply(this, arguments);
    }function u(t) {
      var e = this,
          n = !1;return o.default(this).one(d.TRANSITION_END, function () {
        n = !0;
      }), setTimeout(function () {
        n || d.triggerTransitionEnd(e);
      }, t), this;
    }var d = { TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
        do {
          t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));return t;
      }, getSelectorFromElement: function (t) {
        var e = t.getAttribute("data-target");if (!e || "#" === e) {
          var n = t.getAttribute("href");e = n && "#" !== n ? n.trim() : "";
        }try {
          return document.querySelector(e) ? e : null;
        } catch (t) {
          return null;
        }
      }, getTransitionDurationFromElement: function (t) {
        if (!t) return 0;var e = o.default(t).css("transition-duration"),
            n = o.default(t).css("transition-delay"),
            i = parseFloat(e),
            a = parseFloat(n);return i || a ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
      }, reflow: function (t) {
        return t.offsetHeight;
      }, triggerTransitionEnd: function (t) {
        o.default(t).trigger("transitionend");
      }, supportsTransitionEnd: function () {
        return Boolean("transitionend");
      }, isElement: function (t) {
        return (t[0] || t).nodeType;
      }, typeCheckConfig: function (t, e, n) {
        for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              a = e[i],
              s = a && d.isElement(a) ? "element" : null === (l = a) || "undefined" == typeof l ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
        }var l;
      }, findShadowRoot: function (t) {
        if (!document.documentElement.attachShadow) return null;if ("function" == typeof t.getRootNode) {
          var e = t.getRootNode();return e instanceof ShadowRoot ? e : null;
        }return t instanceof ShadowRoot ? t : t.parentNode ? d.findShadowRoot(t.parentNode) : null;
      }, jQueryDetection: function () {
        if ("undefined" == typeof o.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t = o.default.fn.jquery.split(" ")[0].split(".");if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
      } };d.jQueryDetection(), o.default.fn.emulateTransitionEnd = u, o.default.event.special[d.TRANSITION_END] = { bindType: "transitionend", delegateType: "transitionend", handle: function (t) {
        if (o.default(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      } };var f = "alert",
        c = o.default.fn[f],
        h = function () {
      function t(t) {
        this._element = t;
      }var e = t.prototype;return e.close = function (t) {
        var e = this._element;t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
      }, e.dispose = function () {
        o.default.removeData(this._element, "bs.alert"), this._element = null;
      }, e._getRootElement = function (t) {
        var e = d.getSelectorFromElement(t),
            n = !1;return e && (n = document.querySelector(e)), n || (n = o.default(t).closest(".alert")[0]), n;
      }, e._triggerCloseEvent = function (t) {
        var e = o.default.Event("close.bs.alert");return o.default(t).trigger(e), e;
      }, e._removeElement = function (t) {
        var e = this;if (o.default(t).removeClass("show"), o.default(t).hasClass("fade")) {
          var n = d.getTransitionDurationFromElement(t);o.default(t).one(d.TRANSITION_END, function (n) {
            return e._destroyElement(t, n);
          }).emulateTransitionEnd(n);
        } else this._destroyElement(t);
      }, e._destroyElement = function (t) {
        o.default(t).detach().trigger("closed.bs.alert").remove();
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = o.default(this),
              i = n.data("bs.alert");i || (i = new t(this), n.data("bs.alert", i)), "close" === e && i[e](this);
        });
      }, t._handleDismiss = function (t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }, l(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }]), t;
    }();o.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', h._handleDismiss(new h())), o.default.fn[f] = h._jQueryInterface, o.default.fn[f].Constructor = h, o.default.fn[f].noConflict = function () {
      return o.default.fn[f] = c, h._jQueryInterface;
    };var g = o.default.fn.button,
        m = function () {
      function t(t) {
        this._element = t, this.shouldAvoidTriggerChange = !1;
      }var e = t.prototype;return e.toggle = function () {
        var t = !0,
            e = !0,
            n = o.default(this._element).closest('[data-toggle="buttons"]')[0];if (n) {
          var i = this._element.querySelector('input:not([type="hidden"])');if (i) {
            if ("radio" === i.type) if (i.checked && this._element.classList.contains("active")) t = !1;else {
              var a = n.querySelector(".active");a && o.default(a).removeClass("active");
            }t && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || o.default(i).trigger("change")), i.focus(), e = !1;
          }
        }this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && o.default(this._element).toggleClass("active"));
      }, e.dispose = function () {
        o.default.removeData(this._element, "bs.button"), this._element = null;
      }, t._jQueryInterface = function (e, n) {
        return this.each(function () {
          var i = o.default(this),
              a = i.data("bs.button");a || (a = new t(this), i.data("bs.button", a)), a.shouldAvoidTriggerChange = n, "toggle" === e && a[e]();
        });
      }, l(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }]), t;
    }();o.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
      var e = t.target,
          n = e;if (o.default(e).hasClass("btn") || (e = o.default(e).closest(".btn")[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled")) t.preventDefault();else {
        var i = e.querySelector('input:not([type="hidden"])');if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void t.preventDefault();"INPUT" !== n.tagName && "LABEL" === e.tagName || m._jQueryInterface.call(o.default(e), "toggle", "INPUT" === n.tagName);
      }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
      var e = o.default(t.target).closest(".btn")[0];o.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
    }), o.default(window).on("load.bs.button.data-api", function () {
      for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
        var i = t[e],
            o = i.querySelector('input:not([type="hidden"])');o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active");
      }for (var a = 0, s = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; a < s; a++) {
        var l = t[a];"true" === l.getAttribute("aria-pressed") ? l.classList.add("active") : l.classList.remove("active");
      }
    }), o.default.fn.button = m._jQueryInterface, o.default.fn.button.Constructor = m, o.default.fn.button.noConflict = function () {
      return o.default.fn.button = g, m._jQueryInterface;
    };var p = "carousel",
        _ = ".bs.carousel",
        v = o.default.fn[p],
        b = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        y = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        E = { TOUCH: "touch", PEN: "pen" },
        w = function () {
      function t(t, e) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
      }var e = t.prototype;return e.next = function () {
        this._isSliding || this._slide("next");
      }, e.nextWhenVisible = function () {
        var t = o.default(this._element);!document.hidden && t.is(":visible") && "hidden" !== t.css("visibility") && this.next();
      }, e.prev = function () {
        this._isSliding || this._slide("prev");
      }, e.pause = function (t) {
        t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (d.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, e.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, e.to = function (t) {
        var e = this;this._activeElement = this._element.querySelector(".active.carousel-item");var n = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) o.default(this._element).one("slid.bs.carousel", function () {
          return e.to(t);
        });else {
          if (n === t) return this.pause(), void this.cycle();var i = t > n ? "next" : "prev";this._slide(i, this._items[t]);
        }
      }, e.dispose = function () {
        o.default(this._element).off(_), o.default.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, e._getConfig = function (t) {
        return t = r({}, b, t), d.typeCheckConfig(p, t, y), t;
      }, e._handleSwipe = function () {
        var t = Math.abs(this.touchDeltaX);if (!(t <= 40)) {
          var e = t / this.touchDeltaX;this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next();
        }
      }, e._addEventListeners = function () {
        var t = this;this._config.keyboard && o.default(this._element).on("keydown.bs.carousel", function (e) {
          return t._keydown(e);
        }), "hover" === this._config.pause && o.default(this._element).on("mouseenter.bs.carousel", function (e) {
          return t.pause(e);
        }).on("mouseleave.bs.carousel", function (e) {
          return t.cycle(e);
        }), this._config.touch && this._addTouchEventListeners();
      }, e._addTouchEventListeners = function () {
        var t = this;if (this._touchSupported) {
          var e = function (e) {
            t._pointerEvent && E[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
          },
              n = function (e) {
            t._pointerEvent && E[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
              return t.cycle(e);
            }, 500 + t._config.interval));
          };o.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          }), this._pointerEvent ? (o.default(this._element).on("pointerdown.bs.carousel", function (t) {
            return e(t);
          }), o.default(this._element).on("pointerup.bs.carousel", function (t) {
            return n(t);
          }), this._element.classList.add("pointer-event")) : (o.default(this._element).on("touchstart.bs.carousel", function (t) {
            return e(t);
          }), o.default(this._element).on("touchmove.bs.carousel", function (e) {
            return function (e) {
              e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX;
            }(e);
          }), o.default(this._element).on("touchend.bs.carousel", function (t) {
            return n(t);
          }));
        }
      }, e._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
            t.preventDefault(), this.prev();break;case 39:
            t.preventDefault(), this.next();}
      }, e._getItemIndex = function (t) {
        return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t);
      }, e._getItemByDirection = function (t, e) {
        var n = "next" === t,
            i = "prev" === t,
            o = this._getItemIndex(e),
            a = this._items.length - 1;if ((i && 0 === o || n && o === a) && !this._config.wrap) return e;var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
      }, e._triggerSlideEvent = function (t, e) {
        var n = this._getItemIndex(t),
            i = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
            a = o.default.Event("slide.bs.carousel", { relatedTarget: t, direction: e, from: i, to: n });return o.default(this._element).trigger(a), a;
      }, e._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          var e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));o.default(e).removeClass("active");var n = this._indicatorsElement.children[this._getItemIndex(t)];n && o.default(n).addClass("active");
        }
      }, e._slide = function (t, e) {
        var n,
            i,
            a,
            s = this,
            l = this._element.querySelector(".active.carousel-item"),
            r = this._getItemIndex(l),
            u = e || l && this._getItemByDirection(t, l),
            f = this._getItemIndex(u),
            c = Boolean(this._interval);if ("next" === t ? (n = "carousel-item-left", i = "carousel-item-next", a = "left") : (n = "carousel-item-right", i = "carousel-item-prev", a = "right"), u && o.default(u).hasClass("active")) this._isSliding = !1;else if (!this._triggerSlideEvent(u, a).isDefaultPrevented() && l && u) {
          this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(u);var h = o.default.Event("slid.bs.carousel", { relatedTarget: u, direction: a, from: r, to: f });if (o.default(this._element).hasClass("slide")) {
            o.default(u).addClass(i), d.reflow(u), o.default(l).addClass(n), o.default(u).addClass(n);var g = parseInt(u.getAttribute("data-interval"), 10);g ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = g) : this._config.interval = this._config.defaultInterval || this._config.interval;var m = d.getTransitionDurationFromElement(l);o.default(l).one(d.TRANSITION_END, function () {
              o.default(u).removeClass(n + " " + i).addClass("active"), o.default(l).removeClass("active " + i + " " + n), s._isSliding = !1, setTimeout(function () {
                return o.default(s._element).trigger(h);
              }, 0);
            }).emulateTransitionEnd(m);
          } else o.default(l).removeClass("active"), o.default(u).addClass("active"), this._isSliding = !1, o.default(this._element).trigger(h);c && this.cycle();
        }
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = o.default(this).data("bs.carousel"),
              i = r({}, b, o.default(this).data());"object" == typeof e && (i = r({}, i, e));var a = "string" == typeof e ? e : i.slide;if (n || (n = new t(this, i), o.default(this).data("bs.carousel", n)), "number" == typeof e) n.to(e);else if ("string" == typeof a) {
            if ("undefined" == typeof n[a]) throw new TypeError('No method named "' + a + '"');n[a]();
          } else i.interval && i.ride && (n.pause(), n.cycle());
        });
      }, t._dataApiClickHandler = function (e) {
        var n = d.getSelectorFromElement(this);if (n) {
          var i = o.default(n)[0];if (i && o.default(i).hasClass("carousel")) {
            var a = r({}, o.default(i).data(), o.default(this).data()),
                s = this.getAttribute("data-slide-to");s && (a.interval = !1), t._jQueryInterface.call(o.default(i), a), s && o.default(i).data("bs.carousel").to(s), e.preventDefault();
          }
        }
      }, l(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }, { key: "Default", get: function () {
          return b;
        } }]), t;
    }();o.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", w._dataApiClickHandler), o.default(window).on("load.bs.carousel.data-api", function () {
      for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, n = t.length; e < n; e++) {
        var i = o.default(t[e]);w._jQueryInterface.call(i, i.data());
      }
    }), o.default.fn[p] = w._jQueryInterface, o.default.fn[p].Constructor = w, o.default.fn[p].noConflict = function () {
      return o.default.fn[p] = v, w._jQueryInterface;
    };var T = "collapse",
        C = o.default.fn[T],
        S = { toggle: !0, parent: "" },
        N = { toggle: "boolean", parent: "(string|element)" },
        D = function () {
      function t(t, e) {
        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) {
          var a = n[i],
              s = d.getSelectorFromElement(a),
              l = [].slice.call(document.querySelectorAll(s)).filter(function (e) {
            return e === t;
          });null !== s && l.length > 0 && (this._selector = s, this._triggerArray.push(a));
        }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }var e = t.prototype;return e.toggle = function () {
        o.default(this._element).hasClass("show") ? this.hide() : this.show();
      }, e.show = function () {
        var e,
            n,
            i = this;if (!this._isTransitioning && !o.default(this._element).hasClass("show") && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (t) {
          return "string" == typeof i._config.parent ? t.getAttribute("data-parent") === i._config.parent : t.classList.contains("collapse");
        })).length && (e = null), !(e && (n = o.default(e).not(this._selector).data("bs.collapse")) && n._isTransitioning))) {
          var a = o.default.Event("show.bs.collapse");if (o.default(this._element).trigger(a), !a.isDefaultPrevented()) {
            e && (t._jQueryInterface.call(o.default(e).not(this._selector), "hide"), n || o.default(e).data("bs.collapse", null));var s = this._getDimension();o.default(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[s] = 0, this._triggerArray.length && o.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);var l = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                r = d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END, function () {
              o.default(i._element).removeClass("collapsing").addClass("collapse show"), i._element.style[s] = "", i.setTransitioning(!1), o.default(i._element).trigger("shown.bs.collapse");
            }).emulateTransitionEnd(r), this._element.style[s] = this._element[l] + "px";
          }
        }
      }, e.hide = function () {
        var t = this;if (!this._isTransitioning && o.default(this._element).hasClass("show")) {
          var e = o.default.Event("hide.bs.collapse");if (o.default(this._element).trigger(e), !e.isDefaultPrevented()) {
            var n = this._getDimension();this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", d.reflow(this._element), o.default(this._element).addClass("collapsing").removeClass("collapse show");var i = this._triggerArray.length;if (i > 0) for (var a = 0; a < i; a++) {
              var s = this._triggerArray[a],
                  l = d.getSelectorFromElement(s);if (null !== l) o.default([].slice.call(document.querySelectorAll(l))).hasClass("show") || o.default(s).addClass("collapsed").attr("aria-expanded", !1);
            }this.setTransitioning(!0);this._element.style[n] = "";var r = d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END, function () {
              t.setTransitioning(!1), o.default(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
            }).emulateTransitionEnd(r);
          }
        }
      }, e.setTransitioning = function (t) {
        this._isTransitioning = t;
      }, e.dispose = function () {
        o.default.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, e._getConfig = function (t) {
        return (t = r({}, S, t)).toggle = Boolean(t.toggle), d.typeCheckConfig(T, t, N), t;
      }, e._getDimension = function () {
        return o.default(this._element).hasClass("width") ? "width" : "height";
      }, e._getParent = function () {
        var e,
            n = this;d.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
            a = [].slice.call(e.querySelectorAll(i));return o.default(a).each(function (e, i) {
          n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
        }), e;
      }, e._addAriaAndCollapsedClass = function (t, e) {
        var n = o.default(t).hasClass("show");e.length && o.default(e).toggleClass("collapsed", !n).attr("aria-expanded", n);
      }, t._getTargetFromElement = function (t) {
        var e = d.getSelectorFromElement(t);return e ? document.querySelector(e) : null;
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = o.default(this),
              i = n.data("bs.collapse"),
              a = r({}, S, n.data(), "object" == typeof e && e ? e : {});if (!i && a.toggle && "string" == typeof e && /show|hide/.test(e) && (a.toggle = !1), i || (i = new t(this, a), n.data("bs.collapse", i)), "string" == typeof e) {
            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');i[e]();
          }
        });
      }, l(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }, { key: "Default", get: function () {
          return S;
        } }]), t;
    }();o.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();var e = o.default(this),
          n = d.getSelectorFromElement(this),
          i = [].slice.call(document.querySelectorAll(n));o.default(i).each(function () {
        var t = o.default(this),
            n = t.data("bs.collapse") ? "toggle" : e.data();D._jQueryInterface.call(t, n);
      });
    }), o.default.fn[T] = D._jQueryInterface, o.default.fn[T].Constructor = D, o.default.fn[T].noConflict = function () {
      return o.default.fn[T] = C, D._jQueryInterface;
    };var k = "dropdown",
        A = o.default.fn[k],
        I = new RegExp("38|40|27"),
        j = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
        O = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
        x = function () {
      function t(t, e) {
        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
      }var e = t.prototype;return e.toggle = function () {
        if (!this._element.disabled && !o.default(this._element).hasClass("disabled")) {
          var e = o.default(this._menu).hasClass("show");t._clearMenus(), e || this.show(!0);
        }
      }, e.show = function (e) {
        if (void 0 === e && (e = !1), !(this._element.disabled || o.default(this._element).hasClass("disabled") || o.default(this._menu).hasClass("show"))) {
          var n = { relatedTarget: this._element },
              i = o.default.Event("show.bs.dropdown", n),
              s = t._getParentFromElement(this._element);if (o.default(s).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar && e) {
              if ("undefined" == typeof a.default) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var l = this._element;"parent" === this._config.reference ? l = s : d.isElement(this._config.reference) && (l = this._config.reference, "undefined" != typeof this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && o.default(s).addClass("position-static"), this._popper = new a.default(l, this._menu, this._getPopperConfig());
            }"ontouchstart" in document.documentElement && 0 === o.default(s).closest(".navbar-nav").length && o.default(document.body).children().on("mouseover", null, o.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), o.default(this._menu).toggleClass("show"), o.default(s).toggleClass("show").trigger(o.default.Event("shown.bs.dropdown", n));
          }
        }
      }, e.hide = function () {
        if (!this._element.disabled && !o.default(this._element).hasClass("disabled") && o.default(this._menu).hasClass("show")) {
          var e = { relatedTarget: this._element },
              n = o.default.Event("hide.bs.dropdown", e),
              i = t._getParentFromElement(this._element);o.default(i).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), o.default(this._menu).toggleClass("show"), o.default(i).toggleClass("show").trigger(o.default.Event("hidden.bs.dropdown", e)));
        }
      }, e.dispose = function () {
        o.default.removeData(this._element, "bs.dropdown"), o.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
      }, e.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
      }, e._addEventListeners = function () {
        var t = this;o.default(this._element).on("click.bs.dropdown", function (e) {
          e.preventDefault(), e.stopPropagation(), t.toggle();
        });
      }, e._getConfig = function (t) {
        return t = r({}, this.constructor.Default, o.default(this._element).data(), t), d.typeCheckConfig(k, t, this.constructor.DefaultType), t;
      }, e._getMenuElement = function () {
        if (!this._menu) {
          var e = t._getParentFromElement(this._element);e && (this._menu = e.querySelector(".dropdown-menu"));
        }return this._menu;
      }, e._getPlacement = function () {
        var t = o.default(this._element.parentNode),
            e = "bottom-start";return t.hasClass("dropup") ? e = o.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : o.default(this._menu).hasClass("dropdown-menu-right") && (e = "bottom-end"), e;
      }, e._detectNavbar = function () {
        return o.default(this._element).closest(".navbar").length > 0;
      }, e._getOffset = function () {
        var t = this,
            e = {};return "function" == typeof this._config.offset ? e.fn = function (e) {
          return e.offsets = r({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e;
        } : e.offset = this._config.offset, e;
      }, e._getPopperConfig = function () {
        var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), r({}, t, this._config.popperConfig);
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = o.default(this).data("bs.dropdown");if (n || (n = new t(this, "object" == typeof e ? e : null), o.default(this).data("bs.dropdown", n)), "string" == typeof e) {
            if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');n[e]();
          }
        });
      }, t._clearMenus = function (e) {
        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), i = 0, a = n.length; i < a; i++) {
          var s = t._getParentFromElement(n[i]),
              l = o.default(n[i]).data("bs.dropdown"),
              r = { relatedTarget: n[i] };if (e && "click" === e.type && (r.clickEvent = e), l) {
            var u = l._menu;if (o.default(s).hasClass("show") && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && o.default.contains(s, e.target))) {
              var d = o.default.Event("hide.bs.dropdown", r);o.default(s).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop), n[i].setAttribute("aria-expanded", "false"), l._popper && l._popper.destroy(), o.default(u).removeClass("show"), o.default(s).removeClass("show").trigger(o.default.Event("hidden.bs.dropdown", r)));
            }
          }
        }
      }, t._getParentFromElement = function (t) {
        var e,
            n = d.getSelectorFromElement(t);return n && (e = document.querySelector(n)), e || t.parentNode;
      }, t._dataApiKeydownHandler = function (e) {
        if (!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || o.default(e.target).closest(".dropdown-menu").length) : !I.test(e.which)) && !this.disabled && !o.default(this).hasClass("disabled")) {
          var n = t._getParentFromElement(this),
              i = o.default(n).hasClass("show");if (i || 27 !== e.which) {
            if (e.preventDefault(), e.stopPropagation(), !i || 27 === e.which || 32 === e.which) return 27 === e.which && o.default(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void o.default(this).trigger("click");var a = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (t) {
              return o.default(t).is(":visible");
            });if (0 !== a.length) {
              var s = a.indexOf(e.target);38 === e.which && s > 0 && s--, 40 === e.which && s < a.length - 1 && s++, s < 0 && (s = 0), a[s].focus();
            }
          }
        }
      }, l(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }, { key: "Default", get: function () {
          return j;
        } }, { key: "DefaultType", get: function () {
          return O;
        } }]), t;
    }();o.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', x._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", x._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", x._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
      t.preventDefault(), t.stopPropagation(), x._jQueryInterface.call(o.default(this), "toggle");
    }).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
      t.stopPropagation();
    }), o.default.fn[k] = x._jQueryInterface, o.default.fn[k].Constructor = x, o.default.fn[k].noConflict = function () {
      return o.default.fn[k] = A, x._jQueryInterface;
    };var P = o.default.fn.modal,
        R = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        L = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        q = function () {
      function t(t, e) {
        this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
      }var e = t.prototype;return e.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t);
      }, e.show = function (t) {
        var e = this;if (!this._isShown && !this._isTransitioning) {
          o.default(this._element).hasClass("fade") && (this._isTransitioning = !0);var n = o.default.Event("show.bs.modal", { relatedTarget: t });o.default(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), o.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (t) {
            return e.hide(t);
          }), o.default(this._dialog).on("mousedown.dismiss.bs.modal", function () {
            o.default(e._element).one("mouseup.dismiss.bs.modal", function (t) {
              o.default(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
            });
          }), this._showBackdrop(function () {
            return e._showElement(t);
          }));
        }
      }, e.hide = function (t) {
        var e = this;if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
          var n = o.default.Event("hide.bs.modal");if (o.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
            this._isShown = !1;var i = o.default(this._element).hasClass("fade");if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), o.default(document).off("focusin.bs.modal"), o.default(this._element).removeClass("show"), o.default(this._element).off("click.dismiss.bs.modal"), o.default(this._dialog).off("mousedown.dismiss.bs.modal"), i) {
              var a = d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END, function (t) {
                return e._hideModal(t);
              }).emulateTransitionEnd(a);
            } else this._hideModal();
          }
        }
      }, e.dispose = function () {
        [window, this._element, this._dialog].forEach(function (t) {
          return o.default(t).off(".bs.modal");
        }), o.default(document).off("focusin.bs.modal"), o.default.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
      }, e.handleUpdate = function () {
        this._adjustDialog();
      }, e._getConfig = function (t) {
        return t = r({}, R, t), d.typeCheckConfig("modal", t, L), t;
      }, e._triggerBackdropTransition = function () {
        var t = this;if ("static" === this._config.backdrop) {
          var e = o.default.Event("hidePrevented.bs.modal");if (o.default(this._element).trigger(e), e.isDefaultPrevented()) return;var n = this._element.scrollHeight > document.documentElement.clientHeight;n || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");var i = d.getTransitionDurationFromElement(this._dialog);o.default(this._element).off(d.TRANSITION_END), o.default(this._element).one(d.TRANSITION_END, function () {
            t._element.classList.remove("modal-static"), n || o.default(t._element).one(d.TRANSITION_END, function () {
              t._element.style.overflowY = "";
            }).emulateTransitionEnd(t._element, i);
          }).emulateTransitionEnd(i), this._element.focus();
        } else this.hide();
      }, e._showElement = function (t) {
        var e = this,
            n = o.default(this._element).hasClass("fade"),
            i = this._dialog ? this._dialog.querySelector(".modal-body") : null;this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), o.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && d.reflow(this._element), o.default(this._element).addClass("show"), this._config.focus && this._enforceFocus();var a = o.default.Event("shown.bs.modal", { relatedTarget: t }),
            s = function () {
          e._config.focus && e._element.focus(), e._isTransitioning = !1, o.default(e._element).trigger(a);
        };if (n) {
          var l = d.getTransitionDurationFromElement(this._dialog);o.default(this._dialog).one(d.TRANSITION_END, s).emulateTransitionEnd(l);
        } else s();
      }, e._enforceFocus = function () {
        var t = this;o.default(document).off("focusin.bs.modal").on("focusin.bs.modal", function (e) {
          document !== e.target && t._element !== e.target && 0 === o.default(t._element).has(e.target).length && t._element.focus();
        });
      }, e._setEscapeEvent = function () {
        var t = this;this._isShown ? o.default(this._element).on("keydown.dismiss.bs.modal", function (e) {
          t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition();
        }) : this._isShown || o.default(this._element).off("keydown.dismiss.bs.modal");
      }, e._setResizeEvent = function () {
        var t = this;this._isShown ? o.default(window).on("resize.bs.modal", function (e) {
          return t.handleUpdate(e);
        }) : o.default(window).off("resize.bs.modal");
      }, e._hideModal = function () {
        var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
          o.default(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), o.default(t._element).trigger("hidden.bs.modal");
        });
      }, e._removeBackdrop = function () {
        this._backdrop && (o.default(this._backdrop).remove(), this._backdrop = null);
      }, e._showBackdrop = function (t) {
        var e = this,
            n = o.default(this._element).hasClass("fade") ? "fade" : "";if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), o.default(this._backdrop).appendTo(document.body), o.default(this._element).on("click.dismiss.bs.modal", function (t) {
            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition();
          }), n && d.reflow(this._backdrop), o.default(this._backdrop).addClass("show"), !t) return;if (!n) return void t();var i = d.getTransitionDurationFromElement(this._backdrop);o.default(this._backdrop).one(d.TRANSITION_END, t).emulateTransitionEnd(i);
        } else if (!this._isShown && this._backdrop) {
          o.default(this._backdrop).removeClass("show");var a = function () {
            e._removeBackdrop(), t && t();
          };if (o.default(this._element).hasClass("fade")) {
            var s = d.getTransitionDurationFromElement(this._backdrop);o.default(this._backdrop).one(d.TRANSITION_END, a).emulateTransitionEnd(s);
          } else a();
        } else t && t();
      }, e._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }, e._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }, e._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, e._setScrollbar = function () {
        var t = this;if (this._isBodyOverflowing) {
          var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
              n = [].slice.call(document.querySelectorAll(".sticky-top"));o.default(e).each(function (e, n) {
            var i = n.style.paddingRight,
                a = o.default(n).css("padding-right");o.default(n).data("padding-right", i).css("padding-right", parseFloat(a) + t._scrollbarWidth + "px");
          }), o.default(n).each(function (e, n) {
            var i = n.style.marginRight,
                a = o.default(n).css("margin-right");o.default(n).data("margin-right", i).css("margin-right", parseFloat(a) - t._scrollbarWidth + "px");
          });var i = document.body.style.paddingRight,
              a = o.default(document.body).css("padding-right");o.default(document.body).data("padding-right", i).css("padding-right", parseFloat(a) + this._scrollbarWidth + "px");
        }o.default(document.body).addClass("modal-open");
      }, e._resetScrollbar = function () {
        var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));o.default(t).each(function (t, e) {
          var n = o.default(e).data("padding-right");o.default(e).removeData("padding-right"), e.style.paddingRight = n || "";
        });var e = [].slice.call(document.querySelectorAll(".sticky-top"));o.default(e).each(function (t, e) {
          var n = o.default(e).data("margin-right");"undefined" != typeof n && o.default(e).css("margin-right", n).removeData("margin-right");
        });var n = o.default(document.body).data("padding-right");o.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
      }, e._getScrollbarWidth = function () {
        var t = document.createElement("div");t.className = "modal-scrollbar-measure", document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
      }, t._jQueryInterface = function (e, n) {
        return this.each(function () {
          var i = o.default(this).data("bs.modal"),
              a = r({}, R, o.default(this).data(), "object" == typeof e && e ? e : {});if (i || (i = new t(this, a), o.default(this).data("bs.modal", i)), "string" == typeof e) {
            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');i[e](n);
          } else a.show && i.show(n);
        });
      }, l(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }, { key: "Default", get: function () {
          return R;
        } }]), t;
    }();o.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
      var e,
          n = this,
          i = d.getSelectorFromElement(this);i && (e = document.querySelector(i));var a = o.default(e).data("bs.modal") ? "toggle" : r({}, o.default(e).data(), o.default(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var s = o.default(e).one("show.bs.modal", function (t) {
        t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
          o.default(n).is(":visible") && n.focus();
        });
      });q._jQueryInterface.call(o.default(e), a, this);
    }), o.default.fn.modal = q._jQueryInterface, o.default.fn.modal.Constructor = q, o.default.fn.modal.noConflict = function () {
      return o.default.fn.modal = P, q._jQueryInterface;
    };var F = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Q = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
        B = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        H = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function U(t, e, n) {
      if (0 === t.length) return t;if (n && "function" == typeof n) return n(t);for (var i = new window.DOMParser().parseFromString(t, "text/html"), o = Object.keys(e), a = [].slice.call(i.body.querySelectorAll("*")), s = function (t, n) {
        var i = a[t],
            s = i.nodeName.toLowerCase();if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";var l = [].slice.call(i.attributes),
            r = [].concat(e["*"] || [], e[s] || []);l.forEach(function (t) {
          (function (t, e) {
            var n = t.nodeName.toLowerCase();if (-1 !== e.indexOf(n)) return -1 === F.indexOf(n) || Boolean(t.nodeValue.match(B) || t.nodeValue.match(H));for (var i = e.filter(function (t) {
              return t instanceof RegExp;
            }), o = 0, a = i.length; o < a; o++) if (n.match(i[o])) return !0;return !1;
          })(t, r) || i.removeAttribute(t.nodeName);
        });
      }, l = 0, r = a.length; l < r; l++) s(l);return i.body.innerHTML;
    }var M = "tooltip",
        W = o.default.fn[M],
        V = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        z = ["sanitize", "whiteList", "sanitizeFn"],
        K = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" },
        X = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        Y = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: Q, popperConfig: null },
        $ = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" },
        J = function () {
      function t(t, e) {
        if ("undefined" == typeof a.default) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
      }var e = t.prototype;return e.enable = function () {
        this._isEnabled = !0;
      }, e.disable = function () {
        this._isEnabled = !1;
      }, e.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, e.toggle = function (t) {
        if (this._isEnabled) if (t) {
          var e = this.constructor.DATA_KEY,
              n = o.default(t.currentTarget).data(e);n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), o.default(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
        } else {
          if (o.default(this.getTipElement()).hasClass("show")) return void this._leave(null, this);this._enter(null, this);
        }
      }, e.dispose = function () {
        clearTimeout(this._timeout), o.default.removeData(this.element, this.constructor.DATA_KEY), o.default(this.element).off(this.constructor.EVENT_KEY), o.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && o.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, e.show = function () {
        var t = this;if ("none" === o.default(this.element).css("display")) throw new Error("Please use show on visible elements");var e = o.default.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
          o.default(this.element).trigger(e);var n = d.findShadowRoot(this.element),
              i = o.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);if (e.isDefaultPrevented() || !i) return;var s = this.getTipElement(),
              l = d.getUID(this.constructor.NAME);s.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && o.default(s).addClass("fade");var r = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
              u = this._getAttachment(r);this.addAttachmentClass(u);var f = this._getContainer();o.default(s).data(this.constructor.DATA_KEY, this), o.default.contains(this.element.ownerDocument.documentElement, this.tip) || o.default(s).appendTo(f), o.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new a.default(this.element, s, this._getPopperConfig(u)), o.default(s).addClass("show"), "ontouchstart" in document.documentElement && o.default(document.body).children().on("mouseover", null, o.default.noop);var c = function () {
            t.config.animation && t._fixTransition();var e = t._hoverState;t._hoverState = null, o.default(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t);
          };if (o.default(this.tip).hasClass("fade")) {
            var h = d.getTransitionDurationFromElement(this.tip);o.default(this.tip).one(d.TRANSITION_END, c).emulateTransitionEnd(h);
          } else c();
        }
      }, e.hide = function (t) {
        var e = this,
            n = this.getTipElement(),
            i = o.default.Event(this.constructor.Event.HIDE),
            a = function () {
          "show" !== e._hoverState && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), o.default(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
        };if (o.default(this.element).trigger(i), !i.isDefaultPrevented()) {
          if (o.default(n).removeClass("show"), "ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, o.default(this.tip).hasClass("fade")) {
            var s = d.getTransitionDurationFromElement(n);o.default(n).one(d.TRANSITION_END, a).emulateTransitionEnd(s);
          } else a();this._hoverState = "";
        }
      }, e.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      }, e.isWithContent = function () {
        return Boolean(this.getTitle());
      }, e.addAttachmentClass = function (t) {
        o.default(this.getTipElement()).addClass("bs-tooltip-" + t);
      }, e.getTipElement = function () {
        return this.tip = this.tip || o.default(this.config.template)[0], this.tip;
      }, e.setContent = function () {
        var t = this.getTipElement();this.setElementContent(o.default(t.querySelectorAll(".tooltip-inner")), this.getTitle()), o.default(t).removeClass("fade show");
      }, e.setElementContent = function (t, e) {
        "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = U(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? o.default(e).parent().is(t) || t.empty().append(e) : t.text(o.default(e).text());
      }, e.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
      }, e._getPopperConfig = function (t) {
        var e = this;return r({}, { placement: t, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function (t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          }, onUpdate: function (t) {
            return e._handlePopperPlacementChange(t);
          } }, this.config.popperConfig);
      }, e._getOffset = function () {
        var t = this,
            e = {};return "function" == typeof this.config.offset ? e.fn = function (e) {
          return e.offsets = r({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e;
        } : e.offset = this.config.offset, e;
      }, e._getContainer = function () {
        return !1 === this.config.container ? document.body : d.isElement(this.config.container) ? o.default(this.config.container) : o.default(document).find(this.config.container);
      }, e._getAttachment = function (t) {
        return X[t.toUpperCase()];
      }, e._setListeners = function () {
        var t = this;this.config.trigger.split(" ").forEach(function (e) {
          if ("click" === e) o.default(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
            return t.toggle(e);
          });else if ("manual" !== e) {
            var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                i = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;o.default(t.element).on(n, t.config.selector, function (e) {
              return t._enter(e);
            }).on(i, t.config.selector, function (e) {
              return t._leave(e);
            });
          }
        }), this._hideModalHandler = function () {
          t.element && t.hide();
        }, o.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = r({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
      }, e._fixTitle = function () {
        var t = typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, e._enter = function (t, e) {
        var n = this.constructor.DATA_KEY;(e = e || o.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), o.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), o.default(e.getTipElement()).hasClass("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
          "show" === e._hoverState && e.show();
        }, e.config.delay.show) : e.show());
      }, e._leave = function (t, e) {
        var n = this.constructor.DATA_KEY;(e = e || o.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), o.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
          "out" === e._hoverState && e.hide();
        }, e.config.delay.hide) : e.hide());
      }, e._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;return !1;
      }, e._getConfig = function (t) {
        var e = o.default(this.element).data();return Object.keys(e).forEach(function (t) {
          -1 !== z.indexOf(t) && delete e[t];
        }), "number" == typeof (t = r({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), d.typeCheckConfig(M, t, this.constructor.DefaultType), t.sanitize && (t.template = U(t.template, t.whiteList, t.sanitizeFn)), t;
      }, e._getDelegateConfig = function () {
        var t = {};if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);return t;
      }, e._cleanTipClass = function () {
        var t = o.default(this.getTipElement()),
            e = t.attr("class").match(V);null !== e && e.length && t.removeClass(e.join(""));
      }, e._handlePopperPlacementChange = function (t) {
        this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
      }, e._fixTransition = function () {
        var t = this.getTipElement(),
            e = this.config.animation;null === t.getAttribute("x-placement") && (o.default(t).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = o.default(this),
              i = n.data("bs.tooltip"),
              a = "object" == typeof e && e;if ((i || !/dispose|hide/.test(e)) && (i || (i = new t(this, a), n.data("bs.tooltip", i)), "string" == typeof e)) {
            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');i[e]();
          }
        });
      }, l(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }, { key: "Default", get: function () {
          return Y;
        } }, { key: "NAME", get: function () {
          return M;
        } }, { key: "DATA_KEY", get: function () {
          return "bs.tooltip";
        } }, { key: "Event", get: function () {
          return $;
        } }, { key: "EVENT_KEY", get: function () {
          return ".bs.tooltip";
        } }, { key: "DefaultType", get: function () {
          return K;
        } }]), t;
    }();o.default.fn[M] = J._jQueryInterface, o.default.fn[M].Constructor = J, o.default.fn[M].noConflict = function () {
      return o.default.fn[M] = W, J._jQueryInterface;
    };var G = "popover",
        Z = o.default.fn[G],
        tt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        et = r({}, J.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        nt = r({}, J.DefaultType, { content: "(string|element|function)" }),
        it = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" },
        ot = function (t) {
      var e, n;function i() {
        return t.apply(this, arguments) || this;
      }n = t, (e = i).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;var a = i.prototype;return a.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, a.addAttachmentClass = function (t) {
        o.default(this.getTipElement()).addClass("bs-popover-" + t);
      }, a.getTipElement = function () {
        return this.tip = this.tip || o.default(this.config.template)[0], this.tip;
      }, a.setContent = function () {
        var t = o.default(this.getTipElement());this.setElementContent(t.find(".popover-header"), this.getTitle());var e = this._getContent();"function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show");
      }, a._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content;
      }, a._cleanTipClass = function () {
        var t = o.default(this.getTipElement()),
            e = t.attr("class").match(tt);null !== e && e.length > 0 && t.removeClass(e.join(""));
      }, i._jQueryInterface = function (t) {
        return this.each(function () {
          var e = o.default(this).data("bs.popover"),
              n = "object" == typeof t ? t : null;if ((e || !/dispose|hide/.test(t)) && (e || (e = new i(this, n), o.default(this).data("bs.popover", e)), "string" == typeof t)) {
            if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');e[t]();
          }
        });
      }, l(i, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }, { key: "Default", get: function () {
          return et;
        } }, { key: "NAME", get: function () {
          return G;
        } }, { key: "DATA_KEY", get: function () {
          return "bs.popover";
        } }, { key: "Event", get: function () {
          return it;
        } }, { key: "EVENT_KEY", get: function () {
          return ".bs.popover";
        } }, { key: "DefaultType", get: function () {
          return nt;
        } }]), i;
    }(J);o.default.fn[G] = ot._jQueryInterface, o.default.fn[G].Constructor = ot, o.default.fn[G].noConflict = function () {
      return o.default.fn[G] = Z, ot._jQueryInterface;
    };var at = "scrollspy",
        st = o.default.fn[at],
        lt = { offset: 10, method: "auto", target: "" },
        rt = { offset: "number", method: "string", target: "(string|element)" },
        ut = function () {
      function t(t, e) {
        var n = this;this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, o.default(this._scrollElement).on("scroll.bs.scrollspy", function (t) {
          return n._process(t);
        }), this.refresh(), this._process();
      }var e = t.prototype;return e.refresh = function () {
        var t = this,
            e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            n = "auto" === this._config.method ? e : this._config.method,
            i = "position" === n ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
          var e,
              a = d.getSelectorFromElement(t);if (a && (e = document.querySelector(a)), e) {
            var s = e.getBoundingClientRect();if (s.width || s.height) return [o.default(e)[n]().top + i, a];
          }return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (e) {
          t._offsets.push(e[0]), t._targets.push(e[1]);
        });
      }, e.dispose = function () {
        o.default.removeData(this._element, "bs.scrollspy"), o.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, e._getConfig = function (t) {
        if ("string" != typeof (t = r({}, lt, "object" == typeof t && t ? t : {})).target && d.isElement(t.target)) {
          var e = o.default(t.target).attr("id");e || (e = d.getUID(at), o.default(t.target).attr("id", e)), t.target = "#" + e;
        }return d.typeCheckConfig(at, t, rt), t;
      }, e._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, e._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, e._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, e._process = function () {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), t >= n) {
          var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var o = this._offsets.length; o--;) {
            this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
          }
        }
      }, e._activate = function (t) {
        this._activeTarget = t, this._clear();var e = this._selector.split(",").map(function (e) {
          return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
        }),
            n = o.default([].slice.call(document.querySelectorAll(e.join(","))));n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"), n.addClass("active")) : (n.addClass("active"), n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), o.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: t });
      }, e._clear = function () {
        [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
          return t.classList.contains("active");
        }).forEach(function (t) {
          return t.classList.remove("active");
        });
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = o.default(this).data("bs.scrollspy");if (n || (n = new t(this, "object" == typeof e && e), o.default(this).data("bs.scrollspy", n)), "string" == typeof e) {
            if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');n[e]();
          }
        });
      }, l(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }, { key: "Default", get: function () {
          return lt;
        } }]), t;
    }();o.default(window).on("load.bs.scrollspy.data-api", function () {
      for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--;) {
        var n = o.default(t[e]);ut._jQueryInterface.call(n, n.data());
      }
    }), o.default.fn[at] = ut._jQueryInterface, o.default.fn[at].Constructor = ut, o.default.fn[at].noConflict = function () {
      return o.default.fn[at] = st, ut._jQueryInterface;
    };var dt = o.default.fn.tab,
        ft = function () {
      function t(t) {
        this._element = t;
      }var e = t.prototype;return e.show = function () {
        var t = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && o.default(this._element).hasClass("active") || o.default(this._element).hasClass("disabled"))) {
          var e,
              n,
              i = o.default(this._element).closest(".nav, .list-group")[0],
              a = d.getSelectorFromElement(this._element);if (i) {
            var s = "UL" === i.nodeName || "OL" === i.nodeName ? "> li > .active" : ".active";n = (n = o.default.makeArray(o.default(i).find(s)))[n.length - 1];
          }var l = o.default.Event("hide.bs.tab", { relatedTarget: this._element }),
              r = o.default.Event("show.bs.tab", { relatedTarget: n });if (n && o.default(n).trigger(l), o.default(this._element).trigger(r), !r.isDefaultPrevented() && !l.isDefaultPrevented()) {
            a && (e = document.querySelector(a)), this._activate(this._element, i);var u = function () {
              var e = o.default.Event("hidden.bs.tab", { relatedTarget: t._element }),
                  i = o.default.Event("shown.bs.tab", { relatedTarget: n });o.default(n).trigger(e), o.default(t._element).trigger(i);
            };e ? this._activate(e, e.parentNode, u) : u();
          }
        }
      }, e.dispose = function () {
        o.default.removeData(this._element, "bs.tab"), this._element = null;
      }, e._activate = function (t, e, n) {
        var i = this,
            a = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? o.default(e).children(".active") : o.default(e).find("> li > .active"))[0],
            s = n && a && o.default(a).hasClass("fade"),
            l = function () {
          return i._transitionComplete(t, a, n);
        };if (a && s) {
          var r = d.getTransitionDurationFromElement(a);o.default(a).removeClass("show").one(d.TRANSITION_END, l).emulateTransitionEnd(r);
        } else l();
      }, e._transitionComplete = function (t, e, n) {
        if (e) {
          o.default(e).removeClass("active");var i = o.default(e.parentNode).find("> .dropdown-menu .active")[0];i && o.default(i).removeClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
        }if (o.default(t).addClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), d.reflow(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && o.default(t.parentNode).hasClass("dropdown-menu")) {
          var a = o.default(t).closest(".dropdown")[0];if (a) {
            var s = [].slice.call(a.querySelectorAll(".dropdown-toggle"));o.default(s).addClass("active");
          }t.setAttribute("aria-expanded", !0);
        }n && n();
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = o.default(this),
              i = n.data("bs.tab");if (i || (i = new t(this), n.data("bs.tab", i)), "string" == typeof e) {
            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');i[e]();
          }
        });
      }, l(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }]), t;
    }();o.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
      t.preventDefault(), ft._jQueryInterface.call(o.default(this), "show");
    }), o.default.fn.tab = ft._jQueryInterface, o.default.fn.tab.Constructor = ft, o.default.fn.tab.noConflict = function () {
      return o.default.fn.tab = dt, ft._jQueryInterface;
    };var ct = o.default.fn.toast,
        ht = { animation: "boolean", autohide: "boolean", delay: "number" },
        gt = { animation: !0, autohide: !0, delay: 500 },
        mt = function () {
      function t(t, e) {
        this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
      }var e = t.prototype;return e.show = function () {
        var t = this,
            e = o.default.Event("show.bs.toast");if (o.default(this._element).trigger(e), !e.isDefaultPrevented()) {
          this._clearTimeout(), this._config.animation && this._element.classList.add("fade");var n = function () {
            t._element.classList.remove("showing"), t._element.classList.add("show"), o.default(t._element).trigger("shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout(function () {
              t.hide();
            }, t._config.delay));
          };if (this._element.classList.remove("hide"), d.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
            var i = d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END, n).emulateTransitionEnd(i);
          } else n();
        }
      }, e.hide = function () {
        if (this._element.classList.contains("show")) {
          var t = o.default.Event("hide.bs.toast");o.default(this._element).trigger(t), t.isDefaultPrevented() || this._close();
        }
      }, e.dispose = function () {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), o.default(this._element).off("click.dismiss.bs.toast"), o.default.removeData(this._element, "bs.toast"), this._element = null, this._config = null;
      }, e._getConfig = function (t) {
        return t = r({}, gt, o.default(this._element).data(), "object" == typeof t && t ? t : {}), d.typeCheckConfig("toast", t, this.constructor.DefaultType), t;
      }, e._setListeners = function () {
        var t = this;o.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
          return t.hide();
        });
      }, e._close = function () {
        var t = this,
            e = function () {
          t._element.classList.add("hide"), o.default(t._element).trigger("hidden.bs.toast");
        };if (this._element.classList.remove("show"), this._config.animation) {
          var n = d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END, e).emulateTransitionEnd(n);
        } else e();
      }, e._clearTimeout = function () {
        clearTimeout(this._timeout), this._timeout = null;
      }, t._jQueryInterface = function (e) {
        return this.each(function () {
          var n = o.default(this),
              i = n.data("bs.toast");if (i || (i = new t(this, "object" == typeof e && e), n.data("bs.toast", i)), "string" == typeof e) {
            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');i[e](this);
          }
        });
      }, l(t, null, [{ key: "VERSION", get: function () {
          return "4.5.3";
        } }, { key: "DefaultType", get: function () {
          return ht;
        } }, { key: "Default", get: function () {
          return gt;
        } }]), t;
    }();o.default.fn.toast = mt._jQueryInterface, o.default.fn.toast.Constructor = mt, o.default.fn.toast.noConflict = function () {
      return o.default.fn.toast = ct, mt._jQueryInterface;
    }, t.Alert = h, t.Button = m, t.Carousel = w, t.Collapse = D, t.Dropdown = x, t.Modal = q, t.Popover = ot, t.Scrollspy = ut, t.Tab = ft, t.Toast = mt, t.Tooltip = J, t.Util = d, Object.defineProperty(t, "__esModule", { value: !0 });
  });
  //# sourceMappingURL=bootstrap.min.js.map
});
define("ember-app/templates/bootstrap/js/jquery-3.5.1.slim.min", ["module"], function (module) {
  "use strict";

  /*! jQuery v3.5.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */
  !function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
    } : t(e);
  }("undefined" != typeof window ? window : undefined, function (g, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        v = t.flat ? function (e) {
      return t.flat.call(e);
    } : function (e) {
      return t.concat.apply([], e);
    },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        y = n.hasOwnProperty,
        a = y.toString,
        l = a.call(Object),
        m = {},
        b = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
        x = function (e) {
      return null != e && e === e.window;
    },
        w = g.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };function C(e, t, n) {
      var r,
          i,
          o = (n = n || w).createElement("script");if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);n.head.appendChild(o).parentNode.removeChild(o);
    }function T(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
    }var f = "3.5.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector",
        E = function (e, t) {
      return new E.fn.init(e, t);
    };function d(e) {
      var t = !!e && "length" in e && e.length,
          n = T(e);return !b(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
    }E.fn = E.prototype = { jquery: f, constructor: E, length: 0, toArray: function () {
        return s.call(this);
      }, get: function (e) {
        return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
      }, pushStack: function (e) {
        var t = E.merge(this.constructor(), e);return t.prevObject = this, t;
      }, each: function (e) {
        return E.each(this, e);
      }, map: function (n) {
        return this.pushStack(E.map(this, function (e, t) {
          return n.call(e, t, e);
        }));
      }, slice: function () {
        return this.pushStack(s.apply(this, arguments));
      }, first: function () {
        return this.eq(0);
      }, last: function () {
        return this.eq(-1);
      }, even: function () {
        return this.pushStack(E.grep(this, function (e, t) {
          return (t + 1) % 2;
        }));
      }, odd: function () {
        return this.pushStack(E.grep(this, function (e, t) {
          return t % 2;
        }));
      }, eq: function (e) {
        var t = this.length,
            n = +e + (e < 0 ? t : 0);return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      }, end: function () {
        return this.prevObject || this.constructor();
      }, push: u, sort: t.sort, splice: t.splice }, E.extend = E.fn.extend = function () {
      var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));return a;
    }, E.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
        throw new Error(e);
      }, noop: function () {}, isPlainObject: function (e) {
        var t, n;return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = y.call(t, "constructor") && t.constructor) && a.call(n) === l);
      }, isEmptyObject: function (e) {
        var t;for (t in e) return !1;return !0;
      }, globalEval: function (e, t, n) {
        C(e, { nonce: t && t.nonce }, n);
      }, each: function (e, t) {
        var n,
            r = 0;if (d(e)) {
          for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;return e;
      }, makeArray: function (e, t) {
        var n = t || [];return null != e && (d(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
      }, inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      }, merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];return e.length = i, e;
      }, grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);return r;
      }, map: function (e, t, n) {
        var r,
            i,
            o = 0,
            a = [];if (d(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);return v(a);
      }, guid: 1, support: m }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      n["[object " + t + "]"] = t.toLowerCase();
    });var p = function (n) {
      var e,
          p,
          x,
          o,
          i,
          h,
          f,
          g,
          w,
          u,
          l,
          C,
          T,
          a,
          E,
          v,
          s,
          c,
          y,
          A = "sizzle" + 1 * new Date(),
          d = n.document,
          N = 0,
          r = 0,
          m = ue(),
          b = ue(),
          S = ue(),
          k = ue(),
          D = function (e, t) {
        return e === t && (l = !0), 0;
      },
          L = {}.hasOwnProperty,
          t = [],
          j = t.pop,
          q = t.push,
          O = t.push,
          P = t.slice,
          H = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;return -1;
      },
          I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          R = "[\\x20\\t\\r\\n\\f]",
          B = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          M = "\\[" + R + "*(" + B + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + R + "*\\]",
          W = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
          F = new RegExp(R + "+", "g"),
          $ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
          z = new RegExp("^" + R + "*," + R + "*"),
          _ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
          U = new RegExp(R + "|>"),
          V = new RegExp(W),
          X = new RegExp("^" + B + "$"),
          Q = { ID: new RegExp("^#(" + B + ")"), CLASS: new RegExp("^\\.(" + B + ")"), TAG: new RegExp("^(" + B + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"), bool: new RegExp("^(?:" + I + ")$", "i"), needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i") },
          Y = /HTML$/i,
          G = /^(?:input|select|textarea|button)$/i,
          K = /^h\d$/i,
          J = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
          ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
      },
          re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ie = function (e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
          oe = function () {
        C();
      },
          ae = xe(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, { dir: "parentNode", next: "legend" });try {
        O.apply(t = P.call(d.childNodes), d.childNodes), t[d.childNodes.length].nodeType;
      } catch (e) {
        O = { apply: t.length ? function (e, t) {
            q.apply(e, P.call(t));
          } : function (e, t) {
            var n = e.length,
                r = 0;while (e[n++] = t[r++]);e.length = n - 1;
          } };
      }function se(t, e, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = e && e.ownerDocument,
            d = e ? e.nodeType : 9;if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;if (!r && (C(e), e = e || T, E)) {
          if (11 !== d && (u = Z.exec(t))) if (i = u[1]) {
            if (9 === d) {
              if (!(a = e.getElementById(i))) return n;if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
          } else {
            if (u[2]) return O.apply(n, e.getElementsByTagName(t)), n;if ((i = u[3]) && p.getElementsByClassName && e.getElementsByClassName) return O.apply(n, e.getElementsByClassName(i)), n;
          }if (p.qsa && !k[t + " "] && (!v || !v.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
            if (c = t, f = e, 1 === d && (U.test(t) || _.test(t))) {
              (f = ee.test(t) && ye(e.parentNode) || e) === e && p.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = A)), o = (l = h(t)).length;while (o--) l[o] = (s ? "#" + s : ":scope") + " " + be(l[o]);c = l.join(",");
            }try {
              return O.apply(n, f.querySelectorAll(c)), n;
            } catch (e) {
              k(t, !0);
            } finally {
              s === A && e.removeAttribute("id");
            }
          }
        }return g(t.replace($, "$1"), e, n, r);
      }function ue() {
        var r = [];return function e(t, n) {
          return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n;
        };
      }function le(e) {
        return e[A] = !0, e;
      }function ce(e) {
        var t = T.createElement("fieldset");try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null;
        }
      }function fe(e, t) {
        var n = e.split("|"),
            r = n.length;while (r--) x.attrHandle[n[r]] = t;
      }function de(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) while (n = n.nextSibling) if (n === t) return -1;return e ? 1 : -1;
      }function pe(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }function he(n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();return ("input" === t || "button" === t) && e.type === n;
        };
      }function ge(t) {
        return function (e) {
          return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
        };
      }function ve(a) {
        return le(function (o) {
          return o = +o, le(function (e, t) {
            var n,
                r = a([], e.length, o),
                i = r.length;while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          });
        });
      }function ye(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }for (e in p = se.support = {}, i = se.isXML = function (e) {
        var t = e.namespaceURI,
            n = (e.ownerDocument || e).documentElement;return !Y.test(t || n && n.nodeName || "HTML");
      }, C = se.setDocument = function (e) {
        var t,
            n,
            r = e ? e.ownerDocument || e : d;return r != T && 9 === r.nodeType && r.documentElement && (a = (T = r).documentElement, E = !i(T), d != T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), p.scope = ce(function (e) {
          return a.appendChild(e).appendChild(T.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
        }), p.attributes = ce(function (e) {
          return e.className = "i", !e.getAttribute("className");
        }), p.getElementsByTagName = ce(function (e) {
          return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length;
        }), p.getElementsByClassName = J.test(T.getElementsByClassName), p.getById = ce(function (e) {
          return a.appendChild(e).id = A, !T.getElementsByName || !T.getElementsByName(A).length;
        }), p.getById ? (x.filter.ID = function (e) {
          var t = e.replace(te, ne);return function (e) {
            return e.getAttribute("id") === t;
          };
        }, x.find.ID = function (e, t) {
          if ("undefined" != typeof t.getElementById && E) {
            var n = t.getElementById(e);return n ? [n] : [];
          }
        }) : (x.filter.ID = function (e) {
          var n = e.replace(te, ne);return function (e) {
            var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return t && t.value === n;
          };
        }, x.find.ID = function (e, t) {
          if ("undefined" != typeof t.getElementById && E) {
            var n,
                r,
                i,
                o = t.getElementById(e);if (o) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];i = t.getElementsByName(e), r = 0;while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }return [];
          }
        }), x.find.TAG = p.getElementsByTagName ? function (e, t) {
          return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0;
        } : function (e, t) {
          var n,
              r = [],
              i = 0,
              o = t.getElementsByTagName(e);if ("*" === e) {
            while (n = o[i++]) 1 === n.nodeType && r.push(n);return r;
          }return o;
        }, x.find.CLASS = p.getElementsByClassName && function (e, t) {
          if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
        }, s = [], v = [], (p.qsa = J.test(T.querySelectorAll)) && (ce(function (e) {
          var t;a.appendChild(e).innerHTML = "<a id='" + A + "'></a><select id='" + A + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + A + "-]").length || v.push("~="), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + A + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
        }), ce(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = T.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
        })), (p.matchesSelector = J.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
          p.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", W);
        }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = J.test(a.compareDocumentPosition), y = t || J.test(a.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
        } : function (e, t) {
          if (t) while (t = t.parentNode) if (t === e) return !0;return !1;
        }, D = t ? function (e, t) {
          if (e === t) return l = !0, 0;var n = !e.compareDocumentPosition - !t.compareDocumentPosition;return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == T || e.ownerDocument == d && y(d, e) ? -1 : t == T || t.ownerDocument == d && y(d, t) ? 1 : u ? H(u, e) - H(u, t) : 0 : 4 & n ? -1 : 1);
        } : function (e, t) {
          if (e === t) return l = !0, 0;var n,
              r = 0,
              i = e.parentNode,
              o = t.parentNode,
              a = [e],
              s = [t];if (!i || !o) return e == T ? -1 : t == T ? 1 : i ? -1 : o ? 1 : u ? H(u, e) - H(u, t) : 0;if (i === o) return de(e, t);n = e;while (n = n.parentNode) a.unshift(n);n = t;while (n = n.parentNode) s.unshift(n);while (a[r] === s[r]) r++;return r ? de(a[r], s[r]) : a[r] == d ? -1 : s[r] == d ? 1 : 0;
        }), T;
      }, se.matches = function (e, t) {
        return se(e, null, null, t);
      }, se.matchesSelector = function (e, t) {
        if (C(e), p.matchesSelector && E && !k[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
          var n = c.call(e, t);if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
        } catch (e) {
          k(t, !0);
        }return 0 < se(t, T, null, [e]).length;
      }, se.contains = function (e, t) {
        return (e.ownerDocument || e) != T && C(e), y(e, t);
      }, se.attr = function (e, t) {
        (e.ownerDocument || e) != T && C(e);var n = x.attrHandle[t.toLowerCase()],
            r = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;return void 0 !== r ? r : p.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }, se.escape = function (e) {
        return (e + "").replace(re, ie);
      }, se.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, se.uniqueSort = function (e) {
        var t,
            n = [],
            r = 0,
            i = 0;if (l = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e.sort(D), l) {
          while (t = e[i++]) t === e[i] && (r = n.push(i));while (r--) e.splice(n[r], 1);
        }return u = null, e;
      }, o = se.getText = function (e) {
        var t,
            n = "",
            r = 0,
            i = e.nodeType;if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while (t = e[r++]) n += o(t);return n;
      }, (x = se.selectors = { cacheLength: 50, createPseudo: le, match: Q, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) {
            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          }, CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
          }, PSEUDO: function (e) {
            var t,
                n = !e[6] && e[2];return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
          } }, filter: { TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();return "*" === e ? function () {
              return !0;
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t;
            };
          }, CLASS: function (e) {
            var t = m[e + " "];return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && m(e, function (e) {
              return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
            });
          }, ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          }, CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
                m = "last" !== h.slice(-4),
                b = "of-type" === e;return 1 === g && 0 === v ? function (e) {
              return !!e.parentNode;
            } : function (e, t, n) {
              var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l = y !== m ? "nextSibling" : "previousSibling",
                  c = e.parentNode,
                  f = b && e.nodeName.toLowerCase(),
                  d = !n && !b,
                  p = !1;if (c) {
                if (y) {
                  while (l) {
                    a = e;while (a = a[l]) if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;u = l = "only" === h && !u && "nextSibling";
                  }return !0;
                }if (u = [m ? c.firstChild : c.lastChild], m && d) {
                  p = (s = (r = (i = (o = (a = c)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]) && r[2], a = s && c.childNodes[s];while (a = ++s && a && a[l] || (p = s = 0) || u.pop()) if (1 === a.nodeType && ++p && a === e) {
                    i[h] = [N, s, p];break;
                  }
                } else if (d && (p = s = (r = (i = (o = (a = e)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]), !1 === p) while (a = ++s && a && a[l] || (p = s = 0) || u.pop()) if ((b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++p && (d && ((i = (o = a[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [N, p]), a === e)) break;return (p -= v) === g || p % g == 0 && 0 <= p / g;
              }
            };
          }, PSEUDO: function (e, o) {
            var t,
                a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);return a[A] ? a(o) : 1 < a.length ? (t = [e, e, "", o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
              var n,
                  r = a(e, o),
                  i = r.length;while (i--) e[n = H(e, r[i])] = !(t[n] = r[i]);
            }) : function (e) {
              return a(e, 0, t);
            }) : a;
          } }, pseudos: { not: le(function (e) {
            var r = [],
                i = [],
                s = f(e.replace($, "$1"));return s[A] ? le(function (e, t, n, r) {
              var i,
                  o = s(e, null, r, []),
                  a = e.length;while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
            }) : function (e, t, n) {
              return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
            };
          }), has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }), contains: le(function (t) {
            return t = t.replace(te, ne), function (e) {
              return -1 < (e.textContent || o(e)).indexOf(t);
            };
          }), lang: le(function (n) {
            return X.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
              var t;do {
                if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
              } while ((e = e.parentNode) && 1 === e.nodeType);return !1;
            };
          }), target: function (e) {
            var t = n.location && n.location.hash;return t && t.slice(1) === e.id;
          }, root: function (e) {
            return e === a;
          }, focus: function (e) {
            return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
            var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
          }, selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          }, empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;return !0;
          }, parent: function (e) {
            return !x.pseudos.empty(e);
          }, header: function (e) {
            return K.test(e.nodeName);
          }, input: function (e) {
            return G.test(e.nodeName);
          }, button: function (e) {
            var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
          }, text: function (e) {
            var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          }, first: ve(function () {
            return [0];
          }), last: ve(function (e, t) {
            return [t - 1];
          }), eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }), even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);return e;
          }), odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);return e;
          }), lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);return e;
          }), gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);return e;
          }) } }).pseudos.nth = x.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[e] = pe(e);for (e in { submit: !0, reset: !0 }) x.pseudos[e] = he(e);function me() {}function be(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;return r;
      }function xe(s, e, t) {
        var u = e.dir,
            l = e.next,
            c = l || u,
            f = t && "parentNode" === c,
            d = r++;return e.first ? function (e, t, n) {
          while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);return !1;
        } : function (e, t, n) {
          var r,
              i,
              o,
              a = [N, d];if (n) {
            while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[A] || (e[A] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === N && r[1] === d) return a[2] = r[2];if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }return !1;
        };
      }function we(i) {
        return 1 < i.length ? function (e, t, n) {
          var r = i.length;while (r--) if (!i[r](e, t, n)) return !1;return !0;
        } : i[0];
      }function Ce(e, t, n, r, i) {
        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));return a;
      }function Te(p, h, g, v, y, e) {
        return v && !v[A] && (v = Te(v)), y && !y[A] && (y = Te(y, e)), le(function (e, t, n, r) {
          var i,
              o,
              a,
              s = [],
              u = [],
              l = t.length,
              c = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);return n;
          }(h || "*", n.nodeType ? [n] : n, []),
              f = !p || !e && h ? c : Ce(c, s, p, n, r),
              d = g ? y || (e ? p : l || v) ? [] : t : f;if (g && g(f, d, n, r), v) {
            i = Ce(d, u), v(i, [], n, r), o = i.length;while (o--) (a = i[o]) && (d[u[o]] = !(f[u[o]] = a));
          }if (e) {
            if (y || p) {
              if (y) {
                i = [], o = d.length;while (o--) (a = d[o]) && i.push(f[o] = a);y(null, d = [], i, r);
              }o = d.length;while (o--) (a = d[o]) && -1 < (i = y ? H(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          } else d = Ce(d === t ? d.splice(l, d.length) : d), y ? y(null, t, d, r) : O.apply(t, d);
        });
      }function Ee(e) {
        for (var i, t, n, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = xe(function (e) {
          return e === i;
        }, a, !0), l = xe(function (e) {
          return -1 < H(i, e);
        }, a, !0), c = [function (e, t, n) {
          var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));return i = null, r;
        }]; s < r; s++) if (t = x.relative[e[s].type]) c = [xe(we(c), t)];else {
          if ((t = x.filter[e[s].type].apply(null, e[s].matches))[A]) {
            for (n = ++s; n < r; n++) if (x.relative[e[n].type]) break;return Te(1 < s && we(c), 1 < s && be(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && be(e));
          }c.push(t);
        }return we(c);
      }return me.prototype = x.filters = x.pseudos, x.setFilters = new me(), h = se.tokenize = function (e, t) {
        var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = b[e + " "];if (l) return t ? 0 : l.slice(0);a = e, s = [], u = x.preFilter;while (a) {
          for (o in n && !(r = z.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = _.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace($, " ") }), a = a.slice(n.length)), x.filter) !(r = Q[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length));if (!n) break;
        }return t ? a.length : a ? se.error(e) : b(e, s).slice(0);
      }, f = se.compile = function (e, t) {
        var n,
            v,
            y,
            m,
            b,
            r,
            i = [],
            o = [],
            a = S[e + " "];if (!a) {
          t || (t = h(e)), n = t.length;while (n--) (a = Ee(t[n]))[A] ? i.push(a) : o.push(a);(a = S(e, (v = o, m = 0 < (y = i).length, b = 0 < v.length, r = function (e, t, n, r, i) {
            var o,
                a,
                s,
                u = 0,
                l = "0",
                c = e && [],
                f = [],
                d = w,
                p = e || b && x.find.TAG("*", i),
                h = N += null == d ? 1 : Math.random() || .1,
                g = p.length;for (i && (w = t == T || t || i); l !== g && null != (o = p[l]); l++) {
              if (b && o) {
                a = 0, t || o.ownerDocument == T || (C(o), n = !E);while (s = v[a++]) if (s(o, t || T, n)) {
                  r.push(o);break;
                }i && (N = h);
              }m && ((o = !s && o) && u--, e && c.push(o));
            }if (u += l, m && l !== u) {
              a = 0;while (s = y[a++]) s(c, f, t, n);if (e) {
                if (0 < u) while (l--) c[l] || f[l] || (f[l] = j.call(r));f = Ce(f);
              }O.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
            }return i && (N = h, w = d), c;
          }, m ? le(r) : r))).selector = e;
        }return a;
      }, g = se.select = function (e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h(e = l.selector || e);if (n = n || [], 1 === c.length) {
          if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && x.relative[o[1].type]) {
            if (!(t = (x.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;l && (t = t.parentNode), e = e.slice(o.shift().value.length);
          }i = Q.needsContext.test(e) ? 0 : o.length;while (i--) {
            if (a = o[i], x.relative[s = a.type]) break;if ((u = x.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
              if (o.splice(i, 1), !(e = r.length && be(o))) return O.apply(n, r), n;break;
            }
          }
        }return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
      }, p.sortStable = A.split("").sort(D).join("") === A, p.detectDuplicates = !!l, C(), p.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
      }), ce(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
      }) || fe("type|href|height|width", function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }), p.attributes && ce(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }) || fe("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }), ce(function (e) {
        return null == e.getAttribute("disabled");
      }) || fe(I, function (e, t, n) {
        var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }), se;
    }(g);E.find = p, E.expr = p.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = p.uniqueSort, E.text = p.getText, E.isXMLDoc = p.isXML, E.contains = p.contains, E.escapeSelector = p.escape;var h = function (e, t, n) {
      var r = [],
          i = void 0 !== n;while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
        if (i && E(e).is(n)) break;r.push(e);
      }return r;
    },
        A = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);return n;
    },
        N = E.expr.match.needsContext;function S(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e, n, r) {
      return b(n) ? E.grep(e, function (e, t) {
        return !!n.call(e, t, e) !== r;
      }) : n.nodeType ? E.grep(e, function (e) {
        return e === n !== r;
      }) : "string" != typeof n ? E.grep(e, function (e) {
        return -1 < i.call(n, e) !== r;
      }) : E.filter(n, e, r);
    }E.filter = function (e, t, n) {
      var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, E.fn.extend({ find: function (e) {
        var t,
            n,
            r = this.length,
            i = this;if ("string" != typeof e) return this.pushStack(E(e).filter(function () {
          for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0;
        }));for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);return 1 < r ? E.uniqueSort(n) : n;
      }, filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      }, not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      }, is: function (e) {
        return !!D(this, "string" == typeof e && N.test(e) ? E(e) : e || [], !1).length;
      } });var L,
        j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init = function (e, t, n) {
      var r, i;if (!e) return this;if (n = n || L, "string" == typeof e) {
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (r[1]) {
          if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : w, !0)), k.test(r[1]) && E.isPlainObject(t)) for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);return this;
        }return (i = w.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
      }return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
    }).prototype = E.fn, L = E(w);var q = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };function P(e, t) {
      while ((e = e[t]) && 1 !== e.nodeType);return e;
    }E.fn.extend({ has: function (e) {
        var t = E(e, this),
            n = t.length;return this.filter(function () {
          for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
        });
      }, closest: function (e, t) {
        var n,
            r = 0,
            i = this.length,
            o = [],
            a = "string" != typeof e && E(e);if (!N.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
          o.push(n);break;
        }return this.pushStack(1 < o.length ? E.uniqueSort(o) : o);
      }, index: function (e) {
        return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }, add: function (e, t) {
        return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
      }, addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      } }), E.each({ parent: function (e) {
        var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
      }, parents: function (e) {
        return h(e, "parentNode");
      }, parentsUntil: function (e, t, n) {
        return h(e, "parentNode", n);
      }, next: function (e) {
        return P(e, "nextSibling");
      }, prev: function (e) {
        return P(e, "previousSibling");
      }, nextAll: function (e) {
        return h(e, "nextSibling");
      }, prevAll: function (e) {
        return h(e, "previousSibling");
      }, nextUntil: function (e, t, n) {
        return h(e, "nextSibling", n);
      }, prevUntil: function (e, t, n) {
        return h(e, "previousSibling", n);
      }, siblings: function (e) {
        return A((e.parentNode || {}).firstChild, e);
      }, children: function (e) {
        return A(e.firstChild);
      }, contents: function (e) {
        return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (S(e, "template") && (e = e.content || e), E.merge([], e.childNodes));
      } }, function (r, i) {
      E.fn[r] = function (e, t) {
        var n = E.map(this, i, e);return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (O[r] || E.uniqueSort(n), q.test(r) && n.reverse()), this.pushStack(n);
      };
    });var H = /[^\x20\t\r\n\f]+/g;function I(e) {
      return e;
    }function R(e) {
      throw e;
    }function B(e, t, n, r) {
      var i;try {
        e && b(i = e.promise) ? i.call(e).done(t).fail(n) : e && b(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }E.Callbacks = function (r) {
      var e, n;r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(H) || [], function (e, t) {
        n[t] = !0;
      }), n) : E.extend({}, r);var i,
          t,
          o,
          a,
          s = [],
          u = [],
          l = -1,
          c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
      },
          f = { add: function () {
          return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
            E.each(e, function (e, t) {
              b(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== T(t) && n(t);
            });
          }(arguments), t && !i && c()), this;
        }, remove: function () {
          return E.each(arguments, function (e, t) {
            var n;while (-1 < (n = E.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
          }), this;
        }, has: function (e) {
          return e ? -1 < E.inArray(e, s) : 0 < s.length;
        }, empty: function () {
          return s && (s = []), this;
        }, disable: function () {
          return a = u = [], s = t = "", this;
        }, disabled: function () {
          return !s;
        }, lock: function () {
          return a = u = [], t || i || (s = t = ""), this;
        }, locked: function () {
          return !!a;
        }, fireWith: function (e, t) {
          return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
        }, fire: function () {
          return f.fireWith(this, arguments), this;
        }, fired: function () {
          return !!o;
        } };return f;
    }, E.extend({ Deferred: function (e) {
        var o = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]],
            i = "pending",
            a = { state: function () {
            return i;
          }, always: function () {
            return s.done(arguments).fail(arguments), this;
          }, "catch": function (e) {
            return a.then(null, e);
          }, pipe: function () {
            var i = arguments;return E.Deferred(function (r) {
              E.each(o, function (e, t) {
                var n = b(i[t[4]]) && i[t[4]];s[t[1]](function () {
                  var e = n && n.apply(this, arguments);e && b(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                });
              }), i = null;
            }).promise();
          }, then: function (t, n, r) {
            var u = 0;function l(i, o, a, s) {
              return function () {
                var n = this,
                    r = arguments,
                    e = function () {
                  var e, t;if (!(i < u)) {
                    if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? s ? t.call(e, l(u, o, I, s), l(u, o, R, s)) : (u++, t.call(e, l(u, o, I, s), l(u, o, R, s), l(u, o, I, o.notifyWith))) : (a !== I && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                  }
                },
                    t = s ? e : function () {
                  try {
                    e();
                  } catch (e) {
                    E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== R && (n = void 0, r = [e]), o.rejectWith(n, r));
                  }
                };i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), g.setTimeout(t));
              };
            }return E.Deferred(function (e) {
              o[0][3].add(l(0, e, b(r) ? r : I, e.notifyWith)), o[1][3].add(l(0, e, b(t) ? t : I)), o[2][3].add(l(0, e, b(n) ? n : R));
            }).promise();
          }, promise: function (e) {
            return null != e ? E.extend(e, a) : a;
          } },
            s = {};return E.each(o, function (e, t) {
          var n = t[2],
              r = t[5];a[t[1]] = n.add, r && n.add(function () {
            i = r;
          }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
            return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
          }, s[t[0] + "With"] = n.fireWith;
        }), a.promise(s), e && e.call(s, s), s;
      }, when: function (e) {
        var n = arguments.length,
            t = n,
            r = Array(t),
            i = s.call(arguments),
            o = E.Deferred(),
            a = function (t) {
          return function (e) {
            r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
          };
        };if (n <= 1 && (B(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || b(i[t] && i[t].then))) return o.then();while (t--) B(i[t], a(t), o.reject);return o.promise();
      } });var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook = function (e, t) {
      g.console && g.console.warn && e && M.test(e.name) && g.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, E.readyException = function (e) {
      g.setTimeout(function () {
        throw e;
      });
    };var W = E.Deferred();function F() {
      w.removeEventListener("DOMContentLoaded", F), g.removeEventListener("load", F), E.ready();
    }E.fn.ready = function (e) {
      return W.then(e)["catch"](function (e) {
        E.readyException(e);
      }), this;
    }, E.extend({ isReady: !1, readyWait: 1, ready: function (e) {
        (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || W.resolveWith(w, [E]);
      } }), E.ready.then = W.then, "complete" === w.readyState || "loading" !== w.readyState && !w.documentElement.doScroll ? g.setTimeout(E.ready) : (w.addEventListener("DOMContentLoaded", F), g.addEventListener("load", F));var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
          u = e.length,
          l = null == n;if ("object" === T(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, b(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
        return l.call(E(e), n);
      })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
        z = /^-ms-/,
        _ = /-([a-z])/g;function U(e, t) {
      return t.toUpperCase();
    }function V(e) {
      return e.replace(z, "ms-").replace(_, U);
    }var X = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };function Q() {
      this.expando = E.expando + Q.uid++;
    }Q.uid = 1, Q.prototype = { cache: function (e) {
        var t = e[this.expando];return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
      }, set: function (e, t, n) {
        var r,
            i = this.cache(e);if ("string" == typeof t) i[V(t)] = n;else for (r in t) i[V(r)] = t[r];return i;
      }, get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
      }, access: function (e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      }, remove: function (e, t) {
        var n,
            r = e[this.expando];if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(H) || []).length;while (n--) delete r[t[n]];
          }(void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      }, hasData: function (e) {
        var t = e[this.expando];return void 0 !== t && !E.isEmptyObject(t);
      } };var Y = new Q(),
        G = new Q(),
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;function Z(e, t, n) {
      var r, i;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
        try {
          n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i);
        } catch (e) {}G.set(e, t, n);
      } else n = void 0;return n;
    }E.extend({ hasData: function (e) {
        return G.hasData(e) || Y.hasData(e);
      }, data: function (e, t, n) {
        return G.access(e, t, n);
      }, removeData: function (e, t) {
        G.remove(e, t);
      }, _data: function (e, t, n) {
        return Y.access(e, t, n);
      }, _removeData: function (e, t) {
        Y.remove(e, t);
      } }), E.fn.extend({ data: function (n, e) {
        var t,
            r,
            i,
            o = this[0],
            a = o && o.attributes;if (void 0 === n) {
          if (this.length && (i = G.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
            t = a.length;while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), Z(o, r, i[r]));Y.set(o, "hasDataAttrs", !0);
          }return i;
        }return "object" == typeof n ? this.each(function () {
          G.set(this, n);
        }) : $(this, function (e) {
          var t;if (o && void 0 === e) return void 0 !== (t = G.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;this.each(function () {
            G.set(this, n, e);
          });
        }, null, e, 1 < arguments.length, null, !0);
      }, removeData: function (e) {
        return this.each(function () {
          G.remove(this, e);
        });
      } }), E.extend({ queue: function (e, t, n) {
        var r;if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, E.makeArray(n)) : r.push(n)), r || [];
      }, dequeue: function (e, t) {
        t = t || "fx";var n = E.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = E._queueHooks(e, t);"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
          E.dequeue(e, t);
        }, o)), !r && o && o.empty.fire();
      }, _queueHooks: function (e, t) {
        var n = t + "queueHooks";return Y.get(e, n) || Y.access(e, n, { empty: E.Callbacks("once memory").add(function () {
            Y.remove(e, [t + "queue", n]);
          }) });
      } }), E.fn.extend({ queue: function (t, n) {
        var e = 2;return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function () {
          var e = E.queue(this, t, n);E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t);
        });
      }, dequeue: function (e) {
        return this.each(function () {
          E.dequeue(this, e);
        });
      }, clearQueue: function (e) {
        return this.queue(e || "fx", []);
      }, promise: function (e, t) {
        var n,
            r = 1,
            i = E.Deferred(),
            o = this,
            a = this.length,
            s = function () {
          --r || i.resolveWith(o, [o]);
        };"string" != typeof e && (t = e, e = void 0), e = e || "fx";while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));return s(), i.promise(t);
      } });var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = w.documentElement,
        ie = function (e) {
      return E.contains(e.ownerDocument, e);
    },
        oe = { composed: !0 };re.getRootNode && (ie = function (e) {
      return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
    });var ae = function (e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === E.css(e, "display");
    };var se = {};function ue(e, t) {
      for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = se[s]) || (o = a.body.appendChild(a.createElement(s)), u = E.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), se[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);return e;
    }E.fn.extend({ show: function () {
        return ue(this, !0);
      }, hide: function () {
        return ue(this);
      }, toggle: function (e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          ae(this) ? E(this).show() : E(this).hide();
        });
      } });var le,
        ce,
        fe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i;le = w.createDocumentFragment().appendChild(w.createElement("div")), (ce = w.createElement("input")).setAttribute("type", "radio"), ce.setAttribute("checked", "checked"), ce.setAttribute("name", "t"), le.appendChild(ce), m.checkClone = le.cloneNode(!0).cloneNode(!0).lastChild.checked, le.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!le.cloneNode(!0).lastChild.defaultValue, le.innerHTML = "<option></option>", m.option = !!le.lastChild;var he = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function ge(e, t) {
      var n;return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? E.merge([e], n) : n;
    }function ve(e, t) {
      for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td, m.option || (he.optgroup = he.option = [1, "<select multiple='multiple'>", "</select>"]);var ye = /<|&#?\w+;/;function me(e, t, n, r, i) {
      for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++) if ((o = e[p]) || 0 === o) if ("object" === T(o)) E.merge(d, o.nodeType ? [o] : o);else if (ye.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = he[s] || he._default, a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0];while (c--) a = a.lastChild;E.merge(d, a.childNodes), (a = f.firstChild).textContent = "";
      } else d.push(t.createTextNode(o));f.textContent = "", p = 0;while (o = d[p++]) if (r && -1 < E.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ge(f.appendChild(o), "script"), l && ve(a), n) {
        c = 0;while (o = a[c++]) pe.test(o.type || "") && n.push(o);
      }return f;
    }var be = /^key/,
        xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        we = /^([^.]*)(?:\.(.+)|)/;function Ce() {
      return !0;
    }function Te() {
      return !1;
    }function Ee(e, t) {
      return e === function () {
        try {
          return w.activeElement;
        } catch (e) {}
      }() == ("focus" === t);
    }function Ae(e, t, n, r, i, o) {
      var a, s;if ("object" == typeof t) {
        for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o);return e;
      }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;else if (!i) return e;return 1 === o && (a = i, (i = function (e) {
        return E().off(e), a.apply(this, arguments);
      }).guid = a.guid || (a.guid = E.guid++)), e.each(function () {
        E.event.add(this, t, i, r, n);
      });
    }function Ne(e, i, o) {
      o ? (Y.set(e, i, !1), E.event.add(e, i, { namespace: !1, handler: function (e) {
          var t,
              n,
              r = Y.get(this, i);if (1 & e.isTrigger && this[i]) {
            if (r.length) (E.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
          } else r.length && (Y.set(this, i, { value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
        } })) : void 0 === Y.get(e, i) && E.event.add(e, i, Ce);
    }E.event = { global: {}, add: function (t, e, n, r, i) {
        var o,
            a,
            s,
            u,
            l,
            c,
            f,
            d,
            p,
            h,
            g,
            v = Y.get(t);if (X(t)) {
          n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(re, i), n.guid || (n.guid = E.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
            return "undefined" != typeof E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0;
          }), l = (e = (e || "").match(H) || [""]).length;while (l--) p = g = (s = we.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = E.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = E.event.special[p] || {}, c = E.extend({ type: p, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && E.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(p, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), E.event.global[p] = !0);
        }
      }, remove: function (e, t, n, r, i) {
        var o,
            a,
            s,
            u,
            l,
            c,
            f,
            d,
            p,
            h,
            g,
            v = Y.hasData(e) && Y.get(e);if (v && (u = v.events)) {
          l = (t = (t || "").match(H) || [""]).length;while (l--) if (p = g = (s = we.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
            f = E.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length;while (o--) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, p, v.handle), delete u[p]);
          } else for (p in u) E.event.remove(e, p + t[l], n, r, !0);E.isEmptyObject(u) && Y.remove(e, "handle events");
        }
      }, dispatch: function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s = new Array(arguments.length),
            u = E.event.fix(e),
            l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
            c = E.event.special[u.type] || {};for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
          a = E.event.handlers.call(this, u, l), t = 0;while ((i = a[t++]) && !u.isPropagationStopped()) {
            u.currentTarget = i.elem, n = 0;while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
          }return c.postDispatch && c.postDispatch.call(this, u), u.result;
        }
      }, handlers: function (e, t) {
        var n,
            r,
            i,
            o,
            a,
            s = [],
            u = t.delegateCount,
            l = e.target;if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length), a[i] && o.push(r);o.length && s.push({ elem: l, handlers: o });
        }return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
      }, addProp: function (t, e) {
        Object.defineProperty(E.Event.prototype, t, { enumerable: !0, configurable: !0, get: b(e) ? function () {
            if (this.originalEvent) return e(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[t];
          }, set: function (e) {
            Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
          } });
      }, fix: function (e) {
        return e[E.expando] ? e : new E.Event(e);
      }, special: { load: { noBubble: !0 }, click: { setup: function (e) {
            var t = this || e;return fe.test(t.type) && t.click && S(t, "input") && Ne(t, "click", Ce), !1;
          }, trigger: function (e) {
            var t = this || e;return fe.test(t.type) && t.click && S(t, "input") && Ne(t, "click"), !0;
          }, _default: function (e) {
            var t = e.target;return fe.test(t.type) && t.click && S(t, "input") && Y.get(t, "click") || S(t, "a");
          } }, beforeunload: { postDispatch: function (e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          } } } }, E.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, E.Event = function (e, t) {
      if (!(this instanceof E.Event)) return new E.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0;
    }, E.Event.prototype = { constructor: E.Event, isDefaultPrevented: Te, isPropagationStopped: Te, isImmediatePropagationStopped: Te, isSimulated: !1, preventDefault: function () {
        var e = this.originalEvent;this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
      }, stopPropagation: function () {
        var e = this.originalEvent;this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
      }, stopImmediatePropagation: function () {
        var e = this.originalEvent;this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      } }, E.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (e) {
        var t = e.button;return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
      } }, E.event.addProp), E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      E.event.special[e] = { setup: function () {
          return Ne(this, e, Ee), !1;
        }, trigger: function () {
          return Ne(this, e), !0;
        }, delegateType: t };
    }), E.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) {
      E.event.special[e] = { delegateType: i, bindType: i, handle: function (e) {
          var t,
              n = e.relatedTarget,
              r = e.handleObj;return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
        } };
    }), E.fn.extend({ on: function (e, t, n, r) {
        return Ae(this, e, t, n, r);
      }, one: function (e, t, n, r) {
        return Ae(this, e, t, n, r, 1);
      }, off: function (e, t, n) {
        var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);return this;
        }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
          E.event.remove(this, e, n, t);
        });
      } });var Se = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e, t) {
      return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e;
    }function je(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }function qe(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }function Oe(e, t) {
      var n, r, i, o, a, s;if (1 === t.nodeType) {
        if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);G.hasData(e) && (o = G.access(e), a = E.extend({}, o), G.set(t, a));
      }
    }function Pe(n, r, i, o) {
      r = v(r);var e,
          t,
          a,
          s,
          u,
          l,
          c = 0,
          f = n.length,
          d = f - 1,
          p = r[0],
          h = b(p);if (h || 1 < f && "string" == typeof p && !m.checkClone && ke.test(p)) return n.each(function (e) {
        var t = n.eq(e);h && (r[0] = p.call(this, e, t.html())), Pe(t, r, i, o);
      });if (f && (t = (e = me(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
        for (s = (a = E.map(ge(e, "script"), je)).length; c < f; c++) u = e, c !== d && (u = E.clone(u, !0, !0), s && E.merge(a, ge(u, "script"))), i.call(n[c], u, c);if (s) for (l = a[a.length - 1].ownerDocument, E.map(a, qe), c = 0; c < s; c++) u = a[c], pe.test(u.type || "") && !Y.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : C(u.textContent.replace(De, ""), u, l));
      }return n;
    }function He(e, t, n) {
      for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(ge(r)), r.parentNode && (n && ie(r) && ve(ge(r, "script")), r.parentNode.removeChild(r));return e;
    }E.extend({ htmlPrefilter: function (e) {
        return e;
      }, clone: function (e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c = e.cloneNode(!0),
            f = ie(e);if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (a = ge(c), r = 0, i = (o = ge(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && fe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);if (t) if (n) for (o = o || ge(e), a = a || ge(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);else Oe(e, c);return 0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")), c;
      }, cleanData: function (e) {
        for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++) if (X(n)) {
          if (t = n[Y.expando]) {
            if (t.events) for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);n[Y.expando] = void 0;
          }n[G.expando] && (n[G.expando] = void 0);
        }
      } }), E.fn.extend({ detach: function (e) {
        return He(this, e, !0);
      }, remove: function (e) {
        return He(this, e);
      }, text: function (e) {
        return $(this, function (e) {
          return void 0 === e ? E.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
          });
        }, null, e, arguments.length);
      }, append: function () {
        return Pe(this, arguments, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
        });
      }, prepend: function () {
        return Pe(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Le(this, e);t.insertBefore(e, t.firstChild);
          }
        });
      }, before: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      }, after: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      }, empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ge(e, !1)), e.textContent = "");return this;
      }, clone: function (e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return E.clone(this, e, t);
        });
      }, html: function (e) {
        return $(this, function (e) {
          var t = this[0] || {},
              n = 0,
              r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Se.test(e) && !he[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = E.htmlPrefilter(e);try {
              for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ge(t, !1)), t.innerHTML = e);t = 0;
            } catch (e) {}
          }t && this.empty().append(e);
        }, null, e, arguments.length);
      }, replaceWith: function () {
        var n = [];return Pe(this, arguments, function (e) {
          var t = this.parentNode;E.inArray(this, n) < 0 && (E.cleanData(ge(this)), t && t.replaceChild(e, this));
        }, n);
      } }), E.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) {
      E.fn[e] = function (e) {
        for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), E(r[o])[a](t), u.apply(n, t.get());return this.pushStack(n);
      };
    });var Ie = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function (e) {
      var t = e.ownerDocument.defaultView;return t && t.opener || (t = g), t.getComputedStyle(e);
    },
        Be = function (e, t, n) {
      var r,
          i,
          o = {};for (i in t) o[i] = e.style[i], e.style[i] = t[i];for (i in r = n.call(e), t) e.style[i] = o[i];return r;
    },
        Me = new RegExp(ne.join("|"), "i");function We(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.style;return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = E.style(e, t)), !m.pixelBoxStyles() && Ie.test(a) && Me.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }function Fe(e, t) {
      return { get: function () {
          if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
        } };
    }!function () {
      function e() {
        if (l) {
          u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);var e = g.getComputedStyle(l);n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
        }
      }function t(e) {
        return Math.round(parseFloat(e));
      }var n,
          r,
          i,
          o,
          a,
          s,
          u = w.createElement("div"),
          l = w.createElement("div");l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === l.style.backgroundClip, E.extend(m, { boxSizingReliable: function () {
          return e(), r;
        }, pixelBoxStyles: function () {
          return e(), o;
        }, pixelPosition: function () {
          return e(), n;
        }, reliableMarginLeft: function () {
          return e(), s;
        }, scrollboxSize: function () {
          return e(), i;
        }, reliableTrDimensions: function () {
          var e, t, n, r;return null == a && (e = w.createElement("table"), t = w.createElement("tr"), n = w.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = g.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a;
        } }));
    }();var $e = ["Webkit", "Moz", "ms"],
        ze = w.createElement("div").style,
        _e = {};function Ue(e) {
      var t = E.cssProps[e] || _e[e];return t || (e in ze ? e : _e[e] = function (e) {
        var t = e[0].toUpperCase() + e.slice(1),
            n = $e.length;while (n--) if ((e = $e[n] + t) in ze) return e;
      }(e) || e);
    }var Ve,
        Xe,
        Qe = /^(none|table(?!-c[ea]).+)/,
        Ye = /^--/,
        Ge = { position: "absolute", visibility: "hidden", display: "block" },
        Ke = { letterSpacing: "0", fontWeight: "400" };function Je(e, t, n) {
      var r = te.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }function Ze(e, t, n, r, i, o) {
      var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) "margin" === n && (u += E.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, i))) : (u += E.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += E.css(e, "border" + ne[a] + "Width", !0, i) : s += E.css(e, "border" + ne[a] + "Width", !0, i));return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
    }function et(e, t, n) {
      var r = Re(e),
          i = (!m.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
          o = i,
          a = We(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);if (Ie.test(a)) {
        if (!n) return a;a = "auto";
      }return (!m.boxSizingReliable() && i || !m.reliableTrDimensions() && S(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ze(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
    }E.extend({ cssHooks: { opacity: { get: function (e, t) {
            if (t) {
              var n = We(e, "opacity");return "" === n ? "1" : n;
            }
          } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
              o,
              a,
              s = V(t),
              u = Ye.test(t),
              l = e.style;if (u || (t = Ue(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = function (e, t, n, r) {
            var i,
                o,
                a = 20,
                s = r ? function () {
              return r.cur();
            } : function () {
              return E.css(e, t, "");
            },
                u = s(),
                l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && te.exec(E.css(e, t));if (c && c[3] !== l) {
              u /= 2, l = l || c[3], c = +u || 1;while (a--) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;c *= 2, E.style(e, t, c + l), n = n || [];
            }return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
          }(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
        }
      }, css: function (e, t, n, r) {
        var i,
            o,
            a,
            s = V(t);return Ye.test(t) || (t = Ue(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
      } }), E.each(["height", "width"], function (e, u) {
      E.cssHooks[u] = { get: function (e, t, n) {
          if (t) return !Qe.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, u, n) : Be(e, Ge, function () {
            return et(e, u, n);
          });
        }, set: function (e, t, n) {
          var r,
              i = Re(e),
              o = !m.scrollboxSize() && "absolute" === i.position,
              a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
              s = n ? Ze(e, u, n, a, i) : 0;return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ze(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = E.css(e, u)), Je(0, t, s);
        } };
    }), E.cssHooks.marginLeft = Fe(m.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, { marginLeft: 0 }, function () {
        return e.getBoundingClientRect().left;
      })) + "px";
    }), E.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      E.cssHooks[i + o] = { expand: function (e) {
          for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];return n;
        } }, "margin" !== i && (E.cssHooks[i + o].set = Je);
    }), E.fn.extend({ css: function (e, t) {
        return $(this, function (e, t, n) {
          var r,
              i,
              o = {},
              a = 0;if (Array.isArray(t)) {
            for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);return o;
          }return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
        }, e, t, 1 < arguments.length);
      } }), E.fn.delay = function (r, e) {
      return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
        var n = g.setTimeout(e, r);t.stop = function () {
          g.clearTimeout(n);
        };
      });
    }, Ve = w.createElement("input"), Xe = w.createElement("select").appendChild(w.createElement("option")), Ve.type = "checkbox", m.checkOn = "" !== Ve.value, m.optSelected = Xe.selected, (Ve = w.createElement("input")).value = "t", Ve.type = "radio", m.radioValue = "t" === Ve.value;var tt,
        nt = E.expr.attrHandle;E.fn.extend({ attr: function (e, t) {
        return $(this, E.attr, e, t, 1 < arguments.length);
      }, removeAttr: function (e) {
        return this.each(function () {
          E.removeAttr(this, e);
        });
      } }), E.extend({ attr: function (e, t, n) {
        var r,
            i,
            o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? tt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r);
      }, attrHooks: { type: { set: function (e, t) {
            if (!m.radioValue && "radio" === t && S(e, "input")) {
              var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
            }
          } } }, removeAttr: function (e, t) {
        var n,
            r = 0,
            i = t && t.match(H);if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
      } }), tt = { set: function (e, t, n) {
        return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
      } }, E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = nt[t] || E.find.attr;nt[t] = function (e, t, n) {
        var r,
            i,
            o = t.toLowerCase();return n || (i = nt[o], nt[o] = r, r = null != a(e, t, n) ? o : null, nt[o] = i), r;
      };
    });var rt = /^(?:input|select|textarea|button)$/i,
        it = /^(?:a|area)$/i;function ot(e) {
      return (e.match(H) || []).join(" ");
    }function at(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }function st(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || [];
    }E.fn.extend({ prop: function (e, t) {
        return $(this, E.prop, e, t, 1 < arguments.length);
      }, removeProp: function (e) {
        return this.each(function () {
          delete this[E.propFix[e] || e];
        });
      } }), E.extend({ prop: function (e, t, n) {
        var r,
            i,
            o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
      }, propHooks: { tabIndex: { get: function (e) {
            var t = E.find.attr(e, "tabindex");return t ? parseInt(t, 10) : rt.test(e.nodeName) || it.test(e.nodeName) && e.href ? 0 : -1;
          } } }, propFix: { "for": "htmlFor", "class": "className" } }), m.optSelected || (E.propHooks.selected = { get: function (e) {
        var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
      }, set: function (e) {
        var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      } }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      E.propFix[this.toLowerCase()] = this;
    }), E.fn.extend({ addClass: function (t) {
        var e,
            n,
            r,
            i,
            o,
            a,
            s,
            u = 0;if (b(t)) return this.each(function (e) {
          E(this).addClass(t.call(this, e, at(this)));
        });if ((e = st(t)).length) while (n = this[u++]) if (i = at(n), r = 1 === n.nodeType && " " + ot(i) + " ") {
          a = 0;while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");i !== (s = ot(r)) && n.setAttribute("class", s);
        }return this;
      }, removeClass: function (t) {
        var e,
            n,
            r,
            i,
            o,
            a,
            s,
            u = 0;if (b(t)) return this.each(function (e) {
          E(this).removeClass(t.call(this, e, at(this)));
        });if (!arguments.length) return this.attr("class", "");if ((e = st(t)).length) while (n = this[u++]) if (i = at(n), r = 1 === n.nodeType && " " + ot(i) + " ") {
          a = 0;while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");i !== (s = ot(r)) && n.setAttribute("class", s);
        }return this;
      }, toggleClass: function (i, t) {
        var o = typeof i,
            a = "string" === o || Array.isArray(i);return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : b(i) ? this.each(function (e) {
          E(this).toggleClass(i.call(this, e, at(this), t), t);
        }) : this.each(function () {
          var e, t, n, r;if (a) {
            t = 0, n = E(this), r = st(i);while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          } else void 0 !== i && "boolean" !== o || ((e = at(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
        });
      }, hasClass: function (e) {
        var t,
            n,
            r = 0;t = " " + e + " ";while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + ot(at(n)) + " ").indexOf(t)) return !0;return !1;
      } });var ut = /\r/g;E.fn.extend({ val: function (n) {
        var r,
            e,
            i,
            t = this[0];return arguments.length ? (i = b(n), this.each(function (e) {
          var t;1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function (e) {
            return null == e ? "" : e + "";
          })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
        })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(ut, "") : null == e ? "" : e : void 0;
      } }), E.extend({ valHooks: { option: { get: function (e) {
            var t = E.find.attr(e, "value");return null != t ? t : ot(E.text(e));
          } }, select: { get: function (e) {
            var t,
                n,
                r,
                i = e.options,
                o = e.selectedIndex,
                a = "select-one" === e.type,
                s = a ? null : [],
                u = a ? o + 1 : i.length;for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
              if (t = E(n).val(), a) return t;s.push(t);
            }return s;
          }, set: function (e, t) {
            var n,
                r,
                i = e.options,
                o = E.makeArray(t),
                a = i.length;while (a--) ((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);return n || (e.selectedIndex = -1), o;
          } } } }), E.each(["radio", "checkbox"], function () {
      E.valHooks[this] = { set: function (e, t) {
          if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t);
        } }, m.checkOn || (E.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
    }), m.focusin = "onfocusin" in g;var lt = /^(?:focusinfocus|focusoutblur)$/,
        ct = function (e) {
      e.stopPropagation();
    };E.extend(E.event, { trigger: function (e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            d = [n || w],
            p = y.call(e, "type") ? e.type : e,
            h = y.call(e, "namespace") ? e.namespace.split(".") : [];if (o = f = a = n = n || w, 3 !== n.nodeType && 8 !== n.nodeType && !lt.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, (e = e[E.expando] ? e : new E.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
          if (!r && !c.noBubble && !x(n)) {
            for (s = c.delegateType || p, lt.test(s + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;a === (n.ownerDocument || w) && d.push(a.defaultView || a.parentWindow || g);
          }i = 0;while ((o = d[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || p, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && X(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !X(n) || u && b(n[p]) && !x(n) && ((a = n[u]) && (n[u] = null), E.event.triggered = p, e.isPropagationStopped() && f.addEventListener(p, ct), n[p](), e.isPropagationStopped() && f.removeEventListener(p, ct), E.event.triggered = void 0, a && (n[u] = a)), e.result;
        }
      }, simulate: function (e, t, n) {
        var r = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });E.event.trigger(r, null, t);
      } }), E.fn.extend({ trigger: function (e, t) {
        return this.each(function () {
          E.event.trigger(e, t, this);
        });
      }, triggerHandler: function (e, t) {
        var n = this[0];if (n) return E.event.trigger(e, t, n, !0);
      } }), m.focusin || E.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
      var i = function (e) {
        E.event.simulate(r, e.target, E.event.fix(e));
      };E.event.special[r] = { setup: function () {
          var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
        }, teardown: function () {
          var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
        } };
    }), E.parseXML = function (e) {
      var t;if (!e || "string" != typeof e) return null;try {
        t = new g.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t;
    };var ft,
        dt = /\[\]$/,
        pt = /\r?\n/g,
        ht = /^(?:submit|button|image|reset|file)$/i,
        gt = /^(?:input|select|textarea|keygen)/i;function vt(n, e, r, i) {
      var t;if (Array.isArray(e)) E.each(e, function (e, t) {
        r || dt.test(n) ? i(n, t) : vt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
      });else if (r || "object" !== T(e)) i(n, e);else for (t in e) vt(n + "[" + t + "]", e[t], r, i);
    }E.param = function (e, t) {
      var n,
          r = [],
          i = function (e, t) {
        var n = b(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };if (null == e) return "";if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function () {
        i(this.name, this.value);
      });else for (n in e) vt(n, e[n], t, i);return r.join("&");
    }, E.fn.extend({ serialize: function () {
        return E.param(this.serializeArray());
      }, serializeArray: function () {
        return this.map(function () {
          var e = E.prop(this, "elements");return e ? E.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;return this.name && !E(this).is(":disabled") && gt.test(this.nodeName) && !ht.test(e) && (this.checked || !fe.test(e));
        }).map(function (e, t) {
          var n = E(this).val();return null == n ? null : Array.isArray(n) ? E.map(n, function (e) {
            return { name: t.name, value: e.replace(pt, "\r\n") };
          }) : { name: t.name, value: n.replace(pt, "\r\n") };
        }).get();
      } }), E.fn.extend({ wrapAll: function (e) {
        var t;return this[0] && (b(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          var e = this;while (e.firstElementChild) e = e.firstElementChild;return e;
        }).append(this)), this;
      }, wrapInner: function (n) {
        return b(n) ? this.each(function (e) {
          E(this).wrapInner(n.call(this, e));
        }) : this.each(function () {
          var e = E(this),
              t = e.contents();t.length ? t.wrapAll(n) : e.append(n);
        });
      }, wrap: function (t) {
        var n = b(t);return this.each(function (e) {
          E(this).wrapAll(n ? t.call(this, e) : t);
        });
      }, unwrap: function (e) {
        return this.parent(e).not("body").each(function () {
          E(this).replaceWith(this.childNodes);
        }), this;
      } }), E.expr.pseudos.hidden = function (e) {
      return !E.expr.pseudos.visible(e);
    }, E.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, m.createHTMLDocument = ((ft = w.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === ft.childNodes.length), E.parseHTML = function (e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = w.implementation.createHTMLDocument("")).createElement("base")).href = w.location.href, t.head.appendChild(r)) : t = w), o = !n && [], (i = k.exec(e)) ? [t.createElement(i[1])] : (i = me([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes)));var r, i, o;
    }, E.offset = { setOffset: function (e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l = E.css(e, "position"),
            c = E(e),
            f = {};"static" === l && (e.style.position = "relative"), s = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), b(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
      } }, E.fn.extend({ offset: function (t) {
        if (arguments.length) return void 0 === t ? this : this.each(function (e) {
          E.offset.setOffset(this, t, e);
        });var e,
            n,
            r = this[0];return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0;
      }, position: function () {
        if (this[0]) {
          var e,
              t,
              n,
              r = this[0],
              i = { top: 0, left: 0 };if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();else {
            t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;while (e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position")) e = e.parentNode;e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0));
          }return { top: t.top - i.top - E.css(r, "marginTop", !0), left: t.left - i.left - E.css(r, "marginLeft", !0) };
        }
      }, offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;while (e && "static" === E.css(e, "position")) e = e.offsetParent;return e || re;
        });
      } }), E.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
      var o = "pageYOffset" === i;E.fn[t] = function (e) {
        return $(this, function (e, t, n) {
          var r;if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
        }, t, e, arguments.length);
      };
    }), E.each(["top", "left"], function (e, n) {
      E.cssHooks[n] = Fe(m.pixelPosition, function (e, t) {
        if (t) return t = We(e, n), Ie.test(t) ? E(e).position()[n] + "px" : t;
      });
    }), E.each({ Height: "height", Width: "width" }, function (a, s) {
      E.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) {
        E.fn[o] = function (e, t) {
          var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");return $(this, function (e, t, n) {
            var r;return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i);
          }, s, n ? e : void 0, n);
        };
      });
    }), E.fn.extend({ bind: function (e, t, n) {
        return this.on(e, null, t, n);
      }, unbind: function (e, t) {
        return this.off(e, null, t);
      }, delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      }, undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      }, hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      } }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
      E.fn[n] = function (e, t) {
        return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
      };
    });var yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;E.proxy = function (e, t) {
      var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = s.call(arguments, 2), (i = function () {
        return e.apply(t || this, r.concat(s.call(arguments)));
      }).guid = e.guid = e.guid || E.guid++, i;
    }, E.holdReady = function (e) {
      e ? E.readyWait++ : E.ready(!0);
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = S, E.isFunction = b, E.isWindow = x, E.camelCase = V, E.type = T, E.now = Date.now, E.isNumeric = function (e) {
      var t = E.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, E.trim = function (e) {
      return null == e ? "" : (e + "").replace(yt, "");
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
      return E;
    });var mt = g.jQuery,
        bt = g.$;return E.noConflict = function (e) {
      return g.$ === E && (g.$ = bt), e && g.jQuery === E && (g.jQuery = mt), E;
    }, "undefined" == typeof e && (g.jQuery = g.$ = E), E;
  });
});
define('ember-app/templates/components/ember-popper-targeting-parent', ['exports', 'ember-popper/templates/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('ember-app/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("ember-app/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tpXvi/T6", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"row align-items-center h-100\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col text-center\"],[8],[0,\"\\n      \"],[6,\"h3\"],[8],[0,\"Встречи клуба\"],[9],[0,\"\\n      \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-people desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col text-center\"],[8],[0,\"\\n      \"],[6,\"h3\"],[8],[0,\"Книги\"],[9],[0,\"\\n      \"],[6,\"a\"],[10,\"href\",\"books.html\"],[8],[0,\"\\n        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-book desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col text-center\"],[8],[0,\"\\n      \"],[6,\"h3\"],[8],[0,\"Спикеры\"],[9],[0,\"\\n      \"],[6,\"a\"],[10,\"href\",\"speakers.html\"],[8],[0,\"\\n        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-mic desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n          \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/index.hbs" } });
});


define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ember-app/app")["default"].create({"name":"ember-app","version":"0.0.0"});
}
//# sourceMappingURL=ember-app.map
