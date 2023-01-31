import './index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {


  return (
    <>
    
    {/* Navigation Bar */}
      <section className='navbar-holder'>
         <Navbar>
            <Container>
              <Nav className='fa fa-home' style={{}}></Nav>
              <NavDropdown title="Test Suites" id="basic-nav-dropdown"></NavDropdown>
              <NavDropdown title="Jobs" id="basic-nav-dropdown"></NavDropdown>
              <NavDropdown title="Testbeds" id="basic-nav-dropdown"></NavDropdown>
              <NavDropdown title="Reports" id="basic-nav-dropdown"></NavDropdown>
              <NavDropdown title="Community" id="basic-nav-dropdown"></NavDropdown>
              <NavDropdown title="Tools" id="basic-nav-dropdown"></NavDropdown>
              <NavDropdown title="Help" id="basic-nav-dropdown"></NavDropdown>
            </Container>
         </Navbar>

      </section>

    {/* Card holder */}
      <section className='card-holder'>
        <div className='card-heading'>
          <i className='fa fa-comments'></i>
          <h5>Test Suits</h5>
        </div>
        <hr />
        <div className='anchor-tab'>
          <a href='#1'>Recently Added</a>
          <a href='#2'>Popular Test  Suites</a>
          <a href='#3'>Recommanded</a>
        </div>
        <div className='card-container'>
          <div className='card m-4'>
            <div className='card-top m-3'>
              <section className='card-tp-left'>
                <img
                  src='https://media.istockphoto.com/id/1198530470/vector/vector-illustration-of-squirrel-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=Mvp9X_ywmSfD4JYQdeIvqKWuNPuoYRKkYF4eJdmN6JU='
                  style={{ width: '5em', height: '5em' }}
                  alt='No_Image' />
                <progress max={100} value={85}></progress>
              </section>
              <section className='card-tp-right'>
                <div className='card-data'>
                  <div className='card-rating'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <p>(0)</p>
                  <p>|</p>
                  <p>4321 runs  |</p>
                  <p>0 Defects</p>
                </div>
                <h6>(User_1)</h6>
                <h4>TestCase_1</h4>
              </section>
            </div>
            <div className='card-bottom'>
              <section className='card-btm-details'>
                <p>27 |</p>
                <p>08/24/2017 12:24:34 | </p>
                <p>19:28:50 |</p>
              </section>
              <section className='card-btm-icons'>
                <i className='fa fa-heart-o'></i>
                <i className='fa fa-play'></i>
                <i className='fa fa-shopping-cart'></i>
                <i className='fa fa-briefcase'></i>
              </section>
            </div>
          </div>
          <div className='card m-4'>
            <div className='card-top m-3'>
              <section className='card-tp-left'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqvJwOdjnhMZF2IpmhHbyZ7tlc0yux2oZ3A&usqp=CAU'
                  style={{ width: '5em', height: '5em' }}
                  alt='No_Image' />
                <progress max={100} value={85}></progress>
              </section>
              <section className='card-tp-right'>
                <div className='card-data'>
                  <div className='card-rating'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <p>|</p>
                  <p>2106 runs  |</p>
                  <p>0 Defects</p>
                </div>
                <h6>(User_2)</h6>
                <h4>TestCase_2</h4>
              </section>
            </div>
            <div className='card-bottom'>
              <section className='card-btm-details'>
                <p>18 |</p>
                <p>08/21/2017 18:22:44 | </p>
                <p>19:30:04 |</p>
              </section>
              <section className='card-btm-icons'>
                <i className='fa fa-heart-o'></i>
                <i className='fa fa-play'></i>
                <i className='fa fa-shopping-cart'></i>
                <i className='fa fa-briefcase'></i>
              </section>
            </div>
          </div>
          <div className='card m-4'>
            <div className='card-top m-3'>
              <section className='card-tp-left'>
                <img
                  src='https://t4.ftcdn.net/jpg/03/22/27/15/360_F_322271599_m6B4XfH1Y2k72n5Kk34Q1KfX7oz3GlQs.jpg'
                  style={{ width: '5em', height: '5em' }}
                  alt='No_Image' />
                <progress max={100} value={85}></progress>
              </section>
              <section className='card-tp-right'>
                <div className='card-data'>
                  <div className='card-rating'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <p>|</p>
                  <p>6 runs  |</p>
                  <p>0 Defects</p>
                </div>
                <h6>(User_3)</h6>
                <h4>TestCase_3</h4>
              </section>
            </div>
            <div className='card-bottom'>
              <section className='card-btm-details'>
                <p>9 |</p>
                <p>11/04/2016 11:04:20 | </p>
                <p>09:28:59 |</p>
              </section>
              <section className='card-btm-icons'>
                <i className='fa fa-heart-o'></i>
                <i className='fa fa-play'></i>
                <i className='fa fa-shopping-cart'></i>
                <i className='fa fa-briefcase'></i>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
