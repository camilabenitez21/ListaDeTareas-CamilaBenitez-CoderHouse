import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('sessions.db');

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, idToken TEXT NOT NULL)',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const dropTableSessions = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DROP TABLE IF EXISTS sessions',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const insertSession = ({ email, localId, idToken }) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO sessions (email, localId, idToken) VALUES (?, ?, ?);',
        [email, localId, idToken],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const getSession = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM sessions',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const deleteSession = localId => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM sessions WHERE localId = ?',
        [localId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};
