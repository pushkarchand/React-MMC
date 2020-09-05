import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen, fireEvent,cleanup} from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import App from './App';

    const mockStore = configureMockStore();
    const history = createMemoryHistory();
    const store = mockStore({
        user: { user_name: null,is_authenticated:null }
    });

    const logedInStore = mockStore({
      user: { user_name: "test",is_authenticated:true }
    });


    describe('App component Test when not logedIn', () => {
        afterEach(cleanup);
            it('Should render component without error', () => {
                const { container, getByText } = render(
                    <Provider store={store}>
                        <Router history={history}>
                            <App />
                        </Router>
                    </Provider>
                )
                expect(container.innerHTML).toMatch('MARS');
                expect(container.innerHTML).toMatch('Analytics Product Repository');
                expect(container.innerHTML).toMatch('Sign In');
                expect(container.innerHTML).toMatch('Forgot Password');
            });
            it('check If Username and password are present', async () => {
            const {getByLabelText} = render(
                    <Provider store={store}>
                            <Router history={history}>
                                <App />
                            </Router>
                    </Provider>
                )
                const usernameElement = screen.getByLabelText('USERNAME', { exact: false });
                expect(usernameElement).toBeInTheDocument();
                
                const passwordElement = screen.getByLabelText('PASSWORD', { exact: false });
                expect(passwordElement).toBeInTheDocument();
            })
    });

    describe('App component Test when logedIn', () => {
      afterEach(cleanup);
          it('Should render component without error', () => {
              const { container, getByText } = render(
                  <Provider store={logedInStore}>
                      <Router history={history}>
                          <App />
                      </Router>
                  </Provider>
              )
              expect(container.innerHTML).toMatch('snapshot');
          });
  });



