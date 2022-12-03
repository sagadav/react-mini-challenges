interface IPage {
  navLabel?: string;
  path: string;
}

interface IPagesMap {
  home: IPage;
  comments: IPage;
  productCards: IPage;
}

export const PAGES_MAP: IPagesMap = {
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
};
