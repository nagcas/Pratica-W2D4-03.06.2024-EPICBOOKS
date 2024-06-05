import '../style/MyFooter.css'

function MyFooter() {
  return (
    <div className='container-fluid footer'>
      <footer className='py-3 my-4'>
        <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
          <li className='nav-item'>
            <a href='#home' className='nav-link px-2 item-link'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#about' className='nav-link px-2 item-link'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a href='#browse' className='nav-link px-2 item-link'>
              Browse
            </a>
          </li>
        </ul>
        <p className='text-center text-body-secondary'>© 2024 Epic-Books, Inc</p>
      </footer>
    </div>
  );
}

export default MyFooter;