import PouchDB from './pouchdb'

export const nameIndex = {UPDATED_AT: 'index-updated_at'}

const myIP = "192.168.1.5" // ganti

export const remoteNoteDb = new PouchDB(`http://duytq:123456@${myIP}:5984/note`) // ganti
export const localNoteDb = new PouchDB('note', {adapter: 'react-native-sqlite'})