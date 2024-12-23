import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !['post', 'category', 'author'].includes(item.getId()!),
      ),
      S.listItem()
        .title('Posts By Category')
        .child(
          S.documentTypeList('category')
            .title('Posts by Category')
            .child((categoryId) =>
              S.documentList()
                .apiVersion('2024-06-01')
                .title('Posts')
                .filter('_type == "post" && $categoryId in categories[]._ref')
                .params({ categoryId }),
            ),
        ),
    ])
