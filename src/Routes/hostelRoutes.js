import EmptyRooms from '../views/hostelMgmt/emptyRooms'
import ManageHostel from '../views/hostelMgmt/manageHostel';
import AddHostel from '../views/hostelMgmt/addHostel';
import EditHostel from '../views/hostelMgmt/editHostel';
import BlockUnblockRooms from '../views/hostelMgmt/blockUnblockRooms';
import ManageStudentContact from '../views/hostelMgmt/manageStudentContact';
import AddStudentContact from '../views/hostelMgmt/addStudentContact';
import BulkUploadStudents from '../views/hostelMgmt/bulkUploadStudents';
import HostelBooking from '../views/hostelMgmt/hostelBooking';
import Dashboard from './../core/Home';


const hostelRoutes = [
    
    { path: '/', exact: true, name: 'Login', userAuth: ['emp'] },
    { path: '/home', name: 'Dashboard', component: Dashboard, exact: true, userAuth: ['emp'] },
    { path: '/hostelManagement/download_empty_rooms', name: 'EmptyRooms', component: EmptyRooms, exact: true, userAuth: ['emp'] },
    { path: '/hostelManagement/manage_hostel', name: 'ManageHostel', component: ManageHostel, exact: true, userAuth: ['emp'] },
    { path: '/hostelManagement/add_hostel', name: 'AddHostel', component: AddHostel, exact: true, userAuth: ['emp'] },
    { path: '/hostelManagement/edit_hostel/:id', name: 'EditHostel', component: EditHostel, exact: true, userAuth: ['emp'] },
    { path: '/hostelManagement/block_unblock_rooms', name: 'BlockUnblockRooms', component: BlockUnblockRooms, exact: true, userAuth: ['emp'] },
    { path: '/hostelManagement/manage_student_contact', name: 'ManageStudentContact', component: ManageStudentContact, exact: true, userAuth: ['emp'] },
    { path: '/hostelManagement/add_student_contact', name: 'AddStudentContact', component: AddStudentContact, exact: true, userAuth: ['emp'] },
    { path: '/hostelManagement/bulk_upload_contact_student', name: 'BulkUploadStudents', component: BulkUploadStudents, exact: true, userAuth: ['emp'] },
    { path: '/hostelManagement/hostel_booking', name: 'HostelBooking', component: HostelBooking, exact: true, userAuth: ['stu'] },

];
export default hostelRoutes;