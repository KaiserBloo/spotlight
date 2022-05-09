'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const SPOTLIGHT_EVENTS = {
  open: "mantine:open-spotlight",
  close: "mantine:close-spotlight",
  toggle: "mantine:toggle-spotlight",
  triggerAction: "mantine:trigger-spotlight-action",
  registerActions: "mantine:register-spotlight-actions",
  removeActions: "mantine:remove-spotlight-actions"
};
function createEvent(type, detail) {
  return new CustomEvent(type, { detail });
}
function openSpotlight() {
  window.dispatchEvent(createEvent(SPOTLIGHT_EVENTS.open));
}
function closeSpotlight() {
  window.dispatchEvent(createEvent(SPOTLIGHT_EVENTS.close));
}
function toggleSpotlight() {
  window.dispatchEvent(createEvent(SPOTLIGHT_EVENTS.toggle));
}
function triggerSpotlightAction(actionId) {
  window.dispatchEvent(createEvent(SPOTLIGHT_EVENTS.triggerAction, actionId));
}
function registerSpotlightActions(actions) {
  window.dispatchEvent(createEvent(SPOTLIGHT_EVENTS.registerActions, actions));
}
function removeSpotlightActions(actionsIds) {
  window.dispatchEvent(createEvent(SPOTLIGHT_EVENTS.removeActions, actionsIds));
}
function removeAllSpotlightActions() {
  window.dispatchEvent(createEvent(SPOTLIGHT_EVENTS.removeActions));
}
function useSpotlightEvents(ctx) {
  const events = {
    registerActions: (event) => ctx.registerActions(event.detail),
    removeActions: (event) => ctx.removeActions(event.detail),
    triggerAction: (event) => ctx.triggerAction(event.detail),
    open: ctx.openSpotlight,
    close: ctx.closeSpotlight,
    toggle: ctx.toggleSpotlight
  };
  React.useEffect(() => {
    Object.keys(events).forEach((event) => {
      window.addEventListener(SPOTLIGHT_EVENTS[event], events[event]);
    });
    return () => {
      Object.keys(events).forEach((event) => {
        window.removeEventListener(SPOTLIGHT_EVENTS[event], events[event]);
      });
    };
  }, []);
}

exports.SPOTLIGHT_EVENTS = SPOTLIGHT_EVENTS;
exports.closeSpotlight = closeSpotlight;
exports.openSpotlight = openSpotlight;
exports.registerSpotlightActions = registerSpotlightActions;
exports.removeAllSpotlightActions = removeAllSpotlightActions;
exports.removeSpotlightActions = removeSpotlightActions;
exports.toggleSpotlight = toggleSpotlight;
exports.triggerSpotlightAction = triggerSpotlightAction;
exports.useSpotlightEvents = useSpotlightEvents;
//# sourceMappingURL=events.js.map
