import { StorageServices } from "./storageService.js";

const gDefaultEmails = [
  _creatEmail('Wasup', 'ThisIsBody'),
  _creatEmail('Wasup', 'ThisIsBody'),
];
var gEmails = null;
const STORAGE_KEY = 'emails';
_creatEmails()

export const EmailServices = {
  query,
  save,
  remove,
  getEmailById,
};

function query() {}

function _creatEmails() {
  gEmails = StorageServices.load(STORAGE_KEY, gDefaultEmails);
  StorageServices.store(STORAGE_KEY, gEmails);
}
function _creatEmail(subject, body, isRead, SentAt) {
  return {
    subject,
    body,
    isRead: false,
    sentAt: Date.now(),
  };
}

function remove(emailId) {
  const EmailIdx = _getIdxById(emailId);
  gEmails.splice(EmailIdx, 1);
  storageService.store(STORAGE_KEY, gEmails);
  return Promise.resolve();
}

function save(emailId) {}

function getEmailById(emailId) {
  const email = gEmails.find((email) => email.id === emailId);
  return Promise.resolve(email);
}
function _getIdxById(emailId) {
  return gEmails.findIndex((email) => email.id === emailId);
}
