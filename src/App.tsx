import { ReactKeycloakProvider } from '@react-keycloak/web';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Loading, ToastrContainer } from 'components';
import RequireAuth from 'components/PrivateRoute';
import ScrollToTop from 'components/ScrollToTop';
import Main from 'Layout/Main';
import SecondaryLayout from 'Layout/SecondaryLayout/SecondaryLayout';
import ForgotPassword from 'pages/ForgotPassword';
import InventorySchedule from 'pages/InventorySchedule';
import Login from 'pages/Login/Login';
import Page48 from 'pages/PageDemo/BaseOperationCalendar';
import Page16 from 'pages/PageDemo/CheckForUpdated';
import Page18 from 'pages/PageDemo/CheckForUpdatedTable';
import Page17 from 'pages/PageDemo/EditingTable';
import Page15 from 'pages/PageDemo/EditMaster';
import { default as Page29, default as Page33 } from 'pages/PageDemo/GridBottom';
import Page30 from 'pages/PageDemo/OnGrid';
import { default as Page21, default as Page25 } from 'pages/PageDemo/OperationEditing';
import Page42 from 'pages/PageDemo/OperationProhibited';
import Page20 from 'pages/PageDemo/RegisterInformation';
import Page40 from 'pages/PageDemo/Supplement';
import Page31 from 'pages/PageDemo/TabSwitchingGridOne';
import Page32 from 'pages/PageDemo/TabSwitchingGridTwo';
import Page43 from 'pages/PageDemo/WorkingCalendarMaster/WorkingCalendarMaster';
import WorkProgressFlightPage from 'pages/PageDemo/WorkProgressFlightPage/WorkProgressFlightPage';
import WorkProgressPage from 'pages/PageDemo/WorkProgressPage/WorkProgressPage';
import ProductLabel from 'pages/ProductLabel';
import ResetPassword from 'pages/ResetPassword';
import ScheduledReceipt from 'pages/ScheduledReceipt';
import { Suspense } from 'react';
import { AuthProvider } from 'react-auth-kit';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import MainRoute from 'routers/MainRoute';
import UiRouter from 'routers/UiRouter';
import { persistor, reduxStore } from 'store';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import './app.scss';
import { DataContextProvider } from './contexts/data';
import './i18n';
import keycloak from './keycloak';
import SupplierReturn from './pages/SupplierReturn';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const onEvent = (event: unknown, error: unknown) => {
  // console.log('onKeycloakEvent', event, error);
};

const onTokens = (tokens: unknown) => {
  // console.log('onKeycloakTokens', tokens);
};

const AppRouter = () => {
  return (
    <Routes>
      <Route path="secondary-layout" element={<SecondaryLayout />}>
        <Route path="work-progress-page" element={<WorkProgressPage />} />
        <Route path="work-progress-flight-page" element={<WorkProgressFlightPage />} />
      </Route>
      <Route
        path="demo"
        element={
          <RequireAuth loginPath="/login">
            <DataContextProvider>
              <Main />
            </DataContextProvider>
          </RequireAuth>
        }
      >
        <Route path="inventory-schedule" element={<InventorySchedule />} />
        <Route path="supplier-return" element={<SupplierReturn />} />
        <Route path="scheduled-receipt" element={<ScheduledReceipt />} />
        <Route path="product-label-print" element={<ProductLabel />} />
        <Route path="page-15" element={<Page15 />} />
        <Route path="page-16" element={<Page16 />} />
        <Route path="page-17" element={<Page17 />} />
        <Route path="page-18" element={<Page18 />} />
        <Route path="page-20" element={<Page20 />} />
        <Route path="page-21" element={<Page21 />} />
        <Route path="page-25" element={<Page25 />} />
        <Route path="page-29" element={<Page29 />} />
        <Route path="page-30" element={<Page30 />} />
        <Route path="page-31" element={<Page31 />} />
        <Route path="page-32" element={<Page32 />} />
        <Route path="page-33" element={<Page33 />} />
        <Route path="page-40" element={<Page40 />} />
        <Route path="page-42" element={<Page42 />} />
        <Route path="page-43" element={<Page43 />} />
        <Route path="page-48" element={<Page48 />} />
      </Route>
      <Route path="/ui/*" element={<UiRouter />} />
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="init-password" element={<ResetPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="*" element={<MainRoute />}></Route>
    </Routes>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 1000,
    },
  },
});

const AppProvider: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <ToastContainer limit={1} />
      <ToastrContainer />
      <ReduxProvider store={reduxStore}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <QueryParamProvider adapter={ReactRouter6Adapter}>
                <DndProvider backend={HTML5Backend}>
                  <AuthProvider
                    authType={'localstorage'}
                    authName={'_auth'}
                    cookieDomain={window.location.hostname}
                    cookieSecure={window.location.protocol === 'https:'}
                  >
                    <ReactKeycloakProvider
                      authClient={keycloak}
                      onEvent={onEvent}
                      onTokens={onTokens}
                      initOptions={{
                        checkLoginIframe: false,
                        pkceMethod: 'S256',
                      }}
                    >
                      {props.children}
                    </ReactKeycloakProvider>
                  </AuthProvider>
                </DndProvider>
              </QueryParamProvider>
              <ScrollToTop />
            </BrowserRouter>
          </QueryClientProvider>
        </PersistGate>
      </ReduxProvider>
    </Suspense>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
