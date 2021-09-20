const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_latihan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('berhasil konek ke server');

    // create data with validation
    // const user = await User.create({
    //     name: 'anjas',
    //     age: 12,
    // });
    // console.log(user);
    // view data
    // const users = await User.find();
    // console.log(users);
    // insert data
    // const newUser = new User();
    // newUser.name = 'ali';
    // newUser.age = 21;
    // newUser.status = 'active';
    // const insert = await newUser.save();
    // console.log(insert);
    // update data
    // const updateUser = await User.findById('614812a7e75f752e64e97a1d');
    // updateUser.name = 'budi';
    // const update = await updateUser.save();
    // console.log(updateUser);
    // delete data
    // const deleteUser = await User.deleteOne({
    //     _id: '614812a7e75f752e64e97a1d',
    // });
    // console.log(deleteUser);
});
