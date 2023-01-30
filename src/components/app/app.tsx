import { Route, Routes } from 'react-router-dom';
import BookingPage from '../../pages/booking-page/booking-page';
import { AppRoute, AuthorizationStatus } from '../../constants';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import MyQuestsPage from '../../pages/my-quests/my-quests';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import QuestPage from '../../pages/quest-page/quest-page';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main}
          element={<MainPage />}
        >
        </Route>

        <Route path={AppRoute.LogIn}
          element={<LoginPage />}
        >
        </Route>

        <Route path={AppRoute.MyQuests}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyQuestsPage />
            </PrivateRoute>
          }
        >
        </Route>

        <Route path={AppRoute.Booking}
          element={<BookingPage />}
        >
        </Route>

        <Route path={AppRoute.Quest}
          element={<QuestPage />}
        >
        </Route>

        <Route path={AppRoute.Contacts}
          element={<ContactsPage />}
        >
        </Route>

        <Route path='*'
          element={<NotFoundPage />}
        />

      </Routes>
    </HistoryRouter>
  );
}

export default App;
