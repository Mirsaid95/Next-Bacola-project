export interface ProductDataType {
  id: string;
  title: string;
  name?: string;
  price: number | string;
  oldPrice?: number;
  image: string;
  discount?: boolean;
}

export interface productData {
  results?: {
    id: number;
    title?: string;
    image: string;
    price: number | string;
  }[];
}

export const GetProductData = async (): Promise<ProductDataType[]> => {
  try {
    const response = await fetch("http://localhost:8000/product/?limit=64", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Ma'lumotlarni olishda xatolik yuz berdi");
    }
    const data: productData = await response.json();

    return data.results ? data.results.map((result: { id: number; title?: string; image: string; price: number | string }) => ({
      id: result.id.toString(),
      title: result.title || '',
      image: result.image,
      price: result.price,
    })) : [];
  } catch (error) {
    console.error("Xatolik:", error);
    throw error;
  }
};
