import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import useUserDetails from "../../Hooks/useUserdetails";

import MyCustomeRequests from "./EmployeeHome/MyCustomeRequests/MyCustomeRequests";
import MyPendingRequests from "./EmployeeHome/MyPendingRequests/MyPendingRequests";
import MyMonthlyRequests from "./EmployeeHome/MyMonthlyRequests/MyMonthlyRequests";
import Slidder from "./DefaultHome/Slidder/Slidder";
import AboutSection from "./DefaultHome/About/AboutSection";
import Package from "./DefaultHome/Package/Package";
import ReviewSwiper from "./DefaultHome/Review/Review";





const Home = () => {
    const { user } = useContext(AuthContext);
    const {loggedInUserDetails}=useUserDetails();
    
    console.log("User loggedInUserDetails:", loggedInUserDetails);
    console.log("User object:", user);

    const userRole = loggedInUserDetails?.role;
    console.log("User role:", userRole);


    return (
        
        <div>
            <Helmet>
                <title>AssetPro | Home</title>
            </Helmet>
            <div>
               { !userRole && 
               <>
               <Slidder></Slidder>
               <AboutSection></AboutSection>
                <Package></Package>
                <ReviewSwiper></ReviewSwiper>
                </>
               }
               
                { userRole=="employee" &&
                    <>
                    <MyCustomeRequests></MyCustomeRequests>
                    <MyPendingRequests></MyPendingRequests>
                    <MyMonthlyRequests></MyMonthlyRequests>
                    </>
                }
                   { userRole=="admin" &&
                    <div>
                    Admin login
                </div>
                }
                
            </div>
        </div>
    );
};

export default Home;