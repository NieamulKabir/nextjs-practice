import DashboardLayout from "@/components/Layouts/DashboardLayout";



const DashBoard = () => {
    return (
        <div>
            <h1>Dashboard Home page</h1>
        </div>
    );
};

export default DashBoard;

DashBoard.getLayout= function getLayout(page){
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}