interface Page {
  navLabel?: string;
  path: string;
}

const typeForPagesMap = <T>(
  obj: Record<keyof T, Page>
): Record<keyof T, Page> => obj;

export const PAGES_MAP = typeForPagesMap({
  home: {
    path: '',
  },
  comments: {
    path: 'comments',
    navLabel: 'Comment section',
  },
  productCards: {
    navLabel: 'Product Cards',
    path: 'product-cards',
  },
});
