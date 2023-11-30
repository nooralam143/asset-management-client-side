import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useAdminPendingRequest = () => {
    
    const axiosPublic = useAxiosPublic()
    const {data: PendingRequestAsset = [], error, isPending} = useQuery({
        queryKey: ['requestAsset'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/request-assets');
            // Filter data based on requestUser
      return res.data;
        }
    })
    return {
        PendingRequestAsset,
        error,
        isPending,
    };
};

export default useAdminPendingRequest;