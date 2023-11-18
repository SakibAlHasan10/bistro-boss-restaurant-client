import { createContext } from "react";
import PropTypes from 'prop-types'
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const authIfo={

    }
    return (
        <AuthContext.Provider value={authIfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children: PropTypes.node
}
export default AuthProvider;