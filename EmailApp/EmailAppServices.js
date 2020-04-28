import { StorageServices } from "../services/storageService.js";
import { makeId } from "../services/utilService.js";

const gDefaultEmails = [_creatEmail('Yosi'), _creatEmail()];
var gEmails = null;
const STORAGE_KEY = "emails";
_creatEmails();

export const EmailServices = {
  query,
  save,
  remove,
  getEmailById,
  getShortTxt,
  toggleEmailImportance
};

function query(filerBy) {
  filerBy=filerBy.toLowerCase()
  
  var emails = gEmails;
  if (filerBy) {
    emails = gEmails.filter((email) => {
      return (
        email.sender.toLowerCase().includes(filerBy) ||
        email.subject.toLowerCase().includes(filerBy) ||
        email.body.toLowerCase().includes(filerBy) ||
        email.id.toLowerCase().includes(filerBy)
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
  isRead = true,
  isImportant = true,
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


function save(emailToSave) {
  var savedEmail = emailToSave;
  if (emailToSave.id) {
      const emailIdx = _getIdxById(emailToSave.id)
      gEmails[emailIdx] = emailToSave;
  } else {
    savedEmail = _creatEmail()
      gEmails.push(savedEmail)
  }
  StorageServices.store(STORAGE_KEY, gEmails)
  return Promise.resolve(savedEmail||emailToSave)
}

function getEmailById(id) {
  let email = gEmails.find((email) => email.id === id);
  return Promise.resolve(email);
}

function getShortTxt(str) {
  return str.substr(0, 80);
}

async function toggleEmailImportance(id){
  let email= await getEmailById(id)
  email.isImportant=!email.isImportant
  save(email)
}


function _getIdxById(emailId) {
  return gEmails.findIndex(email => email.id === emailId)
}