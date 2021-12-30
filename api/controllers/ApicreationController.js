module.exports = {

    getuserdata: async (req, res) => {
        let requestData = req.body;
        // fetchdata = await Apicreation.find({ email: requestData.email })
        if (!requestData.first_name || !requestData.email || !requestData.last_name || !requestData.phonenumber) {
            return res.send({
                msg: 'customer not created successfully',
            })
        }

        // if (fetchdata.length > 0) {
        //     return res.send({
        //         msg: 'email already exist',
        //     })
        // }

        let resData = await Apicreation.create({
            Firstname: requestData.first_name,
            Lastname: requestData.last_name,
            Email: requestData.email,
            Phonenumber: requestData.phonenumber
        }).fetch();
        return res.send({
            msg: 'Customer created successfully',
            responseCode: 201,
            data: resData
        });
    }

};

