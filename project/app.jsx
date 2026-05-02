// La Catana Quinta — App
function App() {
  return (
    <div id="top">
      <Nav />
      <Hero />
      <Events />
      <Services />
      <Gallery />
      <InstaWall />
      <Contact />
      <Footer />
      <FloatingWA />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
