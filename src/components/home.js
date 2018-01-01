var React = require('react');
var Dashboard = require('./dashboard.js');

class Home extends React.Component {
  render() {
    return (
      <div className="grey-background">
        {/* <Dashboard /> */}
        <div className="container">
          <br/>
          <h3>热门活动</h3>
        </div>
        <div>
          <div className="row">
            <div className="col s12 m3">
              <div className="card">
                <div className="card-image">
                  <img src="http://localhost:8080/images/sample-1.jpg"/>
                  <span className="card-title">Card Title</span>
                </div>
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="card">
                <div className="card-image">
                  <img src="http://localhost:8080/images/sample-1.jpg"/>
                  <span className="card-title">Card Title</span>
                </div>
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="card">
                <div className="card-image">
                  <img src="http://localhost:8080/images/sample-1.jpg"/>
                  <span className="card-title">Card Title</span>
                </div>
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="card">
                <div className="card-image">
                  <img src="http://localhost:8080/images/sample-1.jpg"/>
                  <span className="card-title">Card Title</span>
                </div>
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

module.exports = Home