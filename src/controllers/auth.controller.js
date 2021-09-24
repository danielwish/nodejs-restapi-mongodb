import User from "../models/user";

export const signUp = async(req, res) => {
    const {userName, email, password, roles} = req.body;

    const newUser = new User({
        userName,
        email,
        password: await User.encryptPassword(password)
    });

    console.log(newUser);
    
    res.json('SignUp');
}

export const signIn = async(req, res) => {
    res.json('SignIn');
}