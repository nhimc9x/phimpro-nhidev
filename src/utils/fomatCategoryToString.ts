type Entity = {
  id: string;
  name: string;
  slug: string;
};
export default function (arrCategory: Entity[] | undefined) {
  if (arrCategory) {
    return arrCategory.map(category => category.name).join(', ')
  }
  return
}
