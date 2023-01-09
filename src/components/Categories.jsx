import CategoryItem from "./CategoryItem"
import { categories } from "../data/data"

const Categories = () => {
  return (
    <div className="justify-between p-5 md:flex">
        {categories.map(item => (
            <CategoryItem key={item.id} item={item} />
        ))}
    </div>
  )
}

export default Categories