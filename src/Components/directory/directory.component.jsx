import CategoryItem from '../category-item/category-item.component';
<<<<<<< HEAD
import './directory.styles.scss'
=======
import './directory.styles.scss';
>>>>>>> 246bab8224ae10d5efbf8aaacd426291b8c0e946

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;
