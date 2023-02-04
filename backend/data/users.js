import bcrypt from 'bcryptjs'
const Users = [

    {
        name : 'John Doe',
        email : 'JohnDoe2@gmail.com',
        password : bcrypt.hashSync('doe2020',12),
        isAdmin : true
    }
    
]
export default Users