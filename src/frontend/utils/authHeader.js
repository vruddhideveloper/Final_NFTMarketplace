import utf8 from 'utf8'
const base64 = require('base-64');

const projectId = "2O2czyNQA2q7dENySsRNVfgc2Q3";
const projectSecretKey = "74369625b5284f6e4d4aea13f9e5e537";
const bytes = utf8.encode(projectId + ":" + projectSecretKey);
const encode = base64.encode(bytes);

const auth = "Basic " + encode;

export {auth}