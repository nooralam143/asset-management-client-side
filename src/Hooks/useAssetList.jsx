import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useAssetList = () => {
    const axiosPublic = useAxiosPublic()
    const {data: myAllAssets = [], error, isPending} = useQuery({
        queryKey: ['myassets'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/my-assets');
  
            // Filter data based on requestUser

      return res.data;
        }
    })
    return {
        myAllAssets,
        error,
        isPending,
    };
};

export default useAssetList;