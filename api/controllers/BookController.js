module.exports = {
    Createnewuser: async (req, res) => {

        let requestData = req.body;
        fetchdata = await Book.find({ email: requestData.email })
        if (!requestData.first_name || !requestData.email || !requestData.last_name || !requestData.phonenumber) {
            return res.send({
                msg: 'customer not created successfully',
            })
        }

        if (fetchdata.length > 0) {
            return res.send({
                msg: 'email already exist',
            })
        }

        let resData = await Book.create({
            first_name: requestData.first_name,
            last_name: requestData.last_name,
            email: requestData.email,
            phonenumber: requestData.phonenumber
        }).fetch();
        return res.send({
            msg: 'Customer created successfully',
            responseCode: 201,
            data: resData
        });
    },

    Createnewhotelier: async (req, res) => {
        let requestData = req.body;
        if (!requestData.role) {
            return res.send({
                msg: 'Hotelier Customer not created successfully',
            })
        }
        let resData = await Book.create({
            first_name: requestData.first_name,
            last_name: requestData.last_name,
            email: requestData.email,
            phonenumber: requestData.phonenumber,
            role: requestData.role
        }).fetch();
        return res.send({
            msg: 'Hotelier Customer created successfully',
            responseCode: 201,
            data: {
                id: resData.id,
                role: resData.role
            }
        });
    },

    getuserdata: async (req, res) => {
        data = await Book.find({});
        if (!data.length > 0) {
            return res.send({
                msg: 'data not found with this user',
                responseCode: 201,
                data: data
            });
        }
        return res.send({
            msg: 'Hotelier Customer fetched successfully',
            responseCode: 201,
            data: data
        });
    },

    Getuserbyid: async (req, res) => {
        data = req.params.id;
        fetchdatabyid = await Book.find({ id: data })
        if (!fetchdatabyid.length > 0) {
            return res.send({
                msg: 'user not exist',
            })
        }
        return res.send({
            msg: 'Hotelier single Customer fetched successfully',
            responseCode: 201,
            data: fetchdatabyid
        })
    },

    updatebyuserid: async (req, res) => {
        let userId = req.body.userId;
        fetcheddata = await Book.find({ id: userId });
        if (!fetcheddata.length > 0) {
            return res.send({
                data:"user not exist",
            })
        }
        attributs = {};
        if (req.body.first_name) {
            attributs.first_name = req.body.first_name;
        }
        if (req.body.last_name) {
            attributs.last_name = req.body.last_name;
        }
        if (req.body.email) {
            attributs.email = req.body.email;
        }
        if (req.body.phonenumber) {
            attributs.phonenumber = req.body.phonenumber;
        }
        var updatedRecords = await Book.updateOne(userId).set(attributs).fetch();
        return res.send({
            data: updatedRecords,
            alldata: await Book.find({})
        })
    },

    deletebyuserid: async (req, res) => {
        data = req.params.id;
        fetchdatabyid = await Book.find({ id: data })
        var destroyedRecords = await Book.destroy(data).fetch();
        return res.send(
            {
                data: await Book.find({})
            }
        )
    }
}
