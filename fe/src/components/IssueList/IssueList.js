import React from "react";
import "./IssuesList.css";

const IssueList = (props) => {
  const { issues } = props;
  return (
    <ul className="IssueList" data-testid="issue-list">
      {issues.map((issue) => (
        <li key={issue.id} className="IssueListItem">
          <div>{issue.title}</div>
          <div>{issue.description}</div>
          <span>{issue.issueId}</span>
        </li>
      ))}
    </ul>
  );
};

export default IssueList;
