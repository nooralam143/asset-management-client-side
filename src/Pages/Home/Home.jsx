import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import Slidder from "./Slidder/Slidder";


const Home = () => {
    const { user } = useContext(AuthContext);
    console.log("User object:", user);
    
    return (
        
        <div>
            <Helmet>
                <title>AssetPro | Home</title>
            </Helmet>
            <div>
                <Slidder></Slidder>
                {user ? (
                    <>
                        <div>
                            Name: {user.displayName || 'N/A'}
                        </div>
                        <div>
                            Email: {user.email || 'N/A'}
                        </div>
                    </>
                ) : (
                    <div>
                        User not available.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;