interface IPage {
  navLabel?: string;
  path: string;
}

type Keys = 'home' | 'comments' | 'productCards';

export const PAGES_MAP: Record<Keys, IPage> = {
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
