import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          MyBlog
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>

      <div className="post">
        <div className="image">
          <img
            src="https://research.umd.edu/sites/default/files/styles/optimized/public/2021-12/umd-overhead-view-campus.jpg?itok=WKoGltIQ"
            alt=""
          ></img>
        </div>
        <div className="texts">
          <h2>UMD Research Development</h2>
          <p className="info">
            <a className="author">Chris Giang</a>
            <time>2024-01-03 16:45</time>
          </p>
          <p className="summary">
            The mission of the Research Development Office is to grow the volume
            and visibility of the University of Maryland’s research enterprise.
            
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="https://research.umd.edu/sites/default/files/styles/optimized/public/2021-12/umd-overhead-view-campus.jpg?itok=WKoGltIQ"
            alt=""
          ></img>
        </div>
        <div className="texts">
          <h2>UMD Research Development</h2>
          <p className="info">
            <a className="author">Chris Giang</a>
            <time>2024-01-03 16:45</time>
          </p>
          <p className="summary">
            The mission of the Research Development Office is to grow the volume
            and visibility of the University of Maryland’s research enterprise.
            
          </p>
        </div>
      </div>
      <div className="post">
      < div className="image">
          <img
            src="https://research.umd.edu/sites/default/files/styles/optimized/public/2021-12/umd-overhead-view-campus.jpg?itok=WKoGltIQ"
            alt=""
          ></img>
        </div>
        <div className="texts">
          <h2>UMD Research Development</h2>
          <p className="info">
            <a className="author">Chris Giang</a>
            <time>2024-01-03 16:45</time>
          </p>
          <p className="summary">
            The mission of the Research Development Office is to grow the volume
            and visibility of the University of Maryland’s research enterprise.
            
          </p>
        </div>
      </div>
      
    </main>
  );
}

export default App;
