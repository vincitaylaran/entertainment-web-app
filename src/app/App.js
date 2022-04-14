import '../App.css'
import { useSelector, useDispatch } from 'react-redux'

const selectCatalogue = (state) => state.catalogue
const selectBookmarks = (state) => state.bookmarks

function App() {
  const catalogue = useSelector(selectCatalogue)
  const bookmarks = useSelector(selectBookmarks)
  const dispatch = useDispatch()

  console.log(catalogue)
  console.log(bookmarks)

  return (
    <div className='App'>
      <p class='txt-small'>lorem ipsum dolor sit amet, consectetur adip</p>
      <div>
        <ul>
          <h1>Catalogue</h1>
          {catalogue.map((item) => (
            <li>
              <button
                onClick={() =>
                  dispatch({ type: 'bookmarks/bookmarkAdded', payload: item })
                }
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Bookmarks</h1>
        <ul>
          {bookmarks.map((bookmark) => (
            <li>{bookmark.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
