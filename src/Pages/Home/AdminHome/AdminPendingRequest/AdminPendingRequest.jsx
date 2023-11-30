import useAdminPendingRequest from "../../../../Hooks/useAdminPendingRequest";


const AdminPendingRequest = () => {
    const {PendingRequestAsset}=useAdminPendingRequest();
    const allPendingRequest = PendingRequestAsset.filter((req) => req.requestStatus == "pending")
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl">Pending Requests:</h2>
            <p className="text-4xl font-black">{allPendingRequest.length}</p>
        </div>
    );
};

export default AdminPendingRequest;