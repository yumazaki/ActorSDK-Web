'use strict';

exports.__esModule = true;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (C) 2015 Actor LLC. <https://actor.im>
 */

var ActorClient = function () {
  function ActorClient() {
    (0, _classCallCheck3.default)(this, ActorClient);
  }

  ActorClient.prototype.requestSms = function requestSms(phone) {
    return new _promise2.default(function (resolve, reject) {
      window.messenger.requestSms(phone.trim(), resolve, reject);
    });
  };

  ActorClient.prototype.requestCodeEmail = function requestCodeEmail(email) {
    return new _promise2.default(function (resolve, reject) {
      window.messenger.requestCodeEmail(email.trim(), resolve, reject);
    });
  };

  ActorClient.prototype.sendCode = function sendCode(code) {
    return new _promise2.default(function (resolve, reject) {
      window.messenger.sendCode(code, resolve, reject);
    });
  };

  ActorClient.prototype.signUp = function signUp(name) {
    return new _promise2.default(function (resolve, reject) {
      window.messenger.signUp(name, resolve, reject);
    });
  };

  ActorClient.prototype.isLoggedIn = function isLoggedIn() {
    return window.messenger.isLoggedIn();
  };

  // Bindings

  ActorClient.prototype.bindDialogs = function bindDialogs(callback) {
    window.messenger.bindDialogs(callback);
  };

  ActorClient.prototype.unbindDialogs = function unbindDialogs(callback) {
    window.messenger.unbindDialogs(callback);
  };

  ActorClient.prototype.bindGroupDialogs = function bindGroupDialogs(callback) {
    window.messenger.bindGroupDialogs(callback);
  };

  ActorClient.prototype.unbindGroupDialogs = function unbindGroupDialogs(callback) {
    window.messenger.unbindGroupDialogs(callback);
  };

  ActorClient.prototype.bindChat = function bindChat(peer, callback) {
    window.messenger.bindChat(peer, callback);
  };

  ActorClient.prototype.unbindChat = function unbindChat(peer, callback) {
    window.messenger.unbindChat(peer, callback);
  };

  ActorClient.prototype.bindGroup = function bindGroup(gid, callback) {
    window.messenger.bindGroup(gid, callback);
  };

  ActorClient.prototype.unbindGroup = function unbindGroup(gid, callback) {
    window.messenger.unbindGroup(gid, callback);
  };

  ActorClient.prototype.bindUser = function bindUser(uid, callback) {
    window.messenger.bindUser(uid, callback);
  };

  ActorClient.prototype.unbindUser = function unbindUser(uid, callback) {
    window.messenger.unbindUser(uid, callback);
  };

  ActorClient.prototype.bindTyping = function bindTyping(peer, callback) {
    window.messenger.bindTyping(peer, callback);
  };

  ActorClient.prototype.unbindTyping = function unbindTyping(peer, callback) {
    window.messenger.unbindTyping(peer, callback);
  };

  ActorClient.prototype.bindContacts = function bindContacts(peer, callback) {
    window.messenger.bindContacts(peer, callback);
  };

  ActorClient.prototype.unbindContacts = function unbindContacts(peer, callback) {
    window.messenger.unbindContacts(peer, callback);
  };

  ActorClient.prototype.bindConnectState = function bindConnectState(callback) {
    window.messenger.bindConnectState(callback);
  };

  ActorClient.prototype.unbindConnectState = function unbindConnectState(callback) {
    window.messenger.unbindConnectState(callback);
  };

  ActorClient.prototype.bindGlobalCounter = function bindGlobalCounter(callback) {
    window.messenger.bindGlobalCounter(callback);
  };

  ActorClient.prototype.unbindGlobalCounter = function unbindGlobalCounter(callback) {
    window.messenger.unbindGlobalCounter(callback);
  };

  ActorClient.prototype.bindTempGlobalCounter = function bindTempGlobalCounter(callback) {
    window.messenger.bindTempGlobalCounter(callback);
  };

  ActorClient.prototype.unbindTempGlobalCounter = function unbindTempGlobalCounter(callback) {
    window.messenger.unbindTempGlobalCounter(callback);
  };

  ActorClient.prototype.bindUserOnline = function bindUserOnline(uid, callback) {
    window.messenger.bindUserOnline(uid, callback);
  };

  ActorClient.prototype.unbindUserOnline = function unbindUserOnline(uid, callback) {
    window.messenger.unbindUserOnline(uid, callback);
  };

  ActorClient.prototype.bindGroupOnline = function bindGroupOnline(gid, callback) {
    window.messenger.bindGroupOnline(gid, callback);
  };

  ActorClient.prototype.unbindGroupOnline = function unbindGroupOnline(gid, callback) {
    window.messenger.unbindGroupOnline(gid, callback);
  };

  ActorClient.prototype.bindMessages = function bindMessages(peer, callback) {
    return window.messenger.bindMessages(peer, callback);
  };

  ActorClient.prototype.bindEventBus = function bindEventBus(callback) {
    window.messenger.bindEventBus(callback);
  };

  ActorClient.prototype.unbindEventBus = function unbindEventBus(callback) {
    window.messenger.unbindEventBus(callback);
  };

  ActorClient.prototype.bindCall = function bindCall(callId, callback) {
    window.messenger.bindCall(callId, callback);
  };

  ActorClient.prototype.unbindCall = function unbindCall(callId, callback) {
    window.messenger.unbindCall(callId, callback);
  };

  ActorClient.prototype.makeCall = function makeCall(userId) {
    return window.messenger.doCall(userId);
  };

  ActorClient.prototype.makeGroupCall = function makeGroupCall(groupId) {
    return window.messenger.doGroupCall(groupId);
  };

  ActorClient.prototype.answerCall = function answerCall(callId) {
    window.messenger.answerCall(callId);
  };

  ActorClient.prototype.endCall = function endCall(callId) {
    window.messenger.endCall(callId);
  };

  ActorClient.prototype.toggleCallMute = function toggleCallMute(callId) {
    window.messenger.toggleCallMute(callId);
  };

  ActorClient.prototype.toggleCallMute = function toggleCallMute(id) {
    window.messenger.toggleCallMute(id);
  };

  ActorClient.prototype.getUser = function getUser(uid) {
    return window.messenger.getUser(uid);
  };

  ActorClient.prototype.getUid = function getUid() {
    return window.messenger.getUid();
  };

  ActorClient.prototype.getGroup = function getGroup(gid) {
    return window.messenger.getGroup(gid);
  };

  ActorClient.prototype.getInviteUrl = function getInviteUrl(gid) {
    return window.messenger.getInviteLink(gid);
  };

  ActorClient.prototype.sendTextMessage = function sendTextMessage(peer, text) {
    window.messenger.sendMessage(peer, text);
  };

  ActorClient.prototype.sendFileMessage = function sendFileMessage(peer, file) {
    window.messenger.sendFile(peer, file);
  };

  ActorClient.prototype.sendPhotoMessage = function sendPhotoMessage(peer, photo) {
    window.messenger.sendPhoto(peer, photo);
  };

  ActorClient.prototype.sendClipboardPhotoMessage = function sendClipboardPhotoMessage(peer, photo) {
    window.messenger.sendClipboardPhoto(peer, photo);
  };

  ActorClient.prototype.onMessageShown = function onMessageShown(peer, message) {
    window.messenger.onMessageShown(peer, message);
  };

  ActorClient.prototype.onChatEnd = function onChatEnd(peer) {
    window.messenger.onChatEnd(peer);
  };

  ActorClient.prototype.onDialogsEnd = function onDialogsEnd() {
    window.messenger.onDialogsEnd();
  };

  ActorClient.prototype.onConversationOpen = function onConversationOpen(peer) {
    window.messenger.onConversationOpen(peer);
  };

  ActorClient.prototype.onConversationClosed = function onConversationClosed(peer) {
    window.messenger.onConversationClosed(peer);
  };

  ActorClient.prototype.onTyping = function onTyping(peer) {
    window.messenger.onTyping(peer);
  };

  ActorClient.prototype.onAppHidden = function onAppHidden() {
    window.messenger.onAppHidden();
  };

  ActorClient.prototype.onAppVisible = function onAppVisible() {
    window.messenger.onAppVisible();
  };

  ActorClient.prototype.editMyName = function editMyName(string) {
    window.messenger.editMyName(string);
  };

  ActorClient.prototype.addContact = function addContact(uid) {
    window.messenger.addContact(uid);
  };

  ActorClient.prototype.removeContact = function removeContact(uid) {
    window.messenger.removeContact(uid);
  };

  // Groups

  ActorClient.prototype.joinGroupViaLink = function joinGroupViaLink(url) {
    return window.messenger.joinGroupViaLink(url);
  };

  ActorClient.prototype.leaveGroup = function leaveGroup(gid) {
    return window.messenger.leaveGroup(gid);
  };

  ActorClient.prototype.createGroup = function createGroup(title, avatar, userIds) {
    return window.messenger.createGroup(title, avatar, userIds);
  };

  ActorClient.prototype.kickMember = function kickMember(gid, uid) {
    return window.messenger.kickMember(gid, uid);
  };

  ActorClient.prototype.inviteMember = function inviteMember(gid, uid) {
    return window.messenger.inviteMember(gid, uid);
  };

  ActorClient.prototype.getIntegrationToken = function getIntegrationToken(gid) {
    return window.messenger.getIntegrationToken(gid);
  };

  ActorClient.prototype.loadDraft = function loadDraft(peer) {
    return window.messenger.loadDraft(peer);
  };

  ActorClient.prototype.saveDraft = function saveDraft(peer, draft) {
    if (draft !== null) {
      window.messenger.saveDraft(peer, draft);
    }
  };

  ActorClient.prototype.getUserPeer = function getUserPeer(uid) {
    return window.messenger.getUserPeer(uid);
  };

  ActorClient.prototype.getGroupPeer = function getGroupPeer(gid) {
    return window.messenger.getGroupPeer(gid);
  };

  ActorClient.prototype.hideChat = function hideChat(peer) {
    return window.messenger.hideChat(peer);
  };

  // Mentions

  ActorClient.prototype.findMentions = function findMentions(gid) {
    var query = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

    return window.messenger.findMentions(gid, query);
  };

  // Nickname

  ActorClient.prototype.editMyNick = function editMyNick(string) {
    window.messenger.editMyNick(string);
  };

  ActorClient.prototype.deleteChat = function deleteChat(peer) {
    return window.messenger.deleteChat(peer);
  };

  ActorClient.prototype.clearChat = function clearChat(peer) {
    return window.messenger.clearChat(peer);
  };

  ActorClient.prototype.editMyAbout = function editMyAbout(about) {
    return window.messenger.editMyAbout(about);
  };

  ActorClient.prototype.editGroupTitle = function editGroupTitle(gid, title) {
    return window.messenger.editGroupTitle(gid, title);
  };

  ActorClient.prototype.editGroupAbout = function editGroupAbout(gid, about) {
    return window.messenger.editGroupAbout(gid, about);
  };

  ActorClient.prototype.renderMarkdown = function renderMarkdown(markdownText) {
    return window.messenger.renderMarkdown(markdownText);
  };

  // Settings

  ActorClient.prototype.changeNotificationsEnabled = function changeNotificationsEnabled(peer, isEnabled) {
    window.messenger.changeNotificationsEnabled(peer, isEnabled);
  };

  ActorClient.prototype.isNotificationsEnabled = function isNotificationsEnabled(peer) {
    return window.messenger.isNotificationsEnabled(peer);
  };

  ActorClient.prototype.isSendByEnterEnabled = function isSendByEnterEnabled() {
    return window.messenger.isSendByEnterEnabled();
  };

  ActorClient.prototype.changeSendByEnter = function changeSendByEnter(isEnabled) {
    window.messenger.changeSendByEnter(isEnabled);
  };

  ActorClient.prototype.isGroupsNotificationsEnabled = function isGroupsNotificationsEnabled() {
    return window.messenger.isGroupsNotificationsEnabled();
  };

  ActorClient.prototype.changeGroupNotificationsEnabled = function changeGroupNotificationsEnabled(isEnabled) {
    window.messenger.changeGroupNotificationsEnabled(isEnabled);
  };

  ActorClient.prototype.isOnlyMentionNotifications = function isOnlyMentionNotifications() {
    return window.messenger.isOnlyMentionNotifications();
  };

  ActorClient.prototype.changeIsOnlyMentionNotifications = function changeIsOnlyMentionNotifications(isEnabled) {
    window.messenger.changeIsOnlyMentionNotifications(isEnabled);
  };

  ActorClient.prototype.isSoundEffectsEnabled = function isSoundEffectsEnabled() {
    return window.messenger.isSoundEffectsEnabled();
  };

  ActorClient.prototype.changeSoundEffectsEnabled = function changeSoundEffectsEnabled(isEnabled) {
    window.messenger.changeSoundEffectsEnabled(isEnabled);
  };

  ActorClient.prototype.isShowNotificationsTextEnabled = function isShowNotificationsTextEnabled() {
    return window.messenger.isShowNotificationsTextEnabled();
  };

  ActorClient.prototype.changeIsShowNotificationTextEnabled = function changeIsShowNotificationTextEnabled(isEnabled) {
    window.messenger.changeIsShowNotificationTextEnabled(isEnabled);
  };

  ActorClient.prototype.loadSessions = function loadSessions() {
    return window.messenger.loadSessions();
  };

  ActorClient.prototype.terminateSession = function terminateSession(id) {
    return window.messenger.terminateSession(id);
  };

  ActorClient.prototype.terminateAllSessions = function terminateAllSessions() {
    return window.messenger.terminateAllSessions();
  };

  ActorClient.prototype.changeMyAvatar = function changeMyAvatar(avatar) {
    window.messenger.changeMyAvatar(avatar);
  };

  ActorClient.prototype.changeGroupAvatar = function changeGroupAvatar(gid, avatar) {
    window.messenger.changeGroupAvatar(gid, avatar);
  };

  ActorClient.prototype.removeMyAvatar = function removeMyAvatar() {
    window.messenger.removeMyAvatar();
  };

  ActorClient.prototype.removeGroupAvatar = function removeGroupAvatar(gid) {
    window.messenger.removeGroupAvatar(gid);
  };

  // Search

  ActorClient.prototype.findGroups = function findGroups(query) {
    return window.messenger.findGroups(query);
  };

  ActorClient.prototype.findUsers = function findUsers(phone) {
    return window.messenger.findUsers(phone.toString());
  };

  // Messages

  ActorClient.prototype.deleteMessage = function deleteMessage(peer, rid) {
    return window.messenger.deleteMessage(peer, rid);
  };

  ActorClient.prototype.addLike = function addLike(peer, rid) {
    return window.messenger.addLike(peer, rid);
  };

  ActorClient.prototype.removeLike = function removeLike(peer, rid) {
    return window.messenger.removeLike(peer, rid);
  };

  ActorClient.prototype.sendVoiceMessage = function sendVoiceMessage(peer, duration, voice) {
    window.messenger.sendVoiceMessage(peer, duration, voice);
  };

  // Search

  ActorClient.prototype.bindSearch = function bindSearch(callback) {
    window.messenger.bindSearch(callback);
  };

  ActorClient.prototype.unbindSearch = function unbindSearch(callback) {
    window.messenger.unbindSearch(callback);
  };

  ActorClient.prototype.findAllText = function findAllText(peer, query) {
    return window.messenger.findAllText(peer, query);
  };

  ActorClient.prototype.findAllDocs = function findAllDocs(peer) {
    return window.messenger.findAllDocs(peer);
  };

  ActorClient.prototype.findAllLinks = function findAllLinks(peer) {
    return window.messenger.findAllLinks(peer);
  };

  ActorClient.prototype.findAllPhotos = function findAllPhotos(peer) {
    return window.messenger.findAllPhotos(peer);
  };

  ActorClient.prototype.handleLinkClick = function handleLinkClick(event) {
    messenger.handleLinkClick(event);
  };

  ActorClient.prototype.isElectron = function isElectron() {
    return window.messenger.isElectron();
  };

  ActorClient.prototype.favoriteChat = function favoriteChat(peer) {
    return window.messenger.favoriteChat(peer);
  };

  ActorClient.prototype.unfavoriteChat = function unfavoriteChat(peer) {
    return window.messenger.unfavoriteChat(peer);
  };

  ActorClient.prototype.archiveChat = function archiveChat(peer) {
    return window.messenger.archiveChat(peer);
  };

  ActorClient.prototype.loadArchivedDialogs = function loadArchivedDialogs() {
    return window.messenger.loadArchivedDialogs();
  };

  ActorClient.prototype.loadMoreArchivedDialogs = function loadMoreArchivedDialogs() {
    return window.messenger.loadMoreArchivedDialogs();
  };

  return ActorClient;
}();

exports.default = new ActorClient();
//# sourceMappingURL=ActorClient.js.map