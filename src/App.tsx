import React from 'react';
import './App.css';
// import ProjectList from "./components/ProjectList/ProjectList";
import Layout from "./components/Layout/Layout";
import CreateProject from "./components/CreateProject/CreateProject";

function App() {
  return (
    <div className="App">
        <Layout>
            {/*<ProjectList/>*/}
            <CreateProject />
        </Layout>
    </div>
  );
}

export default App;
