import React, { createContext, useEffect, useState } from "react";
import doctorImageone from "../components/doctor2.jpeg";

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
export const doctorsData = [
    {
        name: "Dr. Olivia Turner, M.D.",
        department: "Dermato-Endocrinology",
        experience: "20 years",
        focus: "The impact of hormonal imbalances on skin conditions, specializing in acne, hirsutism, and other skin disorders.",
        schedule: "Mon - Sat / 9 AM - 4 PM",
        profile: "Dr. Doe completed her medical degree at Stony Brook University, renowned for its rigorous medical program and emphasis on patient-centered care. She further specialized in dermatology during her residency at Yale University, where she excelled in both medical and surgical dermatology, with a particular focus on pediatric dermatology, cosmetic procedures",
        image: doctorImageone,
    },
    // Add more doctor profiles as needed
];

function AuthContextProvider({ children }) {
    const [auth, setAuth] = useState({
        user: null,
        loggedIn: false,
        isAdmin: false,
        isDoctor: false,
        doctors: doctorsData,
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