import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Horoscope')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('zodiacSign').title('Zodiac Signs'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() && !['post', 'zodiacSign'].includes(item.getId()!),
      ),
      S.listItem()
        .title('Posts By Zodiac Sign')
        .child(
          S.documentTypeList('zodiacSign')
            .title('Posts by Zodiac Sign')
            .child((zodiacSignId) =>
              S.documentList()
                .apiVersion('2024-06-01')
                .title('Posts')
                .filter('_type == "post" && $zodiacSignId == zodiacSign._ref')
                .params({ zodiacSignId }),
            ),
        ),
    ])
