
import Courses from '../../components/Courses/Courses'
import Header from '../../components/Header/Header'

function Home() {
  return (
    <>
      <div className="container">
        <h1 style={{textAlign:'center',color:'#0071bd'}}>Courses</h1>
        <hr />
        <Header/>
        <Courses/>
      </div>
      
        
    </>
  )
}

export default Home