import {EXAMPLES} from "../data.js"
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";


export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();
  

    function handleSelect(selectedButton){
      //selectedButton may be "components","jsx","props", and "state"
      setSelectedTopic(selectedButton);
    }
    // This is the conditionally rendering a data from EXAMPLES object
    let tabContent = <p>Please select the topic</p>;
    if(selectedTopic){
      tabContent =(
       <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
      );
    }
    

    return (
       <Section title = "Examples" id ="examples">
        {/* the children of the Section component are everything between the
         opening <Section> and closing </Section> tags.  */}
        {/*This "button"s is a props which is passed through <Tabs> components */}
        <Tabs
         buttons={
          <>
          <TabButton isSelected={selectedTopic === "components"}
           onClick={() => handleSelect("components")} >Components</TabButton>

          <TabButton isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}>Jsx</TabButton>

          <TabButton isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}>Props</TabButton>

          <TabButton isSelected={selectedTopic === "state"}
           onClick={() => handleSelect("state")}>State</TabButton>
          </>
        }
        >
        {tabContent} 
        
     {/*This {tabContent } is a {children} between <Tabs> </Tabs> Components */}
        </Tabs>
      </Section>
    )
}

/* ButtonContainer is a identifier as value for a prop to dynamically
  render different HTML elements and custom components (for bulit-in element "menu")
  for custom component ({only name of component/"Section"})*/