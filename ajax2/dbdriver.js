const mysql = require('mysql');

class DbDriver {
  constructor(conn) {
    if (conn === null) {
      throw new Error('Connection is null');
    }
    this.cn = conn;
  }

  query(sql) {
    return new Promise((resolve, reject) => {
      this.cn.query(sql, (error, results) => {
        if (error) reject(error);
        resolve(results[0]);
      });
    });
  }

  select(tab, colm) {
    let list = '*';
    let res = [];

    if (Array.isArray(colm)) {
      list = colm.join(', ');
    } else {
      list = colm;
    }

    const sql = `SELECT ${list} FROM ${tab}`;

    return new Promise((resolve, reject) => {
      this.cn.query(sql, (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  }

  insertRow(arr) {
    if (!Array.isArray(arr)) return -1;

    const values = ['null', ...arr.map(value => `'${value}'`)].join(',');
    const sql = `INSERT INTO drinks VALUES (${values})`;

    return new Promise((resolve, reject) => {
      this.cn.query(sql, (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  }

  selectQ(sql) {
    return new Promise((resolve, reject) => {
      this.cn.query(sql, (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  }
}

module.exports = DbDriver;

