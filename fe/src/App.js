import React, { useEffect } from "react";
import "./App.css";
import IssueList from "./components/IssueList/IssueList";
import Layout from "./hoc/Layout/Layout";

function App() {
  const issues = [
    {
      id: 1,
      title: "Bug: React App with router not opening on ios 13.4.x",
      issueId: "#18699",
      description: "opened 5 hours ago by nvnvenki",
    },
    {
      id: 2,
      title: "Bug: anther bugs",
      issueId: "#18620",
      description: "opened 5 hours ago by nvnvenki",
    },
  ];

  useEffect(() => {
    async function callEndPoint() {
      const res = await fetch(
        "https://api.github.com/repos/facebook/react/issues"
      );
      const json = await res.json();
      console.log(json);
    }

    callEndPoint();
  }, []);

  return (
    <div className="App">
      <Layout>
        <h1>Hello world</h1>
        <IssueList issues={issues} />
      </Layout>
    </div>
  );
}

export default App;
