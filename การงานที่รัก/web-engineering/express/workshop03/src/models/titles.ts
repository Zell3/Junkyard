import db from "./connection";

export function uploadFile(avt_file: string) {
  return db.query(`INSERT INTO avatar (avt_file, avt_emp_id) VALUES (?, 10001)`, [avt_file]);
}
