import EmptyRooms from '../views/hostelMgmt/emptyRooms'
import ManageHostel from '../views/hostelMgmt/manageHostel';
import AddHostel from '../views/hostelMgmt/addHostel';
import BlockUnblockRooms from '../views/hostelMgmt/blockUnblockRooms';
import ManageStudents from '../views/hostelMgmt/manageStudents';
import BulkUploadStudents from '../views/hostelMgmt/bulkUploadStudents';
import Dashboard from './../core/Home'


const hostelRoutes = [
    
    { path: '/', exact: true, name: 'Login' },
    { path: '/home', name: 'Dashboard', component: Dashboard, exact: true },
    { path: '/hostelManagement/download_empty_rooms', name: 'EmptyRooms', component: EmptyRooms, exact: true },
    { path: '/hostelManagement/manage_hostel', name: 'ManageHostel', component: ManageHostel, exact: true },
    { path: '/hostelManagement/add_hostel', name: 'AddHostel', component: AddHostel, exact: true },
    { path: '/hostelManagement/block_unblock_rooms', name: 'BlockUnblockRooms', component: BlockUnblockRooms, exact: true },
    { path: '/hostelManagement/manage_student_contact', name: 'ManageStudents', component: ManageStudents, exact: true },
    { path: '/hostelManagement/bulk_upload_contact_student', name: 'BulkUploadStudents', component: BulkUploadStudents, exact: true },

];
export default hostelRoutes