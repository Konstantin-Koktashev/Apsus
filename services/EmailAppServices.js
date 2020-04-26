const gDefaultEmails = [
  _creatEmail('Wasup', 'ThisIsBody'),
  _creatEmail('Wasup', 'ThisIsBody'),
];
var gEmails = null;
const STORAGE_KEY = 'emails';

export const EmailServices = {
  query,
  save,
  remove,
  getEmailById,
};

function query() {}

function _creatEmails() {
  gEmails = storageService.load(STORAGE_KEY, gDefaultCars);
  storageService.store(STORAGE_KEY, gCars);
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
