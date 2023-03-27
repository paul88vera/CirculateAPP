export interface Restaurant {
  name?: string;
  address: {
    street: string | null;
    city: string;
    zip?: string;
  };
  bio?: string;
  type?: string;
  website?: string;
  phone?: string;
  image?: string;
  map?: string;
}
