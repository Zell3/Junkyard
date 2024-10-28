import db from './database'

export default class MPrefixName{
    
    static getById(id: number): Promise<any>{
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM prefix_name WHERE id = ?`, [id], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }

    // TODO
    static getAll(): Promise<any>{
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM prefix_name`, [], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(row)
                    resolve(row);
                }
            });
        });
    }

    static createPrefix(name: string): Promise<any>{
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO prefix_name (name) VALUES (?)`, [name]);
            db.all(`SELECT * FROM prefix_name WHERE id = (SELECT MAX(id) FROM prefix_name)`, [], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });       
        });
    }

    static updatePrefix(id: number, name: string): Promise<any>{
        return new Promise((resolve, reject) => {
            db.run(`UPDATE prefix_name SET name = ? WHERE id = ?`, [name, id])
            db.get(`SELECT * FROM prefix_name WHERE id = ?`, [id], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }

    static removePrefix(id: number): Promise<any>{
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM prefix_name WHERE id = ?`, [id], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`id ${id} had been deleted`);
                }
            });
        });
    }
}

