import { RouteObject, useRoutes } from 'react-router-dom';
import Main from './Layout/Main';
import SecondaryLayout from './Layout/SecondaryLayout/SecondaryLayout';
import UI from './Layout/Ui';
import InformationOperation from './pages/InformationOperation';
import InventorySchedule from './pages/InventorySchedule';
import InventoryStatus from './pages/InventoryStatus';
import { default as Login, default as LoginDemo } from './pages/Login/Login';
import Modal49 from './pages/ModalDemo/CalendarModal/CalendarModal';
import Modal26 from './pages/ModalDemo/EditModal/EditModal';
import Modal27 from './pages/ModalDemo/MultipleEditModal/MultipleEditModal';
import Modal38 from './pages/ModalDemo/NewModal/NewModal';
import Modal34 from './pages/ModalDemo/ReplaceSomeInformation/ReplaceSomeInformation';
import Modal37 from './pages/ModalDemo/ShippingStandardMaster/ShippingStandardMaster';
import Modal44 from './pages/ModalDemo/SignUp/SignUp';
import Modal23 from './pages/ModalDemo/UserProfile/UserProfile';
import Page48 from './pages/PageDemo/BaseOperationCalendar';
import Page16 from './pages/PageDemo/CheckForUpdated';
import Page18 from './pages/PageDemo/CheckForUpdatedTable';
import Page17 from './pages/PageDemo/EditingTable';
import Page15 from './pages/PageDemo/EditMaster';
import Page29 from './pages/PageDemo/GridBottom';
import Page41 from './pages/PageDemo/GridInformationOperation/GridInformationOperation';
import Page25 from './pages/PageDemo/GridMultiple';
import Page33 from './pages/PageDemo/MasterMenu';
import Page30 from './pages/PageDemo/OnGrid';
import Page21 from './pages/PageDemo/OperationEditing';
import Page42 from './pages/PageDemo/OperationProhibited';
import Page20 from './pages/PageDemo/RegisterInformation';
import Page40 from './pages/PageDemo/Supplement';
import Page31 from './pages/PageDemo/TabSwitchingGridOne';
import Page32 from './pages/PageDemo/TabSwitchingGridTwo';
import Page43 from './pages/PageDemo/WorkingCalendarMaster/WorkingCalendarMaster';
import WorkProgressFlightPage from './pages/PageDemo/WorkProgressFlightPage/WorkProgressFlightPage';
import WorkProgressPage from './pages/PageDemo/WorkProgressPage/WorkProgressPage';
import ProductLabel from './pages/ProductLabel';
import RegisterInformation from './pages/RegisterInformation';
import ScheduleAdd from './pages/ScheduleAdd';
import ScheduledReceipt from './pages/ScheduledReceipt';
import ScheduleEdit from './pages/ScheduleEdit';
import SupplierReturn from './pages/SupplierReturn';
import {
  Button,
  Checkbox,
  DatePicker,
  Footer,
  Header,
  IconMap,
  Input,
  Loading,
  Modal,
  Pagination,
  Radio,
  Select,
  Table,
  TimePicker,
  Toast,
  Tooltip,
  Typography
} from './pages/UI';
import Lock from './pages/UI/Lock/Lock';

export const mainChildren: RouteObject[] = [
  {
    path: '/',
    element: <InventorySchedule />,
  },
  {
    path: '/inventory-schedule',
    element: <InventorySchedule />,
  },
  {
    path: '/supplier-return',
    element: <SupplierReturn />,
  },
  {
    path: '/scheduled-receipt',
    element: <ScheduledReceipt />,
  },
  {
    path: '/product-label-print',
    element: <ProductLabel />,
  },
  {
    path: '/inventory-status',
    element: <InventoryStatus />,
  },
  {
    path: '/register-information',
    element: <RegisterInformation />,
  },
  {
    path: '/information-operation',
    element: <InformationOperation />,
  },
  {
    path: '/schedule/add',
    element: <ScheduleAdd />,
  },
  {
    path: '/schedule/edit',
    element: <ScheduleEdit />,
  },
  {
    path: '/page-15',
    element: <Page15 />,
  },
  {
    path: '/page-16',
    element: <Page16 />,
  },
  {
    path: '/page-17',
    element: <Page17 />,
  },
  {
    path: '/page-18',
    element: <Page18 />,
  },
  {
    path: '/page-20',
    element: <Page20 />,
  },
  {
    path: '/page-21',
    element: <Page21 />,
  },
  {
    path: '/page-25',
    element: <Page25 />,
  },
  {
    path: '/page-29',
    element: <Page29 />,
  },
  {
    path: '/page-30',
    element: <Page30 />,
  },
  {
    path: '/page-31',
    element: <Page31 />,
  },
  {
    path: '/page-32',
    element: <Page32 />,
  },
  {
    path: '/page-33',
    element: <Page33 />,
  },
  {
    path: '/page-40',
    element: <Page40 />,
  },
  {
    path: '/page-41',
    element: <Page41 />,
  },
  {
    path: '/page-42',
    element: <Page42 />,
  },
  {
    path: '/page-43',
    element: <Page43 />,
  },
  {
    path: '/page-48',
    element: <Page48 />,
  },
];

const uiMenu: RouteObject[] = [
  {
    path: '/ui/loading',
    element: <Loading />,
  },
  {
    path: '/ui/dialog',
    element: <Modal />,
  },
  {
    path: '/ui/pagination',
    element: <Pagination />,
  },
  {
    path: '/ui/table',
    element: <Table />,
  },
  {
    path: '/ui/input',
    element: <Input />,
  },
  {
    path: '/ui/button',
    element: <Button />,
  },
  {
    path: '/ui/header',
    element: <Header />,
  },
  {
    path: '/ui/footer',
    element: <Footer />,
  },
  {
    path: '/ui/datePicker',
    element: <DatePicker />,
  },
  {
    path: '/ui/iconMap',
    element: <IconMap />,
  },
  {
    path: '/ui/checkbox',
    element: <Checkbox />,
  },
  {
    path: '/ui/radio',
    element: <Radio />,
  },
  {
    path: '/ui/toast',
    element: <Toast />,
  },
  {
    path: '/ui/select',
    element: <Select />,
  },
  {
    path: '/ui/tooltip',
    element: <Tooltip />,
  },
  {
    path: '/ui/typography',
    element: <Typography />,
  },
  {
    path: '/ui/timePicker',
    element: <TimePicker />,
  },
  {
    path: '/ui/modal-23',
    element: <Modal23 />,
  },
  {
    path: '/ui/modal-26',
    element: <Modal26 />,
  },
  {
    path: '/ui/modal-27',
    element: <Modal27 />,
  },
  {
    path: '/ui/modal-34',
    element: <Modal34 />,
  },
  {
    path: '/ui/modal-37',
    element: <Modal37 />,
  },
  {
    path: '/ui/modal-38',
    element: <Modal38 />,
  },
  {
    path: '/ui/modal-44',
    element: <Modal44 />,
  },
  {
    path: '/ui/lock',
    element: <Lock />,
  },
  {
    path: '/ui/modal-49',
    element: <Modal49 />,
  },
];

const secondaryLayoutChildren: RouteObject[] = [
  {
    path: '/secondary-layout/work-progress-page',
    element: <WorkProgressPage />,
  },
  {
    path: '/secondary-layout/work-progress-flight-page',
    element: <WorkProgressFlightPage />,
  },
];

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
    children: mainChildren,
  },
  {
    path: '/secondary-layout',
    element: <SecondaryLayout />,
    children: secondaryLayoutChildren,
  },
  {
    path: '/ui',
    element: <UI />,
    children: uiMenu,
  },
  {
    path: '/login-demo',
    element: <LoginDemo />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

const AppRoutes = () => useRoutes(routes);

export { AppRoutes };
