import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {//contatcs arrayini alarak filter metodu ile filtreliyoruz ve filter her döndüğünde bir item gelecek bize
    return Object.keys(item).some((key)=>// Object.keys() metodu bize objenin key lerini verir --- some() metodu ise herhangi bir şarta uyması durumunda anlamındadır
    item[key] //item ın ilgili key ini alarak 
    .toString()//stringe çeviriyoruz string şeklinde gelmeme durumundan dolayı
    .toLowerCase()// büyük küçük harf hatasını önlemek için
    .includes(filterText.toLocaleLowerCase())//filterText içinde var mı yok mu onu sorguluyoruz
    );
  });

  console.log("filtered", filtered);

  return (
    <div>
      <input 
      placeholder="Filter contact" 
      value={filterText}
      onChange={(e) =>setFilterText(e.target.value)}
      />
      <ul className="list">
        {/* burada contacts yerine filtered metodumuzu yazarak mevcut veriler üzerinde filtreleme işlemini yapabiliriz
        //burada zaten filtered içinde contacts üzerinden return işlemi yapıyoruz*/}
         {filtered.map((contact, i) => ( 
          <li key={i}>
            <span> {contact.fullname}</span>
            <span>{contact.phone_number}</span>
            </li>
        ))}
      </ul>

      <p>Total contacts({filtered.length})</p>
    </div>
  );
}

export default List;
