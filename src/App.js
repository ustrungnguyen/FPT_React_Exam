import './App.css';
import objects from './objects.json';
import subjects from './subjects.json';

// Importing images
import Logo from './assets/fpt-logo.png';
import Banner from './assets/banner.png';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className='header'>
        {/* Logo container */}
        <div className='logo-container'>
          <img src={Logo} alt='Brand logo' />
          
          <h1>FPT Aptech</h1>
        </div>

        {/* Nav links container */}
        <div className='nav-links-container'>
          <p>About Us</p>
          <p>Products</p>
          <p>Booking</p>
          <p>Locations</p>
        </div>

        {/* Function buttons container */}
        <div className='function-buttons-container'>
          {/* Sign in button */}
          <button className='function-button sign-in'>Sign In</button>

          {/* Sign up button */}
          <button className='function-button sign-up'>Sign Up</button>
        </div>
      </header>

      {/* Banner Image */}
      <img src={Banner} alt='Banner thumbnail' className='banner-image' />

      {/* Responsive Main Content */}
      <div className='container'>
        <aside className='aside-left'></aside>

        <main className='main-content'>
          <div className='welcome-message-container'>
            <h1>
              SHOULD WHO LEARN PROGRAMMING IN FPT APTECH?
            </h1>
          </div>

          {/* Objects container */}
          <div className='objects-container'>
            {objects.map(item => (
              <div key={item.id} className='object-card'>
                <div className='card-image-container'>
                  <img className='object-image' src={`/${item.image}`} alt={item.title} />
                </div>

                <div className='card-detail-container'>
                  <h3>{item.title}</h3>
                  <p>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className='subjects-heading-container'>
            <h1>
              WHAT IS THE COURSE PROGRAM?
            </h1>
          </div>
          {/* Subjects container */}
          <div className='subjects-container'>
            {subjects.map(subject => (
              <div key={subject.id} className='subject-card'>
                <img className='subject-image' src={`/${subject.image}`} alt={subject.subject} />
              </div>
            ))}

          </div>

          <div className='subject-description-container'>
            {subjects[0].description}
          </div>
        </main>

        <aside className='aside-right'></aside>
      </div>

      {/* Footer */}
      <footer className='footer'>
          <p>No 8 - Ton That Tuyet - My Dinh, Nam Tu Liem, Ha Noi</p>
      </footer>
    </div>
  );
}

export default App;