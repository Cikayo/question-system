import { observer } from 'mobx-react-lite'
import { ALL_TYPE } from 'utils/const'
import edit from 'store/edit'

const Aside = observer(() => {
  function handleTypeClick(item) {
    edit.addDifferentQuestion(item)
  }
  return (
    <div className="box site-aside">
      <div className="box type-list">
        {
          ALL_TYPE.map(item => (
            <div className="box item" key={item.type} onClick={() => handleTypeClick(item)}>{item.name}</div>
          ))
        }
      </div>
    </div>
  )
})

export default Aside;