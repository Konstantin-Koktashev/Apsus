import { StorageServices } from "../services/storageService.js";
import { makeId } from "../services/utilService.js";

const gDefaultEmails = [_creatEmail(), _creatEmail()];
var gEmails = null;
const STORAGE_KEY = "emails";
_creatEmails();

export const EmailServices = {
  query,
  save,
  remove,
  getEmailById,
  getShortTxt,
};

function query(filerBy) {
  
  var emails = gEmails;
  if (filerBy) {
    emails = gEmails.filter((email) => {
      return (
        email.sender.includes(filerBy) ||
        email.subject.includes(filerBy) ||
        email.body.includes(filerBy) ||
        email.id.includes(filerBy)
      );
    });
  }
  return Promise.resolve(emails);
}

function _creatEmails() {
  gEmails = StorageServices.load(STORAGE_KEY, gDefaultEmails);
  StorageServices.store(STORAGE_KEY, gEmails);
}
function _creatEmail(
  sender = "Kosta",
  subject = "Email Subject",
  body = "EmailBody",
  isRead = false,
  isImportant = false,
  SentAt
) {
  return {
    sender,
    subject,
    body,
    isRead,
    isImportant,
    sentAt: Date.now(),
    id: makeId(),
  };
}

function remove(emailId) {
  const EmailIdx = _getIdxById(emailId);
  gEmails.splice(EmailIdx, 1);
  storageService.store(STORAGE_KEY, gEmails);
  return Promise.resolve();
}

function save(emailId) {}

function getEmailById(id) {
  let email = gEmails.find((email) => email.id === id);
  return Promise.resolve(email);
}

function getShortTxt(str) {
  return str.substr(0, 80);
}
