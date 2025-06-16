import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a href="./about" className="link link-hover">About us</a>
          <a href="./contact" className="link link-hover">Contact</a>
          <a href="./jobs" className="link link-hover">Jobs</a>
          <a href="./presskit" className="link link-hover">Press kit</a>
        </nav>
        <nav>
        {/* https://twitter.com/AmanDix19782310 */}
          <div className="grid grid-flow-col gap-4">
            <a target="blank" href="https://twitter.com/AmanDix19782310" style={{"color":"#1D9AEF"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a target="blank" href="https://youtube.com/@amandixitsurhan1136?feature=shared"  style={{"color":"#FF0808"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            {/* https://aman-dixit-portfo.netlify.app*/ }
            <a target="blank" href="https://www.facebook.com/profile.php?id=100018450023281" style={{"color":"#486CB4"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a target="_blank" href="https://github.com/dixit611"  style={{"color":"#4CBA3C"}}>
            <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                width="24" 
                height="24"
                className="fill-current"
                >
                
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.382 1.235-3.22-.123-.305-.535-1.54.117-3.21 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.67.24 2.905.118 3.21.77.838 1.233 1.91 1.233 3.22 0 4.61-2.803 5.62-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.292 0 .32.192.694.798.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/aman-dixit-surhan/" style={{"color":"#0A66C2"}}>
            <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                width="24" 
                height="24"
                className="fill-current"
                >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/> 
            </svg>
            </a>

          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by @aman</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
