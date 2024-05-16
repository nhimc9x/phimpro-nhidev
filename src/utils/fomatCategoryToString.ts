type Entity = {
  id: string;
  name: string;
  slug: string;
};
export default function (arrCategory: Entity[]) {
  return arrCategory.map(category => category.name).join(', ')
}
