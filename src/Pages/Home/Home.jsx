import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import Slidder from "./Slidder/Slidder";
import Package from "./Package/Package";
import AboutSection from "./About/AboutSection";
import Review from "./Review/Review";


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
                <AboutSection></AboutSection>
                <Package></Package>
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;