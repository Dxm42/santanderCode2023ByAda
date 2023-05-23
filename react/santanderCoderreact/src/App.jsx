import MyComponent from "./components/Mycomponent/MyComponent"
function App() {
 return (
  <> 
    <h1>Hello world</h1>
  <MyComponent />
  <MyButton conteudo="me clique"/>
  <MyButton conteudo="Depois ali"/>
  <MyButton conteudo="e por fim aki"/>
  </>
 )
}

function MyButton(props){
  console.log(props)
  return (
    <button>{props.conteudo}</button>
    
  )
}


export default App
