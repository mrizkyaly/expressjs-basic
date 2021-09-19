const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();
const connection = require('./connection');

router.get('/', function (req, res) {
    res.send('Hello World!');
});

router.get('/users', async (req, res) => {
    try {
        if (connection.connect) {
            const db = connection.db('db_latihan');
            const users = await db.collection('users').find().toArray();
            res.send({ data: users });
        } else {
            res.send({ message: 'koneksi database gagal' });
        }
    } catch (error) {
        res.send({ message: error.message || 'internal server error' });
    }
});

router.post('/users', async (req, res) => {
    try {
        if (connection.connect) {
            const { name, age, status } = req.body;
            const db = connection.db('db_latihan');
            const users = await db.collection('users').insertOne({
                name,
                age,
                status,
            });
            if (users.insertedCount === 1) {
                res.send({ message: 'berhasil ditambahkan' });
            } else {
                res.send({ message: 'gagal menambahkan' });
            }
        } else {
            res.send({ message: 'koneksi database gagal' });
        }
    } catch (error) {
        res.send({ message: error.message || 'internal server error' });
    }
});

router.put('/users/:id', async (req, res) => {
    try {
        if (connection.connect) {
            const { id } = req.params;
            const { name, age, status } = req.body;
            const db = connection.db('db_latihan');
            const users = await db.collection('users').updateOne(
                { _id: ObjectId(id) },
                {
                    $set: { name, age, status },
                }
            );
            if (users.modifiedCount === 1) {
                res.send({ message: 'berhasil diubah' });
            } else {
                res.send({ message: 'gagal mengubah' });
            }
        } else {
            res.send({ message: 'koneksi database gagal' });
        }
    } catch (error) {
        res.send({ message: error.message || 'internal server error' });
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        if (connection.connect) {
            const { id } = req.params;
            const { name, age, status } = req.body;
            const db = connection.db('db_latihan');
            const users = await db
                .collection('users')
                .deleteOne({ _id: ObjectId(id) });
            if (users.deletedCount === 1) {
                res.send({ message: 'berhasil dihapus' });
            } else {
                res.send({ message: 'gagal menghapus' });
            }
        } else {
            res.send({ message: 'koneksi database gagal' });
        }
    } catch (error) {
        res.send({ message: error.message || 'internal server error' });
    }
});

module.exports = router;
