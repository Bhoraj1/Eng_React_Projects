import {useState} from "react";
import Header from "./components/Header/Header";
import { CORE_CONCEPTS } from "./data";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";



function App() {
  const [selectedTopic, setSelectedTopic] = useState('');
  

function handleSelect(selectedButton){
  //selectedButton may be "components","jsx","props", and "state"
  setSelectedTopic(selectedButton);
  // console.log(selectedTopic);
}

  return (
     <div>
      <Header />
      <main>
        <section id="core-concepts">  
        <h2>Conctents</h2>
        <ul>
        {CORE_CONCEPTS.map((contentItem) =>
       <CoreConcepts key={contentItem.title} {...contentItem}/> )}
        
        {/* <CoreConcepts 
        title={CORE_CONCEPTS[0].title}
        description = {CORE_CONCEPTS[0].description}
        image = {CORE_CONCEPTS[0].image}
        />
        
        <CoreConcepts {...CORE_CONCEPTS[1]} />
        <CoreConcepts {...CORE_CONCEPTS[2]} />
        <CoreConcepts {...CORE_CONCEPTS[3]} /> */}


        </ul>
        </section> 
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"}
             onSelect={ () => handleSelect("components")} >Components</TabButton>

            <TabButton isSelected={selectedTopic === "jsx"}
            onSelect={ () => handleSelect("jsx")}>Jsx</TabButton>

            <TabButton isSelected={selectedTopic === "props"}
            onSelect={ () => handleSelect("props")}>Props</TabButton>

            <TabButton isSelected={selectedTopic === "state"}
             onSelect={ () => handleSelect("state")}>State</TabButton>
          </menu>
          {!selectedTopic ? <p>Please Select the button</p>
          : null}

          {selectedTopic ? ( <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
            {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
          </div>
          ):null }
        
  
        </section>
      </main>
    </div>
  );
}

export default App;