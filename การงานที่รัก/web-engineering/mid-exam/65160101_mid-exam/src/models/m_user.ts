import db from './database'

export default class MUser{
    
    static getById(id: number): Promise<any>{
        return new Promise((resolve, reject) => {
            db.get(`SELECT users.id, users.username, users.first_name, users.last_name, users.email, CONCAT('{id: ' , prefix_name.id , ', name: "' , prefix_name.name , '" }') AS prefix
                FROM users JOIN prefix_name ON users.pfn_id = prefix_name.id WHERE users.id = ?`, [id], (err, row) => {
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
            db.all(`SELECT * FROM users`, [], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(row)
                    resolve(row);
                }
            });
        });
    }

    static createUser(username: string, first_name: string, last_name: string, email: string, pfn_id: number): Promise<any>{
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO users (username, first_name, last_name, email, pfn_id) VALUES (?, ?, ?, ?, ?)`,
                 [username, first_name, last_name, email, pfn_id]);
            db.all(`SELECT * FROM users WHERE id = (SELECT MAX(id) FROM users)`, [], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });       
        });
    }
}
