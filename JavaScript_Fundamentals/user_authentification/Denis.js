const correctUser = {
    username: "denis",
    password: "heychilat"
};

function validateUser(username, password) {
    if (!username || !password) {
        return "Validation Error";
    }

    if (username !== correctUser.username) {
        return "Incorrect username";
    }

    if (password !== correctUser.password) {
        return "Incorrect password";
    }

    return `Hello ${username}`;
}

console.log(validateUser("", ""));
console.log(validateUser("wronguser", "wrongpasswordhmm"));
console.log(validateUser("denis", "heychilat"));
