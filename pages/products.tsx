import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    const colRef = collection(db, "products");
    const snapshot = await getDocs(colRef);
    setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>جميع المنتجات</h2>
      {products.map(p => (
        <div key={p.id}>
          <h4>{p.name}</h4>
          <p>{p.price} ريال</p>
          <button onClick={() => handleDelete(p.id)}>حذف</button>
        </div>
      ))}
    </div>
  );
}