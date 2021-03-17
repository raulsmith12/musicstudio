import React, { Fragment } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Page from './Page';
import Navigation from './components/Navigation';
import { Container, Row, Col } from 'reactstrap';
import { WP_REST_URL } from './components/wpRestApi';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: []
        };
    };

    componentDidMount = async () => {
        let res = await axios.get(
            WP_REST_URL + 'pages&per_page=25'
        );
        let { data } = res;

        this.setState({ pages: data });
    };

    render() {
        const { pages } = this.state;

        return (
          <Router basename={'/musicstudio'}>
            <Fragment>
              <Container fluid className="px-0">
                <Row>
                  <Col className="col-12 main-content pb-0">
                    <Navigation links={pages} />
                    {pages.map((page, index) => {
                      if (page.slug === 'index') {
                        return (
                          <Route
                            exact
                            key={index}
                            path={'/'}
                            render={props => (
                              <Page {...props} page={page} />
                            )}
                          />
                        )
                      }
                      return (
                        <Route
                          exact
                          key={index}
                          path={`/${page.slug}`}
                          render={props => (
                            <Page {...props} page={page} />
                          )}
                        />
                      );
                    })}
                  </Col>
                </Row>
              </Container>
            </Fragment>
          </Router>
        );
    }
}
