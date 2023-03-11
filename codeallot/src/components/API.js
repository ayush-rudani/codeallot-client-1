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


export const newCodex = async (userid, title, description, filename, code) => {
    // console.log("=> " + userid, title, description, filename, code)
    const formData = new FormData();

    formData.append('userid', userid);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('filename', filename);
    formData.append('content', JSON.stringify(code));

    try {
        const res = await axios.post('api/Codex/', formData);
        return res;
    } catch (error) {
        return error;
    }
}


// const res = await axios.post('api/Codex/', {
//     title: title,
//     userid: userid,
//     description: description,
//     filename: filename,
//     content: content
// });



export const getCodexByUserid = async (userid) => {
    try {
        const res = await axios.get(`api/Codex/c/${userid}`);
        return res;
    } catch (error) {
        return error;
    }
}
