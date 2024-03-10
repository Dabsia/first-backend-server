


// USERS ROUTE
const users = []

exports.getAllUsers = (req, res) => {
    return res.status(200).json({
        status: 'success',
        data: {
            users
        }
    })
}
exports.createNewUser = () => { }
exports.getUser = () => { }
exports.updateUser = () => { }
exports.deleteUser = () => { }

