export type Product = {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  sellerName: string;
  image: string;
};

export type CompleteProduct = Product & {
  description: string;
  city: string;
  quantity: number;
  quantitySelected?: number;
  infos?: string;
  technicalDetails: {
    color?: string;
    weight?: number;
    condition?: string;
    ean?: string;
    dimensions?: string;
  };
  additionalInfos: {
    signsOfUse?: string;
    usageTime?: string;
    recommendedCare?: string;
  };
  canTakeLoan?: boolean;
};
