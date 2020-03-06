import React, {Suspense} from 'react';
import {routes} from "appSrc/router";
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

function App() {
  return (
    <div>
        <Suspense fallback={"loading data"}>
            <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
        </Suspense>
    </div>
  );
}

export default App;
