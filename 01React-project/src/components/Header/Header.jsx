import firstImg from  "../../assets/react-core-concepts.png"
const reactDescription = ['Bhoraj','malla','don']
function dynamiContent(max){
  return Math.floor(Math.random()*(max+1));
}

export default function Header(){
  const description = reactDescription[dynamiContent(2)];
  return (
    <div>
      <header>
        <img src={firstImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      </div>
  )
}
