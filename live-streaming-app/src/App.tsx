import './App.css'
import VideoPlayer from './components/VideoPlayer'

function App() {

  return (
    <>
      Live Streaming
      <VideoPlayer src="http://localhost:8080/live/test.flv" />
    </>
  )
}

export default App
