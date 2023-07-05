import Des1 from "../assests/des1.png"
import Des2 from "../assests/des2.png"
import Des3 from "../assests/des3.png"

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const productData = [
  {
    id: 1,
    imageurl:{Des1},
    name: "Sport sneakers",
    price: "$21.99",
    description: "Some text about the product..",
  },
  {
    id: 2,
    imageurl:{Des2},
    name: "Sport sneakers",
    price: "$21.99",
    description: "Some text about the product..",
  },
  {
    id: 3,
    imageurl:{Des3},
    name: "iWatch",
    price: "$99.99",
    description: "Some text about the product..",
  },
  {
    id: 4,
    imageurl:
      "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Water Bottle",
    price: "$14.99",
    description: "Some text about the product..",
  },
  {
    id: 5,
    imageurl:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Vans sneakers",
    price: "$38.99",
    description: "Some text about the product..",
  },
  {
    id: 6,
    imageurl:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Coco Noir",
    price: "$149.99",
    description: "Some text about the product..",
  },
  
];
