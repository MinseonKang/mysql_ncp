const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
});

exports.signupPost = (data, callback) => {
  conn.query(
    `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("User.js: ", rows);
      callback(rows.insertId); // pk (id)
    }
  );
};

exports.signinPost = (data, callback) => {
  conn.query(
    `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' LIMIT 1`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("User.js: ", rows);
      callback(rows);
    }
  );
};

exports.profile = (userid, callback) => {
  const sql = `SELECT * FROM user WHERE userid='${userid}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    callback(rows);
  });
};

exports.profileEdit = (data, callback) => {
  const sql = `UPDATE user SET userid='${data.userid}', name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
  conn.query(sql, (err) => {
    if (err) {
      throw err;
    }
    callback();
  });
};

exports.profileDelete = (id, callback) => {
  conn.query(`DELETE FROM user WHERE id='${id}'`, (err) => {
    if (err) {
      throw err;
    }
    callback();
  });
};
