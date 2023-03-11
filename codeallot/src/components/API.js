import axios from "axios";


export const Signup = async (email, password, name, linkedin, github) => {
    try {
        const res = await axios.post('api/Users/Register', {
            email: email,
            password: password,
            name: name,
            linkedin: linkedin,
            github: github
        });
        return res;
    } catch (error) {
        return error;
    }
}

export const Signin = async (email, password) => {
    try {
        const res = await axios.post('api/Users/Login', {
            email: email,
            password: password
        });
        return res;
    } catch (error) {
        return error;
    }
}