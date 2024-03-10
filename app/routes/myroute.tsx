import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";


const supabase = createClient(
    "https://pfcpiefhtaayktqkegvm.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmY3BpZWZodGFheWt0cWtlZ3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0MTM2NjQsImV4cCI6MjAyMTk4OTY2NH0.0I7OqVZTG7vGX9w4NJNe55zsqUv2HJRVqPB7fUtqD9Q"
  );


export async function loader() {
    const products = await supabase.from('SadahamStore').select('*');
 
    return json(products.data);
    
  }

export default function MyRoute() {

    const data = useLoaderData();
    console.log(data);
    

    return (
        <>
        <div>
            <h1 className="text-green-600 text-3xl font-semibold" >my  route</h1>
        </div>

        <div>
            <ul>
                {data && data.map((product:any) => (
                    <li key={product.id}>
                        {product.name}
                    </li>
                ))}
            </ul>   

        </div>
        </>
    );
}