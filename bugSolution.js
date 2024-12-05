```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let cleanup = () => {
      console.log('Cleanup function running');
    };

    //Improved cleanup handling
    return () => {
      cleanup();
    };
  }, [count]); // Only re-run the effect if count changes

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default MyComponent;
```