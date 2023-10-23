class UserController {
  create (request, response) {
    const {name, email, password} = request.body



    console.log({name, email, password})
    return response.json({name, email, password})
  }
}

module.exports = UserController;