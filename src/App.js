import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      // Update mouse position
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // Pass mousePosition to the render prop
  return render(mousePosition);
};

// This component should not receive any props
const PanelMouseLogger = () => {
  return (
    <div className="BasicTracker">
      {/* Use MousePosition as a render prop */}
      <MousePosition render={(mousePosition) => (
        <div>
          <p>Mouse position:</p>
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        </div>
      )} />
    </div>
  );
};

// This component should not receive any props
const PointMouseLogger = () => {
  return (
    <div>
      {/* Use MousePosition as a render prop */}
      <MousePosition render={(mousePosition) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Cursor Position Renderer</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
