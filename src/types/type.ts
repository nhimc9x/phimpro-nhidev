export type RecentFilmType = {
  status: boolean;
  items: RecentFilmItemType[];
  pagination: Pagination;
};

export type RecentFilmItemType = {
  modified: { time: string };
  _id: string;
  name: string;
  origin_name: string;
  poster_url: string;
  slug: string;
  thumb_url: string;
  year: number;
};

export type ListFilmType = {
  status: string;
  msg: string;
  data: Data;
};

export type ListFilmItemType = RecentFilmItemType & {
  type: string;
  sub_docquyen: boolean;
  chieurap: boolean;
  time: string;
  episode_current: string;
  quality: string;
  lang: string;
  category: Entity[];
  country: Entity[];
};

export type FilmDetailType = {
  status: boolean;
  msg: string;
  movie: IMovieType;
  episodes: Episodes[]
};

export interface IMovieType extends ListFilmItemType, RecentFilmItemType {
  created: { time: string };
  content: string;
  status: string;
  is_copyright: boolean;
  trailer_url: string;
  episode_total: string;
  notify: string;
  showtimes: string;
  view: number;
  actor: string[];
  director: string[];
}

type Data = {
  seoOnPage: SeoOnPage;
  breadCrumb: BreadCrumb[];
  titlePage: string;
  items: ListFilmItemType[];
  params: Params;
  type_list: string;
  APP_DOMAIN_FRONTEND: string;
  APP_DOMAIN_CDN_IMAGE: string;
};

type Entity = {
  id: string;
  name: string;
  slug: string;
};

type SeoOnPage = {
  og_type: string;
  titleHead: string;
  descriptionHead: string;
  og_image: string[];
  og_url: string;
};

type BreadCrumb = {
  name: string;
  slug?: string;
  isCurrent: boolean;
  position: number;
};

type Params = {
  type_slug: string;
  filterCategory: string[];
  filterCountry: string[];
  filterYear: string;
  filterType: string;
  sortField: string;
  sortType: string;
  pagination: Pagination;
};

export type Episodes = {
  server_name: string;
  server_data: ServerData[];
}

export type ServerData = {
  name: string;
  slug: string;
  filename: string;
  link_embed: string;
  link_m3u8: string;
}

type Pagination = {
  totalItems: number;
  totalItemsPerPage: number;
  currentPage: number;
  totalPages: number;
};
