import HigherorderCounter from './hoc'
 function LikeImage(props) {

  const count=props.count;
  const increment=props.increment

  return (
    <div>
      <button onClick={increment}>Like Image {count}</button>
    </div>
  )
}
export default HigherorderCounter(LikeImage)