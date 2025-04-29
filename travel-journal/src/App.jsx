import './index.css'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import JournalEntry from "./components/JournalEntry.jsx"
import data from "./data.js"

function App() {

const entryElements = data.map((entry) => {
  return (
    <JournalEntry 
    key={entry.id}
    img={entry.img}
    title={entry.title}
    country={entry.country}
    googleMapsLink={entry.googleMapsLink}
    dates={entry.dates}
    text={entry.text}
    />
  )
})
  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
      <Footer />
    </>
  )
}

export default App
