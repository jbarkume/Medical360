import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

// This is where we can store the hard coded data for now
export const users = [
    {
        name: "Jamie Barkume",
        username: "jbarkume",
        email: "jamie@barkume.com",
        password: "5658",
        department: "Cardiology",
        phone_number: "6319533283",
        isAdmin: false,
        isDoctor: true
    }
]

function AuthContextProvider({ children }) {
    const [auth, setAuth] = useState({
        user: null,
        loggedIn: false,
        isAdmin: false,
        isDoctor: false
    });

    useEffect(() => {
        // get whether use is logged in or not
    }, []);

    auth.getLoggedIn = function () {
        // get whether user is logged in or not

        // if (response.status === 200) {
        //     setAuth({
        //         user: response.data.user,
        //         loggedIn: response.data.loggedIn,
        //         isAdmin: false,
        //         isDoctor: response.data.user.department.toLowerCase() === "doctor"
        //     })
        //     return true;
        // }
        // return false
    }

    // register a user, upon success return true, otherwise return false
    auth.register = function({name, email, password, department, phone_number, isAdmin, isDoctor}) {
        let new_user = {
            name, 
            email, 
            password,  
            department, 
            phone_number, 
            isAdmin, 
            isDoctor
        }
        users.push(new_user);
        console.log(users);
        return true;
    }

    // login the user with email and passwrod. Upon success, set user to logged in. upon false, print why and return false
    auth.login = function(email, password) {
        for (let i = 0; i < users.length; i++) {
            let user = users[i];
            if (user.email === email && user.password === password) {
                setAuth({
                    user,
                    loggedIn: true,
                    isAdmin: user.isAdmin,
                    isDoctor: user.isDoctor
                })
                return true;
            }
        }
        console.log("User not found")
        return false;
    }

    // logout the user
    auth.logout = function() {
        setAuth({
            user: null,
            loggedIn: false,
            isAdmin: false,
            isDoctor: false
        })
    }

    return (
        <AuthContext.Provider value={{
            auth
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
export { AuthContextProvider };