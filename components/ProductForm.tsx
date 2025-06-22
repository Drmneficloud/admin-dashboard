import { useState } from "react";
import { db, storage } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function ProductForm({ onAdd }: any) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleAdd = async () => {
    let imageUrl = "";
    if (image) {
      const imageRef = ref(storage, `products/${image.name}`);
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
    }

    await addDoc(collection(db, "products"), {
      name,
      price: Number(price),
      image: imageUrl,
    });

    onAdd();
  };

  return (
    <div>
      <h3>إضافة منتج جديد</h3>
      <input type="text" placeholder="اسم المنتج" onChange={e => setName(e.target.value)} />
      <input type="number" placeholder="السعر" onChange={e => setPrice(e.target.value)} />
      <input type="file" onChange={e => setImage(e.target.files?.[0] || null)} />
      <button onClick={handleAdd}>إضافة</button>
    </div>
  );
}