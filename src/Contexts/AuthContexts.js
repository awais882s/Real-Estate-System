import React, { createContext, useState, useEffect } from 'react'
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore"
export const AuthContext = createContext();

export default function AuthContextProvider({ children, navigation }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [data, setData] = useState({})
    const [user, setUser] = useState({})

    useEffect(() => {
        auth().onAuthStateChanged((async (user) => {
            if (user) {
                setIsAuthenticated(true);
                console.log(user.uid);
                setUser(user)
                firestore()
                    .collection('users')
                    .doc(user.uid)
                    .get()
                    .then(documentSnapshot => {
                        console.log('User exists: ', documentSnapshot.exists);
                        console.log('User data: ', documentSnapshot.data());
                        setData(documentSnapshot.data());
                    });
            } else {
                setIsAuthenticated(false)
            }
        }))

    }, [])

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, data, setData, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}