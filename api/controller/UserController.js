import { db } from '../db.js';

export const createUser = (req, res) => {
    const query = 'insert into usuario(nome, email, fone, data_nasc) values(?)';

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nasc
    ];

    db.query(query, [values], (err) => {
        if (err) {
            return res.json(err);
        }

        return res.status(200).json('Usuario criado com sucesso.');
    })
}

export const getUsers = (_, res) => {
    const query = 'select * from usuario';

    db.query(query, (error, data) => {

        if (error) {
            return res.json(error);
        }

        return res.status(200).json(data);
    });
}

export const getUser = (req, res) => {
    const query = 'select * from usuario where id = ?'

    db.query(query, [req.params.id], (err, data) => {
        if (err) {
            return res.json(err)
        }

        return res.status(200).json(data)
    })
}

export const updateUser = (req, res) => {
    const query = 'update usuario set nome = ?, email = ?, fone = ?, data_nasc = ? where id = ?';

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nasc
    ];

    db.query(query, [...values, req.params.id], (err) => {
        if (err) {
            return res.json(err);
        }

        return res.status(200).json('Usuario atualizado com sucesso.');
    })
}

export const deleteUser = (req, res) => {
    const query = 'delete from usuario where id = ?';

    db.query(query, [req.params.id], (err) => {
        if (err) {
            return res.json(err)
        }

        return res.status(200).json('Usuario deletado com sucesso.')
    });
}