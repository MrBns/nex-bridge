const data_example = {
  id: 10,
  attributes: {
    name: "",
    alternativeText: null,
    caption: null,
    width: null,
    height: null,
    formats: null,
    hash: "",
    ext: "",
    mime: "",
    size: 4004.96,
    url: "",
    previewUrl: null,
    provider: "",
    provider_metadata: null,
    createdAt: "",
    updatedAt: "",
  },
};

const assetResponse = {
  data: {
    id: 1,
    attributes: {
      createdAt: "",
      updatedAt: "",
      header_bg_vid: {
        data: data_example,
      },
      vision_header_bg_vid: {
        data: data_example,
      },
      about_us_header_vid: {
        data: data_example,
      },
      home_info_vid1: {
        data: data_example,
      },
      home_info_vid2: {
        data: data_example,
      },
      home_info_vid3: {
        data: data_example,
      },
    },
  },
  meta: {},
};

type AvailbleProperties = "header_bg_vid" | "vision_header_bg_vid" | "about_us_header_vid" | "home_info_vid1" | "home_info_vid2" | "home_info_vid3";

type T = AvailbleProperties;

export interface IStaticAssetResponse<T extends AvailbleProperties[]> {
  data: {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
    } & {
      [K in T[number]]: {
        data: typeof data_example;
      };
    };
  };
  meta: {};
}

export type TStaticAssetResponse = typeof assetResponse;

