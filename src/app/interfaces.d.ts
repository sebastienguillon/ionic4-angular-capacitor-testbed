interface PageCategory {
  category: string;
  color: string;
}

interface PageLink {
  path: string;
  text: string;
  pageCategory?: PageCategory;
}
