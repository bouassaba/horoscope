import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Horoscope')
    .items([
      S.documentTypeListItem('article').title('Articles'),
      S.documentTypeListItem('zodiacSign').title('Zodiac Signs'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() && !['article', 'zodiacSign'].includes(item.getId()!),
      ),
      S.listItem()
        .title('Articles By Zodiac Sign')
        .child(
          S.documentTypeList('zodiacSign')
            .title('Articles by Zodiac Sign')
            .child((zodiacSignId) =>
              S.documentList()
                .apiVersion('2024-06-01')
                .title('Articles')
                .filter(
                  '_type == "article" && $zodiacSignId == zodiacSign._ref',
                )
                .params({ zodiacSignId }),
            ),
        ),
    ])
