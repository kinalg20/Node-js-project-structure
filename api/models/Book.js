module.exports = {

  attributes: {
    first_name: {
      type: 'string',
      required: true
    },
    last_name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    phonenumber: {
      type: 'string',
      required: true,
      unique:true
    },
    role: {
      type: "string",
      required: false,
      defaultsTo: "1"
    },
    Aadharcard: {
      type: "string",
      required: false,
    },
    pancard: {
      type: "string",
      required: false,
    }
  }
}
