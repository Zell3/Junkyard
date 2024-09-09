import db from "./connection";

export function getAllTitles() {
  return db.query(`SELECT * FROM titles`);
}

export function getTitleById(tit_id: number) {
  return db.query(`SELECT * FROM titles WHERE tit_id = ?`, [tit_id]);
}

export function createTitle(tit_name: string, tit_is_active: number) {
  return db.query(`INSERT INTO titles (tit_name, tit_is_active) VALUES (?, ?)`, [tit_name, tit_is_active]);
}

export function updateTitle(tit_id: number, tit_name: string, tit_is_active: number) {
  return db.query(`UPDATE titles SET tit_name = ?, tit_is_active = ? WHERE tit_id = ?`, [tit_name, tit_is_active, tit_id]);
}

export function deleteTitle(tit_id: number) {
  return db.query(`DELETE FROM titles WHERE tit_id = ?`, [tit_id]);
}