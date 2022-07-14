/*
 * This component renders the page with goals.
 */

import { Fragment } from "react";
import styled from "styled-components";
import "./Goals.css";
import BasePageLayout from "../components/UI/BasePageLayout";
import Section from "../components/UI/Section";
import SummaryCard from "../components/SummaryCard";
import AddGoalCard from "../components/UI/AddGoalCard";
import GoalFilterAndSorting from "../components/GoalFilterAndSorting";
import GoalCard from "../components/GoalCard";

// This is a dummy goal data which is used to testing purposes
import dummyGoals from "../components/DummyGoalData";

// Create vertical bar to separate summary cards
const VerticalBar = styled.div`
  width: 0;
  height: 7rem;
  margin: 1.25rem 2.5rem 0;
  border: 1px solid rgba(201, 201, 201, 0.9);
`;

function Goals() {
  return (
    <Fragment>
      <BasePageLayout>
        <div className={"main-content-wrapper"}>
          <Section sectionStyle={"summary-section"}>
            <h1 className={"section-header"}>Your Goals</h1>
            <div className={"goals-summary"}>
              <SummaryCard data={5} category={"active"} />
              <VerticalBar />
              <SummaryCard data={10} category={"completed"} />
              <VerticalBar />
              <SummaryCard data={1} category={"due today"} />
              <VerticalBar />
              <SummaryCard data={"37%"} category={"progress"} />
              <VerticalBar />
              <AddGoalCard />
            </div>
          </Section>
          <Section sectionStyle={"list-section"}>
            <GoalFilterAndSorting />
            <div className={"goals-list"}>
              {dummyGoals.map((goal) => (
                <GoalCard goalInfo={goal} key={Math.random()} />
              ))}
            </div>
          </Section>
        </div>
      </BasePageLayout>
    </Fragment>
  );
}

export default Goals;
