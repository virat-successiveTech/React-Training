"use client"
import Link from "next/link";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Motorola Edge 50 neo",
      type: "Phone",
      description: "It is a multitasking phone with a beautiful display",
      price: 20000,
    },
    {
      id: 2,
      name: "Samsung Galaxy Edge 50",
      type: "Phone",
      description: "It is a Phone with snapdragon processor",
      price: 10000,
    },
    {
      id: 3,
      name: "Sony TV",
      type: "Television",
      description: "It is 56 inch TV with amoled display",
      price: 40000,
    },
    {
      id: 4,
      name: "Dell lattitude E-7430",
      type: "Laptop",
      description: "It is a laptop with intel i7 12th generation.",
      price: 10000,
    },
  ];
  const id = useParams();
  console.log(id);
  
  return (
    <>
        
      <p className="question">
        Q6. Create a list of items (e.g., products, articles) in your
        application. Implement dynamic routing to display details for each item
        when clicked. Create a route parameter that represents the item's ID in
        the URL (e.g., "/products/:id"). Fetch item details based on the route
        parameter and display them on the detail page. Add a "Go Back" button on
        the detail page to return to the list.
      </p>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/assignment-3/question-6/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductPage;
